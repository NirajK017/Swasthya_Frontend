import React, { useState, useEffect } from 'react';

const AppointmentRecord = () => {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('All Doctors');

  // Add demo records for appointments
  useEffect(() => {
    const demoAppointments = [
      {
        _id: '1',
        patientName: 'John Doe',
        age: 29,
        dateTime: '2024-12-24T10:00:00Z',
        doctor: 'Dr. Richard James',
        fees: 100,
      },
      {
        _id: '2',
        patientName: 'Jane Smith',
        age: 34,
        dateTime: '2024-12-25T14:00:00Z',
        doctor: 'Dr. Emily Larson',
        fees: 150,
      },
      {
        _id: '3',
        patientName: 'Michael Johnson',
        age: 41,
        dateTime: '2024-12-26T16:30:00Z',
        doctor: 'Dr. Sarah Patel',
        fees: 200,
      },
      {
        _id: '4',
        patientName: 'Emma Brown',
        age: 25,
        dateTime: '2024-12-27T09:00:00Z',
        doctor: 'Dr. Richard James',
        fees: 120,
      },
    ];
    setAppointments(demoAppointments);
  }, []);

  // Filter appointments based on search term and selected doctor
  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearchTerm =
      appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDoctor =
      selectedDoctor === 'All Doctors' || appointment.doctor === selectedDoctor;
    return matchesSearchTerm && matchesDoctor;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">All Appointments</h1>

      <div className="flex gap-4 mb-6">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search patients..."
          className=" w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Doctor filter dropdown */}
        <select
          className="p-2 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
        >
          <option>All Doctors</option>
          <option>Dr. Richard James</option>
          <option>Dr. Emily Larson</option>
          <option>Dr. Sarah Patel</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Doctor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fees
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAppointments.map((appointment, index) => (
              <tr key={appointment._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {appointment.patientName}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {appointment.age}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(appointment.dateTime).toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {appointment.doctor}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${appointment.fees}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-900">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentRecord;
