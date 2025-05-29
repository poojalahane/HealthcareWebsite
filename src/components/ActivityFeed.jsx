import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", activity: 40 },
  { day: "Tue", activity: 80 },
  { day: "Wed", activity: 65 },
  { day: "Thu", activity: 90 },
  { day: "Fri", activity: 50 },
  { day: "Sat", activity: 30 },
  { day: "Sun", activity: 70 },
];
const ActivityFeed = () => {
  return (
    <div className="flex flex-col">
      <p className="card-title flex justify-end text-gray-400 mx-6">Details</p>
      <div className="flex justify-between mx-4 mt-3">
        <h2 className="card-title text-[#0f0950] font-bold">Activity</h2>
        <h2 className="card-title text-gray-300 ">
          3 Appointment on this week
        </h2>
      </div>
       <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Activity</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barSize={35}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="activity" fill="#0f0950" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default ActivityFeed;
