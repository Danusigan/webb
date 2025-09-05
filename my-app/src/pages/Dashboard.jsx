import React, { useState, useEffect } from 'react';
import '../css/Dashboard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:8080'; 

export default function Dashboard() {
  const [pickupDate, setPickupDate] = useState('2025-08-06');
  const [pickupTime, setPickupTime] = useState('09:00');
  const [dropDate, setDropDate] = useState('2025-08-06');
  const [dropTime, setDropTime] = useState('10:00');
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

 
  useEffect(() => {
    const storedUsername = (localStorage.getItem('username') || '').trim();
    if (!storedUsername) {
      alert('Please log in first.');
      navigate('/Login');
      return;
    }
    setUsername(storedUsername);
  }, [navigate]);
  
  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const name = (localStorage.getItem('username') || '').trim();
    if (!name) {
      alert('Please log in first.');
      navigate('/Login');
      return;
    }

    try {
      
      const payload = {
        name,                  
        newPassword: password, 
      };

      const res = await axios.put(`${API_BASE_URL}/api/users/updatePassword`, payload);
      alert('Password updated successfully.');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Error updating password:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Update failed. Check your backend.');
    }
  };

  const handlePasswordDelete = () => {
    setPassword('');
    setConfirmPassword('');
  };

  const handleAccountDelete = async (e) => {
    const confirmed = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
    if (!confirmed) return;
     
    const name = (localStorage.getItem('username') || '').trim();
    if (!name) {
      alert('Please log in first.');
      navigate('/Login');
      return;
    }

    try {
     
      const res = await axios.delete('http://localhost:8080/api/users/deleteAccount', {
        data: { name: name } 
      });
      alert('Account deleted successfully.');
      setPassword('');
      setConfirmPassword('');
      navigate('/Login');
    } catch (error) {
      console.error('Error Deleting Account:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Delete failed. Check your backend.');
    }
   
    
  };

  const handleBookingUpdate = async (e) => {
    e.preventDefault();
    try {
      
      const bookingupdate = {
        pickupDate,                   
        pickupTime,
        dropDate,
        dropTime,
        
      };

      const res = await axios.put('http://localhost:8080/api/bookings/update/{id}', bookingupdate, {
        headers: { 'Content-Type': 'application/json' }
      });

      console.log('Booking update success:', res.data);
      alert('Booking updated successfully.');
      setPickupDate('');
      setPickupTime('');
      setDropDate('');
      setDropTime('');

    } catch (error) {
      console.error('Error updating Booking:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Update failed. Check your backend.');
    }
    
  };

  const handleBookingDelete = async (e) => {
    e.preventDefault();
    const name = (localStorage.getItem('username') || '').trim();
    if (!name) {
      alert('Please log in first.');
      navigate('/Login');
      return;
    }

    try {
      
      const res = await axios.delete('http://localhost:8080/api/bookings/delete/{id}')

      console.log('Booking deleted success:', res.data);
      alert('Booking deleted successfully.');
      setPickupDate('');
      setPickupTime('');
      setDropDate('');
      setDropTime('');
      
    } catch (error) {
      console.error('Error Deleting Booking:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Delete failed. Check your backend.');
    }
    
    
  };


  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome back 👋</h1>
          <p className="hero-sub">Manage your bookings and account in one place.</p>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-icon">🗓️</div>
            <div>
              <div className="stat-label">Upcoming booking</div>
              <div className="stat-value">None</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🚗</div>
            <div>
              <div className="stat-label">Total rides</div>
              <div className="stat-value">0</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div>
              <div className="stat-label">Account status</div>
              <div className="stat-value">Active</div>
            </div>
          </div>
        </div>

        <h2 className="section-heading">Booking details</h2>
        <p className="section-sub">Pick your start and end to update your reservation.</p>
        <section className="card card-elevated">
          <div className="card-header">Hi {username || 'user'},</div>
          <form className="booking-grid" onSubmit={handleBookingUpdate}>
            <div className="field-group">
              <label className="label">Pickup</label>
              <div className="inline-inputs">
                <input
                  type="date"
                  className="input"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  required
                />
                <input
                  type="time"
                  className="input"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field-group">
              <label className="label">Drop</label>
              <div className="inline-inputs">
                <input
                  type="date"
                  className="input"
                  value={dropDate}
                  onChange={(e) => setDropDate(e.target.value)}
                  required
                />
                <input
                  type="time"
                  className="input"
                  value={dropTime}
                  onChange={(e) => setDropTime(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="actions">
              <button type="submit" className="btn btn-primary">Update booking</button>
              <button type="button" className="btn btn-danger" onClick={handleBookingDelete}>Delete booking</button>
            </div>
          </form>
        </section>

        <h2 className="section-heading">Edit details</h2>
        <p className="section-sub">Update your password. Use at least 8 characters with a number.</p>
        <section className="card card-elevated">
          <form className="edit-grid" onSubmit={handlePasswordUpdate}>
            <div className="password-row">
              <input
                type="password"
                className="input full"
                placeholder="Enter the new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>

            <div className="password-row">
              <input
                type="password"
                className="input full"
                placeholder="Re-enter the new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>

            <div className="actions">
              <button type="submit" className="btn btn-primary">Update password</button>
              <button type="button" className="btn btn-outline" onClick={handlePasswordDelete}>Clear</button>
            </div>

            <div className="actions">
              <button type="button" className="btn btn-danger" onClick={handleAccountDelete}>Delete account</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
