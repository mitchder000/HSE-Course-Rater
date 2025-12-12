import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import PopCourses from "../components/PopCourses";
import { courses } from "../data";

// Home page tracks the users selected genre and navigates them to /courses on search, and displays search form
// Also shows top 4 popular courses using PopCourses component
export default function Home() {
    const [selectedGenre, setSelectedGenre] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (selectedGenre !== "") {
            navigate("/courses?genre=" + selectedGenre);
        }
    };

    return (
        <div>
            <h1>Welcome to HSE Course Rater</h1>
            <div className="middle">
                <SearchForm
                    selectedGenre={selectedGenre}
                    setSelectedGenre={setSelectedGenre}
                    handleSearch={handleSearch}
                />
            </div>
            <h3 className="centered">Popular Courses</h3>

            <div className="course-holder">

                <PopCourses courses={courses.slice(0, 4)} />
            </div>
        </div>
    );
}
