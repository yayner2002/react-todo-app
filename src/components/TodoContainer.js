import React, { Component } from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";

class TodoContainer extends Component {
  state = {
    todos: [
      { id: 1, title: "Setup development environment", completed: true },
      { id: 2, title: "Develope website and add content", completed: false },
      { id: 3, title: "Deploy to live server", completed: false },
    ],
  };

  handleChange = (itemId) => {
    this.setState(previousState => {
      return {
        todos: previousState.todos.map(todo => {
          if(todo.id === itemId){
            return {
              ...todo, completed: !todo.completed
            }
          }
          return todo
        })
      }
    });
  };

  delTodo = deletedId => {
   this.setState({
    todos: [
      ...this.state.todos.filter(todo => {
        return todo.id !== deletedId
      })
    ]
   })
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <InputTodo />
        <TodoList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </React.Fragment>
    );
  }
}

export default TodoContainer;
