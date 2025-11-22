import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { useMediaQuery } from "react-responsive";


const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // 🪄 Detect scroll to apply fade + shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "shadow-sm bg-white" : "bg-white"
      } ${isMobile ? "py-2" : "py-3"}`}
      style={{
        transition: "all 0.4s ease",
        opacity: scrolled ? 0.98 : 1,
        minHeight: isMobile ? "60px" : "80px",
      }}
    >
      <div className="container">
        {/* Logo + Brand Name */}
        <Link
          className="navbar-brand fw-bold d-flex align-items-center"
          to="/"
          style={{ textDecoration: "none" }}
        >
          <img
            src={logo}
            alt="Hajiyar Halal Profits Logo"
            style={{
              height: scrolled ? "45px" : "55px",
              width: "auto",
              marginRight: "10px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
            }}
          />
          <span
            className="text-success fs-5"
            style={{ transition: "all 0.3s ease" }}
          >
            Hajiyar Halal Profits
          </span>
        </Link>

        {/* Toggler (Mobile View) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <li className="nav-item" key={item.to}>
                <Link
                  className={`nav-link px-3 ${
                    location.pathname === item.to
                      ? "text-success fw-semibold border-bottom border-success"
                      : "text-dark"
                  }`}
                  to={item.to}
                  style={{
                    transition: "color 0.3s ease",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
