import React from "react";

const HospitalCard = ({ name, address, phone }) => {
  return (
    <div className="border rounded shadow-md p-4">
      <div className="mb-2">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{address}</p>
      </div>
      <div>
        <p className="mb-2">Phone: {phone}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Get Directions
        </button>
      </div>
    </div>
  );
};

export default HospitalCard;
