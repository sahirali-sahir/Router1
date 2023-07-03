import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const aS=useNavigate()
  return (
    <div>
       <h1 className='bg-primary text-white'>Home page</h1>
       <button onClick={()=>aS('/login')}>login</button> <br/> <br/>
       <button onClick={()=>aS('/')} >Signup</button>
       
    </div>
  )
}

export default Home