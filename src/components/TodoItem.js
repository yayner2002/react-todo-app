import React, { Component } from 'react';
import styles from "./TodoItem.module.css"

class TodoItem extends Component {
 
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "595959",
            opacity: 0.4,
            textDecoration: "line-through",
          } 
          const { completed, id, title } = this.props.todo
          return (
            <li className={styles.item}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={completed}
                onChange={() => this.props.handleChangeProps(id)}
              />
              <button onClick={() => this.props.deleteTodoProps(id)}>
                Delete
              </button>
              <span style={completed ? completedStyle : null}>
                {title}
              </span>
            </li>
          )
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