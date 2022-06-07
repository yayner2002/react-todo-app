import React, { Component } from 'react';
import styles from "./TodoItem.module.css"

class TodoItem extends Component {
    render() { 
        return (
            <li className={styles.item}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={this.props.todo.completed}
              onChange={() => this.props.handleChangeProps(this.props.todo.id)}
            />
            <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
              Delete
            </button>
            {this.props.todo.title}
          </li>
        );
    }
}
 
export default TodoItem;
// import React from 'react';
// function TodoItem(props) {
//     return ( 
//         <li>{props.todo.title}</li>
//      );
// }

// export default TodoItem;