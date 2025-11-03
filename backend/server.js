require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// ✅ Import routes (only once each)
const authRoutes = require('./routes/auth');
const hospitalRoutes = require('./routes/hospitals');
const appointmentRoutes = require('./routes/appointments'); // keep only this one
const userRoutes = require('./routes/users');

const app = express();

// ✅ Connect to MongoDB
connectDB();

// ✅ Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// ✅ Route mounting (no duplicates)
app.use('/api/auth', authRoutes);
app.use('/api/hospitals', hospitalRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/appointments', require('./routes/appointments'));


// ✅ Start server
const PORT = process.env.PORT || 5011;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
