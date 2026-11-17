import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import Navbar from './Navbar';

function Register() {
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const [errorMessage, setErrorMessage]= useState("");
    const navigate= useNavigate();

    function registerUser(e){
        e.preventDefault();
        
        const user= {
            user_name: name,
            email: email,
            password: password,
        }
        axios.post('https://worksheet-product.mashupstack.com/register', user)
        .then(response=>{
            alert('Registration Successful');
            navigate('/login')
        })
        .catch(error => {
            console.log("Status:", error.response?.status);
            console.log("API error:", error.response?.data);
            if (error.response?.data?.errors) {
                setErrorMessage(
                    Object.values(error.response.data.errors).flat().join(" ")
                );
            } else if (error.response?.data?.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("Registration failed. Please try again.");
            }
        });
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">

                    <h1>Register</h1>
                    {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}

                    <form onSubmit={registerUser}>
                        <div className="form-group mb-3">
                            <label>Name: </label>
                            <input type="text" id='name' className="form-control" value={name} onChange={(e)=> setName(e.target.value)} required/>
                        </div>

                        <div className="form-group mb-3">
                            <label>Email: </label>
                            <input type="text" id='email' className="form-control"value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                        </div>

                        <div className="form-group mb-3">
                            <label>Password: </label>
                            <input type="password" id="password" className="form-control" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                        </div>

                        <div className="form-group">
                            <button type="submit" className='btn btn-primary float-end'>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )}

export default Register