import React from 'react';
import "./Course.css";

const Course = (props) => {
    const { title, price, instractor, img, skill, duration } = props.course;


    return (
        <div className="course-container p-4">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="pt-3">
                <h2>{title}</h2>
                <h5>Duration : {duration}</h5>
                <h5>Instractor : {instractor}</h5>
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
// const Course = Courses.slice(-2);

export default Course;