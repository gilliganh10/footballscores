import React from "react";
import data from "./Data";
import "./Fixtures.css";

const Fixtures = ({ round, title }) => {
    const allMatches = Object.values(data[0]).flat();
    
    const filteredFixtures = allMatches.filter(
        (match) => match["Round Number"] === round
    );

    const formatTime = (timeString) => {
        const [hours, minutes] = timeString.split(':');
        return `${hours}:${minutes}`;
    };

    return (
        <div className="fixtures">
            <h2>{title}</h2>
            {filteredFixtures.length > 0 ? (
                <div className="fixtures-grid">
                    {filteredFixtures.map((match) => (
                        <div key={match["Match Number"]} className="fixture-card">
                            <span className="home-team">{match["Home Team"]}</span>
                            <span className="score-time">
                                {match["Result"] ? match["Result"] : formatTime(match["Time"])}
                            </span>
                            <span className="away-team">{match["Away Team"]}</span>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-matches">No matches available for this round.</p>
            )}
        </div>
    );
};

export default Fixtures;