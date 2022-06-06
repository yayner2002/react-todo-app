import React, { Component } from "react"

class InputTodo extends Component {
  state = {
    title: "",
  }
  onChange = e => {
    this.setState({
        [e.target.name]: e.target.value,
      })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title)
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo