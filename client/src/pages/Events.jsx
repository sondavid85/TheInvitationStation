import React from "react";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../utils/queries";
import { useNavigate } from "react-router-dom";
import Eventcard from "../components/Eventcard";
import Button from "react-bootstrap/Button";

export default function Events() {

    const { data } = useQuery(GET_EVENTS);

    const navigate = useNavigate();
    const handleNewEventClick = () => {
    navigate("/createevent");
    };

  return (
    <>
      <h1>View your upcoming events</h1>
      <Button onClick={handleNewEventClick}>New Event</Button>
      {data &&
        data.events.map((event) => (
          <Eventcard
            key={event.id}
            eventId={event.id}
            eventName={event.eventName}
            eventDate={event.eventDate}
            eventTime={event.eventTime}
            location={event.location}
            notes={event.notes}
          />
        ))}
    </>
  );
}
