import React from "react";
import {
  Home,
  Clock,
  Calendar,
  ClipboardList,
  BarChart,
  FlaskConical,
  MessageCircle,
  LifeBuoy,
  Settings,
} from "lucide-react";

const links = [
  { icon: Home, label: "Dashboard" },
  { icon: Clock, label: "History" },
  { icon: Calendar, label: "Calendar" },
  { icon: ClipboardList, label: "Appointments" },
  { icon: BarChart, label: "Statistics" },
  { icon: FlaskConical, label: "Tests" },
  { icon: MessageCircle, label: "Chat" },
  { icon: LifeBuoy, label: "Support" },
  { icon: Settings, label: "Setting" },
];

const Sidebar = () => {
  return (
    <aside className="w-full sm:w-64 h-auto sm:h-screen bg-white shadow-md border-r border-gray-200 p-4 sticky top-0">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Healthcare.</h2>
      <h2 className="text-gray-500 mb-4 text-sm uppercase font-semibold">
        General
      </h2>
      <ul className="space-y-2">
        {links.map(({ icon: Icon, label }) => {
          const isActive = label === "Dashboard";
          return (
            <li
              key={label}
              className={`flex items-center gap-3 p-2 rounded-md transition ${
                isActive
                  ? "bg-[#0f0950]/10 text-[#0f0950] font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon
                size={20}
                className={isActive ? "text-[#0f0950]" : "text-gray-600"}
              />
              <span className="text-sm">{label}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
