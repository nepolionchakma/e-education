import React from 'react';
import "./Course.css";

const Course = (props) => {
    const { title, price, instractor, img, duration } = props.course;


    return (
        <div className="course-container p-0 col-lg-4 col-md-6 col-sm-12">
            <div className="p-4 m-3 shadow rounded course-in">
                <div className="text-center">
                    <img src={img} alt="" />
                </div>
                <div className="p-3">
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
        </div>
    );
};
// const Course = Courses.slice(-2);

export default Course;