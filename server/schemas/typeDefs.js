// const { gql } = require('@apollo/server');

const typeDefs = `
  type Query {
    users: [User]
  }

  type User {
    id: ID!
    username: String
    email: String
  }

  type Mutation {
    addUser(username: String!, email:String!, password: String!): User
  }
`;

module.exports = typeDefs;
