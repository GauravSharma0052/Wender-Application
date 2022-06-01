import React, { useState } from 'react';
import "../auth/mystyle.css"
import { Link } from 'react-router-dom'

export default function LogIn() {
  var [user, setuser] = useState({
    username: "",
    password: ""
  })
  function getData(e) {
    var name = e.target.name
    var value = e.target.value
    console.log(e)
    setuser((oldData) => {
      return {
        ...oldData,
        [name]: value
      }
    }
    )

  }
  function postData() {
    let userData = {
      name: user.username,
      password: user.password
    }
    localStorage.setItem("userInput", JSON.stringify(userData))
    let userInput = localStorage.getItem("userInput")
    console.log(JSON.parse(userInput))
    //  console.log(userInput)
    //  debugger

  }

  return (
    <>
      <div className='main'>
        <h3>LogIn Page</h3>
        <form onSubmit={postData} className="form">
          <label>Username:
            <input type="text" name='username' placeholder='Enter Your Username' onChange={getData} required minLength={3} /></label>
          <br />
          <label>Password:
            <input type="password" name='password' placeholder='Enter Your Password' onChange={getData} required minLength={6} /></label>
          <br />
          <button type='submit' className='bn'><Link to="/Login">Login</Link></button>
          <button className='bn'> <Link to="/SignUp" >SignUp</Link>
          </button>
          {/* <ul className='btn'> <li><Link to="/SignUp" >SignUp</Link></li>
        </ul> */}
        </form>
      </div>
    </>
  )
}

