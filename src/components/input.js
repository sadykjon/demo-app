import React,{useState} from 'react'

const Input =()=>{
    const [val,setVal]=useState('')
    const [data,setData]=useState('')
    const [type,setType]=useState(true)

    const btnClick=()=>{
setData(val)
setType((type)=>!type)
    }
    return(
        <div>
            <input value={val} onChange={(e)=>setVal(e.target.value)} type={type?"password":"text"} />
            <button onClick={btnClick}>Send</button>
            <h1>{data}</h1>
        </div>
    )
}







export default Input