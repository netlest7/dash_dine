import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';

// Extend the Window interface to include __googlePayTestEnvironment property
interface CustomWindow extends Window {
  __googlePayTestEnvironment?: boolean;
}

declare let window: CustomWindow;

// Set up Google Pay test environment flag
window.__googlePayTestEnvironment = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
