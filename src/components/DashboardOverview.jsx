import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { GiLeg } from "react-icons/gi";
import { FaLungsVirus } from "react-icons/fa";
import { GiFrontTeeth } from "react-icons/gi";
import { LuBone } from "react-icons/lu";
const DashboardOverview = () => {
  return (
    <section>
      <div className="flex justify-between items-center py-4 px-4">
        <h1 className="text-3xl font-semibold text-[#0f0950] ">Dashboard</h1>
        <p className="text-[14px] font-semibold text-[#0f0950] flex items-center gap-1">
          This Week <RiArrowDropDownLine className="text-xl" />
        </p>
      </div>
      <div className="div flex w-full space-x-5">
        <div className="div1 w-[60%] bg-gray-50">
          <div className="py-6">
            <div className="bg-blue-900 mt-14 ml-44 absolute z-50 flex items-center justify-center rounded-lg p-2 w-40">
              <AiFillHeart className="text-red-600 text-xl mr-2" />
              <h2 className="text-white text-[14px] font-semibold whitespace-nowrap">
                Healthy Heart
              </h2>
            </div>
            <div className="bg-[#1294de] mt-64 ml-4 absolute z-50 flex items-center justify-center rounded-lg p-2 w-40">
              <GiLeg className="text-yellow-600 text-xl mr-2" />
              <h2 className="text-white text-[14px] font-semibold whitespace-nowrap">
                Healthy Leg
              </h2>
            </div>
            <img src="/image1.svg" alt="Descriptive Alt Text" className="" />
          </div>
        </div>
        <div className="div2 w-[40%]  flex flex-col my-2">
          <div className="bg-gray-50 rounded-lg px-4 py-6 w-48 flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <FaLungsVirus className="text-[#F4C2C2] text-2xl" />
              <h2 className="text-lg font-semibold text-[#0f0950]">Lungs</h2>
            </div>
            <p className="text-sm text-gray-500 pt-2">2025-05-29</p>
            <div className="w-full bg-gray-300 rounded-full h-1.5 overflow-hidden">
              <div
                className="h-1.5 rounded-full transition-all duration-500 pt-2"
                style={{ width: `${70}%`, backgroundColor: "#800000" }} // maroon color
              ></div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg mt-4 px-4 py-6 w-48 flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <GiFrontTeeth className="text-[#F4C2C2] text-2xl" />
              <h2 className="text-lg font-semibold text-[#0f0950]">Teeth</h2>
            </div>
            <p className="text-sm text-gray-500 pt-2">2025-05-29</p>
            <div className="w-full bg-gray-300 rounded-full h-1.5 overflow-hidden">
              <div
                className="h-1.5 rounded-full transition-all duration-500 pt-2"
                style={{ width: `${70}%`, backgroundColor: "#22c55e" }} // maroon color
              ></div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg mt-4 px-4 py-6 w-48 flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <LuBone className="text-[#258ebf] text-2xl" />
              <h2 className="text-lg font-semibold text-[#0f0950]">Bone</h2>
            </div>
            <p className="text-sm text-gray-500 pt-2">2025-05-29</p>
            <div className="w-full bg-gray-300 rounded-full h-1.5 overflow-hidden">
              <div
                className="h-1.5 rounded-full transition-all duration-500 pt-2"
                style={{ width: `${70}%`, backgroundColor: "#f97316" }} // maroon color
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardOverview;
