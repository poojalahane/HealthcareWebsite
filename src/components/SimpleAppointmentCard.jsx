export default function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="p-4 bg-white shadow rounded-lg flex items-center justify-between">
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
    </div>
  );
}
