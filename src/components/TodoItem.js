import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <li key={this.props.todo.id}>
        <input type="checkbox" />{this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;
