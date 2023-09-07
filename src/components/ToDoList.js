import React, { useState } from 'react';
import './ToDoList.css';

const ToDoList = () => 
{
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (event) => 
    {
        setTask(event.target.value);
    };

    const handleAddTask = () => {
        if(task.trim() !== '') {
            setTasks([...tasks, { text: task, done: false}])
            setTask('');
        }
    }


const handleCompleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
};

const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task,i) => i !== index)
    setTasks(updatedTasks);
}

const handleKeyPress = (event) => 
{
   if(event.key === 'Enter') {
        handleAddTask();
   }
};

return (
    <div className='container'>
        <h1>To Do List</h1>
        <input
            type="text"
            value={task}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder='Add a task'
        />
        <button onClick={handleAddTask}>Add a task</button>
        <ul>
            {tasks.map((item, index) => (
                <li key={index} className={item.done ? 'done' : ''}>
                    {item.text}
                    <button className='complete' onClick = {() => handleCompleteTask(index)}>Set to Done</button>
                    <button className='delete' onClick = {() => handleDeleteTask(index)}>Delete task</button>
                </li>
            ))}
        </ul>
    </div>
    );
};


export default ToDoList;
