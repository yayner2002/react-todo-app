import React, { Component } from 'react';

class TodoItem extends Component {
    render() { 
        return (
            <li><input type="checkbox" />{this.props.todo.title}</li>
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