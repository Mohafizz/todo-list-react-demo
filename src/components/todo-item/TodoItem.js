import React from "react";
import "./TodoItem.css";

const TodoItem = props => {
  const strikeThrough = props.todo.isCompleted ? "done" : "";

  return (
    <li className={strikeThrough} onClick={props.done}>
      {props.todo.description}
    </li>
  );
};
export default TodoItem;