import React, { useEffect, useState } from "react";
import MapPlaceholder from "../../components/SharedComponents/MapPlaceholder"; // Adjust the path as per your file structure
import HospitalCard from "../../components/SharedComponents/HospitalsCard"; // Adjust the path as per your file structure
import Dashboard from "../../components/SharedComponents/Dashboard";
import Footer from "../../components/SharedComponents/Footer";

const NearbyHospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const GEOAPIFY_API_KEY = "45ca7638dadb40cf98135d9df9296a5d";

  useEffect(() => {
    const fetchNearbyHospitals = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              setUserLocation([latitude, longitude]);
              // Fetch nearby hospitals from Geoapify Places API
              const response = await fetch(
                `https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${longitude},${latitude},5000&limit=10&apiKey=${GEOAPIFY_API_KEY}`
              );
              if (!response.ok) {
                throw new Error("Failed to fetch hospital data");
              }
              const data = await response.json();
              // Transform API response into the desired format
              const hospitalList = data.features.map((feature) => ({
                name: feature.properties.name || "Unknown Hospital",
                address:
                  feature.properties.address_line2 || "Address not available",
                phone: feature.properties.phone || "Phone not available",
                location: [
                  feature.geometry.coordinates[1], // Latitude
                  feature.geometry.coordinates[0], // Longitude
                ],
              }));
              setHospitals(hospitalList);
              setLoading(false);
            },
            (err) => {
              setError(
                "Unable to retrieve location. Please enable location services."
              );
              setLoading(false);
              console.log("error: ", err);
            }
          );
        } else {
          setError("Geolocation is not supported by your browser.");
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchNearbyHospitals();
  }, []);

  return (
    <div>
      <Dashboard />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Nearby Hospitals</h1>

          {error && <p className="text-red-500 mb-4">{error}</p>}
          {loading ? (
            <p>Loading nearby hospitals...</p>
          ) : (
            <>
              <div className="mb-8">
                <MapPlaceholder
                  userLocation={userLocation}
                  hospitals={hospitals} // Pass the hospitals to MapPlaceholder
                />
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
            </>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default NearbyHospitals;
