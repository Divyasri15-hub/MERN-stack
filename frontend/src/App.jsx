import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";

import Appointment from "./components/Appointment.jsx";
import Profile from "./components/Profile.jsx";
import Prescription from "./components/Prescription.jsx";
import AIChatBox from "./components/AIChatBox.jsx";
import Home from "./pages/Home.jsx";
import Doctor from "./components/Doctor.jsx";
import { PatientForm } from "./components/PatientForm.jsx";
import LabTest from "./components/LabTest.jsx";
import MedicalTest from "./components/MedicalTest.jsx";
import { PatientProvider } from "./context/PatientContext.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function SharedHeader({ onLogout }) {
  return (
    <nav
      style={{
        padding: "10px 20px",
        background: "#007BFF",
        color: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/appointment" style={linkStyle}>Appointment</Link>
      <Link to="/profile" style={linkStyle}>Profile</Link>
      <Link to="/prescription" style={linkStyle}>Prescription</Link>
      <Link to="/chat" style={linkStyle}>Chat</Link>

      <button
        onClick={onLogout}
        style={{
          marginLeft: "auto",
          backgroundColor: "#dc3545",
          border: "none",
          color: "#fff",
          padding: "8px 15px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </nav>
  );
}

const linkStyle = {
  marginRight: "15px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

useEffect(() => {
  const token = localStorage.getItem("token");
  const savedUser = localStorage.getItem("user");
  const currentPath = window.location.pathname;

  if (token && savedUser) {
    setIsAuthenticated(true);
    setUser(JSON.parse(savedUser));
  } else {
    // ✅ Only redirect to login if NOT already on login or register page
    if (currentPath !== "/login" && currentPath !== "/register") {
      navigate("/login");
    }
  }
}, [navigate]);


  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    navigate("/");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <PatientProvider>
      {isAuthenticated && <SharedHeader onLogout={handleLogout} />}
      <main style={{ padding: "20px" }}>
        <Routes>
          {/* Public routes */}
          <Route
            path="/login"
            element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!isAuthenticated ? <Register /> : <Navigate to="/" />}
          />

          {/* Protected routes */}
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/appointment" element={isAuthenticated ? <Appointment /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isAuthenticated ? <Profile user={user} /> : <Navigate to="/login" />} />
          <Route path="/prescription" element={isAuthenticated ? <Prescription /> : <Navigate to="/login" />} />
          <Route path="/chat" element={isAuthenticated ? <AIChatBox /> : <Navigate to="/login" />} />
          <Route path="/doctor" element={isAuthenticated ? <Doctor /> : <Navigate to="/login" />} />
          <Route path="/consult" element={isAuthenticated ? <PatientForm /> : <Navigate to="/login" />} />
          <Route path="/lab" element={isAuthenticated ? <LabTest /> : <Navigate to="/login" />} />
          <Route path="/medical" element={isAuthenticated ? <MedicalTest /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </main>
    </PatientProvider>
  );
}

export default App;
