import React from "react";
import { PiUsersFourDuotone } from "react-icons/pi";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

const AdminCards = () => {
  return (
    <div className="flex space-x-4 font-mono text-black font-extralight">
      <div className="max-w-sm w-fit h-fit items-center rounded overflow-hidden shadow-lg bg-purple-600 m-2 border-yellow-300 border-[2px]">
        <div className="flex flex-row justify-evenly">
          <PiUsersFourDuotone className="w-[120px] h-[120px] justify-center items-center" />

          <div className="text-white font-mono font-extralight text-6xl mt-6 ">
            --
          </div>
        </div>

        <div className="px-6 py-4 text-white">
          <div className="font-bold text-xl mb-2">App Users</div>
          <p className="font-semibold text-base text-white">
            The more App Users are there The More better.
          </p>
        </div>
      </div>
      <div className="max-w-sm w-fit h-fit items-center rounded overflow-hidden shadow-lg bg-indigo-600 m-2 border-yellow-300 border-[2px]">
        <div className="flex flex-row justify-evenly">
          <RiMoneyRupeeCircleFill className="w-[120px] h-[120px] justify-center items-center" />

          <div className="text-white font-mono font-extralight text-6xl mt-6 ">
            --
          </div>
        </div>

        <div className="px-6 py-4 text-white">
          <div className="font-bold text-xl mb-2">Income</div>
          <p className="font-semibold text-base text-white">
            This is the total Amount Invested by Users .
          </p>
        </div>
      </div>
      <div className="max-w-sm w-fit h-fit items-center rounded overflow-hidden shadow-lg bg-indigo-600 m-2 border-yellow-300 border-[2px]">
        <div className="flex flex-row justify-evenly">
          <RiMoneyRupeeCircleFill className="w-[120px] h-[120px] justify-center items-center" />

          <div className="text-white font-mono font-extralight text-6xl mt-6 ">
            --
          </div>
        </div>

        <div className="px-6 py-4 text-white">
          <div className="font-bold text-xl mb-2">Traffic</div>
          <p className="font-semibold text-base text-white">
            Whenever some hits our domain this number gets updated .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminCards;
