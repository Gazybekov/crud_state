import React, { useEffect, useState } from "react";
import "./index.css";
import TodoList from "./components/TodoList";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

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

  const editTodo = (id, title) => {
    setEdit(id);
    setValue(title);
  };
  const saveEditTodo = (id) => {
    let newTodo = todos.map((elem) => {
      if (elem.id == id) {
        elem.title = value;
      }
      return elem;
    });
    setTodos(newTodo);
    setEdit(null);
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

        <TodoList
          todos={todos}
          deleteItem={deleteItem}
          edit={edit}
          editTodo={editTodo}
          saveEditTodo={saveEditTodo}
          value={value}
          setValue={setValue}
        />
      </div>
    </div>
  );
};

export default App;
