import React, { Component } from "react";
import { shallow } from "enzyme";
import TodoList from "../todo-list/TodoList";
import TodoItem from "../todo-item/TodoItem";
import "../todo-list/TodoList.css";

describe("TodoItem ", () => {
  it("should render TodoItem properly", () => {
    const todos = [{ description: "test", isCompleted: false }];
    const wrapper = shallow(<TodoItem todo={todos} done="task completed" />);

    // wrapper.find("#text").simulate("change", { target: { value: "a" } });
    // expect(wrapper.state().value).toEqual("a");
  });
});
