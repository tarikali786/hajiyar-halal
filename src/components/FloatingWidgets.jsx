import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HalalBot from "./HalalBot";
import "../styles/floatingWidgets.css";

const FloatingWidgets = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919123456789?text=Assalamu%20Alaikum!%20I%20want%20to%20know%20about%20Hajiyar%20Halal%20Profits."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

      {/* Halal Seal */}
      <motion.div
        className="halal-seal shadow-lg"
        whileHover={{ scale: 1.1 }}
        title="100% Halal Certified Business"
      >
        🕌 Halal Certified
      </motion.div>

      {/* Scroll-to-Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="scroll-top-btn"
        title="Back to top"
      >
        <i className="bi bi-arrow-up"></i>
      </button>

      {/* Floating Chat Icon */}
      <motion.div
        className="chat-toggle-btn bg-success text-white shadow-lg"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
      >
        <i className={`bi ${open ? "bi-x-lg" : "bi-chat-dots-fill"}`}></i>
      </motion.div>

      {/* Chatbot Window */}
      <AnimatePresence>{open && <HalalBot />}</AnimatePresence>
    </>
  );
};

export default FloatingWidgets;
