import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Loading() {
    var usenavigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
           
            usenavigate("/form")
        },3000)
    },[])
  return (
    <div className='loading'>
        <div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

    </div>
  )
}

export default Loading
