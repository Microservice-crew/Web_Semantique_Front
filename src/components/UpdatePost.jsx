import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdatePost() {
  const { id } = useParams(); // Get the post ID from the URL
  const [formData, setFormData] = useState({
    id: id,
    nomUser: "",
    title: "",
    contenu: "",
    date: "",
  });
  const [message, setMessage] = useState("");

  // Fetch post data when the component mounts
  useEffect(() => {
    // Make a GET request to fetch the post data based on the ID
    fetch("http://localhost:8088/getPostById?id=" + id)
      .then((response) => response.json())
      .then((data) => {
        // Populate the formData state with the fetched data
        setFormData({
          nomUser: data.nomUser,
          title: data.title,
          contenu: data.contenu,
          date: data.date,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Failed to fetch post data.");
      });
  }, [id]); // Run this effect whenever the ID changes

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make the PUT request to update the event
    fetch("http://localhost:8088/updatePost?id=" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Failed to update the post.");
      });
  };

  return (
    <div>
      <h1>Update Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input
          type="number"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleInputChange}
          disabled={true}
        />
        <br />

        <label htmlFor="nomUser">Nom User:</label>
        <input
          type="text"
          id="nomUser"
          name="nomUser"
          value={formData.type}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="contenu">Contenu:</label>
        <input
          type="text"
          id="contenu"
          name="contenu"
          value={formData.contenu}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="date">Date:</label>
        <input
          type="text"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
        <br />

        <button type="submit">Update Post</button>
      </form>

      <div id="message">{message}</div>
    </div>
  );
}

export default UpdatePost;
