import React, { useState } from 'react';
import './index.css'

const TaskList = ({ tasks, deleteTask, editTask }) => {
    const [editIndex, setEditIndex] = useState(null);
    const [newTask, setNewTask] = useState('');

    const handleEdit = (index) => {
        setEditIndex(index);
        setNewTask(tasks[index]);
    };

    const handleSave = (index) => {
        editTask(index, newTask);
        setEditIndex(null);
        setNewTask('');
    };

    

    return (
        <div className="list-container">
            <h1>Todo Items</h1>
            <ol className="list-group">
            
            {tasks.map((task, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    {editIndex === index ? (
                        <input
                            type="text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            className="form-control me-2 flex-grow-1"
                        />
                    ) : (
                        <span className="flex-grow-1">{task}</span>
                    )}
                       
                        <div className="btn-group ">
                        {editIndex === index ? (
                            <button className="save-btn btn-success btn-sm me-2" onClick={() => handleSave(index)}>
                                Save
                            </button>
                        ) : (
                            
                            <button className="edit-btn btn-sm me-2" onClick={() => handleEdit(index)}>
                                <img class="edit-img" src="https://cdn-icons-png.flaticon.com/512/84/84380.png" alt="edit"/>
                            </button>
                            
                            
                        )}
                        <button className="delete-btn  btn-sm me-2" onClick={() => deleteTask(index)}>
                                <img className='delete-img' src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete"/>
                            </button>
                        
                        </div>


                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TaskList;
