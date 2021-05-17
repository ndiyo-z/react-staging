
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './pages/About' // 路由组件
import Home from './pages/Home' // 路由组件
import MyNavLink from './components/MyNavLink' // 一般组件
import './App.css'

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
              <Switch>
                {/* 
                  使用自己封装的MyNavLink组件 
                  理由：将相同属性封装，不同属性传入。此处相同属性过长，可读性差  
                  注意：
                  1） 标签体内容是用children属性封装并传递
                  2） React的NavLink，可以给点击的路由的className追加"active"字样，可以和UI库配合使用，
                      但不是所有的UI库的高亮显示的className都叫active，所以可以用activeClassName来指定
                */}
                <MyNavLink to="/home">Home</MyNavLink>
                <MyNavLink to="/about">About</MyNavLink>
              </Switch>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 
                通常情况下，path和component是一一对应的关系
                Switch可以提高路由匹配效率(单一匹配) 
                */}
                <Switch>
                  <Route path='/about' component={About} />
                  <Route path='/home' component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
