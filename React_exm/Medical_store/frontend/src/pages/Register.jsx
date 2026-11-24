import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import api from '../store/api';
import '../styles/Auth.css';

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    function registerUser(e) {
        e.preventDefault();

        const user = {
            username,
            email,
            password
        };

        api.post('accounts/register/', user)
            .then(() => {
                setErrorMessage('');
                console.log("Account created successfully");
                navigate('/login');
            })
            .catch(error => {
                const data = error.response?.data;

                if (data) {
                    const messages = Object.entries(data).map(
                        ([field, errors]) =>
                            `${field}: ${Array.isArray(errors) ? errors.join(' ') : errors}`
                    );

                    setErrorMessage(messages.join(' '));
                } else {
                    setErrorMessage('Failed to connect to the API.');
                }
            });
    }

    return (
        <div className="auth-page">
            <Navbar />

            <div className="auth-container">
                <div className="auth-card">

                    <h1 className="auth-title">Create Account</h1>
                    <p className="auth-subtitle">
                        Register for your medical store account
                    </p>

                    {errorMessage && (
                        <div className="alert alert-danger">
                            {errorMessage}
                        </div>
                    )}

                    <form onSubmit={registerUser}>

                        <div className="auth-form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required/>
                        </div>

                        <div className="auth-form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required/>
                        </div>

                        <div className="auth-form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                minLength="8"
                                required/>
                        </div>

                        <button type="submit" className="btn auth-submit-btn">
                            Register
                        </button>
                    </form>

                    <p className="auth-footer">
                        Already have an account?
                        <Link to="/login"> Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
