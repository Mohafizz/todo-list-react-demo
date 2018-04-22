import React, { Component } from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import TodoList from "./TodoList";
import TodoItem from "../todo-item/TodoItem";
import TodoForm from "../todo-form/TodoForm";

const wrapper = shallow(<TodoList title="todos" />);

describe("TodoList ", () => {
  it("should render TodoList properly", () => {
    expect(wrapper.find("h1").props().children).toBe("todos");
    expect(wrapper.find("#todo-list")).toHaveLength(1);
    expect(wrapper.find("h1#todo-title")).toHaveLength(1);
    expect(wrapper.find(TodoItem)).toHaveLength(wrapper.state().todos.length);
    expect(wrapper.find(TodoForm)).toHaveLength(1);
  });

  it("should match the snapshot", () => {
    const tree = renderer.create(<TodoList />);
    // console.log("tree.toJSON(): ", tree.toJSON());
    // console.log("tree.toTree(): ", tree.toTree());
    // console.log("wrapper: ", wrapper.debug());
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
