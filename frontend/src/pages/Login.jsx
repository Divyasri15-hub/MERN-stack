import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!form.email || !form.password) {
      alert("⚠ Please fill in both fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5011/api/auth/login", {
        email: form.email,
        password: form.password,
      });

      if (res.data && res.data.token) {
        alert("✅ Login successful!");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user || {}));

        if (onLogin) onLogin(res.data.user || {});
        navigate("/"); // ✅ Redirect to home
      } else {
        alert("⚠ Invalid credentials. Please register first!");
        navigate("/register");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("❌ Login failed. Please try again!");
    }
  };

  return (
    <div style={outerStyle}>
      <div style={cardStyle}>
        <h2 style={{ textAlign: "center", color: "#007BFF" }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
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
          <button type="submit" style={buttonStyle}>Login</button>
        </form>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Don’t have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#007BFF",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

// 🎨 Styling
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
  padding: "30px",
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
};

const inputStyle = {
  width: "100%",
  padding: "12px 15px",
  marginBottom: "15px",
  border: "1.5px solid #ccc",
  borderRadius: "8px",
  fontSize: "15px",
  boxSizing: "border-box",
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
