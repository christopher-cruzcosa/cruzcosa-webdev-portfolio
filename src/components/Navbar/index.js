import React from "react";
import { Link, NavLink } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the
// appropriate navigation link item
function Navbar() {
    return (

        <header>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#011A27" }}>
            <Link  className="navbar-brand" to="/cruzcosa-webdev-portfolio" style={{ color: "#F0810F" }}>Christopher Cruzcosa</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                    aria-label="Toggle navigation" style={{ color: "#F0810F" }}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0 d-flex flex-row-reverse">
                        <li className="nav-item active">
                        <NavLink  className="nav-link" to="/cruzcosa-webdev-portfolio" style={{ color: "#F0810F" }}>About<span
                                className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink  className="nav-link" to="/cruzcosa-webdev-portfolio/portfolio" style={{ color: "#F0810F" }}>Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink  className="nav-link" to="/cruzcosa-webdev-portfolio/contact" style={{ color: "#F0810F" }}>Contact</NavLink>
                        </li>
                        <li className="nav-item">
                        <Link  className="nav-link" to="/cruzcosa-webdev-portfolio/resume.pdf" style={{ color: "#F0810F" }} rel="noreferrer" target="_blank" >Resume</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;