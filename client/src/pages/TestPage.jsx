import React from "react";
import Fixtures from "../components/test/Fixtures";
import Results from "../components/test/Results";
import "./TestPage.css";
import TestTable from "../components/test/Table";

function TestPage() {
    return (
        <div className="test-page">
            <h1>Test Page</h1>
            <div className="fixtures-container">
                <div className="section">
                    <Fixtures title="Next Game Week" />
                </div>

                <div className="section">
                    <TestTable />
                </div>

                <div className="section">
                    <Results />
                </div>
            </div>
        </div>
    );
}

export default TestPage;