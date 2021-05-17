
import React, { Component,lazy, Suspense } from 'react'
import { Route, NavLink } from 'react-router-dom'
// import About from './pages/About'
// import Home from './pages/Home'
import Loading from './components/Loading'
const About = lazy(()=>import('./pages/About'))
const Home = lazy(()=>import('./pages/Home'))

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/home">Home</NavLink>
              <NavLink className="list-group-item" to="/about">About</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Suspense fallback={<Loading/>}>
                  <Route exact path='/about' component={About} />
                  <Route exact path='/home' component={Home} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
