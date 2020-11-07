import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider.js'
import './index.css';
import App from './App';

// react-router-dom

ReactDOM.render(
  <BrowserRouter>
  <UserProvider>
  <App />
  </UserProvider>
  </BrowserRouter>, 
  document.getElementById('root')
);




