import { NavLink } from "react-router-dom";

function Navbar() {
    return( 
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="navbar-brand">
        Navbar
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mr-auto" id="navbarNav"  style={{ float: "left" }}>  
        <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
            <li className="nav-item">
            <NavLink to={"/"} className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')}>Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={"/aboutus"} className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')}> Aboutus</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={"/contactus"} className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')}> Contact us</NavLink>
            </li>
        </ul>
    </div>
    </nav>
    </>
    )
}

export default Navbar;