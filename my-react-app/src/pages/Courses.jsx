import React from "react";
import { useLocation } from "react-router-dom";
import { courses } from "../data";
import CourseCard from "../components/CourseCard";

// Filters the courses array to show only courses matching the genre query from the URL
export default function Courses() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const genreQuery = query.get("genre");

    const filteredCourses = courses.filter(
        (course) => course.genre === genreQuery
    );
    // Returns a course card that gets the genre the user selected and outputs them onto the screen using hte CourseCard component
    return (
        <div style={{ padding: "20px" }}>
            <h1>Courses {genreQuery && `- ${genreQuery}`}</h1>
            {filteredCourses.length > 0 ? (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                    {filteredCourses.map((course) => (
                        <CourseCard key={course.id} title={course.title} img={course.img} />
                    ))}
                </div>
            ) : (
                <p>No courses found for this genre.</p>
            )}
        </div>
    );
}
