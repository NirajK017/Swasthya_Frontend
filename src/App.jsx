import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar.jsx';
import Header from './components/Layout/Header.jsx';
import Dashboard from './components/AdminDashboard/Dashboard.jsx';
import AppointmentRecord from './components/Records/AppointmentRecord.jsx';
import AddDoctor from './components/Doctors/AddDoctor.jsx';
import DoctorList from './components/Doctors/DoctorList.jsx';
import HealthRecords from './components/Records/HealthRecords.jsx';
import AddHealthRecord from './components/Records/AddHealthRecord.jsx';
import AddLabReport from './components/Records/AddLabReport.jsx';
import DepartmentList from './components/Departments/DepartmentList.jsx';
import Indexpage from '../src/Pages/SharedPages/indexpage.jsx';
import ErrorPage from './Pages/SharedPages/errorpage.jsx';
import NearbyHospitals from './Pages/SharedPages/NearbyHospitals.jsx';
import Signup from "../src/components/Login/Signup.jsx"

function Layout({ children }) {
  const location = useLocation();

  // Exclude Header and Sidebar for specific routes
  const excludedRoutes = ['/', '/nearbyhospitals','/signup'];
  const isExcluded = excludedRoutes.includes(location.pathname);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {!isExcluded && <Sidebar />}
      <div className="flex-1">
        {!isExcluded && <Header />}
        <main>{children}</main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Indexpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/nearbyhospitals" element={<NearbyHospitals />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments" element={<AppointmentRecord />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/health-records" element={<HealthRecords />} />
          <Route path="/add-health-record" element={<AddHealthRecord />} />
          <Route path="/add-lab-report" element={<AddLabReport />} />
          <Route path="/departments" element={<DepartmentList />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
