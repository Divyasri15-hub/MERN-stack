import React, { useState } from "react";

const styles = {
  page: {
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f0f4f8",
    minHeight: "100vh",
  },
  container: {
    maxWidth: "800px", // 🔹 increased width (was 600px)
    margin: "auto",
    background: "white",
    padding: "40px", // 🔹 more padding for height/space
    borderRadius: "15px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)", // slightly stronger shadow
    marginBottom: "40px",
  },
  heading: {
    color: "#003366",
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "bold",
  },
  label: {
    display: "block",
    fontWeight: "600",
    marginBottom: "10px",
    fontSize: "16px",
  },
  input: {
    width: "100%",
    padding: "14px 16px", // 🔹 bigger inputs
    fontSize: "15px",
    borderRadius: "8px",
    border: "1.8px solid #ccc",
    marginBottom: "25px",
    transition: "border-color 0.3s ease",
    outline: "none",
  },
  inputFocus: {
    borderColor: "#007bff",
    boxShadow: "0 0 6px rgba(0,123,255,0.5)",
  },
  textarea: {
    width: "100%",
    padding: "14px 16px",
    fontSize: "15px",
    borderRadius: "8px",
    border: "1.8px solid #ccc",
    resize: "vertical",
    minHeight: "120px", // 🔹 taller textarea
    marginBottom: "25px",
  },
  subheading: {
    color: "#007bff",
    marginTop: "25px",
    marginBottom: "15px",
    fontWeight: "700",
    fontSize: "22px",
  },
  // Medicines Section
  medicinesRow: {
    display: "flex",
    gap: "12px",
    marginBottom: "18px",
    alignItems: "center",
  },
  medicineInput: {
    flex: 1,
    padding: "12px 14px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1.8px solid #ccc",
    outline: "none",
  },
  addBtn: {
    background: "#007bff",
    color: "white",
    border: "none",
    padding: "12px 25px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "15px",
    marginTop: "15px",
  },
  prescriptionSection: {
    maxWidth: "700px",
    margin: "auto",
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
  printBtn: {
    marginTop: "20px",
    padding: "14px 30px",
    background: "#007bff",
    border: "none",
    borderRadius: "8px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "16px",
  },
  printBtnDisabled: {
    background: "#999",
    cursor: "not-allowed",
  },
};

export default function Prescription() {
  const [doctor, setDoctor] = useState("");
  const [patient, setPatient] = useState("");
  const [date, setDate] = useState("");
  const [instructions, setInstructions] = useState("");
  const [medicines, setMedicines] = useState([{ name: "", dosage: "", duration: "" }]);

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Prescription</h1>

      {/* Consultation Form */}
      <div style={styles.container}>
        <h2 style={{ ...styles.heading, fontSize: "26px", marginBottom: "20px" }}>
          Consultation Details
        </h2>

        <label style={styles.label}>
          Doctor:
          <input
            type="text"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Patient:
          <input
            type="text"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
          />
        </label>

        <h3 style={styles.subheading}>Medicines</h3>

        {medicines.map((med, i) => (
          <div key={i} style={styles.medicinesRow}>
            <input
              type="text"
              placeholder="Medicine Name"
              value={med.name}
              onChange={(e) => {
                const newMeds = [...medicines];
                newMeds[i].name = e.target.value;
                setMedicines(newMeds);
              }}
              style={styles.medicineInput}
            />
            <input
              type="text"
              placeholder="Dosage"
              value={med.dosage}
              onChange={(e) => {
                const newMeds = [...medicines];
                newMeds[i].dosage = e.target.value;
                setMedicines(newMeds);
              }}
              style={styles.medicineInput}
            />
            <input
              type="text"
              placeholder="Duration"
              value={med.duration}
              onChange={(e) => {
                const newMeds = [...medicines];
                newMeds[i].duration = e.target.value;
                setMedicines(newMeds);
              }}
              style={styles.medicineInput}
            />
          </div>
        ))}

        <button type="button" onClick={() => setMedicines([...medicines, { name: "", dosage: "", duration: "" }])} style={styles.addBtn}>
          + Add Medicine
        </button>

        <label style={styles.label}>
          Instructions:
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            style={styles.textarea}
          />
        </label>
      </div>

      {/* Prescription Preview */}
      <div style={styles.prescriptionSection}>
        <h2 style={{ ...styles.heading, fontSize: "24px", marginBottom: "15px" }}>
          Prescription Preview
        </h2>

        <p><strong>Doctor:</strong> {doctor || "---"}</p>
        <p><strong>Patient:</strong> {patient || "---"}</p>
        <p><strong>Date:</strong> {date ? new Date(date).toLocaleDateString() : "---"}</p>

        <h3 style={styles.subheading}>Medicines</h3>
        <ul>
          {medicines.filter(med => med.name).length > 0
            ? medicines.map((med, i) => (
                <li key={i}><strong>{med.name}</strong> – {med.dosage} ({med.duration})</li>
              ))
            : "No medicines added."}
        </ul>

        <h3 style={styles.subheading}>Instructions</h3>
        <p>{instructions || "No instructions provided."}</p>

        <button
          onClick={() => window.print()}
          style={{
            ...styles.printBtn,
            ...(!doctor || !patient || !date ? styles.printBtnDisabled : {}),
          }}
          disabled={!doctor || !patient || !date}
        >
          🖨 Print Prescription
        </button>
      </div>
    </div>
  );
}
