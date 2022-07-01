import React from "react";

function TodoItem(props) {
  return <li key={props.todo.id}>{props.todo.title}</li>;
}

export default TodoItem;
