import React, { useContext, useState } from 'react';


// styles
import "./EditForm.css";
import { TodosContext } from '../context/todoContext';

const EditForm = ({ editTodo, handleShowEditForm }) => {
    const [newTitle, setNewTitle] = useState(editTodo.title);
    const [newDescription, setNewDescription] = useState(editTodo.description);

    const { updateTodo } = useContext(TodosContext);

    const handleUpdate = (e) => {
        e.preventDefault();
       
        // update todo
        updateTodo(editTodo.id, newTitle, newDescription)
        
        // hide edit form
        handleShowEditForm();
    }

    return (
        <div className="edit-form-container">
            <form className="edit-form" onSubmit={handleUpdate}  >
                <input type='text' 
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}  />
                <input type='text' 
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)} />
                <input type="submit" value="Edit Task"  />
            </form>
        </div>
    )
};

export default EditForm;