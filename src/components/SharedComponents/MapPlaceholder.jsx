import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import io from 'socket.io-client';
import 'leaflet/dist/leaflet.css';

const MapPlaceholder = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null); // Store current location coordinates
  const [hospitals, setHospitals] = useState([]); // Store nearby hospitals
  const socket = useRef();
  const GEOAPIFY_API_KEY = "45ca7638dadb40cf98135d9df9296a5d"; // Geoapify API Key

  useEffect(() => {
    // Initialize the map
    const initialMap = L.map(mapRef.current).setView([51.505, -0.09], 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(initialMap);

    setMap(initialMap);

    // Socket.io setup
    socket.current = io('http://localhost:5000'); // Replace with your socket server URL

    socket.current.on("receive-location", (data) => {
      // Add marker for the received location
      const marker = L.marker([data.latitude, data.longitude]).addTo(map);
      marker.bindPopup(`Location from ${data.id}`).openPopup();
    });

    // Cleanup on component unmount
    return () => {
      initialMap.remove();
      socket.current.disconnect();
    };
  }, []);

  useEffect(() => {
    if (map) {
      // Automatically get and set current location
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude }); // Set the current location state
        socket.current.emit("send-location", { latitude, longitude });

        const marker = L.marker([latitude, longitude]).addTo(map);
        marker.bindPopup('Your Current Location').openPopup();
        map.setView([latitude, longitude], 13); // Zoom into the new marker position

        // Fetch nearby hospitals after setting the user location
        fetchNearbyHospitals(latitude, longitude);
      }, (error) => {
        alert('Unable to retrieve your location: ' + error.message);
      });
    }
  }, [map]); // This will run once the map is initialized

  // Fetch nearby hospitals from Geoapify API
  const fetchNearbyHospitals = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${longitude},${latitude},5000&limit=10&apiKey=${GEOAPIFY_API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch hospital data');
      }

      const data = await response.json();
      const hospitalList = data.features.map((feature) => ({
        name: feature.properties.name || 'Unknown Hospital',
        address: feature.properties.address_line2 || 'Address not available',
        phone: feature.properties.phone || 'Phone not available',
        location: [
          feature.geometry.coordinates[1], // Latitude
          feature.geometry.coordinates[0], // Longitude
        ],
      }));

      setHospitals(hospitalList);

      // Add hospital markers to the map
      hospitalList.forEach((hospital) => {
        const marker = L.marker(hospital.location).addTo(map);
        marker
          .bindPopup(`<strong>${hospital.name}</strong><br>${hospital.address}<br>${hospital.phone}`)
          .openPopup();
      });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div id="map" ref={mapRef} style={{ height: '600px', width: '100%' }}></div>
    </>
  );
};

export default MapPlaceholder;
