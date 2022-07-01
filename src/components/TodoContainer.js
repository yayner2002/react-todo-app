import React, { Component } from "react";
import TodoList from "./TodoList";
import Header from "./Header";

class TodoContainer extends Component {
  state = {
    todos: [
      { id: 1, title: "Setup development environment", completed: true },
      { id: 2, title: "Develope website and add content", completed: false },
      { id: 3, title: "Deploy to live server", completed: false },
    ],
  };

  handleChange = (itemId) => {
    this.setState({
      todos:this.state.todos.map((todo) => {
        if(todo.id === itemId){
          todo.completed = !todo.completed

        }
        return todo
      })
    })
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} />
      </React.Fragment>
    );
  }
}

export default TodoContainer;
