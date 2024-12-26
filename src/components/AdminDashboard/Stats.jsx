import React from 'react';
import { Calendar, Users, DollarSign } from 'lucide-react';

const StatCard = ({ icon, title, value, change }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex items-center gap-4">
      <div className="w-8 h-8">{icon}</div> {/* Ensured the icon is styled properly */}
      <div>
        <h3 className="text-4xl font-semibold">{value}</h3>
        <p className="text-gray-500">{title}</p>
        <p className={`text-sm ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </p>
      </div>
    </div>
  </div>
);

const Stats = () => {
  const stats = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-500" />,
      title: 'Total Appointments',
      value: '245',
      change: '+20% from last month',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Total Doctors',
      value: '35',
      change: '+2 new this month',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-500" />,
      title: 'Revenue',
      value: '$24,560',
      change: '+15% from last month',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default Stats;
