
import React, { Component } from 'react'
import Search from './views/Search'
import List from './views/List'

export default class App extends Component {
  

  render() {
    return (
      <div className="container">
        <Search/>
        <List/>
      </div>
    )
  }
}
