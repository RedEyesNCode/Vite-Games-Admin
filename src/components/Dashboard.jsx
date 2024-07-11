import React, { useState } from "react";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";
import AppUserComponent from "./subcomponents/users/AppUserComponent";

const Dashboard = () => {
  const [isUserFrame, setUserFrame] = useState(false);
  const [isHomeFrame, setHomeFrame] = useState(false);

  const handleSideNavBar = (event_name) => {
    if (event_name === "Users") {
      setUserFrame(true);
      setHomeFrame(false);
    } else if (event_name === "Home") {
      setUserFrame(false);
      setHomeFrame(true);
    }
  };

  return (
    <div className="flex max-h-full max-w-full bg-slate-500 overflow-hidden">
      <SideNavBar onSideNavClick={(e) => handleSideNavBar(e)} />
      <div className="flex flex-col">
        <TopNavBar />
        {isUserFrame && !isHomeFrame && (
          <div className="h-full overflow-auto">
            {" "}
            {/* Tailwind classes for scrolling */}
            <AppUserComponent />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
