import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import React from "react";

function App() {
  return (
    <div className="flex p-4">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="main-area w-[80%] ">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
