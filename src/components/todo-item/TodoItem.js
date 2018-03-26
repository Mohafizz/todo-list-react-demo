import React from "react";
import "./TodoItem.css";
import PropTypes from "prop-types";

const TodoItem = props => {
  const strikeThrough = props.todo.isCompleted ? "done" : "";
  return (
    <li id="todo-item" className={strikeThrough} onClick={props.done}>
      {props.todo.description}
    </li>
  );
};

TodoItem.propTypes = {
  done: PropTypes.func.isRequired,
  isCompleted: PropTypes.string,
  description: PropTypes.string
};

export default TodoItem;
