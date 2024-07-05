
import React, { useState, useEffect } from 'react';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import './App.css'

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

    // Save tasks to local storage whenever the tasks state changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const editTask = (index, newTask) => {
        const updatedTasks = tasks.map((task, i) => (i === index ? newTask : task));
        setTasks(updatedTasks);
    };

    return (
        <div className="container">
            <h1 className=" heading text-center my-4">To-Do List</h1>
            <TaskInput addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
        </div>
    );
};

export default App;
