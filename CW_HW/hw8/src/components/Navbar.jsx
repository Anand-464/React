import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <NavLink to="/" className="navbar-brand">
                    Login/Register
                </NavLink>
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <NavLink to="/register" className={({ isActive }) => "nav-link " + (isActive ? "active" : "") } >
                            Register
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/login" className={({ isActive }) => "nav-link " + (isActive ? "active" : "") }>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
