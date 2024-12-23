import React from 'react';

const DepartmentCard = ({ title, doctors, patients }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">Doctors: {doctors} | Patients: {patients}</p>
      <button className="text-blue-600 hover:text-blue-800">
        View Details
      </button>
    </div>
  );
};

export default DepartmentCard;