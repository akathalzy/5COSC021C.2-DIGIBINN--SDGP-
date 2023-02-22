import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './scenes/About/About'
import Home from './scenes/Home/Home'

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </Router>
  )
}


export default App