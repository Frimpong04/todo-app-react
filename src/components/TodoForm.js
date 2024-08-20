import React, { useState } from 'react';
// import { todosContext } from '../context/todoContext';

// styles
import './TodoForm.css';

const TodoForm = ({ handleFormVisibility, addTodo }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        // prevent default form action
        e.preventDefault();

        // add todo
        addTodo(title, description);

        // reset form fields
        setTitle('');
        setDescription('');
        
        handleFormVisibility();
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input  type='text' 
                    value={title} 
                    placeholder='todo' 
                    required 
                    onChange={(e) => setTitle(e.target.value)} 
                    className='title-input'
                />
                <input 
                    type='text' 
                    value={description} 
                    placeholder='describe todo' 
                    required
                    onChange={(e) => setDescription(e.target.value)} 
                    className='description-input'
                />
                <input type='submit' value='Add Todo' />
            </form>
        </div>
        
    )
}

export default TodoForm;