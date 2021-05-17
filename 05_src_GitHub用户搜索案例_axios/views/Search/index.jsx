import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class Search extends Component {
  static propTypes = {
    updateApp : PropTypes.func.isRequired
  }

  handleClick =() => {
    const { updateApp } = this.props
    const { value } = this.searchNode;
    updateApp({ isLoading:true, isFirst: false });
    axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
      response => {
        updateApp({ userList:response.data.items, isLoading: false,err:undefined });
      },
      error => {
        updateApp({ err:error.message, isLoading: false });
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
