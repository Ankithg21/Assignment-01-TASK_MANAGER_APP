import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/api/tasks');
        const data = await res.json();
        setTasks(data);
    };

    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        });
        const newTask = await res.json();
        setTasks([...tasks, newTask]);
    };

    const updateTask = async (id, updatedTask) => {
        const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedTask)
        });
        const data = await res.json();
        setTasks(tasks.map(task => (task._id === id ? data : task)));
    };

    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/api/tasks/${id}`, { method: 'DELETE' });
        setTasks(tasks.filter(task => task._id !== id));
    };

    return (
        <div className="container">
            <h1>Task Manager</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
    );
};

export default App;