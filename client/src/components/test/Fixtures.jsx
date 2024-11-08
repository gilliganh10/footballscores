import React from "react";
import data from "./Data";

const Fixtures = ({ round, title }) => {
    const fixtures = data
    console.log(fixtures)
    const filteredFixtures = fixtures.filter(
      (match) => match["Round Number"] === round
    );
  
    return (
      <div>
        <h1>{title}</h1>
        {filteredFixtures.length > 0 ? (
          filteredFixtures.map((match) => (
            <div key={match["Match Number"]}>
              <p>
                {match["Home Team"]} vs {match["Away Team"]} -{" "}
                {match["Result"] || "TBD"}
              </p>
            </div>
          ))
        ) : (
          <p>No matches available for this round.</p>
        )}
      </div>
    );
  };
  
  export default Fixtures;