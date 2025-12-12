import React from "react";

// The SearchForm component renders a dropdown of all course genres and a search button
// Allows users to select a genre and submit the form
// selectedGenre is the current selected genre, `setSelectedGenre updates user selection, and handleSearch is a prop called when submit is clicked 

export default function SearchForm({ selectedGenre, setSelectedGenre, handleSearch }) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
            }}
        >
            <label htmlFor="genre">Select Genre:</label>
            <select
                id="genre"

                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
            >
                <option value="">--Choose a genre--</option>
                <option value="MATHEMATICS">MATHEMATICS</option>
                <option value="PE & HEALTH">PE & HEALTH</option>
                <option value="SCIENCE">SCIENCE</option>
                <option value="PERFORMING ARTS">PERFORMING ARTS</option>
                <option value="VISUAL ARTS">VISUAL ARTS</option>
                <option value="SOCIAL STUDIES">SOCIAL STUDIES</option>
                <option value="WORLD LANGUAGES">WORLD LANGUAGES</option>
                <option value="MULTIDISCIPLINARY">MULTIDISCIPLINARY</option>
                <option value="ENGLISH/LANGUAGE ARTS">ENGLISH/LANGUAGE ARTS</option>
                <option value="MEDIA ARTS & COMMUNICATIONS">MEDIA ARTS & COMMUNICATIONS</option>
                <option value="COMPUTER SCIENCE">COMPUTER SCIENCE</option>
                <option value="AGRICULTURE">AGRICULTURE</option>
                <option value="FAMILY AND CONSUMER SCIENCE">FAMILY AND CONSUMER SCIENCE</option>
                <option value="ENGINEERING AND TECHNOLOGY">ENGINEERING AND TECHNOLOGY</option>
                <option value="BUSINESS, MARKETING, AND IT">BUSINESS, MARKETING, AND IT</option>
                <option value="PURSUIT INSITUTE">PURSUIT INSITUTE</option>
            </select>
            <button type="submit" >Search</button>
        </form>
    );
}
