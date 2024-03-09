import React from 'react'
import Applied_users from './Applied_users';
import Apply from './Apply';
import Register from './Register';
import Home from './Home';
import {Routes, Route} from 'react-router-dom'
import CheckStatus from './CheckStatus';
import Add from './Add';
import Avisa from './Avisa';
import Login from './Login';
import Siderbar from './Sidebar';
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
        <Route exact path='/sider' element={<Siderbar/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route path='/apply' element={<Apply/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/check' element={<CheckStatus/>}/>
        <Route path='/show' element={<Applied_users/>}/>
        <Route path='/addusers' element={<Add/>}/>
        <Route path='/accepted' element={<Avisa/>}/>
      </Routes>
    )
}
}

export default CustomRoutes
