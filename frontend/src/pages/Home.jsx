import { useNavigate } from "react-router-dom";
import doctorImg from "../assets/dec.jpg"; // make sure this is in src/assets/

export default function Home() {
  const navigate = useNavigate(); // ✅ hook for navigation

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundImage:
          "url('https://img.freepik.com/free-vector/medical-healthcare-blue-color_1017-26807.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <h1 style={{ fontSize: "2.8rem", fontWeight: "bold", color: "#003366" }}>
          Welcome to Telemedicine Platform
        </h1>
        <p
          style={{
            marginTop: "15px",
            fontSize: "1.2rem",
            maxWidth: "700px",
            color: "#222",
          }}
        >
          Your health, our priority — book doctor appointments, access online
          prescriptions, and consult with medical experts from the comfort of
          your home.
        </p>

        <img
          src={doctorImg}
          alt="Doctors"
          style={{
            width: "350px",
            marginTop: "30px",
            borderRadius: "12px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
          }}
        />

        {/* Button that routes to Appointment page */}
        <button
          style={{
            marginTop: "30px",
            padding: "12px 25px",
            background: "#007bff",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onClick={() => navigate("/appointment")} // ✅ navigation
        >
          Book an Appointment
        </button>
      </div>

      {/* Footer */}
      <footer
        style={{
          background: "#007bff",
          color: "white",
          textAlign: "center",
          padding: "15px",
          fontSize: "14px",
          width: "100%",
        }}
      >
        © {new Date().getFullYear()} Telemedicine Platform | All Rights Reserved
      </footer>
    </div>
  );
}
