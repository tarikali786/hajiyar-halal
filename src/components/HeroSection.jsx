import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section
      className="text-center text-white py-5 bg-success"
      style={{ marginTop: "70px" }}
    >
      <div className="container py-5">
        <h1 className="fw-bold display-5">
          Building Trust Through Halal Real Estate
        </h1>
        <p className="lead mt-3 mb-4">
          26+ years of experience in Shariah-compliant property investments,
          layout promotions, and joint ventures — 100% Halal and Interest-Free.
        </p>
        <Link
          to="/contact"
          className="btn btn-warning text-dark fw-semibold px-4 py-2"
        >
          📞 Contact Us Today
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
