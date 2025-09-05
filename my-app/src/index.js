import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App.js';
import Header from './pages/Header.jsx';
// import reportWebVitals from './reportWebVitals';
import Footer from './pages/Footer.jsx';
import Login from './pages/Login.jsx';
import './css/Login.css'
import Landing_page from './pages/Landing_page.jsx';
import Register from './pages/Register.jsx';
import Vehicle_select from './pages/Vehicle_select.jsx';
import Book from './pages/Book.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
