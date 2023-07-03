import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const aS=useNavigate()
  return (
    <div>
        <h1>login page</h1>
        <input type="text" placeholder='User name' />  <br/> <br/>
    <input type="password" placeholder='Password' />    <br/> <br/>
    <button onClick={()=>aS('/home')}>login</button>   
    <button onClick={()=>aS('/')} >Back</button>
    </div>
  )
}

export default Login