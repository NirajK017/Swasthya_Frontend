import React, { useState } from 'react';

const HealthRecords = () => {
  const [activeTab, setActiveTab] = useState('health');
  
  const healthRecords = [
    { patient: 'John Doe', date: '2023-12-15', doctor: 'Dr. Smith', diagnosis: 'Common Cold' },
    { patient: 'Jane Smith', date: '2023-12-14', doctor: 'Dr. Johnson', diagnosis: 'Sprained Ankle' },
    { patient: 'Bob Brown', date: '2023-12-13', doctor: 'Dr. Williams', diagnosis: 'Allergic Reaction' }
  ];

  const labReports = [
    { patient: 'John Doe', date: '2023-12-10', test: 'Blood Test', result: 'Normal' },
    { patient: 'Jane Smith', date: '2023-12-11', test: 'X-Ray', result: 'Fracture detected' },
    { patient: 'Bob Brown', date: '2023-12-12', test: 'Allergy Panel', result: 'Pollen allergy' }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Health Records</h2>
      <div className="mb-6">
        <div className="border-b">
          <button
            className={`px-4 py-2 ${activeTab === 'health' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('health')}
          >
            Health Records
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'lab' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('lab')}
          >
            Lab Reports
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {activeTab === 'health' ? 'Doctor' : 'Test'}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {activeTab === 'health' ? 'Diagnosis' : 'Result'}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {(activeTab === 'health' ? healthRecords : labReports).map((record, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{record.patient}</td>
                <td className="px-6 py-4 whitespace-nowrap">{record.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {activeTab === 'health' ? record.doctor : record.test}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {activeTab === 'health' ? record.diagnosis : record.result}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-800">
                    View PDF
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

export default HealthRecords;