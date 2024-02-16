import axios from 'axios'
import {useState} from 'react'

function Applied_users()
{
    const handleAccept = ()=>{
        axios.post('http://localhost:8000/accepted',r[0]).then((res)=>{
            console.log('Application accepted')
        })
    }
    const handleReject = ()=>{
        let obj = {...r[0]}
        axios.post('http://localhost:8000/rejected',r[0]).then((res)=>{
            console.log('Application rejected')
        })
    }
    const [ r,setR] = useState(null)
    if(r==null)
    {
        axios.get('http://localhost:8000/appiledusers',{}).then((res)=>{
            console.log(res.data)
            setR(res.data)
        })
    }
    
    return(
        <div>
        {JSON.stringify(r)}
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleReject}>Reject</button>
        </div>
    )
}
export default Applied_users