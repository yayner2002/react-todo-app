import React, { Component } from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends Component {
  state = {
    todos: [
      { id: uuidv4(), title: "Setup development environment", completed: true },
      { id: uuidv4(), title: "Develope website and add content", completed: false },
      { id: uuidv4(), title: "Deploy to live server", completed: false },
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

  addTodoItem = (title) => {
   const newTodo = {
    id: uuidv4(),
    title: title,
    completed:false
   }
   this.setState({
    todos: [...this.state.todos, newTodo]
   })
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem}/>
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
