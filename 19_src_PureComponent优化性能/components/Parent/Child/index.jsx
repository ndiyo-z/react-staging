import React, { PureComponent } from 'react'

export default class Child extends PureComponent {
  render() {
    console.log("child-----render");
    return (
      <h4>安安静静的子组件</h4>
    )
  }
}
