import React, { useState } from "react";

//material icons
import AddBoxIcon from "@material-ui/icons/AddBox";

// custom components
import Todo from "./Todo";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [addTodoInput, setAddTodoInput] = useState("");

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random() * 100,
      title: addTodoInput,
      date: new Date().toDateString(),
      completed: false,
    };
    if (!newTodo.title || newTodo.title === " ") {
      alert("empty task. please add a tsk");
      return false;
    }
    setTodos([...todos, newTodo]);
    setAddTodoInput("");
    // console.log("adding to do", todos);
  };
  const handleAddInput = (e) => {
    setAddTodoInput(e.target.value);
  };
  return (
    <div className="section-ya-todo">
      <div>
        <h3 class="ya-title">Tasks: [{todos.length || "0"}] </h3>
      </div>
      <form onSubmit={handleTodoSubmit}>
        <input
          value={addTodoInput}
          onChange={handleAddInput}
          type="text"
          name="addTodo"
          id="addTodo"
          placeholder="Create your new Task"
          required
          autoFocus
          autoComplete="off"
        />
        <button className="button">
          <AddBoxIcon fontSize="large" />
        </button>
      </form>
      <ul className="todo-sect-lists">
        {todos.length
          ? todos.map((todo, index) => (
              <Todo
                todo={todo}
                setTodos={setTodos}
                todos={todos}
                key={todo.id}
              />
            ))
          : null}
      </ul>
    </div>
  );
}

export default Todos;
