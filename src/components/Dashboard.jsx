import React, { useState } from "react";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";
import AppUserComponent from "./subcomponents/users/AppUserComponent";
import AdminHome from "./AdminHome";
import AppWithdrawComponent from "./subcomponents/withdraw/AppWithdrawComponent";

const Dashboard = () => {
  const [isUserFrame, setUserFrame] = useState(false);
  const [isHomeFrame, setHomeFrame] = useState(true);
  const [isWithdrawFrame,setWithdrawFrame] = useState(false);


  const handleSideNavBar = (event_name) => {
    if (event_name === "Users") {
      setUserFrame(true);
      setHomeFrame(false);
      setWithdrawFrame(false);

    } else if (event_name === "Home") {
      setUserFrame(false);
      setHomeFrame(true);
      setWithdrawFrame(false);
    }else if(event_name=== "Withdraw"){
       setUserFrame(false);
       setHomeFrame(false);
       setWithdrawFrame(true);
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
        {isHomeFrame && !isUserFrame && (
          <AdminHome/>


        )}

        {isWithdrawFrame && !isHomeFrame && (
          <AppWithdrawComponent/>

        )}
      </div>
    </div>
  );
};

export default Dashboard;
