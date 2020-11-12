import React from "react";
import { Link, NavLink } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the
// appropriate navigation link item
function Footer() {
    return (

        <footer style={{backgroundColor: "#011A27"}} className="footer mt-auto py-3">
        <div className="container">
            <p style={{textAlign: "center", color: "#E6DF44"}}>&#169; Copyright 2020
                Christopher Cruzcosa</p>
        </div>
    </footer>
    );
}

export default Footer;