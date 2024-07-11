import React from "react";
import ccbet from "../assets/ic_ccbet.png";
const TopNavBar = () => {
  return (
    <nav className="bg-slate-900 h-[100px] flex flex-row items-center px-4 w-screen">
      <img src={ccbet} className="w-[145px] h-[145px] object-contain"></img>
      <button
        type="button"
        class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Admin Name : Ashutosh Singh
      </button>
    </nav>
  );
};

export default TopNavBar;
