import React, { Component } from 'react';

class TodoItem extends Component {
    render() { 
        return (
            <li>{this.props.todo.title}</li>
        );
    }
}
 
export default TodoItem;