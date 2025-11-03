import { useNavigate } from "react-router-dom";

export default function Appointment() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://img.freepik.com/free-vector/medical-healthcare-blue-color_1017-26807.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Page Title */}
      <h1
        style={{
          textAlign: "center",
          color: "white",
          background: "#007bff",
          padding: "15px",
          borderRadius: "10px",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        Appointment
      </h1>

      {/* Doctor Appointment */}
      <div style={sectionStyle}>
        <button style={buttonStyle} onClick={() => navigate("/doctor")}>
          Doctor Appointment
        </button>
        <p style={textStyle}>Your appointments displayed here</p>
      </div>

      {/* Lab Test */}
      <div style={sectionStyle}>
        <button style={buttonStyle} onClick={() => navigate("/lab")}>
          Lab Test
        </button>
        <p style={textStyle}>Your lab test appointments displayed here</p>
      </div>

      {/* Medical Test */}
      <div style={sectionStyle}>
        <button style={buttonStyle} onClick={() => navigate("/medical")}>
          Medical Test
        </button>
        <p style={textStyle}>Your medical test appointments displayed here</p>
      </div>
    </div>
  );
}

const sectionStyle = {
  background: "rgba(255, 255, 255, 0.9)",
  margin: "20px auto",
  padding: "20px",
  borderRadius: "12px",
  maxWidth: "600px",
  textAlign: "center",
  boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
};

const buttonStyle = {
  background: "white",
  border: "2px solid #007bff",
  borderRadius: "8px",
  padding: "12px 20px",
  fontSize: "1rem",
  color: "#007bff",
  fontWeight: "bold",
  cursor: "pointer",
  marginBottom: "10px",
  transition: "all 0.3s ease",
};

const textStyle = {
  fontSize: "0.95rem",
  color: "#333",
};
