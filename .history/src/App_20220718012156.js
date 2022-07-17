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
          <Route path='/detail' element={<Detail />}></Route>
          <Route path='/welcome' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
