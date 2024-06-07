const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.post("/", async (req, res) => {
    try {
      const { email, password } = req.body;
      const newUser = new User({
        email,
        password
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });