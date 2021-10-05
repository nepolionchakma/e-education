import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-container p-3">
            <div className="footer-top-container py-4 row ">
                <div className="mt-5 col-lg-3 col-md-12 col-sm-12 text-center pb-3">
                    <a className="text-warning fw-bold fs-1 logo" href="/home"><span className="fs-1 text-success fw-bold">e</span>Education</a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                    <h4>Follow Us On</h4>
                    <p>
                        <a className="px-3" href="/home"><i className="fab fa-twitter"> </i></a>
                        <a className="px-3" href="/home"><i className="fab fa-facebook"> </i></a>
                        <a className="px-3" href="/home"><i className="fab fa-instagram"> </i></a>
                    </p>
                    <p> <i className="fas fa-phone-volume"></i> +88-01893600000</p>
                    <p> <i className="fas fa-envelope"></i> elerning.bd@gmail.com</p>
                    <address>
                        <p>20 Hatazari, Chittagong, Bangladesh</p>
                    </address>
                </div>
                <div className="col-lg-3 text-dark col-md-4 col-sm-4">
                    <nav>
                        <ul>
                            <li><Link to="/home"><i className="fas fa-home mx-1"></i> Home</Link></li>
                            <li><Link to="/services"><i className="fas fa-users-cog"></i> Services</Link></li>
                            <li><Link to="/about"><i className="fas fa-tasks"></i> About</Link></li>
                            <li><Link to="/contectus"><i className="fas fa-file-contract mx-1"></i> Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="mt-4 col-lg-3 col-md-4 col-sm-3">
                    <h3 className="mb-5">Newsletter </h3>
                    <span>
                        <input placeholder="Enter Your Email" type="text" />
                        <button className="btn btn-success d-block mt-2" type="submit">Send</button>
                    </span>
                </div>
            </div>
            <div>
                <p className="m-0 text-warning text-center py-3">&copy; 2021 All right <Link className="text-warning fw-bold text-decoration-none" to="/home"> <span className="fs-5 text-success fw-bold ">e</span>Education</Link> </p>
            </div>
        </div>
    );
};

export default Footer;
