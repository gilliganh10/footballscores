import React from "react";
import Fixtures from "../components/test/Fixtures";
import Results from "../components/test/Results";
import "./TestPage.css";

function TestPage() {
    return (
        <div className="test-page">
            <h1>Test Page</h1>
            <div className="fixtures-container">
                <Fixtures round={11} title="Next Game Week" />
                <Results />
            </div>
        </div>
    );
}

export default TestPage;