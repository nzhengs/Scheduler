import React from "react";
import logo from "./logo1.png"
import "./Navbar.css"


function Navbar() {
    return  (
        <nav className="navbar navbar-expand-lg navbar-light static-top nav-background">
            <a className="navbar-brand">
                <img src={logo} height="70" alt="" />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="/Profile" className="nav-link">
                            Profile
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Logout
                        </a>
                    </li>

                </ul>
            </div>
        </nav>
    );


}
export default Navbar;