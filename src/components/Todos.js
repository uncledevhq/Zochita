import React, { useState } from 'react';

//material icons
import AddBoxIcon from '@material-ui/icons/AddBox';

// custom components
import Todo from './Todo';
import NoTodos from './NoTodos';

function Todos() {
    const [ todos, setTodos ] = useState([]);
    const [addTodoInput, setAddTodoInput] = useState("");

    const handleTodoSubmit = e => {
        e.preventDefault();
        const newTodo = {
            id: Math.random() * 100,
            title: addTodoInput,
            date: new Date().toDateString(),
            completed: false
        }
        if( !newTodo.title ) {
            alert("empty task. please add a tsk");
            return false;
        }
        setTodos([
            ...todos, newTodo
        ])
        setAddTodoInput("");
        // console.log("adding to do", todos);
    }
    const handleAddInput = e => {
        setAddTodoInput(e.target.value);
    }
    return (
        <div className="section-ya-todo">
            <form onSubmit={handleTodoSubmit}>
                <input 
                value={addTodoInput} 
                onChange={handleAddInput}  
                type="text" 
                name="addTodo" 
                id="addTodo" 
                placeholder="Create your new Task" 
                required
                autoComplete="off"/>
                <button className="button">
                    <AddBoxIcon fontSize="large" />
                </button>
            </form>
            {todos.length || ""}

            { todos.length ? todos.map((todo, index) => (
                <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} />
            )) : <NoTodos />}

            
        </div>
    )
}



export default Todos;