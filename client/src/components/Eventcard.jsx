import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import { useMutation } from "@apollo/client";
import {ADD_NOTE_TO_EVENT} from "../utils/mutations"

function convertUnixToDate(unixTimestamp) {
  unixTimestamp = Number(unixTimestamp);
  
  const date = new Date(unixTimestamp);
  
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  
  const formattedDay = day < 10 ? '0' + day : day;
  const formattedMonth = month < 10 ? '0' + month : month;
  
  return `${formattedMonth}/${formattedDay}/${year}`;
}

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
      <Card style={{ width: "48rem", margin: "14px", backgroundColor: "#f6f3f4" }}>
        <div class="card-title">
            <h2>{eventName}</h2>
        </div>
        <Card.Body>
          <h5>When</h5>
          <Card.Text className="mb-2 text-muted">{convertUnixToDate(eventDate)}{!!eventTime ? <span><strong> at</strong> {eventTime}</span> : ''}</Card.Text>
          <h5>Where</h5>
          <Card.Text className="mb-2 text-muted">{}</Card.Text>
          <Card.Text className="mb-2 text-muted">{location}</Card.Text>
          <Card.Text as="div">
            { notes && notes.length > 0 ? <h4 style={{marginTop: "1em", textAlign: "left", fontStyle: "italic"}}>Notes</h4> : null }
            <ul style={{listStyleType: "circle", textAlign:"left", fontStyle: "italic"}}>
            {notes &&
              notes.map((note, index) => (
                <li key={index}>
                  {note}
                </li>
              ))}
            </ul>
          </Card.Text>
          <input
            className="mb-2"
            type="text"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Add a note"
          />

          <button onClick={handleAddNote} style={{marginLeft: ".5em"}}>Submit</button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Eventcard;
