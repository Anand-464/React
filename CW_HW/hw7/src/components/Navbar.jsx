import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <NavLink to="/" className="navbar-brand">
                    Product Catalog
                </NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}>
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/list/create" className={({ isActive }) => "nav-link " + (isActive ? "active" : "") } >
                            Create
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/list" className={({ isActive }) => "nav-link " + (isActive ? "active" : "") }>
                            Products
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
