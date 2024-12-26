import React from "react";
import MapPlaceholder from "../../components/SharedComponents/MapPlaceholder"; // Adjust the path as per your file structure
import HospitalCard from "../../components/SharedComponents/HospitalsCard"; // Adjust the path as per your file structure
import Dashboard from "../../components/SharedComponents/Dashboard";
import Footer from "../../components/SharedComponents/Footer";

// Mock data for hospitals
const hospitals = [
  {
    name: "St. Mary's Hospital",
    address: "123 Main St, New York, NY",
    phone: "(123) 456-7890",
  },
  {
    name: "General Hospital",
    address: "456 Park Ave, New York, NY",
    phone: "(098) 765-4321",
  },
  {
    name: "City Medical Center",
    address: "789 Broadway, New York, NY",
    phone: "(111) 222-3333",
  },
  {
    name: "Community Health Clinic",
    address: "321 Oak St, New York, NY",
    phone: "(444) 555-6666",
  },
  {
    name: "Riverside Hospital",
    address: "159 River Rd, New York, NY",
    phone: "(777) 888-9999",
  },
  {
    name: "Metropolitan Medical",
    address: "753 Metro Ave, New York, NY",
    phone: "(222) 333-4444",
  },
];

const NearbyHospitals = () => {
  return (
    <div>
      <Dashboard />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Nearby Hospitals</h1>

          <div className="mb-8">
            <MapPlaceholder />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitals.map((hospital, index) => (
              <HospitalCard
                key={index}
                name={hospital.name}
                address={hospital.address}
                phone={hospital.phone}
              />
            ))}
          </div>
        </main>
        {/* Add your Footer component or placeholder here */}
      </div>
      <Footer/>
    </div>
  );
};

export default NearbyHospitals;
