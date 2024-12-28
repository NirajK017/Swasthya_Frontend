import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Shared/Button"; // Assuming you have a custom Button component
import Dashboard from "../../components/SharedComponents/Dashboard";
import Footer from "../../components/SharedComponents/Footer";
import Doctors from "../../assets/Doctors.png";
import PatientManagement from "../../assets/PatientManagement.png";
import BillingInsurance from "../../assets/BillingInsurance.png";
import InventoryControl from "../../assets/InventoryControl.png";
import NearbyHospitals from "../../assets/NearbyHospitals.png";
import AppointmentScheduling from "../../assets/AppointmentScheduling.png";
import HealthDataSecurity from "../../assets/HealthDataSecurity.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Dashboard />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r shadow-xl from-blue-500 to-teal-400 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              {/* Left Side: Image */}
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src={Doctors}
                  alt="SWASTHYA Illustration"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              {/* Right Side: Text Content */}
              <div className="md:w-1/2 p-2 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4">Welcome to SWASTHYA</h1>
                <p className="text-xl mb-8">
                  Empowering healthcare at your fingertips. Locate hospitals,
                  manage health records, and schedule appointments
                  seamlessly—all in one platform.{" "}
                </p>
                <Button asChild size="lg">
                  <Link to="/get-started">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Patient Management",
                  icon: (
                    <img
                      src={PatientManagement}
                      alt="Patient Management Icon"
                    />
                  ),
                  description:
                    "Efficiently manage patient records and appointments.",
                },
                {
                  title: "Billing & Insurance",
                  icon: (
                    <img
                      src={BillingInsurance}
                      alt="Billing & Insurance Icon"
                    />
                  ),
                  description:
                    "Streamline billing processes and insurance claims.",
                },
                {
                  title: "Inventory Control",
                  icon: (
                    <img src={InventoryControl} alt="Inventory Control Icon" />
                  ),
                  description: "Keep track of medical supplies and equipment.",
                },
                {
                  title: "Nearby Hospitals",
                  icon: (
                    <img src={NearbyHospitals} alt="Nearby Hospitals Icon" />
                  ),
                  description: "Find hospitals near your location easily.",
                },
                {
                  title: "Appointment Scheduling",
                  icon: (
                    <img
                      src={AppointmentScheduling}
                      alt="Appointment Scheduling Icon"
                    />
                  ),
                  description: "Book and manage appointments effortlessly.",
                },
                {
                  title: "Health Data Security",
                  icon: (
                    <img
                      src={HealthDataSecurity}
                      alt="Health Data Security Icon"
                    />
                  ),
                  description: "Your data is secured with advanced encryption.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 flex justify-center flex-col items-center rounded-full"
                >
                  <div className="m-4 w-16">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
                About <span className="text-blue-600">SWASTHYA</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                <span className="block mb-2 text-xl font-medium text-blue-500">
                  Empowering Healthcare
                </span>
                SWASTHYA is a comprehensive hospital management system designed
                to improve efficiency and patient care. Our platform integrates
                various aspects of hospital operations, from patient management
                to inventory control, all in one easy-to-use system.
              </p>
              <Button
                asChild
                variant="outline"
                className="bg-blue-500 text-white hover:bg-blue-600 py-3 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              >
                <Link to="/aboutus">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  step: "Step 1",
                  title: "Search Nearby Hospitals",
                  description:
                    "Use our map feature to locate hospitals nearby.",
                },
                {
                  step: "Step 2",
                  title: "Sign Up or Log In",
                  description:
                    "Create an account to access all features securely.",
                },
                {
                  step: "Step 3",
                  title: "Book & Manage Appointments",
                  description:
                    "Schedule appointments and manage your health records easily.",
                },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-white shadow-md rounded-md">
                  <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="max-w-2xl mx-auto">
              {[
                {
                  quote:
                    "SWASTHYA has revolutionized our hospital's operations. We've seen a significant improvement in efficiency and patient satisfaction.",
                  author: "Dr. Jane Smith, Chief of Medicine",
                },
                {
                  quote:
                    "Finding hospitals nearby and booking appointments has never been easier. Highly recommend SWASTHYA!",
                  author: "Mr. John Doe, Patient",
                },
              ].map((testimonial, index) => (
                <div key={index} className="pt-6">
                  <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-semibold text-right">
                    - {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-gradient-to-r  py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-semibold mb-6 leading-tight">
              Transform Your Healthcare Experience with SWASTHYA
            </h2>
            <p className="text-xl mb-8 max-w-lg mx-auto">
              Take control of your health and join a community dedicated to
              better health management. Start your journey today!
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
              >
                <Link to="/signup">Sign Up Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
