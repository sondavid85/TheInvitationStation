import React from "react";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../utils/queries";
import { useNavigate } from "react-router-dom";
import Eventcard from "../components/Eventcard";
import Button from "react-bootstrap/Button";

export default function Events() {

    const { data, error } = useQuery(GET_EVENTS);

    const navigate = useNavigate();
    const handleNewEventClick = () => {
    navigate("/createevent");
    };

    console.log("Error:", error);
    console.log("Data:", data);
    if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>View your upcoming events</h1>
      <Button onClick={handleNewEventClick}>New Event</Button>
      {data && data.events.map((event) => (
        <Eventcard
          key={event.id}
          eventName={event.eventName}
          eventDate={event.eventDate}
          eventTime={event.eventTime}
          location={event.location}
        />
      ))}
    </>
  );
}
