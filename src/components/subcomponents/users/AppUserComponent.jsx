import React, { useState, useEffect } from "react";
import { getAllUsers } from "../../../api/apiInterface";
import AppUsersTable from "../AppUsersTable";
import AddUserForm from "./AddUserForm";

function AppUserComponent() {
  const [isOpen, setIsOpen] = useState(false);
  function openModal(user) {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="h-full relative overflow-auto bg-slate-600">
        <button
          onClick={openModal}
          class="m-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-mono font-semibold">
            + Add New User
          </span>
        </button>
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-full bg-slate-700 bg-opacity-80 flex items-center justify-center z-10">
            <div className="bg-white rounded-lg px-8 py-6 text-black font-mono max-w-lg overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4 bg-slate-800 rounded-lg p-2 text-white">
                Add New User 
              </h2>
              <AddUserForm/>




              <button
                className="mt-4 w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}

      <AppUsersTable />
    </div>
  );
}

export default AppUserComponent;
