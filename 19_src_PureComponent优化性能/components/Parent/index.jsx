import React, { Component ,PureComponent } from 'react'
import Child from './Child'

/*
  Component的2个问题
    1. 只要执行setState(),即使不改变状态数据, 组件也会重新render() ==> 效率低
    2. 只当前组件重新render(), 就会自动重新render子组件，即使子组件没有用到父组件的任何数据 ==> 效率低
  解决：使用PureComponent组件
*/
export default class Parent extends PureComponent {
  state = {
    info:{name:'siki',age:17},
    arr:[1,2,3]
  }

  /*
    【Component和PureComponent对比】
    1） 重写shouldComponentUpdate
      Component：可以重写
      PureComponent：不允许重写

    2） 调用render
      Component：只要调用了setState的方法，都会调用render，无论有没有状态更新
                  this.setState({}) 依旧会调用render重新渲染组件
      PureComponent：只有state或props数据被更新时才会调用render

    3） state更新
      Component：
        a. 不比较第一层，因为只要调用了setState的方法，都会返回一个新state对象
            验证： shouldComponentUpdate里，nextState === this.state 总是false
        b. 第二层：浅比较：新的逐个比较旧state里的对应key和value
            1. 当value不是对象，是字面量时，若字面量发生改变，更新对应key的value
            2. 当value是对象，若对象的地址发生变化，更新对应key的value
            3. 当value是对象，若地址不变，只是其中的属性值发生变化，不会更新
      PureComponent：
        a. 会比较第一层，第一层地址相同，则不再往里比较，不更新state，从而不会render
        a. 若第一层地址不同，第二层：浅比较，同上
  */
  handleChange = () => {
    /* 
      方式一： 会重新render
      info的地址值发生了变化
    */
    // this.setState({info:{name:'ndiyo',age:3}})

    /* 
      方式二：不会重新render
      info的地址并没有发生变化
    */
    // let info = this.state.info
    // info.name = 'ndiyo'
    // this.setState({info})

    /* 
      方式三：
        PureComponent组件---》 不会重新render ---》 第一层相同，不往里继续比较
        Component组件---》 会重新render ---》 不比较第一层，第二层的info地址不同
    */
    // let state = this.state
    // state.info = {name:'ndiyo',age:3}
    // this.setState(state)

    /* 
      方式四：
        PureComponent组件---》 不会重新render ---》 无任何数据和地址变化
        Component组件---》 会重新render ---》 只要调用setState都会render
    */
    this.setState({})
  }

  render() {
    console.log("parent---render");
    const { info } = this.state
    return (
      <div>
        <h3>{info.name}----{info.age}</h3>
        <button onClick={this.handleChange}>Change</button>
        <hr/>
        <Child />
      </div>
    )
  }
}
