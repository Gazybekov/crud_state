import React, { useEffect, useState } from "react";
import "./index.css";
import TodoList from "./components/TodoList";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  useEffect(() => {
    const data = localStorage.getItem("todos") || [];
    setTodos(JSON.parse(data));
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteItem = (id) => {
    const updateItem = todos.filter((elem) => elem.id !== id);
    setTodos(updateItem);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: todoTitle,
      },
    ]);
    setTodoTitle("");
  };

  return (
    <div>
      <div className="container">
        <h1>Todo app</h1>
        <div className="input-field">
          <form onSubmit={addTodo}>
            <input
              type="text"
              value={todoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
            />
            <label>TodoName</label>
          </form>
        </div>
        <TodoList todos={todos} deleteItem={deleteItem} />
      </div>
    </div>
  );
};

export default App;
