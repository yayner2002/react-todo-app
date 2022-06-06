import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodosList extends Component {
    render() { 
        return (
            <ul>
                {this.props.todos.map(todo => {
                    return <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleChangeProps={this.props.handleChangeProps}
                  />
                })}
            </ul>
        );
    }
}
 
export default TodosList;