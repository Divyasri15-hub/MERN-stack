const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// ✅ REGISTER
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please fill all fields' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('❌ Registration Error:', err);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

// ✅ LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Please fill all fields' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log('⚠️ No user found for:', email);
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('⚠️ Password does not match for:', email);
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // ✅ Generate token using your .env secret
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET ||
        '3e5c207d9e9f318b9b4e89e951bcc335f2c0abf33f9018699d13c46595dfa4168451fea878c7ea1643d8616981c6c3325a790cfe63afbd3f2e85ddd631fc1291',
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error('❌ Login Error:', err);
    res.status(500).json({ message: 'Server error during login' });
  }
});

module.exports = router;
