
import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import About from './views/About'
import Home from './views/Home'

export default class App extends Component {


  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 非SPA，原生HTML中 靠<a>标签调整不同页面 */}
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}

              {/* 在React中，靠路由链接实现切换组件--编写路由链接 */}
              <Link className="list-group-item active" to="/home">Home</Link>
              <Link className="list-group-item" to="/about">About</Link>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* 
                  严格匹配
                    1.默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
                    2.开启严格匹配：<Route exact={true} path="/about" component={About}/>
                    3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由 
                */}
                <Route exact path='/about' component={About} />
                <Route exact path='/home' component={Home} />
                {/* 重定向，当前路径没有匹配组件时，指定路径 */}
                <Redirect to="/home"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
