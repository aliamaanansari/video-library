import React from 'react'
import './App.css'
import Header from './components/Header'
import Detail from './components/Detail'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='detail'>
            <Detail />
          </Route>
        </Switch>
      </Router>
      <Home />
    </div>
  )
}

export default App
