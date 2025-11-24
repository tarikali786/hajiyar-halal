import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed left-0 top-0 z-40 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg border-white/60 shadow-soft"
          : "bg-white/70 backdrop-blur-lg border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 lg:h-24 lg:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Hajiyar Halal Profits"
            className="h-12 w-12 rounded-2xl border border-emerald-100 object-cover shadow-card lg:h-14 lg:w-14"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
              Est. 1998
            </span>
            <span className="text-lg font-semibold text-slate-900 lg:text-xl">
              Hajiyar Halal Profits
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-brand-600"
                    : "text-slate-500 hover:text-brand-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-brand-700"
          >
            Schedule A Call
          </Link>
        </nav>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-brand-200 hover:text-brand-600 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="mx-4 mb-4 space-y-2 rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-card">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold transition ${
                    isActive
                      ? "bg-brand-50 text-brand-700"
                      : "text-slate-600 hover:bg-slate-100"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isActive ? "bg-brand-500" : "bg-slate-300"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="block rounded-2xl bg-brand-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-card transition hover:bg-brand-700"
            >
              Contact Team
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
