import React from 'react';
import "./Service.css"

const Service = (props) => {

    const { img, title, price, instractor, skill, duration } = props.service;
    return (
        <div className="service-container p-4">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="pt-3">
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
    );
};

export default Service;