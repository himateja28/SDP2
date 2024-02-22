import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    function handleLogin(){
        axios.post('http://localhost:8000/login',{
            un:document.getElementById('un').value,
            pwd:document.getElementById('pwd').value
        }).then((res)=>{
            console.log(res.data)
        })
    }
    function handleSignup()
    {
        console.log('signup clicked')
        navigate('/register');
    }
  return (
    <div>
      <div className="login-container">
        username : <input type="text" id='un'/><br />
        password : <input type="password" id='pwd' /><br />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  )
}

export default Login
