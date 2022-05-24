import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
  
        
          <button className='btn'><Link to="/">Home</Link></button>
          <button className='btn'><Link to="/LogIn">LogIn</Link></button>


    </>
  )
}
