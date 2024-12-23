import React from 'react';
import Stats from './Stats';
import AppointmentList from './AppointmentList';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <Stats />
      <AppointmentList />
    </div>
  );
};

export default Dashboard;
