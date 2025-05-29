import React from "react";
import DashboardOverview from "./DashboardOverview";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

const DashboardMainContent = () => {
  return (
    <main className="flex pt-6 w-full  overflow-y-auto space-x-2">
      <div className="w-[50%]">
        <DashboardOverview />
        <ActivityFeed />
      </div>
      <div className="w-[50%] ">
        <CalendarView />
        <AnatomySection />
      </div>
    </main>
  );
};

export default DashboardMainContent;
