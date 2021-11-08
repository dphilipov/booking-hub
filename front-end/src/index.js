import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { NotificationContextProvider } from './context/notificationContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <NotificationContextProvider>
      <Router>
        <App />
      </Router>
    </NotificationContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
