import React from "react";
import "./TodoForm.css";

const TodoForm = props => (
  <div>
    <form onSubmit={props.submitForm}>
      <label>
        <input type="text" value={props.value} onChange={props.changeForm} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default TodoForm;
