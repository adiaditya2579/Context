import React, { useContext } from 'react'
import Home from './Component/Home'
import { Route, Routes,Link, } from 'react-router-dom'
import User from './Component/User'
import About  from './Component/About'
function App() {


  return (
    <div>
      <nav className=' flex justify-center gap-4'>
        <Link to='/' >Home</Link>
        <Link to="/user">User</Link>
        <Link to='/user/:id'></Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/user/:id' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
