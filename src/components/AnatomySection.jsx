import React from "react";
import { MdMedicalServices } from "react-icons/md";
import { FaTeeth } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiLoveInjection } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
const AnatomySection = () => {
  return (
    <>
      <div className="flex justify-between space-x-3.5 w-full my-6">
        <div className=" w-[40%] p-4 bg-[#0f0950] text-white rounded-4xl shadow-lg  space-y-2">
          {/* Title and Icon */}
          <div className="flex items-center ">
            <h2 className="text-[16px] font-semibold flex ">
              Dentist{" "}
              <span>
                {" "}
                <FaTeeth className="text-2xl ml-22" />
              </span>
            </h2>
          </div>

          {/* Time */}
          <div className="text-sm">
            <span className="font-[14px]"></span> 9:00 -11:00
          </div>

          {/* Doctor Name */}
          <div className="text-sm">
            <span className="font-medium"></span> Dr. Priya Sharma
          </div>
        </div>
        <div className=" w-[60%] p-4 text-black bg-[#d3d1e4]  rounded-4xl shadow-lg  space-y-2">
          {/* Title and Icon */}
          <div className="flex items-center ">
            <h2 className="text-[16px] font-semibold flex ">
              Physiotherapy Appointment{" "}
              <span>
                {" "}
                <FaHandHoldingHeart className="text-2xl mx-2" />
              </span>
            </h2>
          </div>

          {/* Time */}
          <div className="text-sm">
            <span className="font-[14px]"></span> 9:00 -11:00
          </div>

          {/* Doctor Name */}
          <div className="text-sm">
            <span className="font-medium"></span> Dr. Priya Sharma
          </div>
        </div>
      </div>
      <div className="upcoming text-[#0f0950] font-semibold text-lg">
        The Upcoming Schedule
      </div>
      <div className="upcoming text-[#9c9aba] mt-2 text-lg">On Thursday</div>
      {/* health chekup */}
      <div className="flex justify-between space-x-3.5 mt-2">
        <div className=" w-[60%] p-4 text-black bg-[#d3d1e4]  rounded-4xl shadow-lg  space-y-2">
          {/* Title and Icon */}
          <div className="flex items-center ">
            <h2 className="text-[16px] font-semibold flex ">
              Health Check Up Complete{" "}
              <span>
                {" "}
                <GiLoveInjection className="text-2xl mx-2" />
              </span>
            </h2>
          </div>

          {/* Time */}
          <div className="text-sm">
            <span className="font-[14px]"></span>11:00AM
          </div>
        </div>
        <div className=" w-[40%] p-4 text-black bg-[#d3d1e4]  rounded-4xl shadow-lg  space-y-2">
          {/* Title and Icon */}
          <div className="flex items-center ">
            <h2 className="text-[16px] font-semibold flex ">
              Ophthalmologist{" "}
              <span>
                {" "}
                <IoEye className="text-2xl mx-2" />
              </span>
            </h2>
          </div>

          {/* Time */}
          <div className="text-sm">
            <span className="font-[14px]"></span> 11:00AM
          </div>

          {/* Doctor Name */}
        </div>
      </div>
      <div className="upcoming text-[#9c9aba] mt-2 text-lg">On Saturday</div>
      {/* health chekup */}
      <div className="flex justify-between space-x-3.5 mt-2">
        <div className=" w-[60%] p-4 text-black bg-[#d3d1e4]  rounded-4xl shadow-lg  space-y-2">
          {/* Title and Icon */}
          <div className="flex items-center ">
            <h2 className="text-[16px] font-semibold flex ">
              Cardiologist{" "}
              <span>
                {" "}
                <FaHeart className="text-2xl mx-2 text-red-700" />
              </span>
            </h2>
          </div>

          {/* Time */}
          <div className="text-sm">
            <span className="font-[14px]"></span>11:00AM
          </div>
        </div>
        <div className=" w-[40%] p-4 text-black bg-[#d3d1e4]  rounded-4xl shadow-lg  space-y-2">
          {/* Title and Icon */}
          <div className="flex items-center ">
            <h2 className="text-[16px] font-semibold flex ">
              Neurologist{" "}
              <span>
                {" "}
                <FaUserDoctor className="text-2xl mx-2" />
              </span>
            </h2>
          </div>

          {/* Time */}
          <div className="text-sm">
            <span className="font-[14px]"></span> 11:00AM
          </div>

          {/* Doctor Name */}
        </div>
      </div>
    </>
  );
};

export default AnatomySection;
