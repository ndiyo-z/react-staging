import React, { Component ,PureComponent } from 'react'


export default class A extends PureComponent {
  state = {
    message:'Stan Loona'
  }

  render() {
    return (
      <div>
        <h3>A组件</h3>
        {this.props.render(this.state.message)}
      </div>
    )
  }
}
