import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

function UpdateEvent() {
    const { id } = useParams(); // Get the event ID from the URL
    const [formData, setFormData] = useState({
        id: id,
        title: '',
        description: '',
        date: '',
        type: '',
    });
    const [message, setMessage] = useState('');

    // Fetch event data when the component mounts
    useEffect(() => {
        // Make a GET request to fetch the event data based on the ID
        fetch('http://localhost:8088/getEventById?id='+id)
            .then((response) => response.json())
            .then((data) => {
                // Populate the formData state with the fetched data
                setFormData({
                    title: data.title,
                    description: data.description,
                    date: data.date,
                    type: data.type,
                });
            })
            .catch((error) => {
                console.error('Error:', error);
                setMessage('Failed to fetch event data.');
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
        fetch('http://localhost:8088/updateEvent?id='+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Request failed');
                }
                return response.json();
            })
            .then((data) => {
                setMessage(data);
            })
            .catch((error) => {
                console.error('Error:', error);
                setMessage('Failed to update the event.');
            });
    };

    return (
        <div>
            <h1>Update Event</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID:</label>
                <input
                    type="number"
                    id="id"
                    name="id"
                    value={formData.id}
                    onChange={handleInputChange}
                    disabled={true}
                /><br />

                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                /><br />
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                /><br />
                <label htmlFor="date">Date:</label>
                <input
                    type="text"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                /><br />
                <label htmlFor="type">Type:</label>
                <input
                    type="text"
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                /><br />

                <button type="submit">Update Event</button>
            </form>

            <div id="message">{message}</div>
        </div>
    );
}

export default UpdateEvent;
