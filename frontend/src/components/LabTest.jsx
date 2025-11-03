import React from "react";

const LabTests = () => {
  const testsData = {
    "Blood Tests": [
      "Complete Blood Count (CBC)",
      "Blood Chemistry Panel",
      "Liver Function Tests (LFTs)",
      "Kidney Function Tests",
      "Lipid Panel",
      "Blood Clotting Tests",
      "Thyroid Function Tests (TFTs)",
      "Blood Gas Analysis",
    ],
    "Urine Tests": [
      "Urinalysis",
      "Urine Culture",
      "Proteinuria Test",
      "Pregnancy Test (hCG Test)",
      "Drug Testing",
    ],
    "Microbiology Tests": [
      "Bacterial Culture Tests",
      "Fungal & Parasitic Tests",
      "Viral Tests (PCR, HIV, Hepatitis)",
      "Blood Culture Test",
    ],
    "Hormone & Endocrine Tests": [
      "Diabetes Tests",
      "Cortisol Test",
      "Sex Hormone Tests",
      "Prolactin Test",
    ],
    "Genetic & DNA Tests": [
      "Karyotyping",
      "BRCA Gene Test",
      "Paternity Test",
      "Carrier Screening",
    ],
    "Cancer & Tumor Marker Tests": [
      "PSA Test",
      "CA-125 Test",
      "CEA Test",
      "AFP Test",
    ],
    "Autoimmune & Allergy Tests": [
      "ANA Test",
      "Allergy Skin Tests",
      "RA Factor Test",
      "Celiac Disease Test",
    ],
    "Toxicology & Drug Tests": [
      "Heavy Metal Testing",
      "Drug & Alcohol Screening",
    ],
  };

  const TestBox = ({ name }) => (
    <div className="test-box">
      <span className="icon"></span>
      <span className="test-name">{name}</span>
    </div>
  );

  return (
    <>
      <style>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 20px;
          background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRES1VBmudiTW7MzI6H3KiUliAwrJZfP2q0w&s);
          background-size: cover;
          background-attachment: fixed;
        }
        .container {
          max-width: 900px;
          margin: auto;
        }
        h1 {
          text-align: center;
          color: #333;
        }
        h2 {
          color: #222;
          margin-top: 20px;
          border-bottom: 2px solid #007BFF;
          padding-bottom: 5px;
        }
        .test-box {
          background: white;
          padding: 15px;
          margin: 10px 0;
          border-radius: 8px;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .test-box:hover {
          transform: translateX(10px) scale(1.02);
          box-shadow: 5px 5px 20px rgba(0, 123, 255, 0.3);
          background: #eaf4ff;
        }
        .icon {
          font-size: 25px;
          margin-right: 15px;
        }
        .test-name {
          font-size: 18px;
          font-weight: bold;
          color: #007BFF;
        }
        button {
          background: #007BFF;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        button:hover {
          background: #0056b3;
          transform: scale(1.05);
        }
        button a {
          color: white;
          text-decoration: none;
        }
      `}</style>

      <div className="container">
        <div className="header">
          <h1> Lab Tests</h1>
          <button>
            <a href="file:///C:/Users/LENOVO/Desktop/file8.html">Apply</a>
          </button>
        </div>

        {Object.entries(testsData).map(([category, tests]) => (
          <div key={category}>
            <h2>
              {category === "Blood Tests"
                ? "🩸 " + category
                : category === "Urine Tests"
                ? "🚽 " + category
                : category === "Microbiology Tests"
                ? "🦠 " + category
                : category === "Hormone & Endocrine Tests"
                ? "🧬 " + category
                : category === "Genetic & DNA Tests"
                ? "🧪 " + category
                : category === "Cancer & Tumor Marker Tests"
                ? "🎗️ " + category
                : category === "Autoimmune & Allergy Tests"
                ? "🤧 " + category
                : category === "Toxicology & Drug Tests"
                ? "☠️ " + category
                : category}
            </h2>
            {tests.map((test) => (
              <TestBox key={test} name={test} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default LabTests;
