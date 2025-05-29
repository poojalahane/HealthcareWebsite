import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Sample times for each day (you can customize as needed)
const timeslots = {
  Sun: ["10:00", "11:00", "12:00"],
  Mon: ["09:00", "10:00", "11:00"],
  Tue: ["08:00", "09:00", "10:00"],
  Wed: ["07:00", "08:00", "09:00"],
  Thu: ["06:00", "07:00", "08:00"],
  Fri: ["05:00", "06:00", "07:00"],
  Sat: ["04:00", "05:00", "06:00"],
};

function getCurrentWeekDates() {
  const today = new Date();
  const firstDayOfWeek = new Date(today);
  firstDayOfWeek.setDate(today.getDate() - today.getDay()); // Sunday

  return daysOfWeek.map((day, idx) => {
    const date = new Date(firstDayOfWeek);
    date.setDate(firstDayOfWeek.getDate() + idx);
    return {
      day,
      date: date.getDate(),
      fullDate: date.toISOString().slice(0, 10),
      isToday: date.toDateString() === new Date().toDateString(),
      times: timeslots[day] || [],
    };
  });
}

const CalendarView = () => {
  const weekDates = getCurrentWeekDates();

  return (
    <div className=" mx-auto p-4 bg-white rounded-lg shadow-md">
      <div
        className="flex justify-between 
      "
      >
        <div className="">
          {" "}
          <h2 className="font-semibold text-lg text-[#0f0950] mb-4">
            October 2021
          </h2>
        </div>
        <div className="flex   max-w-md ">
          <button
            aria-label="Previous week"
            className="text-gray-700 hover:text-blue-600"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            aria-label="Next week"
            className="text-gray-700 hover:text-blue-600"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-4 text-center">
        {weekDates.map(({ day, date, fullDate, isToday, times }) => (
          <div
            key={fullDate}
            className={`p-3 rounded-md cursor-pointer flex flex-col items-center ${
              isToday
                ? "bg-gray-100  font-bold"
                : "bg-gray-100 text-gray-800 hover:bg-blue-100"
            }`}
          >
            <div className="text-xs">{day}</div>
            <div className="text-lg mb-2 font-bold text-[#0f0950]">{date}</div>

            {/* Timeslots */}
            <div className="flex flex-col space-y-1 w-full">
              {times.map((time) => (
                <span
                  key={time}
                  className="text-[10px]  text-[#0f0950] rounded  py-0.5"
                >
                  {time}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
