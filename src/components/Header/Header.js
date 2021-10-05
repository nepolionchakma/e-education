import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

// Header

const Header = () => {
    return (
        <div className="header-row py-4 text-center">
            <div className="py-3 col-md-12 col-sm-12">
                <nav>
                    <ul>
                        <Link className="py-3 text-warning fw-bold fs-1" to="/home"><span className="fs-1 text-success fw-bold">e</span>Education</Link>
                    </ul>
                </nav>

            </div>
            <div className="py-3 col-md-12 col-sm-12">
                <nav>
                    <ul>
                        <li><Link className="py-3" to="/home"><i className="fas fa-home mx-1"></i> Home</Link></li>
                        <li><Link className="py-3" to="/services"><i className="fas fa-users-cog"></i> Services</Link></li>
                        <li><Link className="py-3" to="/about"><i className="fas fa-tasks"></i> About</Link></li>
                        <li><Link className="py-3" to="/contectus"><i className="fas fa-file-contract mx-1"></i> Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;