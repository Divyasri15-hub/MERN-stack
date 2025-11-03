const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  phone: String,
  speciality: String
});

module.exports = mongoose.model('Hospital', hospitalSchema);
