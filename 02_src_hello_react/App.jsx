// 引入React和Component
import {Component} from 'react';
// 引入样式文件
import './App.css'
// 引入子组件
import Welcome from './views/Welcome';
import Hello from './views/Hello';

// 创建根组件，默认暴露组件
export default class App extends Component{
  render() {
    return (
      <div>
        <Welcome/>
        <Hello/>
      </div>
    )
  }
}

