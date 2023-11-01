import React, { useState } from "react";
import axios from "axios";

function CreateReclamation() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleCreateReclamation = async () => {
    try {
      // Convert the date string to the desired format
      const formattedDate = new Date(date).toISOString();

      const response = await axios.post(
        "http://localhost:8088/createReclamation",
        {
          id: parseInt(id),
          title: title,
          description: description,
          date: formattedDate, // Use the formatted date
        }
      );

      // Check if the reclamation was created successfully
      if (response.status === 200) {
        // Handle success, for example, show a success message or redirect to another page
        console.log("Reclamation created successfully");
      }
    } catch (error) {
      // Handle error, display an error message or handle as needed
      console.error("Error creating reclamation:", error);
    }
  };

  return (
    <div>
      <h2>Create Reclamation</h2>
      <form>
        <div>
          <label>ID:</label>
          <input type="number" onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="datetime-local"
            onChange={(e) => setDate(e.target.value)}
          />
          {/* Use the datetime-local input type to capture the date and time */}
        </div>

        <button type="button" onClick={handleCreateReclamation}>
          Create Reclamation
        </button>
      </form>
    </div>
  );
}

export default CreateReclamation;
