// const { users } = require('../models');

const User = require("../models/users");
const Event = require("../models/events");

  const resolvers = {
    Query: {
      users: () => users,
      events: () => Event.find(),
    },

    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        return User.create({ username, email, password });
      },
      //     addComment: async (parent, { thoughtId, commentText }) => {
      //       return Thought.findOneAndUpdate(
      //         { _id: thoughtId },
      //         {
      //           $addToSet: { comments: { commentText } },
      //         },
      //         {
      //           new: true,
      //           runValidators: true,
      //         }
      //       );
      //     },
      //     removeThought: async (parent, { thoughtId }) => {
      //       return Thought.findOneAndDelete({ _id: thoughtId });
      //     },
      //     removeComment: async (parent, { thoughtId, commentId }) => {
      //       return Thought.findOneAndUpdate(
      //         { _id: thoughtId },
      //         { $pull: { comments: { _id: commentId } } },
      //         { new: true }
      //       );
      //     },
      addEvent: async (
        parent,
        { eventName, eventDate, eventTime, location }
      ) => {
        return Event.create({ eventName, eventDate, eventTime, location });
      },
      deleteEvent: async (parent, { id }) => {
        return Event.findByIdAndDelete(id);
      },
    },
  };

module.exports = resolvers;