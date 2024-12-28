import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import axios from "../../api/axios"; // Assuming axios.js is configured correctly

export default function AuthPage() {
  const [authMode, setAuthMode] = useState("signin"); // 'signin' or 'signup'
  const [userType, setUserType] = useState("user"); // 'user' only for now
  const [error, setError] = useState(""); // Error handling state
  const navigate = useNavigate(); // Initialize the navigate function

  const toggleAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
    setError(""); // Reset error when toggling auth mode
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Clear any previous errors

    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      if (authMode === "signup") {
        const confirmPassword = formData.get("confirmPassword");

        // Check if passwords match during signup
        if (data.password !== confirmPassword) {
          setError("Passwords do not match.");
          return;
        }

        // Send signup request
        await axios.post("/auth/register", data);
        alert("Registration successful! Please log in.");
        toggleAuthMode();
      } else {
        // Handle login
        await axios.post("/auth/login", data);
        alert("Login successful!");
        // Redirect after successful login
        navigate("/"); // This will navigate to the home page (or any route you want)
      }
    } catch (error) {
      setError(error.response?.data?.error || "An error occurred");
    }
  };

  return (
    <>
      <NavLink to="/" className="font-semibold m-2 text-blue-500">
        Back
      </NavLink>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-[350px] bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-bold">
            {authMode === "signin" ? "Sign In" : "Sign Up"}
          </h2>
          <p className="text-sm text-gray-500">
            {authMode === "signin"
              ? "Enter your credentials to sign in."
              : "Create a new account."}
          </p>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div className="flex justify-between mb-4">
              <button
                type="button"
                onClick={() => setUserType("user")}
                className={`py-2 px-4 rounded ${
                  userType === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                User
              </button>
              <button
                type="button"
                onClick={() => setUserType("admin")}
                className={`py-2 px-4 rounded ${
                  userType === "admin" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                Admin
              </button>
              <button
                type="button"
                onClick={() => setUserType("hospital")}
                className={`py-2 px-4 rounded ${
                  userType === "hospital" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                Hospital
              </button>
            </div>

            {userType === "user" && <UserForm authMode={authMode} />}
            {userType === "admin" && <AdminForm authMode={authMode} />}
            {userType === "hospital" && <HospitalForm authMode={authMode} />}

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 mt-4 rounded"
            >
              {authMode === "signin" ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <button
            onClick={toggleAuthMode}
            className="w-full text-blue-500 mt-4 text-sm"
          >
            {authMode === "signin"
              ? "Don't have an account? Sign Up"
              : "Already have an account? Sign In"}
          </button>
        </div>
      </div>
    </>
  );
}

function UserForm({ authMode }) {
  return (
    <div className="space-y-4">
      {authMode === "signup" && (
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
      )}
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      {authMode === "signup" && (
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
      )}
    </div>
  );
}

function AdminForm({ authMode }) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="adminId" className="block text-sm font-medium">
          Admin ID
        </label>
        <input
          id="adminId"
          name="adminId"
          placeholder="ADMIN123"
          required
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="adminPassword" className="block text-sm font-medium">
          Password
        </label>
        <input
          id="adminPassword"
          name="adminPassword"
          type="password"
          required
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      {authMode === "signup" && (
        <div>
          <label
            htmlFor="adminConfirmPassword"
            className="block text-sm font-medium"
          >
            Confirm Password
          </label>
          <input
            id="adminConfirmPassword"
            name="adminConfirmPassword"
            type="password"
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
      )}
    </div>
  );
}

function HospitalForm({ authMode }) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="hospitalId" className="block text-sm font-medium">
          Hospital ID
        </label>
        <input
          id="hospitalId"
          name="hospitalId"
          placeholder="HOSP123"
          required
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="hospitalPassword" className="block text-sm font-medium">
          Password
        </label>
        <input
          id="hospitalPassword"
          name="hospitalPassword"
          type="password"
          required
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      {authMode === "signup" && (
        <>
          <div>
            <label
              htmlFor="hospitalConfirmPassword"
              className="block text-sm font-medium"
            >
              Confirm Password
            </label>
            <input
              id="hospitalConfirmPassword"
              name="hospitalConfirmPassword"
              type="password"
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="hospitalName" className="block text-sm font-medium">
              Hospital Name
            </label>
            <input
              id="hospitalName"
              name="hospitalName"
              placeholder="City General Hospital"
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </>
      )}
    </div>
  );
}
