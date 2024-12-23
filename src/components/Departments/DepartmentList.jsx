import React from 'react';
import DepartmentCard from './DepartmentCard';

const DepartmentList = () => {
  const departments = [
    { title: 'Cardiology', doctors: 5, patients: 120 },
    { title: 'Neurology', doctors: 3, patients: 85 },
    { title: 'Pediatrics', doctors: 4, patients: 150 },
    { title: 'Orthopedics', doctors: 6, patients: 110 }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Departments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept, index) => (
          <DepartmentCard
            key={index}
            title={dept.title}
            doctors={dept.doctors}
            patients={dept.patients}
          />
        ))}
      </div>
    </div>
  );
};

export default DepartmentList;