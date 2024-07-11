import React from "react";
import ccbet from "../assets/ic_ccbet.png";
import { useState } from "react";
import { FaHome, FaUsers } from "react-icons/fa";

const SideNavBar = ({ onSideNavClick }) => {
  // By this we can maintain state of list items which are selected
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  const handleSideNavClick = async (event) => {
    await onSideNavClick(event);
  };

  return (
    <div class="flex h-screen w-screen">
      <div className="w-[250px] justify-start bg-gray-800 text-white h-screen">
        <div className="p-4 items-center justify-center">
          <h2 className="text-[18px] font-mono font-thin mb-4 text-center">
            CCBET Admin Panel
          </h2>
        </div>
        <nav className="mt-4">
          <ul onClick={() => handleSideNavClick("Home")}>
            <li
              className={`m-2 p-2 hover:bg-purple-500 rounded-md flex flex-row items-center ${
                selectedItemId === 1 ? "bg-slate-400 text-[20px]" : ""
              }`}
              onClick={() => handleClick(1)}
            >
              <FaHome
                className={`w-[25px] h-[25px] ${
                  selectedItemId === 1 ? "" : ""
                }`}
              />

              <a className="block p-2 text-white font-mono  rounded">Home</a>
            </li>
          </ul>
          <ul onClick={() => handleSideNavClick("Users")}>
            <li
              className={`m-2 p-2 rounded-md items-center hover:bg-purple-500 flex flex-row ${
                selectedItemId === 2
                  ? "bg-slate-400 text-[20px] text-white"
                  : ""
              }`}
              onClick={() => handleClick(2)}
            >
              <FaUsers className={`w-[25px] h-[25px]`} />
              <a className="block p-2 text-white font-mono font-extrabold rounded">
                Users
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNavBar;
