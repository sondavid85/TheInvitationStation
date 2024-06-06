// const { gql } = require('@apollo/server');

const typeDefs = `
  type Query {
    users: [User]
    events: [Event]
  }

  type User {
    id: ID!
    username: String
    email: String
  }

   type Event {
    id: ID!
    eventName: String
    eventDate: String
    eventTime: String
    location: String
  }

  type Mutation {
    addUser(username: String!, email:String!, password: String!): User
    addEvent(eventName: String!, eventDate: String!, eventTime: String!, location: String!): Event
    deleteEvent(id: ID!): Event
  }
`;

module.exports = typeDefs;
