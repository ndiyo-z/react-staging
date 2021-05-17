import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    handleChangeAll: PropTypes.func.isRequired,
    clearAllDone: PropTypes.func.isRequired,
  }
  render() {
    const { todos,handleChangeAll,clearAllDone } = this.props
    const total = todos.length;
    const doneItem = todos.reduce((acc,cur) => acc + (cur.done ? 1 : 0),0);
    return (
      <div className="todo-footer">
        <label>
          <input onChange={event => handleChangeAll(event.target.checked)} checked={doneItem === total && total !== 0 ? true : false} type="checkbox" />
        </label>
        <span>
          <span>已完成{doneItem}</span> / 全部{total}
        </span>
        <button onClick={() => clearAllDone()} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
