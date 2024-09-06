const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = User({ username: username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
});

router.post("/login", async (req,res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username: username });
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, { expiresIn: '2h' });
            res.json({ token });
        }else{
            res.status(401).json({ error: "Invalid credentials" });
        }
      
    } catch (error) {
        res.status(500).json({error:"Error logging in"})
        
  }
})

module.exports = router