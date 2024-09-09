import React from 'react';
import ProgressDashboard from '../components/display/ProgressDashboard';

const ProgressPage = () => {
  const dashboardData = {
    title: "Your Learning Progress",
    cards: [
      { title: "Total Words", value: "2704", subtitle: "Words encountered" },
      { title: "Learning", value: "71", subtitle: "Words currently learning" },
      { title: "To Review", value: "213", subtitle: "Words ready for review" },
    ],
    actionText: "LEARN 10 MORE NOW...",
    onActionClick: () => console.log("Action button clicked"),
  };

  return (
    <div className="progress-page">
      <ProgressDashboard {...dashboardData} />
    </div>
  );
};

export default ProgressPage;