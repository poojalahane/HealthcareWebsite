import React from "react";

const appointments = [
  { time: "09:00 AM", patient: "John Doe", type: "Dental Checkup" },
  { time: "10:30 AM", patient: "Jane Smith", type: "General Consultation" },
  { time: "12:00 PM", patient: "Bob Johnson", type: "Eye Exam" },
];

const UpcomingSchedule = () => {
  return (
    <div className="card">
      <h2 className="card-title mb">Upcoming Schedule</h2>
      <ul className="list">
        {appointments.map(({ time, patient, type }) => (
          <li key={time} className="list-item">
            <div>
              <p className="item-title">{patient}</p>
              <p className="item-subtitle">{type}</p>
            </div>
            <span className="item-time">{time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingSchedule;
