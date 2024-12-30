import React, { useState, useEffect } from "react";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null); // State to store the selected doctor's details
  const [showDetails, setShowDetails] = useState(false); // State to toggle the details view

  // Fetch the list of doctors from localStorage when the component mounts
  useEffect(() => {
    const storedDoctors = JSON.parse(localStorage.getItem('doctors')) || [];
    setDoctors(storedDoctors);
  }, []);

  // Handle the checkbox toggle for availability
  const handleAvailabilityToggle = (id) => {
    // Update the availability status of the clicked doctor
    const updatedDoctors = doctors.map((doctor) =>
      doctor.id === id
        ? { ...doctor, available: !doctor.available } // Toggle the availability
        : doctor
    );

    // Save the updated doctors list to localStorage
    localStorage.setItem('doctors', JSON.stringify(updatedDoctors));
    setDoctors(updatedDoctors); // Update the state with the new list
  };

  // Show the details of the selected doctor
  const handleViewDetails = (doctor) => {
    setSelectedDoctor(doctor);
    setShowDetails(true); // Show the details modal
  };

  // Close the details modal
  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedDoctor(null);
  };

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">All Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-lg shadow p-4">
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
                  checked={doctor.available || false} // Default to false if no available status
                  onChange={() => handleAvailabilityToggle(doctor.id)} // Handle toggle
                  className="rounded"
                />
                <span
                  className={doctor.available ? "text-green-600" : "text-red-600"}
                >
                  {doctor.available ? "Available" : "Not Available"}
                </span>
              </div>
              <button
                className="mt-4 text-blue-600"
                onClick={() => handleViewDetails(doctor)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Doctor Details Modal */}
      {showDetails && selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            {/* Image on Top */}
            <div className="flex justify-center mb-4">
              {selectedDoctor.image ? (
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="w-32 h-32 rounded-full object-cover"
                />
              ) : (
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                  DR
                </div>
              )}
            </div>

            {/* Doctor Details Below the Image */}
            <h2 className="text-2xl font-semibold mb-4">{selectedDoctor.name}</h2>
            <p><strong>Email:</strong> {selectedDoctor.email}</p>
            <p><strong>Phone:</strong> {selectedDoctor.phone}</p>
            <p><strong>Specialty:</strong> {selectedDoctor.specialty}</p>
            <p><strong>Experience:</strong> {selectedDoctor.experience}</p>
            <p><strong>Consultation Fees:</strong> ${selectedDoctor.fees}</p>
            <p><strong>About:</strong> {selectedDoctor.about}</p>

            <div className="mt-6 text-center">
              <button
                className="bg-gray-600 text-white py-2 px-4 rounded"
                onClick={handleCloseDetails}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorsList;
