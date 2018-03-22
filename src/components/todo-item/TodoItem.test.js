import React, { Component } from "react";
import { shallow } from "enzyme";
import TodoList from "../todo-list/TodoList";
import TodoItem from "../todo-item/TodoItem";
import "../todo-list/TodoList.css";

describe("TodoItem ", () => {
  it("should render TodoItem properly", () => {
    const todos = [{ description: "test", isCompleted: false }];
    const wrapper = shallow(<TodoItem todo={todos} />);
    console.log("wrapper: ", wrapper.debug());
  });
});
