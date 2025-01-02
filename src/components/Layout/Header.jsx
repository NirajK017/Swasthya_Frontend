import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or authentication token
    localStorage.removeItem('authToken'); // Example: Adjust based on your authentication setup

    // Redirect to the login page
    navigate('/signup');
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white border-b">
      <div className="text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded">
        Admin
      </div>
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
      >
        <span>Logout</span>
        <LogOut size={18} />
      </button>
    </div>
  );
};

export default Header;
