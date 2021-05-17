import React, { Component } from 'react'
import {Button,DatePicker} from 'antd'
import 'antd/dist/antd.less'
export default class App extends Component {
  render() {
    return (
      <div>
          <Button type="primary">按钮</Button>
          <DatePicker></DatePicker>
      </div>
    )
  }
}
