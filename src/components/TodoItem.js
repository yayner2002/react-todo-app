import React, { Component } from "react";
import styles from "./TodoItem.module.css"

class TodoItem extends Component {
  
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    return (
      <li key={this.props.todo.id} className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={this.props.todo.completed}
          onChange={() => {
            this.props.handleChangeProps(this.props.todo.id);
          }}
        />
        <button onClick={() => {
          this.props.deleteTodoProps(this.props.todo.id)
        }}>Delete</button>
        <span style={this.props.todo.completed ? completedStyle : null }>{this.props.todo.title}</span>
      </li>
    );
  }
}

export default TodoItem;
