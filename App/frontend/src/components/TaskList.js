import React from 'react';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task._id}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => updateTask(task._id, { ...task, completed: !task.completed })}
                    />
                    <strong>{task.title}</strong>: {task.description}
                    <button onClick={() => deleteTask(task._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;