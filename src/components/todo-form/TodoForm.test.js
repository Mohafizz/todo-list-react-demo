import React, { Component } from "react";
import { shallow } from "enzyme";
import TodoForm from "./TodoForm";
import TodoList from "../todo-list/TodoList";

describe("TodoForm ", () => {
  it("should have the list of following html tags", () => {
    const wrapper = shallow(
      <TodoForm submitForm={() => {}} value="test" changeForm={() => {}} />
    );
    expect(wrapper.find("div")).toHaveLength(1);
    expect(wrapper.find("label")).toHaveLength(1);
    expect(wrapper.find("input#form-input").props().type).toBe("text");
  });

  it("should handle submit form properly", () => {
    const mockHandler = jest.fn();
    const wrapper = shallow(
      <TodoForm submitForm={mockHandler} value="test" changeForm={() => {}} />
    );
    expect(wrapper.find("form")).toHaveLength(1);
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(mockHandler).toBeCalled();
  });

  it("should handle input for newtodo item", () => {
    const newtodoDescription = "testing";
    const wrapper = shallow(
      <TodoForm
        submitForm={() => {}}
        value={newtodoDescription}
        changeForm={() => {}}
      />
    );
    expect(wrapper.find("input#form-input").props().value).toBe("testing");
  });

  it("should handle onChange event(mocked) with handleChange method from Parent ", () => {
    const mockHandler = jest.fn();
    const wrapper = shallow(
      <TodoForm submitForm={() => {}} changeForm={mockHandler} value="test" />
    );
    wrapper
      .find("input#form-input")
      .props()
      .onChange({ target: { value: "a" } });
    expect(mockHandler).toBeCalled();
  });
});
