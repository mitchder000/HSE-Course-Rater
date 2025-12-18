
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ReviewsPage() {
    const [myReviews, setMyReviews] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const courseId = query.get("id");

    useEffect(() => {
        // Get everything from storage
        const allSaved = JSON.parse(localStorage.getItem("reviews")) || [];
        
        // Filter: Keep only the ones that match this course ID
        const filtered = allSaved.filter((item) => item.courseId === courseId);
        
        setMyReviews(filtered);
    }, [courseId]);

    return (
        <div>
            <h2>Reviews for this Course</h2>
            {myReviews.length === 0 ? (
                <p>No reviews found.</p>
            ) : (
                myReviews.map((rev, index) => (
                    <div key={index} className="review-box">
                        <p>Content: {rev.content}/5</p>
                        <p>Instructor: {rev.instructor}/5</p>
                        <p>Materials: {rev.materials}/5</p>
                        <p>Comment: {rev.overall}</p>
                    </div>
                ))
            )}
        </div>
    );
}
