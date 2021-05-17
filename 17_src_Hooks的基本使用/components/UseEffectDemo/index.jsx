import React from 'react';
import ReactDOM from 'react-dom'
/*
  Effect Hook
    可以在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
  React中的副作用操作:
    发ajax请求数据获取
    设置订阅 / 启动定时器
    手动更改真实DOM
  可以把 useEffect Hook 看做如下三个函数的组合
    componentDidMount()
    componentDidUpdate()
    componentWillUnmount()
*/
export default function UseEffectDemo () {

  const [count,setCount] = React.useState(0)

  /* 
    第二个参数为undefined时，相当于componentDidMount()和componentDidUpdate()
    检测所有的state，只要组件挂载和任意state发生更新时，都会触发回调
  */
  React.useEffect(()=>{
    // 在此可以执行任何带副作用操作
    console.log("^");
  }) 

  /* 
    第二个参数为数组时，检测数组中的state，相当于componentDidMount()和componentDidUpdate()
    检测数组中的state，只要组件挂载和任意数组中的state发生更新时，都会触发回调
  */
  React.useEffect(()=>{
    console.log("@");
  },[count]) 

  /* 
    第二个参数为空数组时，相当于componentDidMount()
    只有组件第一次挂载完毕时才会触发回调
  */
  React.useEffect(()=>{
    let timer = setInterval(() => {
      setCount(count => count+1)
    }, 1000)
    return () => { // 在组件卸载前执行
      clearInterval(timer) // 在此做一些收尾工作, 比如清除定时器/取消订阅等
    }
  },[]) 

  function add() {
    setCount(count+1)
  }

  function kill() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  return (
    <div>
      <h2>总和：{count}</h2>
      <button onClick={add}>+1</button>
      <button onClick={kill}>卸载组件</button>
    </div>
  );
}

