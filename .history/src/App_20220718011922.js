import React from 'react'
import './App.css'
import Header from './components/Header'
import Detail from './components/Detail'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' component={Home}>
            <Detail />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
