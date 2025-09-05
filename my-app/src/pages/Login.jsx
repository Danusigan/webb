import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from 'react-router-dom';
import '../css/Login.css';



export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8080/api/users/login', { name: username, password })
      if (res.data === "Login successful!") {
       
        localStorage.setItem('username', username.trim());
        
        

        navigate('/Vehicle_select');
      } else {
        alert(res.data); 
      }
    } catch (err) {
      console.error(err);
      alert('Login failed. Please check your username and password.');
    }
  };

  return (
    <div className="login_wrapper">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="login_inputbox">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="login_inputbox">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="login_remember-forget">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forget password?</a>
        </div>

        <button type="submit" className="login_btn">Login</button>
      </form>

      <div className="login_register">
        <p>Don't have an account? <Link to ='/Register'>Register</Link></p>
      </div>
    </div>
  );
}
