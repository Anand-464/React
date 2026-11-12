import { NavLink } from "react-router-dom";

function Navbar() {
    return <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-brand">
            <NavLink to={"/"} className={'nav-link'}>Book Manager</NavLink>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mr-auto" id="navbarNav"  style={{ float: "left" }}>
            <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
                <li className="nav-item">
                    <NavLink to={"/"} className={ 'nav-link '+(status => status.isActive ? 'active' : '')}>
                        Home
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to={"/list/create"} className={ 'nav-link '+(status => status.isActive ? 'active' : '')}>
                        Create
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to={"/list"} className={ 'nav-link '+(status => status.isActive ? 'active' : '')}>
                        List
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>;
}

export default Navbar;