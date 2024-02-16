import React from 'react'
import axios from 'axios'
function CheckStatus() {
  const handleSearch = () =>{
   const id = document.getElementById('aid').value
    axios.post('http://localhost:8000/search',id).then({
    })
  }
  return (
    <div>
      <h1>Check Status of application</h1>
      <label htmlFor="applyid">Enter Application id </label>
      <input type="text" id='aid'/>
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default CheckStatus
