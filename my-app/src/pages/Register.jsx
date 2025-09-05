import React, { useState } from 'react';  
import '../css/Register.css';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from 'react-router-dom';
import axios from 'axios';  

export default function Register() {
 
  const [name, setname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [nicOrPassport, setnicOrPassport] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 

   
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    
    if (!isAgreed) {
      alert('You must agree to the Terms and Conditions');
      return;
    }

    
    const userData = {
      name,
      phoneNumber,
      password,
      nicOrPassport
    };

    try {
      
      const response = await axios.post('http://localhost:8080/api/users/register', userData);
      console.log(response.data);

      
      navigate('/Login');
    } catch (error) {
      console.error('There was an error registering the user:', error);
      alert('Registration failed');
    }
  };

  return (
    <div className="Register_wrapper">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}> 
        <div className="Register_inputbox">
          <input
            type="text"
            placeholder="Enter Your Username"
            value={name}
            onChange={(e) => setname(e.target.value)} 
            required
          />
        </div>
        <div className="Register_inputbox">
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)} 
            required
          />
        </div>
        <div className="Register_inputbox">
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="Register_inputbox">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} // Bind input with state
            required
          />
        </div>
        <div className="Register_inputbox">
          <input
            type="text"
            placeholder="NIC number"
            value={nicOrPassport}
            onChange={(e) => setnicOrPassport(e.target.value)} // Bind input with state
            required
          />
        </div>
        <div className="Register_remember-forget">
          <label>
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)} // Bind checkbox with state
            />
            I agree to the Terms & Conditions
          </label>
        </div>
        <button type="submit" className="Register_btn">Register</button>
      </form>
      <div className="register">
        <p>Already have an account?  <Link to ='/Login'>Login</Link> </p>
      </div>
    </div>
  );
}
