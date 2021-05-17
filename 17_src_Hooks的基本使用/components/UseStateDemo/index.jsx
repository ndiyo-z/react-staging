import React from 'react'

/*
  State Hook
    函数组件无法使用state的原因： 函数组件没有this
    Hook原理：让函数组件也可以有state状态, 并进行状态数据的读写操作
*/
export default function UseStateDemo() {

  /*
    参数: 第一次初始化指定的值在内部作缓存
    返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
  */
  const [count,setCount] = React.useState(0)
  const [user,setInfo] = React.useState({name:'siki',age:18})

  function add () {
    // 方法一
    // setCount(count+1);
    // 方法二
    setCount( pre => pre+1)
  }

  function update () {
    // 方法一
    // setInfo({name:'ndiyo',age:3})
    // 方法二
    setInfo(pre => ({name:pre.name+'22',age:pre.age+1}))
  }

  return (
    <div>
      <h2>总和：{count}</h2>
      <h2>{user.name} -------- {user.age}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={update}>点我更新</button>
    </div>
  )
}
