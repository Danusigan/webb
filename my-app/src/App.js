import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Header from './pages/Header.jsx';
import Footer from './pages/Footer.jsx';
import Login from './pages/Login.jsx';
import Landing_page from './pages/Landing_page.jsx';
import Register from './pages/Register.jsx';
import Vehicle_select from './pages/Vehicle_select.jsx';
import Book from './pages/Book.jsx';
import './css/Login.css';
import Dashboard from './pages/Dashboard.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Layout component to conditionally render Header and Footer
function Layout() {
  const location = useLocation();
  const excludeHeaderFooter = location.pathname === '/'; // Exclude on Landing page

  return (
    <div>
      {!excludeHeaderFooter && <Header />} {/* Conditionally render Header */}

      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Vehicle_select" element={<Vehicle_select />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>

      {!excludeHeaderFooter && <Footer />} {/* Conditionally render Footer */}
    </div>
  );
}

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Layout /> {/* Use Layout to handle conditional rendering */}
      </Router>
    </React.StrictMode>
  );
}

export default App;
