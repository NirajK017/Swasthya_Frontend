import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  UserPlus, 
  Users, 
  FileText, 
  FilePlus, 
  Home, 
  Building2, 
  FlaskConical
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { path: '/', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/appointments', icon: <Calendar size={20} />, label: 'Appointments' },
    { path: '/add-doctor', icon: <UserPlus size={20} />, label: 'Add Doctor' },
    { path: '/doctors', icon: <Users size={20} />, label: 'Doctors List' },
    { path: '/health-records', icon: <FileText size={20} />, label: 'Health Records' },
    { path: '/add-health-record', icon: <FilePlus size={20} />, label: 'Add Health Record' },
    { path: '/add-lab-report', icon: <FlaskConical size={20} />, label: 'Add Lab Report' },
    { path: '/departments', icon: <Building2 size={20} />, label: 'Departments' },
  ];

  return (
    <div className="w-64 bg-[#2563EB] min-h-screen text-white p-4">
      <div className="flex items-center gap-2 mb-8">
      <div className="text-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-8 h-8"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
        <div className="flex flex-col">
            <span className="text-2xl font-bold">Swasthya</span>
            <span className="text-sm text-blue-200">Admin Panel</span>
          </div>
      </div>
      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive ? 'bg-white/10' : 'hover:bg-white/5'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;