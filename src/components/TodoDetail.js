import React, { useContext, useState } from 'react'


// styles
import './TodoDetail.css'

// images
import deleteIcon from '../images/trash-solid.svg';
import editIcon from '../images/pen-to-square-regular.svg';
import { TodosContext } from '../context/todoContext';
import EditForm from './EditForm';

const TodoDetail = ({todo}) => {
    // const [editTodo, setEditTodo] = useState[null];
    const [showEditForm, setShowEditForm] = useState(false);
    const { removeTodo, addTasksDone, removeTasksDone } = useContext(TodosContext);

    const handleChecked = () => {
         console.log(todo.completed);
         todo.completed = !todo.completed;
         console.log(todo.completed);

         if(todo.completed) {
            addTasksDone(todo);
         }

         if(!todo.completed) {
            removeTasksDone(todo.id);
         }

    }

    const handleRemoveTodo = (id) => {
        removeTodo(todo.id);
        removeTasksDone(todo.id);
    }

    const handleShowEditForm = (id) => {
        console.log(todo.id);
        setShowEditForm(false);
    }

    const showEditFormOnCondition = () => {
        if(!todo.completed) {
            setShowEditForm(true);
        } else {
            setShowEditForm(false);
        } 
        
    }

    return (
        <li className="list">
            <div className='check-container'>
                <input type="checkbox" onChange={handleChecked} />
                <div className="todo-items">
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                </div>
            </div>
           
            <div className='icons'>
                <img src={editIcon} alt='edit-icon'  
                onClick={showEditFormOnCondition} />
                <img src={deleteIcon} alt='trash can' onClick={handleRemoveTodo}/>
            </div>

            {showEditForm && <EditForm editTodo = {todo}  handleShowEditForm = {handleShowEditForm}  />}
        </li>
    )
}

export default TodoDetail;