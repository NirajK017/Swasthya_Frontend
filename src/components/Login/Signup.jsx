import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import axios from "../../api/axios";

export default function AuthPage() {
  const [authMode, setAuthMode] = useState("signin");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const toggleAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      if (authMode === "signup") {
        const confirmPassword = formData.get("confirmPassword");

        if (data.password !== confirmPassword) {
          setError("Passwords do not match.");
          return;
        }

        await axios.post("/auth/register", data);
        alert("Registration successful! Please log in.");
        toggleAuthMode();
      } else {
        await axios.post("/auth/login", data);
        navigate("/");
      }
    } catch (error) {
      setError(error.response?.data?.error || "An error occurred");
    }
  };

  const getInitial = (email) => {
    return email ? email[0].toUpperCase() : "?";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6 relative">
      <NavLink
        to="/"
        className="absolute top-6 left-6 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-200"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </NavLink>
      
      <div className="w-[400px] bg-white/95 backdrop-blur-sm shadow-xl rounded-lg p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white text-2xl font-semibold mb-4 shadow-lg">
            {getInitial(email)}
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            {authMode === "signin" ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            {authMode === "signin"
              ? "Sign in to access your account"
              : "Fill in your details to get started"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {authMode === "signup" && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white/80 backdrop-blur-sm"
                placeholder="John Doe"
              />
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white/80 backdrop-blur-sm"
              placeholder="john@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white/80 backdrop-blur-sm"
              placeholder="••••••••"
            />
          </div>

          {authMode === "signup" && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white/80 backdrop-blur-sm"
                placeholder="••••••••"
              />
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
          >
            {authMode === "signin" ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={toggleAuthMode}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
          >
            {authMode === "signin"
              ? "Don't have an account? Sign Up"
              : "Already have an account? Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
}