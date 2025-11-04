require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

// ✅ Initialize app
const app = express();

// ✅ Connect to MongoDB
connectDB();

// ✅ Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// ✅ API Routes (register all your APIs)
app.use("/api/auth", require("./routes/auth"));          // Login / Register
app.use("/api/users", require("./routes/users"));        // Get users
app.use("/api/hospitals", require("./routes/hospitals"));// Hospital data
app.use("/api/appointments", require("./routes/appointments")); // Appointment data

// ✅ Serve frontend build (React)
const __dirnamePath = path.resolve(); // fixes __dirname in ES module-like environments

app.use(express.static(path.join(__dirnamePath, "frontend", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirnamePath, "frontend", "dist", "index.html"));
});

// ✅ Start server
const PORT = process.env.PORT || 5011;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
