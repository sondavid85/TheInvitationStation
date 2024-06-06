import { gql } from "@apollo/client";

export const GET_EVENTS_QUERY = gql`
  query GetEvents {
    events {
      id
      eventName
      eventDate
      eventTime
      location
    }
  }
`;
