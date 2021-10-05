import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner-container row p-5 mx-auto mt-4">
            <div className="p-4 col-lg-6 col-md-12 col-sm-12">
                <h1 className="text-warning fw-bold"><a className="text-decoration-none text-warning fw-bold fs-1" href="/home"><span className="fs-1 text-success fw-bold">e</span>Education</a> Courses</h1>
                <p className="text-white pt-4">We Have Over 100 Courses in Different Subjects, Different Instructor. You're guaranteed you to proper Learning and <span className="text-warning fw-bold">LEARN</span> Next Level eLearning.</p>
                <button className="btn btn-success">Learn More</button>
            </div>
            <div className="p-4 text-center  col-lg-6 col-md-12 col-sm-12">
                <img src="https://www.sectorlink.com/img/blog/wordpress-slider.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;