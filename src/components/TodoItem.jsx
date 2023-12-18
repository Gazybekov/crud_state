import React from "react";
import "../index.css";
import { Button } from "@mui/material";

const TodoItem = ({
  id,
  title,
  deleteItem,
  edit,
  editTodo,
  value,
  setValue,
  saveEditTodo,
}) => {
  const updateDeleteItem = () => {
    deleteItem(id);
  };
  const editTodoTitle = () => {
    editTodo(id);
    setValue(title);
  };

  return (
    <div>
      <li className="todo">
        <label>
          <input type="checkbox" />
          {edit == id ? (
            <div>
              <input
                type="text"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </div>
          ) : (
            <span>{title}</span>
          )}
          {edit == id ? (
            <div>
              <Button onClick={() => saveEditTodo(id)} variant="outlined">
                Save
              </Button>
            </div>
          ) : (
            <div>
              <Button onClick={updateDeleteItem} variant="outlined">
                Delete
              </Button>
              <Button onClick={editTodoTitle} variant="outlined">
                Edit
              </Button>
            </div>
          )}
        </label>
      </li>
    </div>
  );
};

export default TodoItem;
