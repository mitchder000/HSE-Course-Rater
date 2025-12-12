import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
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
                <Link to="/login">Login</Link>  {/* <--- update this */}
                <Link to="/">Home</Link>
                <Link to="/courses" style={{ marginLeft: "1rem" }}>
                    Courses
                </Link>
            </div>
        </nav>
    );
}
