import { useState } from 'react';
import Navbar from '../components/Navbar';
import api from '../store/api';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/authSlice';
import '../styles/Auth.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function attemptLogin(e) {
        e.preventDefault();

        api.post('accounts/login/', {
            username,
            password
        })
            .then(response => {
                setErrorMessage("");

                const user = { username };

                localStorage.setItem('access', response.data.access);
                localStorage.setItem('refresh', response.data.refresh);
                localStorage.setItem('user', JSON.stringify(user));

                dispatch(setUser(user));
                navigate('/dashboard');
            })
            .catch(error => {
                if (error.response?.data?.detail) {
                    setErrorMessage(error.response.data.detail);
                } else {
                    setErrorMessage("Failed to login. Please try again.");
                }
            });
    }

    return (
        <div className="auth-page">
            <Navbar />

            <div className="auth-container">
                <div className="auth-card">

                    <h1 className="auth-title">Welcome Back</h1>
                    <p className="auth-subtitle">
                        Login to your medical store account
                    </p>

                    {errorMessage && (
                        <div className="alert alert-danger">
                            {errorMessage}
                        </div>
                    )}

                    <form onSubmit={attemptLogin}>

                        <div className="auth-form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="auth-form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn auth-submit-btn">
                            Login
                        </button>

                    </form>

                    <p className="auth-footer">
                        Don't have an account?
                        <Link to="/register"> Register here</Link>
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Login;
