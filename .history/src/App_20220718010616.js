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
        <Home />
      </Router>
    </div>
  )
}

export default App
