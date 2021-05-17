import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired
  }
  handleKeyUp = event => {
    // 解构赋值
    const {target,keyCode} = event;
    // 如果不是回车键，结束方法
    if(keyCode !== 13) return;
    // 如果不输入值或空格，结束方法
    if(target.value === '' || target.value === ' ') {
      alert('非法值');
      return
    }
    // 创建todo对象
    const todoObj = {id:nanoid(),name:target.value.trim(),done:false};
    // 调用父类方法，传递参数
    this.props.addItem(todoObj);
    event.target.value = '';
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
