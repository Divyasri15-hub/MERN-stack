import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function PatientForm() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get doctor info passed via navigate state
  const doctorTitle = location.state?.doctorTitle || "Unknown Doctor";

  // Form state
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    contact: "",
    problemDescription: "",
    treatmentNeeded: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // On form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // For demo, we just log data
    console.log("Consultation form submitted:", { doctorTitle, ...formData });

    alert(`Thank you for consulting with ${doctorTitle}, ${formData.patientName}!`);

    // After submission, navigate back to doctor list or home
    navigate("/doctor");
  };

  return (
    <div style={styles.container}>
      <h2>Consultation Form for {doctorTitle}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Patient Name:
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Contact Number:
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            style={styles.input}
            pattern="[0-9]{10}"
            title="Enter a valid 10-digit phone number"
          />
        </label>

        <label style={styles.label}>
          Describe your problem:
          <textarea
            name="problemDescription"
            value={formData.problemDescription}
            onChange={handleChange}
            required
            style={{ ...styles.input, height: "80px" }}
          />
        </label>

        <label style={styles.label}>
          Treatment Needed:
          <textarea
            name="treatmentNeeded"
            value={formData.treatmentNeeded}
            onChange={handleChange}
            required
            style={{ ...styles.input, height: "80px" }}
          />
        </label>

        <button type="submit" style={styles.button}>Submit Consultation</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "15px",
    fontWeight: "bold",
    fontSize: "16px",
  },
  input: {
    marginTop: "6px",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  },
};
