
import React, { Component } from 'react'
import UseStateDemo from './components/UseStateDemo'
import UseEffectDemo from './components/UseEffectDemo'
import UseRefDemo from './components/UseRefDemo'
export default class App extends Component {
  render() {
    return (
      <div>
        <UseStateDemo/>
        <hr/>
        <UseEffectDemo/>
        <hr/>
        <UseRefDemo/>
      </div>
    )
  }
}
