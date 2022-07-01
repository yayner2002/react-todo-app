import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            handleChangeProps={this.props.handleChangeProps}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
