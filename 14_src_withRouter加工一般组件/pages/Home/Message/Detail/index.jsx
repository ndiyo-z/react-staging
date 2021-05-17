import React, { Component } from 'react'
import qs from 'querystring'

export default class Detail extends Component {

  render() {
    // 方法一： 接收参数 ---》 this.props.match.params
    // const { id,song,singer } = this.props.match.params

    /* 
      方法二： 接收参数 ---》 this.props.location.search
      备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
    */
    // const { search } = this.props.location // search : ?id=01&song=vivid&singer=heejin
    // const result = qs.parse(search.slice(1))
    // const {id,song,singer} = result

     /* 
      方法三： 接收参数 ---》 this.props.location.state
      备注：刷新也可以保留住参数 
    */
    const {id,song,singer} = this.props.location.state || {}

    return (
      <ul>
        <li>id:{id}</li>
        <li>song:{song}</li>
        <li>singer:{singer}</li>
      </ul>
    )
  }
}
