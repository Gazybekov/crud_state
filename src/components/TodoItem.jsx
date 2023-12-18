import React from "react";
import "../index.css";
import { Button } from "@mui/material";

const TodoItem = ({ id, title, deleteItem }) => {
  const updateDeleteItem = () => {
    deleteItem(id);
  };

  return (
    <div>
      <li className="todo">
        <label>
          <input type="checkbox" />
          <span>{title}</span>
          <Button onClick={updateDeleteItem} variant="outlined">
            Delete
          </Button>
        </label>
      </li>
    </div>
  );
};

export default TodoItem;
