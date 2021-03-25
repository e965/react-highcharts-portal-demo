import { Component } from 'react';
import type { ErrorInfo } from 'react';

type StateType = {
    HasError: boolean;
    ErrorText: string;
};

type PropsType = {
    children: JSX.Element;
};

class ErrorBoundary extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
        this.state = { HasError: false, ErrorText: '' };
    }

    static getDerivedStateFromError(Error: Error) {
        return { HasError: true, ErrorText: Error.toString() };
    }

    componentDidCatch(Error: Error, ErrorInfo: ErrorInfo) {
        console.warn(Error, ErrorInfo);
    }

    render() {
        if (this.state.HasError) {
            return (
                <>
                    <h1>Error</h1>
                    <>{this.state.ErrorText}</>
                </>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
