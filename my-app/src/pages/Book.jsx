import React, { useState, useEffect } from 'react';
import '../css/Book.css';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Book() {
  const [pickupDate, setPickupDate] = useState('');
  const [dropDate, setDropDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [dropTime, setDropTime] = useState('');
  const [withDriver, setWithDriver] = useState(false);
  const [withoutDriver, setWithoutDriver] = useState(false);
  const [username, setUsername] = useState('');
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

  const handlebook = async (e) => {
    e.preventDefault();

    const name = (localStorage.getItem('username') || '').trim();
    if (!name) {
      alert('Please log in first.');
      navigate('/Login');
      return;
    }
    
    const vehicleId=1;
    try {
      
      const booki= {
        name,
        pickupDate,
        dropDate,
        pickupTime,
        dropTime,
        vehicleId
      }
  
      const response = await axios.post('http://localhost:8080/api/bookings/create', booki);
      console.log(response.data);

      
      navigate('/Dashboard');
    } catch (error) {
      console.error('There was an error in booking:', error);
      alert('Car Booking full');
    }

  };

  return (
    <div className="book">
      <h2 className="head">
        Book your car rental now and unlock unforgettable adventures across Sri Lanka
      </h2>

      <div className="form-container">
        <form onSubmit={handlebook}>
          <div className="input-group">
            <label>Pickup</label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              required
            />
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Drop</label>
            <input
              type="date"
              value={dropDate}
              onChange={(e) => setDropDate(e.target.value)}
              required
            />
            <input
              type="time"
              value={dropTime}
              onChange={(e) => setDropTime(e.target.value)}
              required
            />
          </div>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={withDriver}
                onChange={() => setWithDriver(!withDriver)}
              />
              With Driver
            </label>
            <label>
              <input
                type="checkbox"
                checked={withoutDriver}
                onChange={() => setWithoutDriver(!withoutDriver)}
              />
              Without Driver
            </label>
          </div>

          <button type="submit" className="btn">
            Book
          </button>
        </form>
      </div>
    </div>
  );
}
