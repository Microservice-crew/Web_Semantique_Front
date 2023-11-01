import React, { useState } from "react";
import axios from "axios";

function CreateReact() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [nombrelike, setNombrelike] = useState("");
  const [nombredislike, setNombredislike] = useState("");
  const [date, setDate] = useState("");

  const handleCreateEvent = async () => {
    try {
      // Convert the date string to the desired format
      const formattedDate = new Date(date).toISOString();

      const response = await axios.post("http://localhost:8088/createReact", {
        id: parseInt(id),
        title: title,
        nombrelike: parseInt(nombrelike),
        nombredislike: parseInt(nombredislike),
        date: formattedDate, // Use the formatted date
      });

      // Check if the event was created successfully
      if (response.status === 200) {
        // Handle success, for example, show a success message or redirect to another page
        console.log("Avis created successfully");
      }
    } catch (error) {
      // Handle error, display an error message or handle as needed
      console.error("Error creating event:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create React</h2>
      <form>
        <div className="mb-3">
          <label>ID:</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Title:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Nombre de like:</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setNombrelike(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Nombre dislike:</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setNombredislike(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Date:</label>
          <input
            type="datetime-local"
            className="form-control"
            onChange={(e) => setDate(e.target.value)}
          />
          {/* Use the datetime-local input type to capture the date and time */}
        </div>
        <button type="button" onClick={handleCreateEvent}>
          Create React
        </button>
      </form>
    </div>
  );
}

export default CreateReact;
