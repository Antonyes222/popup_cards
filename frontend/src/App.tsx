
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.tsx'

import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Create from './pages/Create.tsx'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/create" element={<Create/>} />
      </Routes>
    </>
   
  )
}

export default App
