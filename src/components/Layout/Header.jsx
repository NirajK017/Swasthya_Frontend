import React from 'react';
import { LogOut } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white border-b">
      <div className="text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded">
        Admin
      </div>
      <button
        onClick={() => {/* Handle logout */}}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
      >
        <span>Logout</span>
        <LogOut size={18} />
      </button>
    </div>
  );
};

export default Header;