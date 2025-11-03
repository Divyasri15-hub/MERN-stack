// frontend/src/pages/Register.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      alert("⚠ Please fill in all required fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("⚠ Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("https://mern-stack-backend-ekpf.onrender.com/api/users/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      console.log("✅ Registration Response:", res.data);

      if (res.status === 200 || res.status === 201) {
        alert("✅ Registration successful! Redirecting to login...");
        navigate("/login");
      } else {
        alert("⚠ Unexpected response from server.");
      }
    } catch (err) {
      console.error("❌ Registration error:", err.response || err.message);
      if (err.response?.status === 400) {
        alert("⚠ Invalid input or missing fields. Please check again.");
      } else if (err.response?.status === 409 || err.response?.data?.message === "User already exists") {
        alert("⚠ Email already registered. Try logging in instead.");
        navigate("/login");
      } else {
        alert("❌ Server error during registration. Please try again later.");
      }
    }
  };

  return (
    <div style={outerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#007BFF", textDecoration: "none" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

// --- Styles ---
const outerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
};

const cardStyle = {
  maxWidth: "420px",
  width: "100%",
  margin: "16px",
  padding: "28px",
  background: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
};

const titleStyle = {
  margin: "0 0 20px 0",
  fontSize: "22px",
  fontWeight: 700,
  color: "#222",
  textAlign: "center",
};

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "12px 14px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #dcdcdc",
  boxSizing: "border-box",
  transition: "all 0.3s ease",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#007BFF",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
};
