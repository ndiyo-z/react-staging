import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

  handleClick =() => {
    const { value } = this.searchNode;
    PubSub.publish('updateListComponent',{isLoading:true, isFirst: false})
    axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
      response => {
        PubSub.publish('updateListComponent',{ 
          userList:response.data.items, 
          isLoading: false,
          err:undefined 
        })
      },
      error => {
        PubSub.publish('updateListComponent',{ err:error.message, isLoading: false })
      }
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={ c => this.searchNode = c } type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.handleClick}>Search</button>
        </div>
      </section>
    )
  }
}
