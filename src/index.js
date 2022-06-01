import React from "react"
import  ReactDOM  from "react-dom/client";
import { BrowserRouter as Router, Route,Routes, } from "react-router-dom";
import About from "./components/About";
import Home from "./components/auth/Home";
import LogIn from "./components/auth/LogIn";
import SignUp from "./components/auth/SignUp";
import Contact from "./components/Contact";
import NavBoot from "./components/NavBoot";
import Profile from "./components/Profile";
// import Navbar from "./components/auth/Navbar"
// import {Switch} from "react-router"



var root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <>
    <Router> 
        <Routes>
        <Route index element={<LogIn/>}/>
        <Route path="/Login" exact element={<NavBoot/>}/>
        <Route path="/About" exact element={<About/>}/>
        <Route path="/home" exact element={ <Home/> } />
        <Route path="/SignUp" exact element={ <SignUp/> } />
        <Route path="/Contact" exact element={ <Contact/> } />
        <Route path="/Profile" exact element={ <Profile/> } />
        
        </Routes>
    </Router>
    </>
)


// switch