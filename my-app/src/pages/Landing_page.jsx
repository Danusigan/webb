import React from 'react'
import '../css/Landing_page.css';
import { Link, useNavigate } from 'react-router-dom';


export default function Landing_page() {
  return (
    <div><nav1>

      <div className="landing_main">
        <img src="/logo.png" alt="Logo" className="landing_logo" />
        <h1>Vehiclerenty</h1>

        <ul className="landing_Ul">
          <li className="landing_Li"><a href=" ">Home</a></li>
          <li className="landing_Li"><a href=" ">Login</a></li>
          <li className="landing_Li"><a href=" ">Contact</a></li>
        </ul>
      </div>
      <div className="landing_txt">

        <h2>Drive Your Way – Affordable Rentals at Your Fingertips</h2>

      </div>
      <div className="landing_txt1">

        <h2>24/7 customer support | 100+ Vehicles | 1000+ Users</h2>

      </div>
      <div className="landing_button_vehicle">
        <div className="landing_vehicles1">
          <p>Available Vehicles</p>
          <ul className="landing_vehicles">
             <li className="landing_line">Car</li>
             <li className="landing_line">Bike</li>
             <li className="landing_line"> Tuk Tuk</li>
          </ul>
       </div>
       <div className="landing_button">
       <Link to="/Login"><button type="submit" className="landing_btn">Login</button></Link>
       <Link to="/Register"><button type="submit" className="landing_btn">Register</button></Link>
       </div>
      </div>

      <div className="landing_head1">
            
          <h4 className="landing_head">Phone number    |   Email</h4>
          
          
          <h4 className="landing_head2">+947634568765  | vehilerent@gmail.com</h4>
         
 
      </div>
    </nav1></div>
  )
}
