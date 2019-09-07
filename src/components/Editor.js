import React from 'react'

export default class Editor extends React.Component {

  state = {
    value: '',
    todo: null
  }


  componentDidMount () {
    this.setState({
      value: this.props.todo.text,
      todo: this.props.todo
    })
  }


  handleChange = (evt) => {
    let todo = this.state.todo
    todo.text = evt.target.value
    this.setState({
      value: evt.target.value,
      todo: todo
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.onHandleUpdate(this.state.todo)
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button>update</button>
      </form>
    )
  }
}