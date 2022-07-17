import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='detail'></Route>
        </Switch>
      </Router>
      <Home />
    </div>
  )
}

export default App
