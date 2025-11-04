const express = require("express");
const router = express.Router();
const User = require("../models/User");

// ✅ Get all users (no password info)
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error fetching users" });
  }
});

module.exports = router;
