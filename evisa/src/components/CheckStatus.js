import React, { useState } from 'react'
import axios from 'axios'
import Card from './Card'
function CheckStatus() {
  const [status,setStatus]= useState('Enter Token number for status')
  const [data,setData] = useState()
  const handleSearch = () =>{
   const id = document.getElementById('aid').value
    axios.post('http://localhost:8000/search',{id}).then((res)=>{
      setData(res.data)
      setStatus(res.data.status)
    })
  }
  if(status == "Accepted")
  {
    return (
      <>
      {console.log(data)}
      <Card props={data}/>
      </>
    )
  }
  return (
    <div>
      <h1>Check Status of application</h1>
      <label htmlFor="applyid">Enter Application id </label>
      <input type="text" id='aid'/>
      <button onClick={handleSearch}>Search</button>
      <h1>Status : {status}</h1>
    </div>
  )
}

export default CheckStatus
