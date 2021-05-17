import React, { Component } from 'react';
import './App.css'
import Header from './views/Header'
import Main from './views/Main'
import Footer from './views/Footer'

export default class App extends Component {
  state = {
    todos:[
      {id:'01',name:'eat',done:true},
      {id:'02',name:'sleep',done:true},
      {id:'03',name:'programming',done:false}
    ]
  }

  addItem = todoObj => {
    const { todos } = this.state
    this.setState({ todos: [todoObj,...todos]})
  }
  
  handleChange = (id,done) => {
    const { todos } = this.state;
    let newTodos = todos.map(todo => {
      if(todo.id === id) return {...todo,done}
      else return todo
    })
    this.setState({ todos:newTodos });
  }

  delItem = id => {
    if(window.confirm('确定删除吗？')) {
      const { todos } = this.state
      const newTodos = todos.filter(todo => todo.id !== id && todo);
      this.setState({ todos: newTodos })  
    }
  }

  handleChangeAll = checked => {
    const { todos } = this.state
    const newTodos = todos.map(todo=>({...todo,done:checked}));
    this.setState({todos:newTodos})
  }

  clearAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter(todo => !todo.done);
    this.setState({todos: newTodos})
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addItem={this.addItem}/>
          <Main todos={this.state.todos} handleChange={this.handleChange} delItem={this.delItem}/>
          <Footer todos={this.state.todos} handleChangeAll={this.handleChangeAll} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}

