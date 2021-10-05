
import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import "./Courses.css"

const Courses = () => {

    // Load Fake Data from public folder

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./fakeData.JSON")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    // slice + Maping

    const homePageCourse = courses.slice(0, 6);
    return (
        <div>
            <div className="courses-container row py-3">
                {
                    homePageCourse.map(course =>
                        <Course
                            key={course.id}
                            course={course}
                        ></Course>
                    )
                }
            </div>
        </div>
    );
};

export default Courses;