import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./Header.css"


const Header = () => {
    return (
        <Router>
            <div className="row header-row">
                <div className="col-lg-6">
                    <nav>
                        <ul>
                            <Link to="/Home"><span>e</span>Education</Link>
                        </ul>
                    </nav>

                </div>
                <div className="col-lg-4">
                    <nav>
                        <ul>
                            <li><Link to="/Home">Home</Link></li>
                            <li><Link to="/Services">Services</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Contact">Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Router>
    );
};

export default Header;