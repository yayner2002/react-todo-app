import React, { Component } from 'react';

class TodoItem extends Component {
  state = {};
  render() {
    return <li key={this.props.todo.id}>{this.props.todo.title}</li>;
  }
}

export default TodoItem;
