import React, { useContext } from 'react';
import { TodosContext } from '../context/todoContext';


// components
import TodoDetail from './TodoDetail';

// styles
import './TodoList.css'


const TodoList = () => {

    const { todos } = useContext(TodosContext);

    return (
        <div className='lists-container'>
            <ul>
                {todos.map(todo => {
                    return (<TodoDetail todo={todo} key={todo.id}/>);
                })}
            </ul>

        </div>
    )
}

export default TodoList;