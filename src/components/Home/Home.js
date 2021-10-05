import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';

const Home = () => {
    // Showing Home Page
    return (
        <div>
            <div className="container">
                <Banner></Banner>
                <Courses></Courses>
            </div>
        </div>
    );
};

export default Home;