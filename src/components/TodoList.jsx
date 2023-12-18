import React from "react";
import TodoItem from "./TodoItem";
import "../index.css";
const TodoList = ({ todos, deleteItem }) => {
  return (
    <div>
      <ul>
        {todos.map((elem) => (
          <TodoItem key={elem.id} {...elem} deleteItem={deleteItem} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
