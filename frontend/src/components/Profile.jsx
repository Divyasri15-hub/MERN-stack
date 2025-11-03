export default function Profile({ user }) {
  if (!user) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>No Profile Data</h2>
        <p>Please login to see your profile information.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontFamily: "Segoe UI, sans-serif",
        background: "linear-gradient(135deg, #f0f4f8, #ffffff)",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "35px 30px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          width: "400px",
          animation: "fadeIn 0.6s ease-in-out",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "#007BFF",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "28px",
            fontWeight: "bold",
            margin: "0 auto 20px",
          }}
        >
          {user.name ? user.name.charAt(0).toUpperCase() : "U"}
        </div>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#007BFF",
            fontSize: "26px",
          }}
        >
          User Profile
        </h2>

        <div style={{ fontSize: "16px", lineHeight: "1.8" }}>
          <p>
            <b>Name:</b> {user.name}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Phone:</b> {user.phone || "—"}
          </p>
          <p>
            <b>Age:</b> {user.age || "—"}
          </p>
          <p>
            <b>Gender:</b> {user.gender || "—"}
          </p>
          <p>
            <b>Address:</b> {user.address || "—"}
          </p>
        </div>
      </div>
    </div>
  );
}
