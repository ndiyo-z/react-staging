
import React, { Component } from 'react'
import Search from './views/Search'
import List from './views/List'

export default class App extends Component {
  state = {
    userList:[],
    isFirst: true,
    isLoading:false,
    err:''
  }

  updateApp = data => {
    this.setState(data)
  }

  render() {
    return (
      <div className="container">
        <Search updateApp={this.updateApp}/>
        <List {...this.state}/>
      </div>
    )
  }
}
