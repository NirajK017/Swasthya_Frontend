import React, { useState, useEffect } from "react";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);

  // Simulate fetching doctors with demo data
  useEffect(() => {
    const demoDoctors = [
      {
        _id: "1",
        name: "Dr. Richard James",
        specialty: "Cardiologist",
        available: true,
        image: "https://via.placeholder.com/150",
      },
      {
        _id: "2",
        name: "Dr. Emily Larson",
        specialty: "Neurologist",
        available: false,
        image: "https://via.placeholder.com/150",
      },
      {
        _id: "3",
        name: "Dr. Sarah Patel",
        specialty: "Orthopedic Surgeon",
        available: true,
        image: "https://via.placeholder.com/150",
      },
      {
        _id: "4",
        name: "Dr. Michael Johnson",
        specialty: "Pediatrician",
        available: true,
        image: "https://via.placeholder.com/150",
      },
    ];

    // Simulating a delay to mimic an API call
    setTimeout(() => setDoctors(demoDoctors), 100);
  }, []);

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">All Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {doctors.map((doctor) => (
          <div key={doctor._id} className="bg-white rounded-lg shadow p-4">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-4">
                {doctor.image ? (
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    DR
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold">{doctor.name}</h3>
              <p className="text-gray-600 mb-2">{doctor.specialty}</p>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  checked={doctor.available}
                  readOnly
                  className="rounded"
                />
                <span
                  className={
                    doctor.available ? "text-green-600" : "text-red-600"
                  }
                >
                  {doctor.available ? "Available" : "Not Available"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
