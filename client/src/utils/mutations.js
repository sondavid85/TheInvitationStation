import { gql } from "@apollo/client";

export const CREATE_EVENT = gql`
  mutation CreateEvent(
    $eventName: String!
    $eventDate: String!
    $eventTime: String!
    $location: String!
  ) {
    addEvent(
      eventName: $eventName
      eventDate: $eventDate
      eventTime: $eventTime
      location: $location
    ) {
      id
      eventName
      eventDate
      eventTime
      location
    }
  }
`;
export const SIGN_UP = gql`
mutation signUp($email: String!, $password: String!) {
  addUser(email: $email, password: $password) {
    email
    password
    id
  }
}`;
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
