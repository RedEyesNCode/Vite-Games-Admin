import React, { useState, useEffect } from "react";
import { getAllWithdrawRequests } from "../../../api/apiInterface";

const AppWithdrawTable = () => {
  const [withdrawData, setWithdrawData] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const callGetAllWithdrawRequests = async () => {
    try {
      const response = await getAllWithdrawRequests();
      setWithdrawData(response.data);
    } catch (error) {
      console.error("Error creating route  data:", error);
      alert(
        "An error occurred while logging in. Please try again later." + error
      );
    }
  };
  useEffect(() => {
    callGetAllWithdrawRequests();
  }, []);

  return (
    <div className="bg-slate-700 h-full">
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
              user_upi
            </th>
            <th scope="col" class="px-6 py-3">
              amount
            </th>
            <th scope="col" class="px-6 py-3">
              user_id
            </th>
            <th scope="col" class="px-6 py-3">
              status
            </th>
            <th scope="col" class="px-6 py-3">
              upi_payment_app
            </th>
            <th scope="col" class="px-6 py-3">
              timestamp
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-gray-500 w-fit">
          {withdrawData != undefined &&
            withdrawData.map((data, index) => (
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
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Actions
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900 border bg-[#F3F4F7] font-mono font-extralight ">
                  {data.user_upi}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900 border bg-[#F3F4F7] font-mono font-extralight">
                  {data.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900 border bg-[#F3F4F7] font-mono font-extralight ">
                  {data.user_id || "No UserID Provided"}{" "}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900 border bg-[#F3F4F7] font-mono font-extralight ">
                  {data.status || "No status Provided"}{" "}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900 border bg-[#F3F4F7] font-mono font-extralight ">
                  {data.upi_payment_app || "No upi payment app Provided"}{" "}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900 border bg-[#F3F4F7] font-mono font-extralight ">
                  {data.timestamp || "No timestamp Provided"}{" "}
                </td>
                
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppWithdrawTable;
