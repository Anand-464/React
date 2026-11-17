import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "../store/authSlice";
import { clearProducts } from "../store/productSlice";

function Navbar() {
    const email = useSelector(store => store.auth.email);
    const token = useSelector(store => store.auth.token);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logout() {
        dispatch(removeUser());
        dispatch(clearProducts());
        navigate("/login");
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">

                <NavLink to="/" className="navbar-brand">
                    Electronics Store
                </NavLink>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => "nav-link " + (isActive ? "active" : "") } >
                            Home
                        </NavLink>
                    </li>

                    {token ? (
                        <>
                            <li className="nav-item">
                                <NavLink to="/products" className={({ isActive }) => "nav-link " + (isActive ? "active" : "") } >
                                    Products
                                </NavLink>
                            </li>

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