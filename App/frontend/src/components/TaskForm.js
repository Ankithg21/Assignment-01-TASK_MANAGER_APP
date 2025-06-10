import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
            <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;