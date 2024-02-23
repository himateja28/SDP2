import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Register() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      axios.post('http://localhost:8000/newuser',{
        email:data.get('email'),
        password:data.get('pwd')
      }).then((res)=>{
        if(res.data==1)
        {
          navigate('/')
        }
      })
    }
  return (
    <div>
      <div className="register">
        <form action="post" onSubmit={handleSubmit}>
    <label htmlFor="">Welcome to E-visa</label>
      <input type="text" placeholder='Enter Email' id='email' name='email'/>
      <input type="password" placeholder='Enter Password' name='pwd'/>
      <button>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Register
