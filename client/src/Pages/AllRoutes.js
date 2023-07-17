

import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'

const AllRoutes = () => {
  return (
  <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/signup' element={<SignUp/>} />
   <Route path='/login' element={<Login/>} />
  </Routes>
    
  )
}

export default AllRoutes
