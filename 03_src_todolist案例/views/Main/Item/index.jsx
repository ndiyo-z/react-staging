import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  
  render() {
    const { id,name,done,handleChange,delItem } = this.props
    return (
      <li>
        <label>
          <input type="checkbox" checked={done} onChange={event => handleChange(id,event.target.checked)}/>
          <span>{name}</span>
        </label>
        <button onClick={() => delItem(id)} className="btn btn-danger" >删除</button>
      </li>
    )
  }
}
