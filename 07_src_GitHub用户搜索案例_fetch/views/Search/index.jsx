import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {

  handleClick = async () => {
    const { value } = this.searchNode;
    PubSub.publish('updateListComponent', { isLoading: true, isFirst: false })

    /**
      发送ajax请求-----fetch（未优化版本）
      原理：
        1） 发送fetch时，返回的Promise仅仅是：是否成功联系上服务器，除非断网等不可抗力因素，请求都是成功的
        2） 真正从服务器返回的请求数据，需要调用response.json()，此方法返回一个Promise，状态取决于本次请求的成功失败状态
            a. 若正常联系上服务器，返回response.json()的Promise对象
            b. 若存在不可抗力，则返回一个pending状态的Promise对象，中断链式调用
        3） response.json()返回的Promise对象.then()
            a. 若状态成功，代表成功拿到数据
            b. 若状态失败，代表没有拿到数据
     */
    // fetch(`http://localhost:3000/api1/search/users9?q=${value}`).then(
    //   response => {
    //     console.log('联系服务器成功');
    //     return response.json();
    //   },
    //   error => {
    //     console.log('联系服务器失败', error);
    //     return new Promise(() => { })
    //   }
    // ).then(
    //   response => {
    //     console.log('获取数据成功');
    //     console.log(response);
    //   },
    //   error => {
    //     console.log('获取数据失败', error);
    //   }
    // )

    /**
      发送ajax请求-----fetch（优化版本）
      原理： 
        1） 发送fetch时，使用await，await只能返回一个成功状态的Promise
        2） 成功后，再次使用await，调用json()方法，同样只能返回一个成功状态的Promise，结果就是真正请求到的数据
        3） 若其中哪一次await语句返回失败的Promise，都将被捕获
        4） 将函数变为async函数，await语句只能在async函数里使用
    */
    try {
      const connented = await fetch(`http://localhost:3000/api1/search/users2?q=${value}`);
      const resultPromise = await connented.json();
      PubSub.publish('updateListComponent', {
        userList: resultPromise.items,
        isLoading: false,
        err: undefined
      })
    } catch (error) {
      PubSub.publish('updateListComponent',{ err:'获取数据失败:'+error.message, isLoading: false })
    }
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.searchNode = c} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.handleClick}>Search</button>
        </div>
      </section>
    )
  }
}
