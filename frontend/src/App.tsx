
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.tsx'

import Home from './pages/Home.tsx'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<div>About Page</div>} />
      </Routes>
    </>
   
  )
}

export default App
