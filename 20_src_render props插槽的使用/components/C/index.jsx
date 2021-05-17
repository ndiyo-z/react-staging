import React, { PureComponent } from 'react'

export default class C extends PureComponent {
  render() {
    return (
      <h3>
        我的功能是普通展示父组件的信息: 
        {this.props.message}
      </h3>
    )
  }
}
