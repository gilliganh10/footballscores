import React from "react";
import Fixtures from "./Fixtures";
import data from "./Data";

const CurrentFixtures = () => {
  // Find the next gameweek that hasn't been played yet
  const getNextGameweek = () => {
    const today = new Date();
    const sortedFixtures = [...data].sort((a, b) => {
      return new Date(a.Date) - new Date(b.Date);
    });

    const nextMatch = sortedFixtures.find(match => 
      new Date(match.Date) > today && match.Result === null
    );

    return nextMatch ? nextMatch["Round Number"] : null;
  };

  const nextRound = getNextGameweek();

  return (
    <div className="current-fixtures">
      {nextRound ? (
        <Fixtures round={nextRound} title={`Next Round (${nextRound})`} />
      ) : (
        <p>No upcoming fixtures</p>
      )}
    </div>
  );
};

export default CurrentFixtures;