import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar.jsx';
import Header from './components/Layout/Header.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import AppointmentRecord from './components/Records/AppointmentRecord.jsx';
import AddDoctor from './components/Doctors/AddDoctor.jsx';
import DoctorList from './components/Doctors/DoctorList.jsx';
import HealthRecords from './components/Records/HealthRecords.jsx';
import AddHealthRecord from './components/Records/AddHealthRecord.jsx';
import AddLabReport from './components/Records/AddLabReport.jsx';
import DepartmentList from './components/Departments/DepartmentList.jsx';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/appointments" element={<AppointmentRecord />} />
              <Route path="/add-doctor" element={<AddDoctor />} />
              <Route path="/doctors" element={<DoctorList />} />
              <Route path="/health-records" element={<HealthRecords />} />
              <Route path="/add-health-record" element={<AddHealthRecord />} />
              <Route path="/add-lab-report" element={<AddLabReport />} />
              <Route path="/departments" element={<DepartmentList />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;