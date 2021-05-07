import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import OTRM, { Themes } from "otrm"
import initialConfig from "./config";

const App = () => {
  const [config, setConfig] = useState(initialConfig);

  const handleCallback = payload => {
    console.log("---- payload ", payload);
    if (payload.setTheme) {
      if (Themes[payload.setTheme]) {
        setConfig({ ...initialConfig, ...Themes[payload.setTheme] })
      }
    }
  }

  return (
    <OTRM
      config={config}
      callback={handleCallback}
    />
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);