import React from 'react'
import axios from 'axios';
export default function Apply() {
 
  const handleSubmit = () => {
    axios.post('http://localhost:8000/newvisa',{
      name:document.getElementById('name').value,
      email:document.getElementById('email').value,
      aadhaar:document.getElementById('anum').value,
      // avatar:document.getElementById('avatar'),
      father_name:document.getElementById('fname').value,
      mother_name:document.getElementById('mname').value,
      pin_code:document.getElementById('pin').value,
      address:document.getElementById('add').value,
      applied_visa:document.getElementById('visa').value
    })

  }
  return (
    <div>
      <h1>Application for E-Visa </h1>
      <form action="post" onSubmit={handleSubmit}>
    <label htmlFor="">Welcome to E-visa</label>
    <input type="text" placeholder='Enter Your Name as per records' required id='name'/>
      <input type="email" placeholder='Enter Email' required id='email'/>
      <input type="number" placeholder='Enter Adhaar Number 'required id='anum'/>
      {/* <input type="file" id='avatar'/> */}
      <input type="text" placeholder='Enter Father name'required id='fname'/>
      <input type="text" placeholder='Enter Mother name'required id='mname'/>
      <input type="number" placeholder='Enter pincode'required id='pin'/>
      <input type="text" placeholder='Enter Address'required id='add'/>
      <input type="text" placeholder='Enter visa type'required id='visa'/>
      <button>Submit</button>
      </form>
    </div>
  )
}
