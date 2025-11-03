const Appointment = require('../models/Appointments');

// ✅ Create a new appointment
exports.createAppointment = async (req, res) => {
  try {
    const { patientName, doctorName, date, time, reason } = req.body;

    if (!patientName || !doctorName || !date || !time) {
      return res.status(400).json({ message: 'Please fill all required fields' });
    }

    const appointment = new Appointment({ patientName, doctorName, date, time, reason });
    await appointment.save();

    res.status(201).json({ message: '✅ Appointment created successfully', appointment });
  } catch (error) {
    console.error('Create appointment error:', error);
    res.status(500).json({ message: 'Server error creating appointment' });
  }
};

// ✅ Get all appointments
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ date: 1 });
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Fetch appointments error:', error);
    res.status(500).json({ message: 'Server error fetching appointments' });
  }
};

// ✅ Delete an appointment
exports.deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findByIdAndDelete(id);

    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

    res.status(200).json({ message: '✅ Appointment deleted successfully' });
  } catch (error) {
    console.error('Delete appointment error:', error);
    res.status(500).json({ message: 'Server error deleting appointment' });
  }
};
