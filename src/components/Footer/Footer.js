import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="row footer-row">
            <div className="col-lg-5">
                <h3>Left</h3>
            </div>
            <div className="col-lg-2">
                <h3>Middle</h3>
            </div>
            <div className="col-lg-5">
                <h3>Right</h3>
            </div>
        </div>
    );
};

export default Footer;