import React from 'react'
import './App.css'
import Header from './components/Header'
import Detail from './components/Detail'
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import History from './components/History'
import Explore from './components/Explore'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/history' element={<History />} />
          <Route path='/explore' element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
