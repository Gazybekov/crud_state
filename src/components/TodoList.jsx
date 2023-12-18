import React from "react";
import TodoItem from "./TodoItem";
import "../index.css";
const TodoList = ({
  todos,
  deleteItem,
  edit,
  editTodo,
  value,
  setValue,
  saveEditTodo,
}) => {
  return (
    <div>
      <ul>
        {todos.map((elem) => (
          <TodoItem
            edit={edit}
            editTodo={editTodo}
            value={value}
            setValue={setValue}
            saveEditTodo={saveEditTodo}
            key={elem.id}
            {...elem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
