import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
function Todo({ todo, setTodos, todos }) {
  const handleCompleteChange = (e) => {
    const value = parseFloat(e.target.value);
    setTodos(
      todos.map((item) => {
        if (item.id === value) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const handleDeleteTodo = (id) => {
    setTimeout(() => {
      const currentTodoID = parseFloat(id);
      const remainingTodos = todos.filter((item) => item.id !== currentTodoID);
      setTodos(remainingTodos);
    }, 250);
  };

  return (
    <li className={`todo-item bounceIn `}>
      <input
        onChange={handleCompleteChange}
        type="checkbox"
        name="completed"
        id={`completed${todo.id}`}
        value={todo.id}
      />

      <div className="flex-wider todo-title">
        <label
          className={`capture-wide-parent ${
            todo.completed && "completed-todo"
          }`}
          htmlFor={`completed${todo.id}`}
        >
          {todo.title}
        </label>
      </div>

      <div className="edit-btn-container">
        <button onClick={() => handleDeleteTodo(todo.id)}>
          <DeleteForeverIcon style={{ color: "#18171d" }} />
        </button>
      </div>
    </li>
  );
}

export default Todo;
