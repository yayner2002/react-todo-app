import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <li key={this.props.todo.id}>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => {
            console.log("input field clicked");
          }}
        />
        {this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;
