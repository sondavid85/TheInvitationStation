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
      id
    }
  }
`;
export const ADD_NOTE_TO_EVENT = gql`
  mutation AddNoteToEvent($eventId: ID!, $text: String!) {
    addNoteToEvent(eventId: $eventId, text: $text) {
      id
      notes
    }
  }
`;