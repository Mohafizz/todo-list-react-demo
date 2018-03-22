import React, { Component } from "react";
import { shallow } from "enzyme";
import TodoForm from "./TodoForm";
import TodoList from "../todo-list/TodoList";

describe("TodoForm ", () => {
  it("should render TodoForm properly", () => {
    const wrapper = shallow(<TodoForm />);
  });
});
