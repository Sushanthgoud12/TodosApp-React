import React, { useState } from 'react';
import './index.css'
const TaskInput = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTask(task);
            setTask('');
        }
    };

    return (
        <div className="bg-container">
        <form onSubmit={handleSubmit} className="form mb-4">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="What needs to be done?"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button className="add-btn" type="submit">Add</button>
            </div>
        </form>
        </div>
    );
};

export default TaskInput;
