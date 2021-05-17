
import React, { Component, Fragment }  from 'react'
import Parent from './components/Parent'
export default class App extends Component {
  render() {
    return (
      <Fragment key={1}>
        <Parent/>
      </Fragment>
    )
  }
}
