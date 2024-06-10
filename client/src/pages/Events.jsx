import React from "react";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../utils/queries";
import { useNavigate } from "react-router-dom";
import Eventcard from "../components/Eventcard";
import Nav from "../components/Nav";
import Button from "react-bootstrap/Button";

function sortEventsByDate(events) {
  return events.slice().sort((a, b) => a.eventDate - b.eventDate);
}

export default function Events() {

    const { data } = useQuery(GET_EVENTS);

    const navigate = useNavigate();
    const handleNewEventClick = () => {
    navigate("/createevent");
    };

  return (
    <>
      <Nav />
      <div class="hero">
        <img src="./logo.jpg" className="logo" />
      </div>
      <h1 style={{ marginTop: "1em" }}>Upcoming Events</h1>
      <Button onClick={handleNewEventClick} className="white-button">
        New Event
      </Button>
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