const express = require("express");
const router = express.Router();
const CreateEvent = require("../models/events");

// Create a new event
router.post("/", async (req, res) => {
  try {
    const { eventName, eventDate, eventTime, location } = req.body;
    const newEvent = new Event({
      eventName,
      eventDate,
      eventTime,
      location,
    });
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all events
router.get("/CreateEvent", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete event by ID
router.delete("/CreateEvent/:id", async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Event deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
