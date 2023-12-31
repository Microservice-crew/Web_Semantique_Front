import React, { useState } from 'react';
import axios from 'axios';

function CreateGroup() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [capacity, setCapacity] = useState('');
    const [date, setDate] = useState('');

    const handleCreateGroup = async () => {
        try {
            // Convert the date string to the desired format
            const formattedDate = new Date(date).toISOString();

            const response = await axios.post('http://localhost:8088/createGroup', {
                id: parseInt(id),
                name: name,
                capacity: capacity,
                date: formattedDate, // Use the formatted date
            });

            // Check if the group was created successfully
            if (response.status === 200) {
                // Handle success, for example, show a success message or redirect to another page
                console.log('Group created successfully');
            }
        } catch (error) {
            // Handle error, display an error message or handle as needed
            console.error('Error creating group:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Create Group</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label text-start">ID:</label>
                    <input type="number" className="form-control" onChange={(e) => setId(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label text-start">Name:</label>
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label text-start">Capacity:</label>
                    <input type="number" className="form-control" onChange={(e) => setCapacity(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label text-start">Date:</label>
                    <input type="datetime-local" className="form-control" onChange={(e) => setDate(e.target.value)} />
                    {/* Use the datetime-local input type to capture the date and time */}
                </div>

                <button type="button" className="btn btn-primary" onClick={handleCreateGroup}>
                    Create Group
                </button>
            </form>
        </div>
    );
}

export default CreateGroup;
