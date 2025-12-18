import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { courses } from "../data";

export default function ReviewForm() {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Get the ID from the URL (e.g., /review?id=2520)
    const query = new URLSearchParams(location.search);
    const courseId = query.get("id");
    
    // Find the specific course object from our data
    const selectedCourse = courses.find(c => c.id.toString() === courseId);

    const [ratings, setRatings] = useState({ content: "", instructor: "", materials: "", overall: "" });

    const handleChange = (e) => setRatings({ ...ratings, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
        
        // Save the review with the specific courseId
        const newReview = { ...ratings, courseId: courseId, courseTitle: selectedCourse.title };
        localStorage.setItem("reviews", JSON.stringify([newReview, ...existingReviews]));

        // Navigate to the reviews page for THIS specific course
        navigate(`/reviews?id=${courseId}`);
    };

    if (!selectedCourse) return <p>Course not found.</p>;

    return (
        <div className="review-form-page">
            <h2>Review for {selectedCourse.title}</h2>
            <form onSubmit={handleSubmit}>
                {["content", "instructor", "materials", "overall"].map((category) => (
                    <div className="question" key={category}>
                        <label>Rate the {category}:</label>
                        <div className="stars">
                            {[5, 4, 3, 2, 1].map((num) => (
                                <React.Fragment key={num}>
                                    <input type="radio" id={`${category}${num}`} name={category} value={num} onChange={handleChange} required />
                                    <label htmlFor={`${category}${num}`}>&#9733;</label>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                ))}
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
}
