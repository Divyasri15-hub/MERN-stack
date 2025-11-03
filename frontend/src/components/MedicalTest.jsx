export default function MedicalTest() {
    const medicalTests = [
      { id: 1, name: "ECG", description: "Electrocardiogram to check heart activity", cost: "₹800", contact: "9001122334" },
      { id: 2, name: "CT Scan", description: "Detailed imaging scan of body parts", cost: "₹4500", contact: "9112233445" },
      { id: 3, name: "Ultrasound", description: "Imaging test using sound waves", cost: "₹1500", contact: "9223344556" },
      { id: 4, name: "Blood Sugar Test", description: "Test for glucose levels in blood", cost: "₹400", contact: "9334455667" },
    ];
  
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundImage:
            "url('https://img.freepik.com/free-vector/medical-healthcare-blue-color_1017-26807.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "30px",
          fontFamily: "Arial, sans-serif",
        }}
      >
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
          Medical Tests
        </h1>
  
        <div style={{ marginTop: "30px", maxWidth: "800px", margin: "auto" }}>
          {medicalTests.map((test) => (
            <div
              key={test.id}
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                padding: "20px",
                margin: "15px 0",
                borderRadius: "10px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
              }}
            >
              <h2 style={{ margin: 0, color: "#007bff" }}>{test.name}</h2>
              <p><b>Description:</b> {test.description}</p>
              <p><b>Cost:</b> {test.cost}</p>
              <p><b>Contact:</b> {test.contact}</p>
              <button
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  background: "#17a2b8",
                  border: "none",
                  borderRadius: "8px",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Book Test
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  