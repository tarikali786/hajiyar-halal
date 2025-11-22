import React from "react";

function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/91950049753"
        className="btn btn-success shadow-lg rounded-circle"
        style={{
          position: "fixed",
          bottom: "90px",
          right: "20px",
          zIndex: "1050",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
        }}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

      {/* Call Button */}
      <a
        href="tel:9150049752"
        className="btn btn-light border shadow-lg rounded-circle"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "1050",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "26px",
          color: "#198754",
        }}
        title="Call Us"
      >
        <i className="bi bi-telephone-fill"></i>
      </a>
    </>
  );
}

export default FloatingButtons;
