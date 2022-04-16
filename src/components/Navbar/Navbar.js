import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link className="nav-link" to="/home">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/project">
          Projects
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
