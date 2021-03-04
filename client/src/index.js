import React from 'react';
import ReactDOM from 'react-dom';
// styles
import "./index.css";
// components
import App from "./App/App";
import registerServiceWorker from "./other/registerServiceWorker";

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,

  document.getElementById('root')
);

registerServiceWorker();
