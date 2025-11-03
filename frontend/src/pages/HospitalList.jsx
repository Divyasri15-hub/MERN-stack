import heroImg from "../assets/home-hero.png"; // make sure you put your image in src/assets/

export default function HospitalList() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 60px)", // full screen minus navbar
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      {/* Left side: Welcome text */}
      <div style={{ flex: 1, textAlign: "left", paddingRight: "40px" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#003366" }}>
          Welcome to Telemedicine
        </h1>
        <p style={{ marginTop: "20px", fontSize: "1.2rem", lineHeight: "1.6" }}>
          Book doctor appointments, consult online, and access healthcare
          services anytime, anywhere.
        </p>
        <button
          style={{
            marginTop: "30px",
            padding: "12px 24px",
            background: "#007bff",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => (window.location.href = "/appointment")}
        >
          Book Appointment
        </button>
      </div>

      {/* Right side: Hero Image */}
      <div style={{ flex: 1, textAlign: "center" }}>
        <img
          src={heroImg}
          alt="Telemedicine"
          style={{
            maxWidth: "500px",
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </div>
  );
}
