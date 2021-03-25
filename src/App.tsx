import { useState, useCallback } from 'react';

import ErrorBoundary from './components/ErrorBoundary';
import Portal from './components/Portal';

import './App.css';

const App: React.FC = () => {
    const [IsPortalVisible, setIsPortalVisible] = useState<boolean>(false);

    const handleWindowClose = useCallback(() => {
        setIsPortalVisible(false);
    }, []);

    return (
        <ErrorBoundary>
            <div className="App">
                <div>
                    <button onClick={() => setIsPortalVisible(!IsPortalVisible)}>toggle portal</button>
                </div>

                {IsPortalVisible ? <Portal {...{ handleWindowClose }} /> : null}
            </div>
        </ErrorBoundary>
    );
};

export default App;
