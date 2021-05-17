import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          {/*
              1.注册子路由时要写上父路由的path值

              2.路由的匹配过程
                1）  App.js加载，注册path='/about' 和 path='/home' 路由
                2） 此时路径只有/，重定向至/home，路径变化，React开始按照注册重头顺序匹配路径
                3） 当发现/home路由时，Home组件加载，渲染出组件，注册path="/home/news"和path="/home/message"路由
                4） 此时路径只有/home，重定向至/home/news，
                5） 路径变化，React开始按照注册顺序重头匹配路径
                    a. React找到/about，不匹配
                    b. React找到/home，模糊匹配成功，Home组件加载，渲染出组件，再次注册path="/home/news"和path="/home/message"路由
                6） 继续匹配路由
                    a. React找到/home/message，不匹配
                    b. React找到/home/news，匹配，News组件加载，渲染出组件

              3.严格模式导致页面崩溃
                前提：如果【/home路由】开启了严格模式
                过程： （1）（2）（3） （4）同上 
                  5） 路径变化，React开始按照注册顺序重头匹配路径
                      a. React找到/about路由，不匹配
                      b. React找到/home路由，该路由是严格模式，不匹配
                      c. 无匹配路由，重定向至/home，又进入 （4），重复（5）.....
                  6） 陷入死循环，页面疯狂报错，无法渲染
                总结： 开启严格模式后的路由，其二级路由都会无效，甚至引起页面崩溃
          */}
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
          </ul>
          <div>
            <Switch>
              <Route path="/home/news" component={News} />
              <Route path="/home/message" component={Message} />
              <Redirect to="/home/news"/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
