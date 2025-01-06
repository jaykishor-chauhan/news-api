import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid ms-lg-3 me-lg-3">
                <span>
                    <Link className="navbar-brand" style={{color: '#0e79eb', fontWeight: '-moz-initial'}} to="/">ApnaNews</Link>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li><Link className="nav-link" to="/top-daily-headlines">Today News</Link></li>
                        <li className="nav-item dropdown"> 
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                News Articles
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/top-business-headlines">Top business headlines</Link></li>
                                <li><Link className="dropdown-item" to="/">Top headlines</Link></li>
                                <li><Link className="dropdown-item" to="/">Top business headlines</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/">Something else</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
