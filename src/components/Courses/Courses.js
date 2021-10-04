
import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import "./Courses.css"

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./fakeData.JSON")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    const homePageCourse = courses.slice(0, 6);
    return (
        <div>
            <div className="courses-container">
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