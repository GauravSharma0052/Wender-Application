import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function SignUp() {
    var [nuser, setnuser] = useState({
        fName: "",
        lName: "",
        email: "",
        username: "",
        password: "",
        Cpassword: "",
    })
    function gettData(e) {
        var name = e.target.name
        var value = e.target.value
        setnuser((oldData) => {
            return {
                ...oldData,
                [name]: value
            }
        })
        var a = nuser.password
        var b = nuser.Cpassword
        if (a == b) {
            return true
        }
        else {
            alert("Password is not Same")
        }

    }
    function posstData() {
        alert(`First Name = ${nuser.fName}\nLast Name=${nuser.lName}\nEmail=${nuser.email}\nUser Name=${nuser.username}\nPassword=${nuser.password}\nConfirm Password=${nuser.Cpassword}`)
    }

//  const handle=()=>{
        
//         localStorage.setItem("First Name",nuser.lname)
//         localStorage.setItem("First Name",nuser.email)
//         localStorage.setItem("First Name",nuser.username)
//         localStorage.setItem("First Name",nuser.password)
//         localStorage.setItem("First Name",nuser.Cpassword)
//  }
    return (
        <>
            <div className='Rmain'>
                <h3>SignUp Form</h3>
                <form onSubmit={posstData} className="Rform">
                    <label>First Name:
                        <input className='labels' type="text" name="fName" placeholder='Enter Your First Name' onChange={gettData} required minLength={3} /></label><br />
                    <label>Last Name:
                        <input className='labels' type="text" name="lName" placeholder='Enter Your Last Name' onChange={gettData} required minLength={3} /></label><br />
                    <label>Email:
                        <input className='labels' type="email" name="email" placeholder='Enter Your Email' onChange={gettData} required minLength={13} /></label><br />
                    <label>Username:
                        <input className='labels' type="text" name="username" placeholder='Enter Your User Name' onChange={gettData} required minLength={5} /></label><br />
                    <label>Password:
                        <input className='labels' type="password" name="password" placeholder='Create Password' onBlur={gettData} required minLength={6} /></label><br />
                    <label>Confirm Password:
                        <input className='labels' type="password" name="Cpassword" placeholder='Confirm Password' onBlur={gettData} required minLength={6} /></label><br />
                    <button type='submit' className='bn signup'>Sign Up</button>
                </form>
                <label>
                <button className='bn signup'><NavLink to="/LogIn">LogIn</NavLink></button>
                </label>
                {/* <ul className='btn signup'><li><Link to="/LogIn">LogIn</Link></li></ul> */}
            </div>
        </>
    )
}
