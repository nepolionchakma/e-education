import React from 'react';
import "./ContactUs.css"

const ContactUs = () => {
    return (
        <div className="contact-container mx-auto p-5">
            <h3 className="text-center">Contact Us</h3>
            <ul>
                <li>Name : <input type="text" /></li>
                <li>Email : <input type="email" name="" id="" /></li>
                <li>Phone : <input type="number" name="" id="" /></li>
                <li>Message : <input type="text" /></li>
                <li><button className="btn btn-success">Send</button></li>
            </ul>
        </div>
    );
};

export default ContactUs;