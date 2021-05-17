import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
  
  state = {
    userList:[],
    isFirst: true,
    isLoading:false,
    err:''
  }

  componentDidMount () {
    this.pubsub = PubSub.subscribe('updateListComponent',(_,data) => {
      this.setState(data)
    })
  }

  componentWillUnmount () {
    PubSub.unsubscribe(this.pubsub);
  }

  render() {
    const { userList,isFirst,isLoading,err } = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>输入内容查找用户</h2>
          :isLoading ? <h2>正在查询请稍候......</h2>
          :err ? <h2>{err}</h2>
          :userList.map(user => {
            return (
              <div key={user.id} className="card">
                <a rel="noreferrer" href={user.html_url} target="_blank">
                  <img alt="avatar" src={user.avatar_url} style={{ width: '100px' }} />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
