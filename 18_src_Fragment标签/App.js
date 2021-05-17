
import React, { Component, Fragment }  from 'react'
export default class App extends Component {
  render() {
    /* 
      Fragment
      作用：React规定组件只能有一个根标签，但有时，这个根标签没有实际意义，
            使用Fragment作为根标签时，最终不会被渲染为真实DOM
      此处渲染的最后结构：
        <div id='root'>
          <h2>Stan Loona</h2>
        </div>
      注意： Fragment标签只能有key和children属性
    */
    return (
      <Fragment key={1}>
        <h2>Stan Loona</h2>
      </Fragment>
    )
  }
}
