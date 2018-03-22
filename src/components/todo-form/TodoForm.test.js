import React, { Component } from "react";
import { shallow } from "enzyme";
import TodoForm from "./TodoForm";
import TodoList from "../todo-list/TodoList";

describe("TodoForm ", () => {
  it("should handle submit form properly", () => {
    const mockHandler = jest.fn();
    const wrapper = shallow(<TodoForm submitForm={mockHandler} />);

    expect(wrapper.find("form")).toHaveLength(1);

    wrapper.find("form").simulate("submit", { preventDefault() {} });

    console.log("mockHandler: ", mockHandler);
    expect(mockHandler).toBeCalled();
  });
});
