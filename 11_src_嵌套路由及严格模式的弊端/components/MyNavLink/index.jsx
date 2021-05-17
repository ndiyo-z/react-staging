import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink activeClassName="active-navlink" className="list-group-item" to="/home" {...this.props} />
    )
  }
}
