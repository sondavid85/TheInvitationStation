// const { gql } = require('@apollo/server');

const typeDefs = `
  type Query {
    users: [User]
    events: [Event]
    login: [Login]
  }

  type User {
    id: ID!
    email: String!
    password: String!
  }

   type Event {
    id: ID!
    eventName: String
    eventDate: String
    eventTime: String
    location: String
    notes: [String]
  }

  type Login {
    id : ID
    token: ID
    email: String!
    password: String!
  }

  type Mutation {
    addUser(email:String!, password: String!): User
    addEvent(eventName: String!, eventDate: String!, eventTime: String!, location: String!): Event
    deleteEvent(id: ID!): Event
    login(email:String!, password:String!): Login
    addNoteToEvent(eventId: ID!, text: String!): Event
  }
`;

module.exports = typeDefs;
