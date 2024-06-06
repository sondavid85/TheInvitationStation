import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CREATE_EVENT } from "../utils/mutations";

function Neweventform() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [location, setLocation] = useState('');

  const [createEvent, { data }] = useMutation(CREATE_EVENT);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEvent({
        variables: {
          eventName,
          eventDate,
          eventTime,
          location,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formEventName">
        <Form.Label>Event Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Birthday Party"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEventDate">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="1/1/2024"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEventTime">
        <Form.Label>Time</Form.Label>
        <Form.Control
          type="text"
          placeholder="2pm"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLocation">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="123 Main St. San Diego, CA"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      {data && <p>Event Created Successfully!</p>}
    </Form>
  );
}

export default Neweventform;
