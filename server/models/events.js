const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
    trim: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  eventTime: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  notes: [
    {
      type: String,
      required: true,
    },
  ],
});

const CreateEvent = model("Event", eventSchema);

module.exports = CreateEvent;
