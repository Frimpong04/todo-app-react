import React, { useState, createContext} from 'react'
import { v4 as uuidv4} from 'uuid';



export const TodosContext = createContext();

const TodoContextProvider = (props) => {

    // state define
    const [todos, setTodos] = useState([]);
    const [tasksDone, setTasksDone] = useState([]);


    // add a todo
    const addTodo = (title, description) => {
        return setTodos([...todos, {
            title,
            description,
            completed: false,
            id: uuidv4()
        }])
    }

    // remove a todo
    const removeTodo = (id) => {
        return setTodos(prevState => prevState.filter(item => item.id !== id));
    }

    // add to tasksDone
    const addTasksDone = (obj) => {
        setTasksDone([...tasksDone, obj]);
    }
    // remove from Tasks Done

    const removeTasksDone = (id) => {
        setTasksDone(prevState => prevState.filter(item => item.id !== id));
    }

    // handle todo update
    const updateTodo = (id, title, description) => {
        // find Item To update
        let newTodos = [...todos];
        newTodos.forEach(item => {
            if(item.id === id) {
                item.title = title;
                item.description = description;
                item.completed = false;
                item.id=id
            }
        })

        setTodos(newTodos);
    }

    return (
        <TodosContext.Provider value={{todos, addTodo, removeTodo, tasksDone, addTasksDone, removeTasksDone, updateTodo}}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodoContextProvider;
