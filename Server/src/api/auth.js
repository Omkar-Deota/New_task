const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('../model/user.js')
require('dotenv').config();
const router = express.Router();

router.post("/register", async (req, res) => {
    const { Name, Username, Password } = req.body;
  
    try {
        let User = await User.findOne({username});
        if( User ){
return res.status(400).json({error: "Username already exists"})
}
      const hashedPassword = await bcrypt.hash(Password, 10);
      const newUser = new User({
        Name,
        Username,
        Password: hashedPassword,
      });
      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
      res.status(400).json({ message: "User registration failed", error: err });
    }
  });

  router.post("/authenticate-user", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: "Invalid username" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
      }
      const name = user.name;
      res.json({ message: "Successfully logged in", name});
    } catch (err) {
      res.status(500).json({ message: "Something went wrong", error: err });
    }
  });

module.exports = router;
  
