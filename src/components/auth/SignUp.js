import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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

    return (
        <>
            <div className='Rmain'>
                <h3>SignUp Form</h3>
                <form onSubmit={posstData} className="Rform">
                    <label>First Name:
                        <input type="text" name="fName" placeholder='Enter Your First Name' onChange={gettData} required minLength={3} /></label><br />
                    <label>Last Name:
                        <input type="text" name="lName" placeholder='Enter Your Last Name' onChange={gettData} required minLength={3} /></label><br />
                    <label>Email:
                        <input type="email" name="email" placeholder='Enter Your Email' onChange={gettData} required minLength={13} /></label><br />
                    <label>Username:
                        <input type="text" name="username" placeholder='Enter Your User Name' onChange={gettData} required minLength={5} /></label><br />
                    <label>Password:
                        <input type="password" name="password" placeholder='Create Password' onBlur={gettData} required minLength={6} /></label><br />
                    <label>Confirm Password:
                        <input type="password" name="Cpassword" placeholder='Confirm Password' onBlur={gettData} required minLength={6} /></label><br />
                    <button type='submit' className='btn signup'>Sign Up</button>
                </form>
                <button className='btn signup'><Link to="/LogIn">LogIn</Link></button>
                {/* <ul className='btn signup'><li><Link to="/LogIn">LogIn</Link></li></ul> */}
            </div>
        </>
    )
}
