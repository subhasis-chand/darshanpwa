import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import LandingPage from './LandingPage';

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
  // if (!supportsPWA) {
  //   return <div>App installed
  //     <div>pwa supprot: {supportsPWA ? 'yes' : 'no'}</div>
  //   </div>;
  // }

  return (
    <div className="App">
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
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<LandingPage />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
