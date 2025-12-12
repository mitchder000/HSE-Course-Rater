import React from "react";

// The CourseCard component displays the course title and image the courses genre correlates to
export default function CourseCard({ title, img }) {
    return (
        <div
            className="course-card"
        >
            <img
                src={img}
                alt={title}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{title}</h3>
        </div>
    );
}
