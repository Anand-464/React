import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/authSlice";
import "../styles/Navbar.css";
import { useState } from "react";

function Navbar() {
    const user = useSelector(store => store.auth.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [showLogoutPopup, setShowLogoutPopup] = useState(false);

    function logout() {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");

        dispatch(removeUser());
        navigate("/login");
    }

    return (
        <>
        <nav className="navbar navbar-expand-sm main-navbar">
            <div className="container">
                <NavLink to="/" className="navbar-brand">
                    Medical Store Management System
                </NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/"end className={({ isActive }) =>"nav-link " + (isActive ? "active" : "")} >
                            Home
                        </NavLink>
                    </li>

                    {user ? (
                        <>
                            <li className="nav-item">
                                <NavLink to="/dashboard" className={({ isActive }) => "nav-link " + (isActive ? "active" : "")} >
                                    Dashboard
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <button className="nav-link logout-btn" onClick={()=> setShowLogoutPopup(true)} >
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <NavLink to="/register" className={({ isActive }) => "nav-link " + (isActive ? "active" : "") } >
                                    Register
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/login" className={({ isActive }) => "nav-link " + (isActive ? "active" : "")} >
                                    Login
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
        
        {showLogoutPopup && (
                <div className="logout-overlay">
                    <div className="logout-popup">
                        <h5>Confirm Logout</h5>
                        <p>Are you sure you want to logout?</p>

                        <div className="logout-actions">
                            <button className="logout-yes-btn" onClick={logout} >
                                Yes
                            </button>

                            <button className="logout-no-btn" onClick={() => setShowLogoutPopup(false)} >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
