import React, { PureComponent } from 'react'
import Child from './Child'

/* 
  错误边界(Error boundary)：用来捕获后代组件错误，渲染出备用页面
  只能捕获后代组件生命周期产生的错误，
  不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误
*/
export default class Parent extends PureComponent {
  state = {
    error: ''
  }

  // 生命周期函数，一旦后台组件报错，就会触发
  static getDerivedStateFromError(error) {
    // 在render之前触发
    // 返回新的state
    return { error: error }
  }

  componentDidCatch(error, info) {
    // 统计页面的错误。发送请求发送到后台去
    console.log(error, info);
  }


  render() {
    return (
      <div>
        <h2>Parent组件</h2>
        {this.state.error ? <h4>网络出错，请稍后再试</h4> : <Child />}
      </div>
    )
  }
}
