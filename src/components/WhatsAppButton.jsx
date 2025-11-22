import React from "react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "918754181262"; // Replace with your number (without +)
  const message = "Hello! I’d like to know more about Hajiyar Halal Profits.";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="whatsapp-float"
    >
      <i className="bi bi-whatsapp"></i>
    </motion.a>
  );
};

export default WhatsAppButton;
