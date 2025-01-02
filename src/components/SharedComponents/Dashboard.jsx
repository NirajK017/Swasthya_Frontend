import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user's login state
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in (example using localStorage)
    const authToken = localStorage.getItem("authToken");
    setIsLoggedIn(!!authToken);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Clear user session or authentication token
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/signup"); // Redirect to the sign-in page
  };

  return (
    <header className="sticky top-0 z-50 bg-blue-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-14 w-14 rounded-full overflow-hidden flex items-center justify-center">
            <img src={logo} alt="Swasthya Logo" />
          </div>
          <h1 className="text-2xl font-bold ml-4 text-blue-900">Swasthya</h1>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-6 items-center">
          <NavLink
            to="/"
            className="relative group px-4 py-2 text-blue-900 hover:text-blue-600"
            activeClassName="font-bold"
          >
            Home
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </NavLink>
          <NavLink
            to="/nearbyhospitals"
            className="relative group px-4 py-2 text-blue-900 hover:text-blue-600"
            activeClassName="font-bold"
          >
            Nearby Hospitals
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </NavLink>
          <NavLink
            to="/Started"
            className="relative group px-4 py-2 text-blue-900 hover:text-blue-600"
            activeClassName="font-bold"
          >
            Get Started
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </NavLink>
          <NavLink
            to="/faq"
            className="relative group px-4 py-2 text-blue-900 hover:text-blue-600"
            activeClassName="font-bold"
          >
            FAQ
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </NavLink>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-20 h-10 flex justify-center items-center bg-red-700 text-white rounded-md hover:bg-red-800"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/signup"
              className="w-20 h-10 flex justify-center items-center bg-blue-700 text-white rounded-md hover:bg-blue-800"
            >
              Signin
            </NavLink>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-900"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="space-y-4 px-6 py-4">
            <li>
              <NavLink
                to="/health-records"
                className="block text-blue-900 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Health Records
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appointments"
                className="block text-blue-900 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Appointments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nearbyhospitals"
                className="block text-blue-900 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Nearby Hospitals
              </NavLink>
            </li>
            <li>
              {isLoggedIn ? (
                <button
                  className="block w-full text-left text-blue-900 hover:text-blue-600"
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/signup"
                  className="block text-blue-900 hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  Signin
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Dashboard;
