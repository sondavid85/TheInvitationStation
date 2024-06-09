// const { users } = require('../models');

const User = require("../models/users");
const Event = require("../models/events");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { signToken, AuthenticationError } = require('../utils/auth');

  const resolvers = {
    Query: {
      users: () => User.find(),
      events: async () => {
      try {
        const events = await Event.find();
        return events;
      } catch (error) {
        console.error('Error fetching events:', error);
        throw new Error('Error fetching events');
      }
    },
    },

    Mutation: {
      addUser: async (parent, { email, password }) => {
        return User.create({ email, password });
      },
      addEvent: async (
        parent,
        { eventName, eventDate, eventTime, location }
      ) => {
        return Event.create({ eventName, eventDate, eventTime, location });
      },
      deleteEvent: async (parent, { id }) => {
        return Event.findByIdAndDelete(id);
      },
      login: async (_, { email, password }) => {
        const user = await User.findOne({ email });
        if (!user) throw new Error('Invalid credentials');
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Invalid credentials');
        const token = signToken(user)
        return {token, user}
      },
      addNoteToEvent: async (_, { eventId, text }) => {
      const event = await Event.findById(eventId);
      event.notes.push(text);
      await event.save();
      return event;
    }
    },
  };

module.exports = resolvers;