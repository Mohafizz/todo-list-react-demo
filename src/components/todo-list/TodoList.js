import React, { Component } from "react";
import { todos } from "../../utils/seedData";
import "./TodoList.css";
import TodoItem from "../todo-item/TodoItem";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      newtodo: { value: "" }
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
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
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
    this.setState({ newtodo: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const todosCopy = [...this.state.todos];
    todosCopy.push({ description: this.state.newtodo, isCompleted: false });
    this.setState({ todos: todosCopy });
    this.input.type = "";
  }
}

export default TodoList;
