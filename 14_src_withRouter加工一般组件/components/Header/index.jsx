import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {
  render() {
    const { history } = this.props
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={() => history.goForward()}>forward</button>
        <button onClick={() => history.goBack()}>goback</button>
        <button onClick={() => history.go(-2)}>go</button>
      </div>
    )
  }
}

export default withRouter(Header)
/*
  withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
  withRouter返回值是一个新组件
*/