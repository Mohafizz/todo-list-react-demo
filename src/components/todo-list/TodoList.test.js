import React, { Component } from "react";
import { shallow } from "enzyme";
import TodoList from "./TodoList";
import TodoItem from "../todo-item/TodoItem";

describe("TodoList ", () => {
  it("should render TodoList properly", () => {
    const wrapper = shallow(<TodoList title="todos" />);
    expect(wrapper.find("#todo-list")).toHaveLength(1);
    expect(wrapper.find("h1#todo-title")).toHaveLength(1);
    expect(wrapper.find(TodoItem)).toHaveLength(wrapper.state().todos.length);
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("h1").props().children).toBe("todos");
  });
});
