import React from "react";
import logo from '../Image/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse ms-lg-4" id="navbarSupportedContent">
                    {/* <!-- Navbar brand --> */}
                    <a className="navbar-brand mt-2 mt-lg-0" href="/">
                        <img
                            src={logo}
                            height="40"
                            alt="Logo"
                            loading="lazy"
                        />
                    </a>
                    {/* <!-- Left links --> */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Projects</a>
                        </li>
                    </ul>
                </div>

                {/* <!-- Right elements --> */}
                <div className="d-flex align-items-center me-lg-4">

                    {/* <!-- User Profile --> */}
                    <div className="dropdown">
                        <a
                            className="dropdown-toggle d-flex align-items-center hidden-arrow"
                            href="/"
                            id="navbarDropdownMenuAvatar"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                className="rounded-circle"
                                height="40"
                                alt="Avatar"
                                loading="lazy"
                            />
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuAvatar"
                        >
                            <li><a className="dropdown-item" href="/">My profile</a></li>
                            <li><a className="dropdown-item" href="/">Settings</a></li>
                            <li><a className="dropdown-item" href="/">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;