require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Hospital = require('../models/Hospital');

const hospitals = [
  { name: 'City Care Hospital', address: '123 Main St', phone: '9999999999', speciality: 'General' },
  { name: 'Sunrise Medical Center', address: '45 Park Ave', phone: '8888888888', speciality: 'Cardiology' },
  { name: 'Green Valley Clinic', address: '78 Hill Rd', phone: '7777777777', speciality: 'Pediatrics' },
];

const seed = async () => {
  await connectDB();
  await Hospital.deleteMany({});
  await Hospital.insertMany(hospitals);
  console.log('Seeded hospitals');
  mongoose.connection.close();
};

seed().catch(console.error);
