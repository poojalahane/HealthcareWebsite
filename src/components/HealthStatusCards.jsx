import React from "react";

const statusData = [
  { label: "Heart Rate", value: "76 bpm", color: "red" },
  { label: "Blood Pressure", value: "120/80", color: "blue" },
  { label: "Oxygen Level", value: "98%", color: "green" },
];

const HealthStatusCards = () => {
  return (
    <div className="status-grid">
      {statusData.map(({ label, value, color }) => (
        <div key={label} className="status-card">
          <p className="status-label">{label}</p>
          <p className={`status-value ${color}`}>{value}</p>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
