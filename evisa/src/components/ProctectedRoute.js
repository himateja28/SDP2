import React from 'react'
import Redirect from 'react-dom'
import Applied_users from './Applied_users';
import Apply from './Apply';
import Register from './Register';
import Home from './Home';
import {Routes, Route} from 'react-router-dom'
import CheckStatus from './CheckStatus';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
function ProctectedRoute(role) {
  const navigate = useNavigate();
        if(role==2)
        {
          return(
          <Routes>
          <Route exact path='/home' element={<Home/>}/>
          <Route path='/apply' element={<Apply/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/check' element={<CheckStatus/>}/>
          <Route path='/show' element={<Applied_users/>}/>
          </Routes>
          )
        }
        if(role==1){
        navigate('/home')
    return (
     <div>
        <Routes>
        <Route exact path='/home' element={<Home/>}/>
        <Route path='/apply' element={<Apply/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/check' element={<CheckStatus/>}/>
        </Routes>
    </div>
  )
        }
}

export default ProctectedRoute
