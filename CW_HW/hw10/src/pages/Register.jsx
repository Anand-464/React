import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import axios from 'axios'


function Register() {
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate= useNavigate();

    function registerUser(e){
        e.preventDefault();

        const user= {
            user_name: name,
            email: email,
            password: password
        }
        axios.post('https://worksheet-student.mashupstack.com/register', user)
        .then(response=> {
            setErrorMessage('');
            console.log(`Account created`)
            navigate('/login')
        })
        .catch(error=> {
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(' '));
            }else{
                setErrorMessage('Failed to connect to api');
            }
        })
    }

  return (
    <div>
        <Navbar/>
        <div className="container mt-5">
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
  )
}

export default Register