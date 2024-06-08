import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import { useMutation } from "@apollo/client";
import {ADD_NOTE_TO_EVENT} from "../utils/mutations"

function Eventcard({
  eventId, 
  eventName,
  eventDate,
  eventTime,
  location,
  notes,
}) {
  const [noteText, setNoteText] = useState("");
  const [addNoteToEvent] = useMutation(ADD_NOTE_TO_EVENT);

 const handleAddNote = async () => {
   try {
     await addNoteToEvent({ variables: { eventId, text: noteText } });
     setNoteText(""); // Clear the text field after adding the note
   } catch (error) {
     console.error("Error adding note:", error);
     // Log detailed error information
     if (error.networkError) {
       console.error("Network error:", error.networkError);
     }
     if (error.graphQLErrors) {
       error.graphQLErrors.forEach(({ message, locations, path }) =>
         console.error(
           `GraphQL error: Message: ${message}, Location: ${locations}, Path: ${path}`
         )
       );
     }
   }
 };

  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "48rem", margin: "14px" }}>
        <Card.Body>
          <Card.Title>{eventName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{eventDate}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{eventTime}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{location}</Card.Subtitle>

          <input
            className="mb-2"
            type="text"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Add a note"
          />
          <button onClick={handleAddNote}>Submit</button>

          <Card.Text as="div">
            {notes &&
              notes.map((note, index) => (
                <div key={index}>
                  <p>{note}</p>
                </div>
              ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Eventcard;
