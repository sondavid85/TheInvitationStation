// const { users } = require('../models');

const User = require("../models/users");

  const resolvers = {
    Query: {
      users: () => users,
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
  },
};

module.exports = resolvers;