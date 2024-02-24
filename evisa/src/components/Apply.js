import React, { useState } from 'react'
import axios from 'axios';
export default function Apply() {
 const [status,setStatus] = useState('')
 const [file, setFile] = useState("");
  const handleSubmit = async(event) => {
    event.preventDefault();
    const file = document.getElementById('avatar1').files[0]
    console.log(file)
    await axios.post('http://localhost:8000/newvisa',{
      name:document.getElementById('name').value,
      email:document.getElementById('email').value,
      aadhaar:document.getElementById('anum').value,
      avatar:file,
      father_name:document.getElementById('fname').value,
      mother_name:document.getElementById('mname').value,
      pin_code:document.getElementById('pin').value,
      address:document.getElementById('add').value,
      applied_visa:document.getElementById('visa').value
    }, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then(response => {
      setStatus(`Your Application is being processed ! your application token number is ${response.data}`)
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
    });
    
  }
  return (
    <div>
      <h1>Application for E-Visa </h1>
      <form id='myForm' onSubmit={handleSubmit} method="post" enctype="multipart/form-data">
    <label htmlFor="">Welcome to E-visa</label>
    <input type="text" placeholder='Enter Your Name as per records' required id='name'/>
      <input type="email" placeholder='Enter Email' required id='email'/>
      <input type="number" placeholder='Enter Adhaar Number 'required id='anum'/>
      <input type="file" name='avatar'id='avatar1' onChange={(e) => setFile(e.target.files[0])} />
      <input type="text" placeholder='Enter Father name'required id='fname'/>
      <input type="text" placeholder='Enter Mother name'required id='mname'/>
      <input type="number" placeholder='Enter pincode'required id='pin'/>
      <input type="text" placeholder='Enter Address'required id='add'/>
      <select placeholder='Select Visa type' id='visa'>
      <option>None</option>
      <option>Student visa</option>
      <option>Tourist visa</option>
      <option>Medical visa</option>
      <option>Employee visa</option>
      <option>Immigrant visa</option>
      <option>Travel visa</option>
      </select>
      <select placeholder='Select country' id='visa'>
      <option>None</option>
      <option>USA</option>
      <option>UK</option>
      <option>France</option>
      <option>Dubai</option>
      <option>UAE</option>
      <option>Srilanka</option>
      </select>
      <button>Submit</button>
      <div>{status}</div>
      </form>
    </div>
  )
}
