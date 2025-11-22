import React from "react";

const FloatingWhatsAppButton = () => {
  const phoneNumber = "9150049753"; // replace with your business number
  const message = "Hi, I’d like to know more about Hajiyar Halal Profits.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="position-fixed bottom-0 end-0 m-4"
      style={{
        zIndex: 9999,
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        padding: "14px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
      }}
      title="Chat on WhatsApp"
    >
      <i className="bi bi-whatsapp fs-3"></i>
    </a>
  );
};

export default FloatingWhatsAppButton;
