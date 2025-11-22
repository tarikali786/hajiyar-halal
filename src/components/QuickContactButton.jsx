import React from "react";

const QuickContactButton = ({ onClose }) => {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 3000,
      }}
    >
      <div
        className="card shadow-lg p-4 rounded-4 text-center"
        style={{
          width: "90%",
          maxWidth: "420px",
          background: "linear-gradient(135deg, #ffffff, #f6fff9)",
          border: "1px solid #19875430",
        }}
      >
        {/* Header with logo */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <img
              src="/src/assets/logo.png"
              alt="Logo"
              style={{ height: "45px", width: "auto", marginRight: "10px" }}
            />
            <h5 className="text-success fw-bold mb-0">Quick Contact</h5>
          </div>

          {/* ❌ Close button */}
          <button
            className="btn btn-outline-danger btn-sm rounded-circle"
            onClick={onClose}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <p className="text-muted small">
          Have a question or need a callback? Send us a quick message below 👇
        </p>

        {/* Contact form */}
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 rounded-pill shadow-sm"
          >
            Send Message <i className="bi bi-send ms-2"></i>
          </button>
        </form>

        <div className="mt-3">
          <a
            href="https://wa.me/9150049753"
            className="btn btn-outline-success w-100 mt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp me-2"></i> Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuickContactButton;
