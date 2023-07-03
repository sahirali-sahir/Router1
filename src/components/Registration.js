import React from 'react'
import { useNavigate } from 'react-router-dom'
const Registration = () => {
    const ab=useNavigate()
  return (
    <div><form action="">
        <h1>Registration page</h1>
        <input type="text" placeholder='User name'/></form>  <br/>
        <button onClick={()=>ab('/login')}>submit</button></div>
  )
}

export default Registration