import React, { PureComponent } from 'react'

export default class B extends PureComponent {
  render() {
    return (
      <h1 style={{ backgroundColor: '#abf' }}>
        我的功能是突出展示父组件的信息:
        {this.props.message}
      </h1>
    )
  }
}
