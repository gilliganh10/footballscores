import React from "react";
import Fixtures from "./Fixtures";
import data from "./Data";

const Results = ({ round }) => {
  const getLastPlayedGameweek = () => {
    const allMatches = Object.values(data[0]).flat();
    const sortedFixtures = [...allMatches].sort((a, b) => {
      return new Date(b.Date) - new Date(a.Date);
    });

    const lastMatch = sortedFixtures.find(match => match.Result !== null);
    return lastMatch ? lastMatch["Round Number"] : null;
  };

  const displayRound = round || getLastPlayedGameweek();

  return displayRound ? (
    <Fixtures round={displayRound} title={`Last Gameweek (${displayRound})`} />
  ) : (
    <p>No completed matches available</p>
  );
};

export default Results;