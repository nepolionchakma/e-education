
import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Service from '../Service/Service';
import "./Courses.css"

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./fakeData.JSON")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className="courses-container">
                {
                    courses.map(course =>
                        <Course
                            key={course.id}
                            course={course}
                        ></Course>,
                        <Service
                            key={courses.id}
                            courses={courses}
                        ></Service>
                    )
                }
            </div>
        </div>
    );
};

export default Courses;