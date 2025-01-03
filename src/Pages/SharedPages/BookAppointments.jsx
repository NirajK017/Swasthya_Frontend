import React, { useState } from "react";
import Footer from "../../components/SharedComponents/Footer";
import Dashboard from "../../components/SharedComponents/Dashboard";

const BookAppointment = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [doctors, setDoctors] = useState([]);

  // Sample doctor data based on departments
  const departmentDoctors = {
    Cardiology: ["Dr. John Doe", "Dr. Jane Smith"],
    Neurology: ["Dr. Alice Brown", "Dr. Bob White"],
    Pediatrics: ["Dr. Clara Johnson", "Dr. Emily Davis"],
  };

  const handleDepartmentChange = (e) => {
    const department = e.target.value;
    setSelectedDepartment(department);
    setDoctors(departmentDoctors[department] || []);
    setSelectedDoctor(""); // Reset doctor selection
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked successfully!");
  };

  return (
    <>
    <Dashboard/>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-6">
            Book an Appointment
          </h1>
          <form onSubmit={handleFormSubmit}>
            {/* Patient Information */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">
                Patient Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 rounded-md p-2"
                  required
                />
                <input
                  type="number"
                  placeholder="Age"
                  className="border border-gray-300 rounded-md p-2"
                  required
                />
                <select
                  className="border border-gray-300 rounded-md p-2"
                  required
                >
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="border border-gray-300 rounded-md p-2"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address (optional)"
                  className="border border-gray-300 rounded-md p-2"
                />
                <textarea
                  placeholder="Address (optional)"
                  className="border border-gray-300 rounded-md p-2"
                  rows="3"
                />
              </div>
            </div>

            {/* Appointment Details */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">
                Appointment Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select
                  className="border border-gray-300 rounded-md p-2"
                  value={selectedDepartment}
                  onChange={handleDepartmentChange}
                  required
                >
                  <option value="">Select Department</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Pediatrics">Pediatrics</option>
                </select>
                <select
                  className="border border-gray-300 rounded-md p-2"
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                  required
                >
                  <option value="">Select Doctor</option>
                  {doctors.map((doctor, index) => (
                    <option key={index} value={doctor}>
                      {doctor}
                    </option>
                  ))}
                </select>
                <input
                  type="date"
                  className="border border-gray-300 rounded-md p-2"
                  required
                />
                <select
                  className="border border-gray-300 rounded-md p-2"
                  required
                >
                  <option value="">Select Time Slot</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-4">
              <textarea
                placeholder="Reason for Appointment (optional)"
                className="border border-gray-300 rounded-md p-2 w-full"
                rows="4"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-blue-600"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BookAppointment;
