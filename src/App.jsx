import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const handleLoginUser = async () => {
    navigate("/subadmin");
  };

  return (
    <div className="flex h-fit items-center justify-center w-full bg-slate-600">
      <div className="w-full h-full bg-white p-2 rounded-xl">
        <label
          for="admin_name"
          class="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white text-start  "
        >
          Admin Name
        </label>
        <input
          type="text"
          id="admin_name"
          class="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-start "
          placeholder="RedEyesNCode"
          required
        />
        <label
          for="admin_password"
          class="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white text-start  "
        >
          Admin Password
        </label>
        <input
          type="password"
          id="admin_password"
          class="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-start "
          placeholder="*****"
          required
        />
        <button
          type="button"
          onClick={handleLoginUser}
          class="text-white mt-6  bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium
        
        rounded-full text-sm px-12 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default App;
