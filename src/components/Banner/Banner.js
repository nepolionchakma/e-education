import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner-container p-5 mx-auto">
            <div className="p-4">
                <h1>Free Online Tutorials</h1>
                <p>Over 100 Courses in Different Subjects, </p>
                <p>You're guaranteed you to find Next Level eLearning</p>
                <button className="btn btn-success">Learn More</button>
            </div>
            <div className="p-4 text-center">
                <img src="https://www.sectorlink.com/img/blog/wordpress-slider.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;