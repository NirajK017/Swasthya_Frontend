import React, { useState } from 'react';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([
    {
      patient: 'John Doe',
      date: '2023-12-24',
      time: '10:00 AM',
      doctor: 'Dr. Smith',
      status: 'Confirmed',
      paymentMode: 'Online',
      paymentStatus: 'Paid',
    },
    {
      patient: 'Jane Doe',
      date: '2023-12-25',
      time: '02:00 PM',
      doctor: 'Dr. Lee',
      status: 'Confirmed',
      paymentMode: 'Cash',
      paymentStatus: 'Unpaid',
    },
    // Add more appointments...
  ]);

  const handleStatusChange = (index, newStatus) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index].status = newStatus;
    setAppointments(updatedAppointments);
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Current Appointments</h2>
      <div className="bg-white rounded-lg shadow-sm max-h-[400px] overflow-y-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              {['Patient', 'Date', 'Time', 'Doctor', 'Status', 'Payment Mode', 'Payment Status', 'Action'].map((header) => (
                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.patient}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.doctor}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      appointment.status === 'Confirmed'
                        ? 'bg-green-100 text-green-800'
                        : appointment.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {appointment.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      appointment.paymentMode === 'Online'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {appointment.paymentMode}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      appointment.paymentStatus === 'Paid'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {appointment.paymentStatus}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={appointment.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                    className="text-blue-600 hover:text-blue-800 bg-transparent border-none cursor-pointer"
                  >
                    <option value="Confirmed">Confirmed</option>
                    <option value="Pending">Pending</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentList;
