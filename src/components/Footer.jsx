import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-success text-white pt-5 pb-3 mt-5" data-aos="fade-up">
      <div className="container">
        <div className="row gy-4">
          {/* 🟢 Brand Section */}
          <div className="col-md-4 text-center text-md-start">
            <img
              src="/assets/logo.png"
              alt="Hajiyar Halal Profits Logo"
              style={{
                height: "70px",
                width: "70px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 0 15px rgba(255,255,255,0.3)",
              }}
            />
            <h5 className="fw-bold mt-3">Hajiyar Halal Profits</h5>
            <p className="small text-light">
              Ethical Real Estate & Halal Business with over 26 years of
              experience — rooted in trust, transparency, and integrity.
            </p>
          </div>

          {/* 📍 Contact Section */}
          <div className="col-md-4">
            <h6 className="fw-bold text-uppercase mb-3">Contact Us</h6>
            <p className="mb-1">
              📞 <strong>Mobile:</strong> 91500 49752
            </p>
            <p className="mb-1">
              💬 <strong>WhatsApp:</strong> 91500 49753
            </p>
            <p className="mb-1">
              🏠 #1, Rohini Nagar, Railway Street, Opp. Hajian Provisions,{" "}
              <br />
              Urappakkam West, Chengalpattu – 603211
            </p>
            <p className="mb-0">
              📧{" "}
              <a
                href="mailto:info@hajiyarhalalprofits.com"
                className="text-white text-decoration-none"
              >
                info@hajiyarhalalprofits.com
              </a>
            </p>
          </div>

          {/* 🔗 Quick Links */}
          <div className="col-md-4 text-center text-md-start">
            <h6 className="fw-bold text-uppercase mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-white text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>

            {/* 🌐 Social Icons */}
            <div className="d-flex gap-3 mt-3">
              <a href="https://facebook.com" className="text-white fs-5">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" className="text-white fs-5">
                <FaInstagram />
              </a>
              <a href="https://wa.me/9150049753" className="text-white fs-5">
                <FaWhatsapp />
              </a>
              <a href="https://youtube.com" className="text-white fs-5">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* 🔻 Divider + Copyright */}
        <hr className="border-light mt-4" />
        <div className="text-center small">
          © {new Date().getFullYear()} <strong>Hajiyar Halal Profits</strong> —
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
