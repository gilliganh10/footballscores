import React from "react";
import CurrentFixtures from "../components/test/Currentfixtures";
import Results from "../components/test/Results";

function TestPage() {

    return (
        <div classname="TestPage">
            <h1>Test Page</h1>
            <CurrentFixtures/>
            <Results/>
        
        </div>
    );
}

export default TestPage;