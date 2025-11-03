const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointments'); // ✅ make sure file name is singular

// ✅ POST: Create Consultation Appointment
router.post('/create', async (req, res) => {
  try {
    console.log("📩 Appointment request received:", req.body);

    const {
      patientName,
      age,
      contactNumber,
      problemDescription,
      treatmentNeeded,
      userId,
    } = req.body;

    // validation
    if (!patientName || !age || !contactNumber || !problemDescription || !treatmentNeeded) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // create appointment document
    const newAppointment = new Appointment({
      patientName,
      age,
      contactNumber,
      problemDescription,
      treatmentNeeded,
      userId,
    });

    // save to DB
    const saved = await newAppointment.save();
    console.log('✅ Appointment Saved:', saved);

    res.status(201).json({
      message: 'Consultation submitted successfully',
      appointment: saved,
    });
  } catch (err) {
    console.error('❌ Error creating appointment:', err);
    res.status(500).json({ message: 'Server error while saving appointment' });
  }
});

// ✅ GET: All Appointments for a user
router.get('/user/:userId', async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.params.userId });
    res.json(appointments);
  } catch (err) {
    console.error('❌ Error fetching appointments:', err);
    res.status(500).json({ message: 'Failed to fetch appointments' });
  }
});

module.exports = router;
