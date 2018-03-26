import React, { Component } from "react";
import { todos } from "../../utils/seedData";
import "./TodoList.css";
import TodoItem from "../todo-item/TodoItem";
import TodoForm from "../todo-form/TodoForm";
import PropTypes from "prop-types";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      newtodo: { description: "", isCompleted: false }
    };
  }

  render() {
    return (
      <div id="todo-list">
        <h1 id="todo-title">{this.props.title}</h1>
        {this.state.todos.map((todo, i) => {
          return (
            <TodoItem
              key={i}
              todo={todo}
              done={this.taskCompleted.bind(this, i)}
            />
          );
        })}
        <br />
        <TodoForm
          submitForm={this.handleSubmit.bind(this)}
          value={this.state.newtodo.description}
          changeForm={this.handleChange.bind(this)}
        />
      </div>
    );
  }

  taskCompleted(todoIndex) {
    const todosCopy = [...this.state.todos];
    const todoTobeUpdated = todosCopy[todoIndex];
    todoTobeUpdated["isCompleted"]
      ? (todoTobeUpdated["isCompleted"] = false)
      : (todoTobeUpdated["isCompleted"] = true);
    this.setState({ todos: todosCopy });
  }

  handleChange(event) {
    this.setState({
      newtodo: { description: event.target.value, isCompleted: false }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const todosCopy = [...this.state.todos];
    todosCopy.push(this.state.newtodo);
    this.setState({
      todos: todosCopy,
      newtodo: { description: "", isCompleted: false }
    });
  }
}

TodoList.propTypes = {
  title: PropTypes.string.isRequired
};

TodoList.defaultProps = {
  title: "My todo list"
};
export default TodoList;
