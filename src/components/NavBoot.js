import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBoot() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="">Project</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Link className="nav-item nav-link active" aria-current="page" to="/home">Home
        </Link>
        <Link className="nav-item nav-link" to="/about">About
        </Link>
        <Link className="nav-item nav-link" to="/Contact">Contact
        </Link>
            <Link className="nav-item nav-link" to="/Profile">Profile</Link>
            <Link className="nav-item nav-link " to="/">Logout</Link>
        {/* <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/Profile">Profile</Link>
            <Link className="dropdown-item" to="/">Logout</Link>
          </ul>
        </li> */}
      </ul>

    </div>
  </div>
</nav>    
    </>
  )
}
