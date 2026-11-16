import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import Navbar from './Navbar';

function Register() {
    var [name, setName]= useState("");
    var [email, setEmail]= useState("");
    var [password, setPassword]= useState("");

    var [errorMessage, setErrorMessage]= useState("");
    var navigate= useNavigate();

    function registerUser(e){
        e.preventDefault();
        var user= {
            user_name: name,
            email: email,
            password: password,
        }
        axios.post('https://worksheet-auth.mashupstack.com/register', user)
        .then(response=>{
            alert('Registration Successful');
            navigate('/login')
        })
        .catch(error => {
            console.log("FULL ERROR:", error);
            console.log("STATUS:", error.response?.status);
            console.log("ERROR DATA:", error.response?.data);
        })
    }
  return (
    <div>
        <Navbar/>
        <h1>Register</h1>
        {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}

        <div className='container mt-5'>
            <form onSubmit={registerUser}>

                <label htmlFor="name">Name: </label>
                <input type="text" id='name' value={name} onChange={(e)=> setName(e.target.value)} required/>

                <label htmlFor="email">Email: </label>
                <input type="text" id='email' value={email} onChange={(e)=> setEmail(e.target.value)} required/>

                <label htmlFor="password">Password: </label>
                <input type="password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>

                <button type="submit" className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Register