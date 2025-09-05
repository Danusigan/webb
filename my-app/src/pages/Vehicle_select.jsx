import React from 'react'
import '../css/Vehicle_select.css'
import { Link, useNavigate } from 'react-router-dom';

export default function Vehicle_select() {
        return (
                <div className="products">
                        <Link to="/Book"><div className="Box">
                                <img src="/car.png" alt="Car" />
                                <p><a href="">Car</a></p>
                        </div></Link>
                        <Link to="/Book"><div className="Box">
                                <img src="/bike.jpg" alt="Bike" />
                                <p><a href="">Bike</a></p>
                        </div></Link>
                        <Link to="/Book"><div className="Box">
                                <img src="/auto.jpg" alt="Auto" />
                                <p><a href="a">Auto</a></p>
                        </div></Link>

                </div>
        )
}
