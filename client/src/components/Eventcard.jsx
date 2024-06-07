import React from "react";
import Card from "react-bootstrap/Card";

function Eventcard({ eventName, eventDate, eventTime, location }) {
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "48rem", margin: "16px" }}>
        <Card.Body>
          <Card.Title>{eventName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{eventDate}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{eventTime}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{location}</Card.Subtitle>

          <Card.Link href="#">Add a note to this event</Card.Link>
          <Card.Text>this will be an area that will show user notes</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Eventcard;
