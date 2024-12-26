import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 bg-opacity-95 text-white py-8 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl font-semibold">Swasthya Hospital</h2>
          <p className="text-sm mt-2">Providing Quality Healthcare Services</p>
        </div>
        <div className="flex space-x-6">
          <a href="#about" className="hover:text-blue-300 transition duration-200">
            About Us
          </a>
          <a href="#services" className="hover:text-blue-300 transition duration-200">
            Services
          </a>
          <a href="#contact" className="hover:text-blue-300 transition duration-200">
            Contact
          </a>
          <a href="#privacy" className="hover:text-blue-300 transition duration-200">
            Privacy Policy
          </a>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm">© 2024 Swasthya Hospital. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
