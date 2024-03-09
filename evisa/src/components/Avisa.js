import React, { useState } from 'react'
import axios from 'axios'
function Avisa() {
    const [data,setData]= useState([])
    if(data.length==0){
    axios.get('http://localhost:8000/acceptedvisa',).then((res)=>{
        console.log(res.data)
        setData(res.data)
    })
}
  return (
    <div>
        <h1>Accepted Visa Applications</h1>
        <table>
           <tr>
            <th> Name</th>
            <th> Email </th>
            <th> email </th>
            <th> Aadhaar </th>
            <th> Address </th>
           </tr>
            {data.map((user)=>{
                return(
                    
                        <tr>
                            <td> {user.name} </td>
                            <td> {user.email} </td>
                            <td> {user.aadhaar} </td>
                            <td> {user.address} </td>
                        </tr>
                    
                )
            })}
        </table>
    </div>
  )
}

export default Avisa
