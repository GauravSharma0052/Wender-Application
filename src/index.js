import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./components/auth/Home";
import LogIn from "./components/auth/LogIn";
import SignUp from "./components/auth/SignUp";

var root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <>
    <BrowserRouter>
        <Home/>
        <Routes>
        <Route path="/LogIn" element={ <LogIn/> } />
        <Route path="/SignUp" element={ <SignUp/> } />
        </Routes>
    </BrowserRouter>
    </>
)