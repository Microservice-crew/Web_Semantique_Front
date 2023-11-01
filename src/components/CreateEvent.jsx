import React, { useState } from 'react';
import axios from 'axios';

function CreateEvent() {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');

    const handleCreateEvent = async () => {
        try {
            // Convert the date string to the desired format
            const formattedDate = new Date(date).toISOString();

            const response = await axios.post('http://localhost:8088/createEvent', {
                id: parseInt(id),
                title: title,
                description: description,
                date: formattedDate, // Use the formatted date
                type: type,
            });

            // Check if the event was created successfully
            if (response.status === 200) {
                // Handle success, for example, show a success message or redirect to another page
                console.log('Event created successfully');
            }
        } catch (error) {
            // Handle error, display an error message or handle as needed
            console.error('Error creating event:', error);
        }
    };

    return (
        <div>
            <h2>Create Event</h2>
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
                    <input type="datetime-local" onChange={(e) => setDate(e.target.value)} />
                    {/* Use the datetime-local input type to capture the date and time */}
                </div>
                <div>
                    <label>Type:</label>
                    <input type="text" onChange={(e) => setType(e.target.value)} />
                </div>
                <button type="button" onClick={handleCreateEvent}>
                    Create Event
                </button>
            </form>
        </div>
    );
}

export default CreateEvent;
