import { useState } from 'react'


import './App.css'
import Index from './Pages/index'
import About from './Pages/about'
import Dubs from './Pages/dubs'
import Music from './Pages/music'
import Productions from './Pages/productions'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/footer'

function App() {
    return (
      <>
      
      <Header></Header>

      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/dubs" element={<Dubs />} />
          <Route path="/music" element={<Music />} />
          <Route path="/productions" element={<Productions />} />
      </Routes>

      <Footer></Footer>
      </>
    )

}

export default App
