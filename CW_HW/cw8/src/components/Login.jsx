import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");
    var [errorMessage, setErrorMessage] = useState("");

    var navigate= useNavigate();

    function attemptLogin(e) {
        e.preventDefault()

        axios.post('https://worksheet-auth.mashupstack.com/login',{
            email: email,
            password: password
        }).then(response=>{
            setErrorMessage('')
            console.log(response.data.token)
            alert("Successfully logged in")
            navigate('/')
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(' '))
            }else if(error.response.data.message){
                setErrorMessage(error.response.data.message)
            }else{
                setErrorMessage('Failed to login user. Please contact admin')
            }
        })
    }
  return (
    <div>
        <Navbar/>
        <h1>Login</h1>
        {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}

        <div className='container mt-5'>
            <form onSubmit={attemptLogin}>
                <label htmlFor="email">Email: </label>
                <input type="email" id='email' value={email} onChange={(e)=> setEmail(e.target.value)} required/>

                <label htmlFor="password">Password: </label>
                <input type="password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>

                <button type="submit" className="btn btn-success ">Login</button>

            </form>
        </div>
    </div>
  )
}

export default Login