import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [id, setId] = useState("");
  const [nomUser, setNomUser] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");

  const handleCreateUser = async () => {
    try {
      // Convert the date string to the desired format
      const formattedDate = new Date(date).toISOString();

      const response = await axios.post("http://localhost:8088/createUser", {
        id: parseInt(id),
        nomUser: nomUser,
        title: title,
        email: email,
        age: parseInt(age),
        date: formattedDate, // Use the formatted date
      });

      // Check if the user was created successfully
      if (response.status === 200) {
        // Handle success, for example, show a success message or redirect to another page
        console.log("User created successfully");
      }
    } catch (error) {
      // Handle error, display an error message or handle as needed
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create User</h2>
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
          <label>Nom User:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setNomUser(e.target.value)}
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
          <label>Email :</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Age :</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setId(e.target.value)}
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
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleCreateUser}
        >
          Create User
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
