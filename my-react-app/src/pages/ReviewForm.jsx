import React from "react";

// ReviewForm Component
// Displays a star-rating form for students to rate a course.
// NOTE: As written, this form only displays UI —
// it does NOT save data, handle changes, or submit to another page.
export default function ReviewForm() {
    return (
        <div className="review-form-page">

            {/* Page Title */}
            <h2>Course Feedback Form</h2>

            {/* Main Review Form */}
            {/* NOTE: There is no onSubmit handler yet, so submit will refresh the page */}
            <form>

                {/* ============================================================
                    QUESTION 1: Course Content Rating
                    - Uses radio buttons disguised as stars
                    - User selects 1–5
                    - All radios share the same "name" so only one can be chosen
                   ============================================================ */}
                <div className="question">
                    <label>1. How would you rate the overall quality of the course content?</label>

                    <div className="stars">
                        {/* Highest rating first for visual star alignment */}
                        <input type="radio" id="content5" name="content" value="5" />
                        <label htmlFor="content5">&#9733;</label>

                        <input type="radio" id="content4" name="content" value="4" />
                        <label htmlFor="content4">&#9733;</label>

                        <input type="radio" id="content3" name="content" value="3" />
                        <label htmlFor="content3">&#9733;</label>

                        <input type="radio" id="content2" name="content" value="2" />
                        <label htmlFor="content2">&#9733;</label>

                        <input type="radio" id="content1" name="content" value="1" />
                        <label htmlFor="content1">&#9733;</label>
                    </div>
                </div>

                {/* ============================================================
                    QUESTION 2: Instructor Clarity Rating
                   ============================================================ */}
                <div className="question">
                    <label>2. How clear and engaging was the instructor’s teaching?</label>

                    <div className="stars">
                        <input type="radio" id="instructor5" name="instructor" value="5" />
                        <label htmlFor="instructor5">&#9733;</label>

                        <input type="radio" id="instructor4" name="instructor" value="4" />
                        <label htmlFor="instructor4">&#9733;</label>

                        <input type="radio" id="instructor3" name="instructor" value="3" />
                        <label htmlFor="instructor3">&#9733;</label>

                        <input type="radio" id="instructor2" name="instructor" value="2" />
                        <label htmlFor="instructor2">&#9733;</label>

                        <input type="radio" id="instructor1" name="instructor" value="1" />
                        <label htmlFor="instructor1">&#9733;</label>
                    </div>
                </div>

                {/* ============================================================
                    QUESTION 3: Course Materials Rating
                   ============================================================ */}
                <div className="question">
                    <label>3. How useful were the course materials (slides, readings, videos, etc.)?</label>

                    <div className="stars">
                        <input type="radio" id="materials5" name="materials" value="5" />
                        <label htmlFor="materials5">&#9733;</label>

                        <input type="radio" id="materials4" name="materials" value="4" />
                        <label htmlFor="materials4">&#9733;</label>

                        <input type="radio" id="materials3" name="materials" value="3" />
                        <label htmlFor="materials3">&#9733;</label>

                        <input type="radio" id="materials2" name="materials" value="2" />
                        <label htmlFor="materials2">&#9733;</label>

                        <input type="radio" id="materials1" name="materials" value="1" />
                        <label htmlFor="materials1">&#9733;</label>
                    </div>
                </div>

                {/* ============================================================
                    QUESTION 4: Overall Satisfaction Rating
                   ============================================================ */}
                <div className="question">
                    <label>4. How satisfied are you with the course overall?</label>

                    <div className="stars">
                        <input type="radio" id="overall5" name="overall" value="5" />
                        <label htmlFor="overall5">&#9733;</label>

                        <input type="radio" id="overall4" name="overall" value="4" />
                        <label htmlFor="overall4">&#9733;</label>

                        <input type="radio" id="overall3" name="overall" value="3" />
                        <label htmlFor="overall3">&#9733;</label>

                        <input type="radio" id="overall2" name="overall" value="2" />
                        <label htmlFor="overall2">&#9733;</label>

                        <input type="radio" id="overall1" name="overall" value="1" />
                        <label htmlFor="overall1">&#9733;</label>
                    </div>
                </div>

                {/* ============================================================
                    SUBMIT BUTTON
                    NOTE: Currently does nothing except refresh the page.
                    To make this functional, you will need:
                    - onSubmit handler
                    - React state for storing selected answers
                    - navigation to reviews page
                    - saving data (localStorage, backend, etc.)
                   ============================================================ */}
                <button type="submit">Submit Feedback</button>

            </form>
        </div>
    );
}
