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
