import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-success text-white py-3 shadow-sm sticky-top">
      <div className="container d-flex justify-content-between align-items-center">
        <h4 className="fw-bold m-0">Hajiyar Halal Profits</h4>
        <nav>
          <Link className="text-white mx-2 text-decoration-none" to="/">
            Home
          </Link>
          <Link className="text-white mx-2 text-decoration-none" to="/about">
            About
          </Link>
          <Link className="text-white mx-2 text-decoration-none" to="/services">
            Services
          </Link>
          <Link className="text-white mx-2 text-decoration-none" to="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
