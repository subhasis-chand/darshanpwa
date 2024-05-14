import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    console.log('inside useEffect');
    const handler = e => {
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
      e.preventDefault();
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  return (
    <div className="App">
      {!supportsPWA &&
        <div>App installed
          <div>pwa supprot: {supportsPWA ? 'yes' : 'no'}</div>
        </div>
      }
      <div >
        {supportsPWA &&
          <>
            <button
              className="install-button"
              id="setup_button"
              aria-label="Install app"
              title="Install app"
              onClick={onClick}
            >
              Click Here
            </button>
            <span style={{ color: 'gray' }}>to add Sanatan Darshan to Home Screen</span>
          </>
        }
      </div>
    </div>
  );
}

export default App;
