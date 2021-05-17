import React from 'react';
/*
  Ref Hook
    可以在函数组件中存储/查找组件内的标签或任意其它数据
    作用:保存标签对象,功能与React.createRef()一样
*/
export default function UseRefDemo () {

  const myRef = React.useRef();

  function show() {
    alert(myRef.current.value)
  }

  
  return (
    <div>
      <input ref={myRef} type="text" placeholder="输入" />
      <button onClick={show}>获取输入</button>
    </div>
  );
}

