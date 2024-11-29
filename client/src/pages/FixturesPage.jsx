import React, { useState } from "react";
import Fixtures from "../components/test/Fixtures";
import data from "../components/test/Data";
import "./FixturesPage.css";

function FixturesPage() {
    const allMatches = Object.values(data[0]).flat();
    const [currentRound, setCurrentRound] = useState(() => {
        const today = new Date();
        const sortedFixtures = [...allMatches].sort((a, b) => {
            return new Date(a.Date) - new Date(b.Date);
        });

        const nextMatch = sortedFixtures.find(match => 
            new Date(match.Date) > today && match.Result === null
        );
        return nextMatch ? nextMatch["Round Number"] : 1;
    });

    const maxRound = Math.max(...allMatches.map(match => match["Round Number"]));
    const minRound = Math.min(...allMatches.map(match => match["Round Number"]));

    const handlePrevious = () => {
        setCurrentRound(prev => Math.max(prev - 1, minRound));
    };

    const handleNext = () => {
        setCurrentRound(prev => Math.min(prev + 1, maxRound));
    };

    return (
        <div className="fixtures-page">
            <div className="fixtures-navigation">
                <button 
                    onClick={handlePrevious}
                    disabled={currentRound <= minRound}
                    className="nav-button"
                >
                    ←
                </button>
                <h1>Fixtures</h1>
                <button 
                    onClick={handleNext}
                    disabled={currentRound >= maxRound}
                    className="nav-button"
                >
                    →
                </button>
            </div>
            <Fixtures round={currentRound} title={`Round ${currentRound}`} />
        </div>
    );
}

export default FixturesPage; 