import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";

const HAssist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "🤖 Assalamu Alaikum! I’m H-Assist — your Halal Investment Companion. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  // Auto-scroll on new message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = getSmartReply(input);
      setIsTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 800);
  };

  const getSmartReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("hello") || msg.includes("salam"))
      return "Wa Alaikum Assalam 🌿 How may I assist you today?";
    if (msg.includes("about"))
      return "📖 We are Hajiyar Halal Profits — serving 26+ years of interest-free, ethical real estate and business growth.";
    if (msg.includes("service") || msg.includes("investment"))
      return "💼 Explore our Services — Real Estate, Halal Investment, and Ethical Joint Ventures.";
    if (msg.includes("halal") || msg.includes("haram"))
      return "🕌 100% Halal & Riba-Free — every business we do follows Islamic principles and trust.";
    if (msg.includes("contact") || msg.includes("whatsapp"))
      return "📞 You can reach us through the Contact page or directly via WhatsApp (link below).";
    if (msg.includes("profit"))
      return "📈 Our model ensures fair, loss-free, and transparent halal profit sharing.";
    if (msg.includes("location"))
      return "📍 We’re at #1, Rohini Nagar, Railway Station Road, Opp. Hajiyar Provisions, Urapakkam West, Chennai-603211.";
    return "🤝 Thank you! I’ll make sure your message reaches our team. You can also reach us via WhatsApp below.";
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <motion.button
        onClick={toggleChat}
        className="btn btn-success rounded-circle shadow-lg position-fixed"
        style={{
          bottom: "20px",
          right: "20px",
          zIndex: 1050,
          width: "58px",
          height: "58px",
          background: "linear-gradient(135deg, #0b5e2d, #1db954)",
          border: "none",
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="bi bi-chat-dots-fill fs-4 text-white"></i>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.4 }}
            className="position-fixed rounded-4 shadow-lg overflow-hidden"
            style={{
              bottom: "90px",
              right: "20px",
              width: "340px",
              maxHeight: "70vh",
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(12px)",
              border: "1px solid #19875455",
              zIndex: 1051,
            }}
          >
            {/* Header */}
            <div
              className="p-3 d-flex justify-content-between align-items-center text-white"
              style={{
                background: "linear-gradient(135deg, #0b5e2d, #198754)",
              }}
            >
              <div>
                <h6 className="fw-bold mb-0">H-Assist 🤖</h6>
                <small style={{ fontSize: "0.75rem", opacity: 0.8 }}>
                  Your Halal Growth Guide 🌿
                </small>
              </div>
              <button
                className="btn btn-sm btn-light text-success rounded-circle"
                onClick={toggleChat}
              >
                ✕
              </button>
            </div>

            {/* Chat Body */}
            <div
              ref={chatRef}
              className="p-3"
              style={{
                maxHeight: "55vh",
                overflowY: "auto",
                background: "#f9fdfb",
              }}
            >
              <AnimatePresence>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    className={`mb-2 ${
                      msg.from === "user" ? "text-end" : "text-start"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`d-inline-block p-2 rounded-3 ${
                        msg.from === "user"
                          ? "bg-success text-white"
                          : "bg-light text-dark"
                      }`}
                      style={{
                        maxWidth: "80%",
                        borderRadius:
                          msg.from === "user"
                            ? "15px 15px 0 15px"
                            : "15px 15px 15px 0",
                        fontSize: "0.9rem",
                      }}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <div className="text-start">
                  <div className="d-inline-block bg-light text-dark p-2 rounded-3">
                    <span className="typing-dots">•••</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="d-flex p-2 border-top bg-white align-items-center">
              <input
                type="text"
                className="form-control border-0 shadow-none"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                className="btn btn-success rounded-circle ms-2"
                onClick={handleSend}
              >
                <i className="bi bi-send"></i>
              </button>
            </div>

            {/* WhatsApp Quick Button */}
            <div
              className="text-center py-2 bg-success bg-opacity-10 border-top"
              style={{ fontSize: "0.85rem" }}
            >
              <a
                href="https://wa.me/919150049753?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20know%20about%20Halal%20investments."
                target="_blank"
                rel="noopener noreferrer"
                className="text-success text-decoration-none fw-semibold"
              >
                <i className="bi bi-whatsapp me-1"></i> Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Responsiveness */}
      <style jsx="true">{`
        @media (max-width: 768px) {
          .position-fixed.rounded-4.shadow-lg.overflow-hidden {
            width: 90%;
            right: 5%;
            bottom: 80px;
            max-height: 75vh;
          }
          .btn.rounded-circle.shadow-lg.position-fixed {
            width: 54px;
            height: 54px;
            bottom: 15px;
            right: 15px;
          }
        }
        .typing-dots {
          display: inline-block;
          animation: blink 1.4s infinite steps(1, start);
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default HAssist;
