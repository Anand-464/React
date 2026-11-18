import { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar';
import { useDispatch } from 'react-redux';
import { setUser } from "../store/authSlice";
import { useNavigate } from 'react-router-dom';
import checkGuest from "../auth/checkGuest";


function Login() {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch= useDispatch();
    const navigate= useNavigate();

    function attemptLogin(e){
        e.preventDefault();

        axios.post('https://worksheet-student.mashupstack.com/login', {
            email: email,
            password: password
        }).then(response=>{
            setErrorMessage("")
            const user = {
                email: email,
                token: response.data.token
            }
            dispatch(setUser(user));
            navigate("/students");
            console.log("Logged in user:", user);

        }).catch(error => {
            if (error.response?.data?.errors) {
                setErrorMessage(
                    Object.values(error.response.data.errors).join(" ")
                );
            } else if (error.response?.data?.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("Failed to login user. Please contact admin");
            }
        });
    }

  return (
    <div>
        <Navbar/>
        <div className="container mt-5">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1>Login</h1>
                    {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
                    
                    <form onSubmit={attemptLogin}>
                        <div className="form-group mb-3">
                            <label>Email:</label>
                            <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} required />
                        </div>

                        <div className="form-group mb-3">
                            <label>Password:</label>
                            <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} required />
                        </div>

                        <button type="submit" className="btn btn-primary float-end" >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default checkGuest(Login);