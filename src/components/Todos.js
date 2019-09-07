import React from 'react'
import todos from './todosList'
import {Redirect} from 'react-router-dom'

function ListItem(todo) {
  const { text, done, onPenClick, id, onTextClick } = todo
  // console.log(todo, text, done, onPenClick,id)
  return (
    <li className="todo-item">
      <p className={done ? 'completed' : 'incomplete'} onClick={() => onTextClick(id)}>
        {text}
      </p>
      <span className="edit" onClick={() => onPenClick(id)}>🖊</span>
    </li>
  )
}


export default class Todos extends React.Component {

  state = {
    todos: null,
    edit: false,
    currentId: null
  }

  handlePenClick = (id) => {
    this.setState({
      edit: true,
      currentId: id
    })
  }

  handleTextClick = (id) => {
    console.log(id)
    let todo = this.state.todos.find(t => t.id == id)
    todo.done = true

    let remainingTodos = this.state.todos.filter(t => t.id !== id)

    console.log('the todo: ', todo)
    console.log('remainingTodos: ', remainingTodos)

  }

  handleUpdate = (todo) => {
    console.log('updated todo', todo)
    let remainingTodos = this.state.todos.filter(t => t.id !== todo.id)


    this.setState((state, props) => ({
      todos: [...remainingTodos, todo],
      edit: false
    }))
  }

  componentDidMount() {
    this.setState({ todos })
  }


  render() {
    const { todos, edit, currentId } = this.state

      if (edit && todos) {
        console.log("Todos: ", todos)
        console.log(todos[currentId - 1])
        return (
          <Editor todo={todos[currentId - 1]} onHandleUpdate={this.handleUpdate} />
        )
      }

      return (
        <div>
          <h2>Todos</h2>
          <ul>
            {
              todos && todos.map(t => <ListItem key={t.id} {...t} onPenClick={this.handlePenClick} onTextClick={this.handleTextClick} />)
            }
          </ul>
        </div>
    )
  }

}


const Editor = React.lazy(() => import('./Editor'))



