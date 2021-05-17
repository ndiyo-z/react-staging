
import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  handleClick1 =() => {
    axios.get('http://localhost:3000/api1/students').then(
      response => console.log("success ",response.data),
      error => console.log("faild ",error)
    )
  }

  handleClick2 =() => {
    axios.get('http://localhost:3000/api2/cars').then(
      response => console.log("success ",response.data),
      error => console.log("faild ",error)
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>axios请求服务器1</button>
        <button onClick={this.handleClick2}>axios请求服务器2</button>
      </div>
    )
  }
}
