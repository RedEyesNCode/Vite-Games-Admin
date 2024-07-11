import React from "react";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";

const Dashboard = () => {
  return (
    <div className="flex max-h-full max-w-full bg-slate-500 overflow-hidden">
      <SideNavBar />
      <div className="flex flex-col">
        <TopNavBar />
      </div>
    </div>
  );
};

export default Dashboard;
