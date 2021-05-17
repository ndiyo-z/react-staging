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

  render() {
    const { msgList } = this.state
    return (
      <div>
        <ul>
          {
            msgList.length !== 0 && msgList.map(msg => {
              return (
                <li key={msg.id}>
                  {/*  方式一：params参数 ---》 携带参数 */}
                  <Link to={`/home/message/detail/${msg.id}/${msg.song}/${msg.singer}`}>{msg.song}</Link>

                  {/*  方式二：search参数 ---》 携带参数 */}
                  {/* <Link to={`/home/message/detail?id=${msg.id}&song=${msg.song}&singer=${msg.singer}`}>{msg.song}</Link> */}

                  {/* 式三：state参数 ---》 携带参数 */}
                  {/* <Link to={{pathname:"/home/message/detail",state:{...msg}}}>{msg.song}</Link> */}
                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/* 方式一：params参数 ---》 声明接收 */}
        <Route path="/home/message/detail/:id/:song/:singer" component={Detail} />
        
        {/* 方式二：search参数 ---》 无需声明，正常注册即可 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
        
        {/* 方式三：state参数 ---》 无需声明，正常注册即可 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
      </div>
    )
  }
}
