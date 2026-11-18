import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "../store/authSlice";

function Navbar() {
    const user = useSelector(store => store.auth.user);
    const email = user?.email;
    const token = user?.token;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logout() {
        dispatch(removeUser());
        navigate("/login");
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">

                <NavLink to="/" className="navbar-brand">
                    Student Management System
                </NavLink>

                <ul className="navbar-nav">

                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => "nav-link " + (isActive ? "active" : "") } >
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/students" className={({ isActive }) => "nav-link " + (isActive ? "active" : "") } >
                            Student list
                        </NavLink>
                    </li>

                    {token ? (
                        <>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={logout} >
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
                                <NavLink to="/login" className={({ isActive }) => "nav-link " + (isActive ? "active" : "") } >
                                    Login
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;