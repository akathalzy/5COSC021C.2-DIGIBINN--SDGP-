import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './scenes/About/About'
import Home from './scenes/Home/Home'
import Login from './scenes/Login/Login';
import Register from './scenes/Register/Register';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </Router>
  )
}


export default App