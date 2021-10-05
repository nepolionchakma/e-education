import React from 'react';
import "./About.css"
const About = () => {
    return (
        <div className="about-container p-5">
            <div className="col-lg-5 col-md-9 col-sm-12 px-3 text-white">
                <h1>About <a className="text-decoration-none text-warning fw-bold fs-1" href="/home"><span className="fs-1 text-success fw-bold">e</span>Education</a> </h1>
                <p className="mt-4">We Are eLearning Plate form.Nowadays, eLearning mobile apps have created a buzz in the industry, as most of the content on the internet is accessible through mobiles and a majority of the people prefer the convenience that smartphones provide. So here is how mobile apps are transforming the education industry.</p>
                <p>Each week the digest of Spotlight: Coronavirus Lockdown is bringing you the latest submissions about this issue. Let's review together everything that happened last week.Interactive eLearning templates are known to improve the engagement level of a course. This article lists down 6 best practices for using such templates optimally.</p>
                <p>The time has come for Europe's leading corporate learning event. Learning Technologies 2020 event is going to be full of the latest learning tech, offering an exciting environment and unique opportunities for L&D pros. Top eLearning companies from all over the world will gather in London to showcase their expertise. Here's what talented development professionals like yourself should not miss out on!</p>
                <p>In eLearning Industry, quality articles are the heart of our community. Some articles resonate with our readers to such a degree that they share them with others. These are the 50 most popular eLearning Industry for 2019.</p>
            </div>
            <div className="col-lg-6"></div>
        </div>
    );
};

export default About;