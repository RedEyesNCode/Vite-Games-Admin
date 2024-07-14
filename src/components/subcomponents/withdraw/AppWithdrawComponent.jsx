import React, { useState,useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import AppWithdrawTable from "./AppWithdrawTable";

const AppWithdrawComponent = () => {
  useEffect(() => {
    toast.info("Total Withdraw Requests");
  }, []);

  return (
    <div className="bg-slate-700 h-full">

        <div className="w-full p-2 text-[21px] font-mono bg-yellow-400 font-extrabold">All Withdraw Requests</div>
      <AppWithdrawTable />

    </div>
  );
};

export default AppWithdrawComponent;
