import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
