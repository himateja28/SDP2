import axios from 'axios'
import {useState} from 'react'

function Applied_users()
{
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
        </div>
    )
}
export default Applied_users