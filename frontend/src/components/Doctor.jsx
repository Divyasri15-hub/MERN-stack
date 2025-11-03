import React from "react";
import { useNavigate } from "react-router-dom";

export default function Doctor() {
  const navigate = useNavigate();

  const handleConsultClick = (doctorTitle) => {
    // Navigate to /consult and pass doctor info in state
    navigate("/consult", { state: { doctorTitle } });
  };

  const doctorData = {
    "Primary Care Doctors": [
      { title: "General Physician (GP)", notable: "Dr. Devi Shetty, Dr. Prathap C. Reddy", edu: "MBBS + Internship" },
      { title: "Family Medicine Doctor", notable: "Dr. Raman Kumar", edu: "MBBS + MD in Family Medicine" },
      { title: "Internal Medicine Doctor", notable: "Dr. Naresh Trehan", edu: "MBBS + MD in Internal Medicine" },
      { title: "Pediatrician", notable: "Dr. Arun Shah", edu: "MBBS + MD in Pediatrics" },
    ],
    "Specialist Doctors": [
      { title: "Cardiologist", notable: "Dr. Naresh Trehan, Dr. Devi Shetty", edu: "MBBS + MD + DM in Cardiology" },
      { title: "Neurologist", notable: "Dr. R. Madhavan", edu: "MBBS + MD in Neurology" },
      { title: "Endocrinologist", notable: "Dr. Shashank Joshi", edu: "MBBS + MD in Endocrinology" },
      { title: "Pulmonologist", notable: "Dr. Meenal Patwardhan", edu: "MBBS + MD in Pulmonology" },
      { title: "Nephrologist", notable: "Dr. Georgi Abraham", edu: "MBBS + MD in Nephrology" },
      { title: "Gastroenterologist", notable: "Dr. D. Nageshwar Reddy", edu: "MBBS + MD in Gastroenterology" },
      { title: "Hematologist", notable: "Dr. Mammen Chandy", edu: "MBBS + MD in Hematology" },
      { title: "Oncologist", notable: "Dr. Suresh Advani", edu: "MBBS + MD in Oncology" },
    ],
    // ... add other categories here like Surgical Specialists, etc.
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>Types of Doctors</header>
      <div style={styles.container}>
        {Object.entries(doctorData).map(([category, doctors]) => (
          <div key={category}>
            <div style={styles.categoryHeader}>{category}</div>
            <div style={styles.doctorList}>
              {doctors.map((doc, i) => (
                <div key={i} style={styles.doctorCategory}>
                  <h3 style={{ color: "#007bff" }}>{doc.title}</h3>
                  <p><b>Notable:</b> {doc.notable}</p>
                  <p><b>Education:</b> {doc.edu}</p>
                  <button style={styles.button} onClick={() => handleConsultClick(doc.title)}>Consult</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: "#eef3f8",
    color: "#333",
    backgroundImage:
      "url('https://media.istockphoto.com/id/1447388979/vector/modern-blue-medical-technology-background-vector-polygon-pattern.jpg?s=612x612&w=0&k=20&c=GsfF2ldGnhFvhcMoRrsSgbhQAy8Bdy9h4QPMSeZFsoo=')",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
  },
  header: {
    background: "linear-gradient(90deg, #007bff, #0056b3)",
    color: "white",
    padding: "20px",
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "bold",
    letterSpacing: "1px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  container: { padding: "20px", maxWidth: "1200px", margin: "auto" },
  categoryHeader: {
    fontSize: "24px",
    color: "#0056b3",
    margin: "30px 0 15px",
    textAlign: "center",
    fontWeight: "bold",
    position: "relative",
  },
  doctorList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "10px",
  },
  doctorCategory: {
    background: "rgba(255, 255, 255, 0.95)",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
  },
  button: {
    background: "linear-gradient(90deg, #007bff, #0056b3)",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "12px",
    fontSize: "14px",
    transition: "background 0.3s ease, transform 0.2s ease",
  },
};
