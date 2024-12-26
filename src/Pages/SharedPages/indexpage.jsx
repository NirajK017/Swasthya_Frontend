import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Shared/Button"; // Assuming you have a custom Button component
import Dashboard from "../../components/SharedComponents/Dashboard";
import Footer from "../../components/SharedComponents/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Dashboard />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to HealthCare Hub
              </h1>
              <p className="text-xl mb-8">
                Streamlining healthcare management for better patient care
              </p>
              <Button asChild size="lg">
                <Link to="/get-started">Get Started</Link>
              </Button>
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
                  description:
                    "Efficiently manage patient records and appointments",
                },
                {
                  title: "Billing & Insurance",
                  description:
                    "Streamline billing processes and insurance claims",
                },
                {
                  title: "Inventory Control",
                  description: "Keep track of medical supplies and equipment",
                },
              ].map((feature, index) => (
                <div key={index}>
                  <div>
                    <div>{feature.title}</div>
                  </div>
                  <div>
                    <div>{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">About HealthCare Hub</h2>
              <p className="text-xl mb-8">
                HealthCare Hub is a comprehensive hospital management system
                designed to improve efficiency and patient care. Our platform
                integrates various aspects of hospital operations, from patient
                management to inventory control, all in one easy-to-use system.
              </p>
              <Button asChild variant="outline">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="max-w-2xl mx-auto">
              <div>
                <div className="pt-6">
                  <p className="text-lg mb-4">
                    "HealthCare Hub has revolutionized our hospital's
                    operations. We've seen a significant improvement in
                    efficiency and patient satisfaction."
                  </p>
                  <p className="font-semibold">
                    - Dr. Jane Smith, Chief of Medicine
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
