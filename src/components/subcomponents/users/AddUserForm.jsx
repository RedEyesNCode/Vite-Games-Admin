import React, { useState } from "react";
import { registerNewUser } from "../../../api/apiInterface";

const AddUserForm = ({handleCloseForm}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    telephoneNumber: "",
    password: "",
    email: "",
    withdrawUpi: "",
    paymentMode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your form submission logic here
    const registerUserResponse = await registerNewUser(formData);
    if(registerUserResponse.code===200){

      window.alert("User Registered Successfully !. Please Refresh this page.");
      handleCloseForm();


    }else{
      window.alert("User not registered !");
    }


  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="telephoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Telephone Number
          </label>
          <input
            type="tel"
            name="telephoneNumber"
            id="telephoneNumber"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={formData.telephoneNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="withdrawUpi"
            className="block text-sm font-medium text-gray-700"
          >
            Withdraw UPI
          </label>
          <input
            type="text"
            name="withdrawUpi"
            id="withdrawUpi"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={formData.withdrawUpi}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="paymentMode"
            className="block text-sm font-medium text-gray-700"
          >
            Payment Mode
          </label>
          <select
            name="paymentMode"
            id="paymentMode"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={formData.paymentMode}
            onChange={handleChange}
          >
            <option value="GPAY">GPAY</option>
            <option value="PHONEPE">PHONEPE</option>
            <option value="PAYTM">PAYTM</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
