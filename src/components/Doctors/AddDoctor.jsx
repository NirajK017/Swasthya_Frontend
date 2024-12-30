import React, { useState } from 'react';

const AddDoctor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    degree: '',
    experience: '',
    fees: '',
    about: '',
    image: null, // Store the image file here
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.specialty) {
      setError('Please fill all required fields.');
      return;

      // Call the function passed as prop to update the department data
      addDoctorToDepartment(formData.department, formData.name);

      // Clear form data
      setFormData({ name: '', department: '' });
    }

    

    // Create doctor object from form data
    const newDoctor = {
      id: new Date().toISOString(), // unique id
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      specialty: formData.specialty,
      degree: formData.degree,
      experience: formData.experience,
      fees: formData.fees,
      about: formData.about,
      image: formData.image ? URL.createObjectURL(formData.image) : '', // Handle image preview
    };

    // Get current doctors from localStorage, or create an empty array if none exist
    const doctors = JSON.parse(localStorage.getItem('doctors')) || [];
    doctors.push(newDoctor);
    
    // Save updated doctors array to localStorage
    localStorage.setItem('doctors', JSON.stringify(doctors));

    setSuccess('Doctor added successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      specialty: '',
      degree: '',
      experience: '',
      fees: '',
      about: '',
      image: null,
    });
    setError('');
  };

  // Handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Add Doctor</h1>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      {success && <p className="text-green-600 text-center mb-4">{success}</p>}

      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image upload section */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
              {formData.image ? (
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="Preview"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-gray-400 text-xl">DR</span>
              )}
            </div>
          </div>

          {/* Image upload input */}
          <div className="flex flex-col mb-6">
            <label className="text-sm font-medium text-gray-700 mb-2">Upload Doctor's Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="p-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Doctor's Name</label>
              <input
                type="text"
                className="p-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            {/* Specialty */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Specialty</label>
              <select
                className="p-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.specialty}
                onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                required
              >
                <option value="">Select specialty</option>
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatrician">Pediatrician</option>
              </select>
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                className="p-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            {/* Doctor Email */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Doctor's Email</label>
              <input
                type="email"
                className="p-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            {/* Fees */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Consultation Fees</label>
              <input
                type="number"
                className="p-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.fees}
                onChange={(e) => setFormData({ ...formData, fees: e.target.value })}
              />
            </div>

            {/* Experience */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Experience</label>
              <select
                className="p-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              >
                <option value="">Select years of experience</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>
          </div>

          {/* About Doctor */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2">About Doctor</label>
            <textarea
              className="p-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows="4"
              value={formData.about}
              onChange={(e) => setFormData({ ...formData, about: e.target.value })}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors mt-6"
          >
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
