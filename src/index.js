import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './navbar';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const nav = ReactDOM.createRoot(document.querySelector('.header'));
nav.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

reportWebVitals();
