import React, { useRef } from 'react';

const App: React.FC = () => {
    const unityRef = useRef<HTMLDivElement>(null);

    const handleButtonClick = () => {
        if (unityRef.current) {
            unityRef.current.contentWindow.postMessage({
                type: 'buttonClick'
            }, '*');
        }
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Click me</button>
            <div
                ref={unityRef}
                style={{ width: '100%', height: '100%' }}
            >
                <iframe
                    src="./Build/index.html"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default App;