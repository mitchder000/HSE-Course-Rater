
import React, { useEffect, useState } from "react";

export default function ReviewsPage() {
    // State that stores all submitted reviews
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Load saved reviews from localStorage when the page first loads
        const saved = JSON.parse(localStorage.getItem("reviews")) || [];

        // Update state with stored reviews
        setReviews(saved);
    }, []);
    // Empty [] ensures this runs only once when the component mounts

    return (
        <div>
            {/* Page title */}
            <h2>All Course Reviews</h2>

            // If no reviews exist yet, show a message
            {reviews.length === 0 ? (
                <p>No reviews yet.</p>
            ) : (
                // Loop through all reviews and display them
                reviews.map((review, index) => (
                    <div key={index} className="review-box">
                        // Friendly label for each review
                        <h3>Review #{index + 1}</h3>

                        // Display each rating section from the form
                        <p>Content Quality: {review.content}</p>
                        <p>Instructor: {review.instructor}</p>
                        <p>Materials: {review.materials}</p>
                        <p>Overall: {review.overall}</p>
                    </div>
                ))
            )}
        </div>
    );
}
