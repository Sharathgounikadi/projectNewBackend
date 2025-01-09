import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Get = ({apidata}) => {
    const [data,setData]=useState([])

    const api=async()=>{
        const response=await axios.get("https://projectnewbackend.onrender.com/api/data");
        const result= await response.data;
        console.log(result)
        setData(result)
    }

    useEffect(()=>{
        api()
    },[apidata])
  return (
    <div>
        Data is getting transferred into the api
        <ul>
            {data.map((item,index)=>(
                <li key={index}>{item.content}</li>
            ))}
        </ul>
    </div>
  )
}

export default Get