import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Initialize Google Analytics
ReactGA.initialize('G-NN8428L9R1'); // Replace with your actual Tracking ID
ReactGA.pageview(window.location.pathname + window.location.search); // Track initial pageview

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
