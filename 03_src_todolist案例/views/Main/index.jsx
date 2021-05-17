import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from './Item/index';
import './index.css'
export default class Main extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired
  }
  render() {
    const { todos, handleChange,delItem } = this.props
    return (
      <ul className="todo-main">
        {todos.map(todo => {
          return <Item key={todo.id} {...todo} handleChange={handleChange} delItem={delItem}/>
        })}
      </ul>
    )
  }
}
