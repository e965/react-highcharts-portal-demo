import { useState, useCallback } from 'react';

import ErrorBoundary from './components/ErrorBoundary';
import Portal from './components/Portal';

import ChartOfficial from './components/highcharts-react-official/Chart';
import ChartJSX from './components/react-jsx-highcharts/Chart';

import './App.css';

const App: React.FC = () => {
    const [IsPortalWithChartOfficialVisible, setIsPortalWithChartOfficialVisible] = useState<boolean>(false);
    const [IsPortalWithChartJSXVisible, setIsPortalWithChartJSXVisible] = useState<boolean>(false);
    const [IsPortalWithoutChartVisible, setIsPortalWithoutChartVisible] = useState<boolean>(false);

    const handleWindowWithChartOfficialClose = useCallback(() => {
        setIsPortalWithChartOfficialVisible(false);
    }, []);

    const handleWindowWithChartJSXClose = useCallback(() => {
        setIsPortalWithChartJSXVisible(false);
    }, []);

    const handleWindowWithoutChartClose = useCallback(() => {
        setIsPortalWithoutChartVisible(false);
    }, []);

    return (
        <ErrorBoundary>
            <div className="App">
                <div>
                    <button onClick={() => setIsPortalWithChartOfficialVisible(!IsPortalWithChartOfficialVisible)}>
                        toggle portal (highcharts-react-official)
                    </button>
                </div>

                <div style={{ marginTop: 15 }}>
                    <button onClick={() => setIsPortalWithChartJSXVisible(!IsPortalWithChartJSXVisible)}>toggle portal (react-jsx-highcharts)</button>
                </div>

                <div style={{ marginTop: 15 }}>
                    <button onClick={() => setIsPortalWithoutChartVisible(!IsPortalWithoutChartVisible)}>toggle portal (whitout chart)</button>
                </div>

                {IsPortalWithChartOfficialVisible ? (
                    <Portal handleWindowClose={handleWindowWithChartOfficialClose}>
                        <ChartOfficial />
                    </Portal>
                ) : null}

                {IsPortalWithChartJSXVisible ? (
                    <Portal handleWindowClose={handleWindowWithChartJSXClose}>
                        <ChartJSX />
                    </Portal>
                ) : null}

                {IsPortalWithoutChartVisible ? (
                    <Portal handleWindowClose={handleWindowWithoutChartClose}>
                        <>
                            <p>test content 123</p>
                            <iframe
                                title="rickoll"
                                style={{ width: '100%', height: 350, border: 0 }}
                                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                                allowFullScreen
                            />
                        </>
                    </Portal>
                ) : null}
            </div>
        </ErrorBoundary>
    );
};

export default App;
