import React from 'react'
import Home from './Component/Home'
import { Route, Routes,Link, } from 'react-router-dom'
import User from './Component/User'

function App() {


  return (
    <div>
      <nav className=' flex justify-center gap-4'>
        <Link to='/' >Home</Link>
        <Link to="/user">User</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user' element={<User/>} />
      </Routes>
    </div>
  )
}

export default App
