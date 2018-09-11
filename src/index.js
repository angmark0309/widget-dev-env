import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/** Uncomment this for production
*/
  // const iframe = window

/** Comment this out before building for production since the window object already refers
 * to the iframe
*/
 const iframe = window.frames[0]

/** Comment this out before building for production since the css will be located on the git 
 *  server
*/
var cssLink = document.createElement("link");
cssLink.href = "App.css";
cssLink.rel = "stylesheet";
cssLink.type = "text/css";
iframe.document.head.appendChild(cssLink);

ReactDOM.render(<App iframe={iframe} />, iframe.document.getElementById('root'));
