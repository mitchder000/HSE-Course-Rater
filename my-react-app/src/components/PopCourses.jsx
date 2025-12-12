import React from "react";
import CourseCard from "./CourseCard";
// Currently the PopCourses component displays a grid of CourseCard components
// in the future they will display the courses with the most reviews
export default function PopCourses({ courses }) {
    return (
        <div className="course-grid">
            {courses.map(course => (
                <CourseCard
                    key={course.id}
                    title={course.title}
                    img={course.img}
                />
            ))}
        </div>
    );
}
