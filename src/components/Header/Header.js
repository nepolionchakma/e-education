import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"


const Header = () => {
    return (
        <div className="header-row py-4 text-center">
            <div className="py-3">
                <nav>
                    <ul>
                        <Link className="text-warning fw-bold fs-1" to="/home"><span className="fs-1 text-success fw-bold">e</span>Education</Link>
                    </ul>
                </nav>

            </div>
            <div className="py-3">
                <nav>
                    <ul>
                        <li><Link to="/home"><i className="fas fa-home mx-1"></i>Home</Link></li>
                        <li><Link to="/services"><i className="fab fa-servicestack mx-1"></i>Services</Link></li>
                        <li><Link to="/about"><i className="fas fa-eject mx-1"></i>About</Link></li>
                        <li><Link to="/contectus"><i className="fas fa-file-contract mx-1"></i>Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;