import React from "react";
import { useNavigate } from "react-router-dom";

const HospitalCard = ({ name, address, phone }) => {
  const navigate = useNavigate();

  const navigateToAppointment = () => {
    navigate("/book-appointment");
  };

  return (
    <div className="border rounded shadow-md p-4">
      <div className="mb-2">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{address}</p>
      </div>
      <div>
        <p className="mb-2">Phone: {phone}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={navigateToAppointment}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default HospitalCard;
