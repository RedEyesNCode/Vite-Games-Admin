import React, { useState, useEffect } from "react";
import { deleteUser, getAllUsers, updateUser } from "../../api/apiInterface";

function AppUsersTable() {
  const [usersData, setUsersData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({ ...selectedUser });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function openModal(user) {
    setSelectedUser(user);
    setFormData(user);

    setIsOpen(true);
  }
  const callUpdateUsersAPI = async (data) => {
    try {
      const updateUserResponse = await updateUser(data);
      await callGetAllUsersAPI();

      window.alert(updateUserResponse.message);
    } catch (error) {
      console.error("Error creating route  data:", error);
      alert(
        "An error occurred while logging in. Please try again later." + error
      );
    }
  };

  const onUpdateUser = async (data_user) => {
    await callUpdateUsersAPI(data_user);
  };
  const onDeleteUser = async (data_user) => {
    const rawJson = {
      userId: data_user._id,
    };
    window.alert(data_user._id);

    const deleteUserResponse = await deleteUser(rawJson);
    window.alert(deleteUserResponse.message);

    closeModal();
    
  };

  function closeModal() {
    setIsOpen(false);
    setFormData(null);
    setSelectedUser(null);
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
              Password
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
                  {data.password || "No password Provided"}{" "}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {selectedUser && (
        <div className="absolute top-0 left-0 w-full h-full bg-slate-700 bg-opacity-80 flex items-center justify-center z-10">
          <div className="bg-white rounded-lg px-8 py-6 text-black font-mono max-w-lg overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4 bg-slate-500 rounded-lg p-2 text-white">
              User Details
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <strong className="font-mono">{key}:</strong>
                  {key !== "_id" ? (
                    <input
                      type="text"
                      name={key}
                      value={value || "N/A"}
                      onChange={handleInputChange}
                      className="border rounded p-1"
                    />
                  ) : (
                    value
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-row justify-evenly">
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => onUpdateUser(formData)} // Call the update function
              >
                UpdateUser
              </button>
              <button
                className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => onDeleteUser(formData)} // Call the delete function
              >
                Delete User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppUsersTable;
