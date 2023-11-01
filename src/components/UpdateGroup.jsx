import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

function UpdateGroup() {
    const { id } = useParams(); // Get the group ID from the URL
    const [formData, setFormData] = useState({
        id: id,
        name: '',
        capacity: '',
        date: '',
       
    });
    const [message, setMessage] = useState('');

    // Fetch group data when the component mounts
    useEffect(() => {
        // Make a GET request to fetch the group data based on the ID
        fetch('http://localhost:8088/getGroupById?id='+id)
            .then((response) => response.json())
            .then((data) => {
                // Populate the formData state with the fetched data
                setFormData({
                    name: data.name,
                    capacity: data.capacity,
                    date: data.date,
                    
                });
            })
            .catch((error) => {
                console.error('Error:', error);
                setMessage('Failed to fetch group data.');
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

        // Make the PUT request to update the group
        fetch('http://localhost:8088/updateGroup?id='+id, {
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
                setMessage('Failed to update the group.');
            });
    };

    return (
        <div>
            <h1>Update Group</h1>
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

                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                /><br />
                <label htmlFor="capacity">Capacity:</label>
                <input
                    type="number"
                    id="capacity"
                    name="capacity"
                    value={formData.capacity}
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
                

                <button type="submit">Update Group</button>
            </form>

            <div id="message">{message}</div>
        </div>
    );
}

export default UpdateGroup;