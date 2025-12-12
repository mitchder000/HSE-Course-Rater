import React from "react";


export default function CourseReviews() {
    return (
        <>
            <nav className="navbar">
                <div className="nav-left">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-justify"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
                        />
                    </svg>
                    <h3>HSE Course Rater</h3>
                </div>

                <div className="nav-right">
                    <a href="#">Login</a>
                </div>
            </nav>

            <h1>Course Reviews: "Course Name"</h1>

            <div className="reviews-container">

                <div className="review-card">
                    <h3>John Doe</h3>
                    <p>Great course! Learned a lot about advanced topics and the instructor was amazing.</p>
                    <span className="rating">Rating: ★★★★☆</span>
                </div>

                <div className="review-card">
                    <h3>Jane Smith</h3>
                    <p>The assignments were challenging but very rewarding. Highly recommend this course!</p>
                    <span className="rating">Rating: ★★★★★</span>
                </div>

                <div className="review-card">
                    <h3>Mike Johnson</h3>
                    <p>The course content was okay, but I wished there were more practical examples.</p>
                    <span className="rating">Rating: ★★★☆☆</span>
                </div>

                <div className="review-card">
                    <h3>Emily Brown</h3>
                    <p>Excellent course structure and very easy to follow. Loved it!</p>
                    <span className="rating">Rating: ★★★★★</span>
                </div>

            </div>
        </>
    );
}
