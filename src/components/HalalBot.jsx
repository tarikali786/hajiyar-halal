import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { MessageCircle } from "lucide-react";

const HalalBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Assalamu Alaikum! I'm H-Assist 🤖 — your Halal Business Assistant. How may I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const recognitionRef = useRef(null);
  const chatEndRef = useRef(null);
  const memoryRef = useRef([]); // last 3 Q&A

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) return;
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setInput(transcript);
      sendMessage(transcript);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognitionRef.current = recognition;
  }, []);

  const speak = (text) => {
    if ("speechSynthesis" in window) {
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "en-IN";
      speechSynthesis.speak(utter);
    }
  };

  const sendMessage = (text = input) => {
    if (!text.trim()) return;
    const newMsg = { sender: "user", text };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = getSmartReply(text);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setIsTyping(false);
      speak(reply);

      memoryRef.current.push({ question: text, answer: reply });
      if (memoryRef.current.length > 3) memoryRef.current.shift();
    }, 700);
  };

  const getSmartReply = (msg) => {
    const text = msg.toLowerCase();
    const lastQ =
      memoryRef.current[memoryRef.current.length - 1]?.question || "";

    if (text.includes("more") && lastQ.includes("service"))
      return "We also offer consultancy, Halal certification support, and global business guidance.";
    if (text.includes("where") && lastQ.includes("address"))
      return "We’re at Rohini Nagar, Urapakkam West, Chennai — opposite Hajiyar Provisions.";
    if (text.includes("founder"))
      return "Our founder, Mr. Hajiyar, has 26+ years of experience in ethical real estate.";

    if (text.includes("about"))
      return "Hajiyar Halal Profits is a 100% Halal business venture with Shariah-compliant investments.";
    if (text.includes("service"))
      return "We provide Halal real estate, DTCP layouts, joint ventures (kootu viyabaram), and ethical investments.";
    if (text.includes("investment") || text.includes("profit"))
      return "Our operations are interest-free (riba-free), ensuring Halal and ethical profits.";
    if (text.includes("address") || text.includes("contact"))
      return "📍 #1 Rohini Nagar, Urapakkam West, Chennai 603211 📞 +91 91500 49752 / 91500 49753";
    if (text.includes("thanks") || text.includes("thank"))
      return "Alhamdulillah! I’m happy to help — feel free to ask about our Halal services.";
    if (text.includes("hi") || text.includes("hello") || text.includes("salam"))
      return "Wa Alaikum Assalam! How may I assist you today?";
    return "Could you please specify if it’s about our services, investments, or contact info?";
  };

  const handleMic = () => {
    if (!recognitionRef.current)
      return alert("Voice input not supported in this browser.");
    if (isListening) recognitionRef.current.stop();
    else recognitionRef.current.start();
    setIsListening(!isListening);
  };

  return (
    <>
      {/* Floating chat bubble */}
      {!isOpen && (
        <motion.button
          className="btn btn-success rounded-circle position-fixed chat-float-btn"
          style={{
            bottom: "25px",
            right: "25px",
            width: "60px",
            height: "60px",
            zIndex: 1050,
            backgroundColor: "#198754",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setIsOpen(true)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <i className="bi bi-chat-dots fs-4 text-white"></i>
        </motion.button>
      )}

      {/* Chatbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="position-fixed bottom-0 end-0 m-4 shadow-lg rounded-4 bg-white"
            style={{
              width: "350px",
              maxHeight: "80vh",
              border: "2px solid #198754",
              zIndex: 1050,
              overflow: "hidden",
            }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
          >
            {/* Header */}
            <div className="bg-success text-white p-3 rounded-top-4 d-flex justify-content-between align-items-center">
              <span className="fw-semibold">H-Assist 🤖</span>
              <div className="d-flex align-items-center gap-3">
                <i
                  className={`bi ${isListening ? "bi-mic-fill" : "bi-mic"}`}
                ></i>
                <button
                  className="btn btn-close btn-close-white btn-sm"
                  onClick={() => setIsOpen(false)}
                ></button>
              </div>
            </div>

            {/* Messages */}
            <div
              className="p-3 overflow-auto"
              style={{ height: "55vh", background: "#f9fdfb" }}
            >
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  className={`mb-3 d-flex ${
                    m.sender === "user"
                      ? "justify-content-end"
                      : "justify-content-start"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div
                    className={`p-3 rounded-4 ${
                      m.sender === "user"
                        ? "bg-success text-white"
                        : "bg-light text-dark"
                    }`}
                    style={{ maxWidth: "80%" }}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="d-flex justify-content-start mb-2">
                  <div className="bg-light text-secondary px-3 py-2 rounded-pill small">
                    H-Assist is typing...
                  </div>
                </div>
              )}
              <div ref={chatEndRef}></div>
            </div>

            {/* Input & Buttons */}
            <div
              className="p-3 border-top bg-white d-flex align-items-center gap-2"
              style={{
                borderTop: "1px solid #e0e0e0",
                background: "#fff",
              }}
            >
              {/* Mic Button */}
              <button
                className={`btn rounded-circle d-flex justify-content-center align-items-center ${
                  isListening ? "btn-danger" : "btn-success"
                }`}
                style={{
                  width: "42px",
                  height: "42px",
                  transition: "0.2s",
                }}
                onClick={handleMic}
              >
                <i className="bi bi-mic"></i>
              </button>

              {/* Input Box */}
              <input
                type="text"
                className="form-control rounded-pill px-3"
                placeholder="Ask about Hajiyar Halal Profits..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />

              {/* Send Button */}
              <button
                className="btn btn-success rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  width: "42px",
                  height: "42px",
                  transition: "0.2s",
                }}
                onClick={() => sendMessage()}
              >
                <i className="bi bi-send-fill"></i>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HalalBot;
