import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Navbar from "./components/Navbar";

import ReviewForm from "./pages/ReviewForm";
import Reviews from "./pages/Reviews";

// Main application router
export default function App() {
    return (
        <Router>
            {/* Navbar stays visible across all pages */}
            <Navbar />

            {/* All routes in the app */}
            <Routes>

                {/* Home page */}
                <Route path="/" element={<Home />} />

                {/* Courses page */}
                <Route path="/courses" element={<Courses />} />

                {/* Review form page */}
                <Route path="/review" element={<ReviewForm />} />

                {/* Page showing submitted reviews */}
                <Route path="/reviews" element={<Reviews />} />

            </Routes>
        </Router>
    );
}
