import React, { useState, useContext } from 'react';
import { TodosContext } from '../context/todoContext';

// styles
import './NavBar.css';

// components
import TodoForm from './TodoForm';



const NavBar = () => {
    const [showForm, setShowForm] = useState(false); 
    console.log(showForm);
    


    const { addTodo, todos, tasksDone } = useContext(TodosContext);

    // change form visibility 
    const handleFormVisibility = () => {
        setShowForm(false);
    }

    let bgColor = "";
    const fiftyPercent = Math.floor( Number(tasksDone.length) / (Number(todos.length)) * 100);
    let message = "";
    
    console.log(fiftyPercent);

    if(tasksDone.length === 0) {
        message = "Get Started";
        bgColor="start";
    }

    if(fiftyPercent > 0) {
        message = "Keep Going";
        bgColor="going";
    }
    
    if(fiftyPercent === 100) {
        message = "Hurray";
        bgColor="hurray";
    }

  
    return (
        <div className="nav-bar">
            <h1>MiTODO</h1>
            <div className={`tasks-done ${bgColor}`}>
                <p>{message}</p>
                <div className='stats'>
                    <h2>{tasksDone.length} / {todos.length}</h2>
                </div>
            </div>
            <button className='add-btn' onClick={() => setShowForm(true)}>+</button>

            { showForm && <TodoForm handleFormVisibility={handleFormVisibility} 
            addTodo={addTodo}  /> }
        </div>
    )
}

export default NavBar;