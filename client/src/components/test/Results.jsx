import React from "react";
import Fixtures from "./Fixtures";
import data from "./Data";

const Results = () => {
  // Find the most recently completed gameweek
  const getLastCompletedGameweek = () => {
    const today = new Date();
    const sortedFixtures = [...data].sort((a, b) => {
      return new Date(b.Date) - new Date(a.Date);
    });

    const lastCompletedMatch = sortedFixtures.find(match => 
      new Date(match.Date) < today && match.Result !== null
    );

    return lastCompletedMatch ? lastCompletedMatch["Round Number"] : null;
  };

  const lastCompletedRound = getLastCompletedGameweek();

  return (
    <div className="results">
      {lastCompletedRound ? (
        <Fixtures 
          round={lastCompletedRound} 
          title={`Last Completed Round (${lastCompletedRound})`} 
        />
      ) : (
        <p>No completed fixtures</p>
      )}
    </div>
  );
};

export default Results;