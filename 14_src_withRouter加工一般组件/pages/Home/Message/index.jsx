import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    msgList: []
  }
  componentDidMount() {
    // 模拟从后台取出数据
    this.setState({
      msgList: [
        { id: '01', song: 'vivid', singer:'heejin' },
        { id: '02', song: 'around you',singer:'hyunjin' },
        { id: '03', song: '少年 少女', singer:'haseul' },
      ]
    })
  }

  // push方法同理
  replaceShow = msg => {
    const { history } = this.props
    // 携带params参数
    // history.replace(`/home/message/detail/${msg.id}/${msg.song}/${msg.singer}`);
    // 携带search参数
    // history.replace(`/home/message/detail?id=${msg.id}&song=${msg.song}&singer=${msg.singer}`)
    // 携带state参数
    history.replace("/home/message/detail",{...msg})

  }

  render() {
    const { msgList } = this.state
    const { history } = this.props
    return (
      <div>
        <ul>
          {
            msgList.length !== 0 && msgList.map(msg => {
              return (
                <li key={msg.id}>
                  {/*  方式一：params参数 ---》 携带参数 */}
                  {/* <Link to={`/home/message/detail/${msg.id}/${msg.song}/${msg.singer}`}>{msg.song}</Link> */}

                  {/*  方式二：search参数 ---》 携带参数 */}
                  {/* <Link to={`/home/message/detail?id=${msg.id}&song=${msg.song}&singer=${msg.singer}`}>{msg.song}</Link> */}

                  {/* 式三：state参数 ---》 携带参数 */}
                  <Link to={{pathname:"/home/message/detail",state:{...msg}}}>{msg.song}</Link>
                  
                  &nbsp;&nbsp;<button onClick={() => this.replaceShow(msg)}>replace</button>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/* 方式一：params参数 ---》 声明接收 */}
        {/* <Route path="/home/message/detail/:id/:song/:singer" component={Detail} /> */}
        
        {/* 方式二：search参数 ---》 无需声明，正常注册即可 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
        
        {/* 方式三：state参数 ---》 无需声明，正常注册即可 */}
        <Route path="/home/message/detail" component={Detail} />
        <hr/>
        {/* 
          路由组件：接收到三个固定的属性之一
            history:
              go: ƒ go(n)
              goBack: ƒ goBack()
              goForward: ƒ goForward()
        */}
        <button onClick={() => history.goForward()}>forward</button>
        <button onClick={() => history.goBack()}>goback</button>
        <button onClick={() => history.go(-2)}>go</button>
      </div>
    )
  }
}
