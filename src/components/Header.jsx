import React from "react";
import { Bell } from "lucide-react";
import { IoMdNotifications } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full  bg-white shadow-sm px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Left: Logo */}

      {/* Center: Search */}
      <div className=" sm:w-1/2 w-[80%] space-x-2 flex justify-between">
        <div className="relative w-full ">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <FiSearch className="w-5 h-5" />
          </span>
          <input
            type="search"
            aria-label="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-100 shadow-sm rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
        </div>
        <div className="pt-2">
          <button
            className="relative text-[#3911bd]"
            aria-label="Notifications"
          >
            <IoMdNotifications className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Right: Notifications + User */}
      <div className="flex justify-end mx-6 w-[20%] ">
        <div className="relative flex justify-end space-x-4">
          <div>
            <img
              src="https://i.pravatar.cc/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-lg border border-gray-300"
            />
          </div>
          <div className="bg-blue-800 w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-white text-xl font-bold">
            +
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
