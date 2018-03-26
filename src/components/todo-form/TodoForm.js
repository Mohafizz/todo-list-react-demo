import React from "react";
import "./TodoForm.css";
import PropTypes from "prop-types";

const TodoForm = props => (
  <div>
    <form onSubmit={props.submitForm}>
      <label>
        <input
          id="form-input"
          type="text"
          value={props.value}
          onChange={props.changeForm}
        />
      </label>
      <input id="form-submit" type="submit" value="Submit" />
    </form>
  </div>
);

TodoForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  changeForm: PropTypes.func.isRequired
};

export default TodoForm;
