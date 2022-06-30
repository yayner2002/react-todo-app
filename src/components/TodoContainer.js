import React, { Component } from "react";
import TodoList from "./TodoList";

class TodoContainer extends Component {
  state = {
    todos: [
      { id: 1, title: "Setup development environment", completed: true },
      { id: 2, title: "Develope website and add content", completed: false },
      { id: 3, title: "Deploy to live server", completed: false },
    ],
  };
  render() {
    return (
      <React.Fragment>
       <TodoList todos={this.state.todos} />
      </React.Fragment>
    );
  }
}

export default TodoContainer;
