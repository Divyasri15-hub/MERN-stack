const express = require('express');
const router = express.Router();
const Hospital = require('../models/Hospital');

router.get('/', async (req, res) => {
  try {
    const hospitals = await Hospital.find().limit(50);
    res.json(hospitals);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
