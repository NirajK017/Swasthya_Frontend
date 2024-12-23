import React, { useState } from 'react';
import { format } from 'date-fns';

const AddHealthRecord = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    doctorName: '',
    date: format(new Date(), 'yyyy-MM-dd'),
    diagnosis: '',
    notes: '',
    file: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add Health Record</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={formData.patientName}
            onChange={(e) => setFormData({...formData, patientName: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Doctor Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={formData.doctorName}
            onChange={(e) => setFormData({...formData, doctorName: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input
            type="date"
            className="w-full p-2 border rounded-md"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Diagnosis</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={formData.diagnosis}
            onChange={(e) => setFormData({...formData, diagnosis: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
          <textarea
            className="w-full p-2 border rounded-md"
            rows="4"
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload PDF</label>
          <input
            type="file"
            accept=".pdf"
            className="w-full p-2 border rounded-md"
            onChange={(e) => setFormData({...formData, file: e.target.files[0]})}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Add Health Record
        </button>
      </form>
    </div>
  );
};

export default AddHealthRecord;