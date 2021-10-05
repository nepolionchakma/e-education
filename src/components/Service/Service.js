import React from 'react';
import "./Service.css"

const Service = (props) => {

    // distraction service

    const { img, title, price, instractor, skill, duration } = props.service;
    return (
        <div className="service-container p-0 col-lg-4 col-md-6 col-sm-12">
            <div className="p-4 m-3 shadow rounded service-in-container">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="p-3">
                    <h2>{title}</h2>
                    <h5>Skill : {skill}</h5>
                    <h5>Duration : {duration}</h5>
                    <h5>Instractor:{instractor}</h5>
                    <h6>Price : ${price}</h6>
                    <p>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Service;