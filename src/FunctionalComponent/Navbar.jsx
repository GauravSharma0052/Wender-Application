import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/style.css"
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg background sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">NewsApp  </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Politics">Politics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Crime">Crime</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Education">Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Technology">Technology</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Cricket">Cricket</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/IPL">IPL</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/COVID19">COVID19</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Jokes">Joks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Entertainment">Entertainment</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
