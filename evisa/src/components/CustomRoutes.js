import React from 'react'
import Applied_users from './Applied_users';
import Apply from './Apply';
import Register from './Register';
import Home from './Home';
import {Routes, Route} from 'react-router-dom'
import CheckStatus from './CheckStatus';
import Login from './Login';
function CustomRoutes() {

const role = localStorage.getItem('role')
if(role=='user'){
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
else{
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
}

export default CustomRoutes
