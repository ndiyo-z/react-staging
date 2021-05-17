import React, { PureComponent } from 'react'

export default class Child extends PureComponent {
  state = {
    userInfo:[]
  }

  componentDidMount() {
    // 模拟从后台获取数据
    this.setState({
      userInfo:[{id:'001',name:'siki',age:3}]
    })
  }
  render() {
    const { userInfo } = this.state
    return (
      <ul>
        {
          userInfo.length > 0 && userInfo.map(user => {
            return <li key={user.id}>{user.name}有{user.hobby.length}个爱好</li>
          })
        }
      </ul>
    )
  }
}
