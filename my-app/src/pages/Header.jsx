import React from 'react'
import '../css/Header.css';
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from 'react-router-dom';


export default function Header() {
    return (
        <div>
        <nav>
            <div className="main">
                <img src="/logo.png" alt="Logo" className="logo" />
                <h1>Vehiclerenty</h1>

                <ul>
                    <li><Link to ='/Vehicle_select'>Home</Link></li>
                    <li><Link to ='/Login'>Login</Link></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className="txt">

                <h2>Drive Your Way – Affordable Rentals at Your Fingertips</h2>

            </div>
            <div className="txt1">

                <h2>24/7 customer support | 100+ Vehicles | 1000+ Users</h2>

            </div>

        </nav>
        </div>
    )
}
