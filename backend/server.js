require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

// ✅ Import routes
const authRoutes = require('./routes/auth');
const hospitalRoutes = require('./routes/hospitals');
const appointmentRoutes = require('./routes/appointments');
const userRoutes = require('./routes/users');

const app = express();

// ✅ Connect to MongoDB
connectDB();

// ✅ Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// ✅ API Routes
app.use('/api/auth', authRoutes);
app.use('/api/hospitals', hospitalRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/users', userRoutes);

// ✅ Serve frontend (React build)
const __dirnamePath = path.resolve(); // ✅ fixes __dirname issue in Render

app.use(express.static(path.join(__dirnamePath, 'frontend','dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirnamePath, 'frontend','dist', 'index.html'));
});

// ✅ Start server
const PORT = process.env.PORT || 5011;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
