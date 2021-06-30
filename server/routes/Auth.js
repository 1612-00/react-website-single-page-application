const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post("/register", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  // Simple validation
  if (!firstname || !lastname || !email || !password)
    return res
      .status(400)
      .json({ success: false, message: "Please enter the full information" });

  try {
    // Check for existing user
    const user = await User.findOne({ email });

    if (user)
      return res
        .status(400)
        .json({ success: false, message: "Email already taken" });

    // All good
    const hashedPassword = await argon2.hash(password);

    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Return token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.json({
      success: true,
      message: "User created successfully",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route POST api/auth/login
// @desc Login user
// @access Public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(400)
      .json({ success: false, message: "Missing email or/and password" });

  try {
    // Check for existing user
    const user = await User.findOne({ email });

    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect email or password" });

    // Email found
    const passwordValid = await argon2.verify(user.password, password);

    if (!passwordValid)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect email or password" });

    // All good
    // Return token
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.json({
      success: true,
      message: "Login successfully",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
