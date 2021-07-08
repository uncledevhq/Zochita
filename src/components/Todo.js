import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Todo({todo,setTodos, todos}) {
    const handleCompleteChange = (e) => {
        const value = parseFloat(e.target.value);
        setTodos(todos.map((item) => {
            if(item.id === value) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))

    }
    const handleDeleteTodo = (e) => {
        e.stopPropagation();


        const value = parseFloat(e.target.value);
        // console.log(e.target.value, "changed")
        const newTodo = todos.filter((item) => item.id !== value)
        setTodos(newTodo);
        // console.log(todos.length);
    }
    return (
        
        <li className={`todo-item ${todo.completed && "completed-todo"}`}>
            <div className="">
                <input  onChange={handleCompleteChange} type="checkbox" name="completed" id={`completed${todo.id}`} value={todo.id} />
            </div>
            <div className="flex-wider todo-title">
                <label className="capture-wide-parent" htmlFor={`completed${todo.id}`}>
                    {/* <input className={`todo-item ${todo.completed && "completed-todo"}`} value= type="text" readOnly /> */}
                    {todo.title}
                </label>
            </div>

            <div className="edit-btn-container">
                <button value={todo.id} onClick={handleDeleteTodo}>
                    Delete
                </button>
            </div>
           
        </li>
    )
}



export default Todo;