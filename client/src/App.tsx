import './App.css'

import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Home from './pages/Home.tsx'
import About from './pages/About.tsx'

function App() {
  

  return (
    <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="/about" element ={<About />} />
      <Route path='/cards' element ={<div>Cards Page</div>} />
      <Route path='/create' element ={<div>Create Page</div>} />
    </Routes>
  )
}

export default App
