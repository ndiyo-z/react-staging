
import React, { Component, Fragment, lazy, Suspense }  from 'react'
import A from './components/A'
const B = lazy(()=> import('./components/B'))
const C = lazy(()=> import('./components/C'))
export default class App extends Component {
  render() {
    /*
      需求： 
        A组件获取数据需要展示，但编写时还不确定怎么展示，用什么组件展示
        同时，BC组件投入开发，B组件展示数据、C组件也是展示数据
        最后，决定使用哪一个展示组件，并传入展示的值
      优点：可以同时开发，提高开发效率
      做法：
        1） 在使用A组件的地方，给A组件传入叫render的props，是一个函数
        2） 在A组件需要展示数据的地方，留下一个插槽，调用props的render方法，并传入数据
        3） 调用render方法后，返回一个组件，这个组件可以灵活替换
        4） 将数据传递给展示组件后，右展示组件的props获取
    */
    return (
      <Fragment key={1}>
        <Suspense fallback={()=><h2>Loading.....</h2>}>
          <A render={msg => <B message={msg}/>}/> 
        </Suspense>
      </Fragment>
    )
  }
}
