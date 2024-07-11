import React, { useState, useEffect } from "react";
import { getAllUsers } from "../../api/apiInterface";

function AppUsersTable() {
  const [usersData, setUsersData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  function openModal(user) {
    setSelectedUser(user);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const callGetAllUsersAPI = async () => {
    try {
      const getAllUsersResponse = await getAllUsers();
      setUsersData(getAllUsersResponse.data);
    } catch (error) {
      console.error("Error creating route  data:", error);
      alert(
        "An error occurred while logging in. Please try again later." + error
      );
    }
  };

  useEffect(() => {
    callGetAllUsersAPI();
  }, []);

  return (
    <div className="relative h-full overflow-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              class="px-2 py-3 w-[120px] justify-center items-center"
            >
              _id
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
            <th scope="col" class="px-2 py-3">
              fullName
            </th>
            <th scope="col" class="px-6 py-3">
              telephoneNumber
            </th>
            <th scope="col" class="px-6 py-3">
              email
            </th>
            <th scope="col" class="px-6 py-3">
              paymentMode
            </th>
            <th scope="col" class="px-6 py-3">
              password
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-gray-500 w-fit">
          {usersData != undefined &&
            usersData.map((data, index) => (
              <tr
                key={index}
                className={`${index % 2 != 0 ? "bg-[#F4FAFF]" : ""} py-6`}
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900 border relative group">
                  <div className="absolute invisible group-hover:visible bg-red-800 text-white text-xl font-mono font-thin px-2 rounded z-10">
                    {data._id}
                  </div>
                  <div className="whitespace-nowrap overflow-hidden text-ellipsis rounded-lg bg-purple-800 text-white p-1 font-mono font-semibold">
                    View ID
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => openModal(data)}
                  >
                    View User
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900 border bg-[#F3F4F7] font-mono font-extralight ">
                  {data.fullName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900 border bg-[#F3F4F7] font-mono font-extralight">
                  {data.telephoneNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900 border bg-[#F3F4F7] font-mono font-extralight ">
                  {data.email || "No Email Provided"}{" "}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900 border bg-[#F3F4F7] font-mono font-extralight ">
                  {data.paymentMode || "No paymentMode Provided"}{" "}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900 border bg-[#F3F4F7] font-mono font-extralight ">
                  {data.password || "No password Provided"}{" "}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {selectedUser && (
        <div className="absolute top-0 left-0 w-full h-full bg-slate-700 bg-opacity-80 flex items-center justify-center z-10">
          <div className="bg-white rounded-lg px-8 py-6 text-black font-mono ">
            <h2 className="text-2xl font-bold mb-4 bg-slate-500 rounded-lg p-2 text-white">User Details</h2>
            {/* Display all user details here */}
            <p>
              <strong className="font-mono">ID:</strong> {selectedUser._id}
            </p>
            <button
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              onClick={() => setSelectedUser(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppUsersTable;
