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

  // ✅ Proper form state update
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value, // ensures correct key updates
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Frontend validation
    if (!form.name.trim() || !form.email.trim() || !form.password.trim() || !form.confirmPassword.trim()) {
      alert("⚠ Please fill in all required fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("⚠ Passwords do not match");
      return;
    }

    try {
      // ✅ Log data to confirm before sending
      console.log("📩 Sending form data:", form);

      const response = await axios.post(
        "https://mern-stack-backend-ekpf.onrender.com/api/users/register",
        {
          name: form.name.trim(),
          email: form.email.trim(),
          password: form.password.trim(),
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("✅ Backend response:", response.data);

      if (response.status === 200 || response.status === 201) {
        alert("✅ Registration successful! Redirecting to login...");
        navigate("/login");
      }
    } catch (error) {
      console.error("❌ Registration error:", error.response || error.message);
      if (error.response?.status === 400) {
        alert("⚠ Missing or invalid fields. Check your inputs.");
      } else if (
        error.response?.status === 409 ||
        error.response?.data?.message === "User already exists"
      ) {
        alert("⚠ Email already registered. Try logging in instead.");
        navigate("/login");
      } else {
        alert("❌ Server error. Please try again later.");
      }
    }
  };

  return (
    <div style={outerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            style={inputStyle}
            required
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
