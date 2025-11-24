import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Mic, MicOff, Send, X } from "lucide-react";

const HalalBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Assalamu Alaikum! I'm H-Assist 🤖 — ask me anything about Hajiyar Halal Profits.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const recognitionRef = useRef(null);
  const chatEndRef = useRef(null);
  const memoryRef = useRef([]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) return;
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
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

  const getSmartReply = (msg) => {
    const text = msg.toLowerCase();
    const lastQ = memoryRef.current[memoryRef.current.length - 1]?.question || "";

    if (text.includes("more") && lastQ.includes("service"))
      return "We also offer consultancy, halal certification support, and global investment guidance.";
    if (text.includes("where") && lastQ.includes("address"))
      return "We’re at Rohini Nagar, Urapakkam West, Chennai — opposite Hajiyar Provisions.";
    if (text.includes("founder"))
      return "Our founder, Mr. Hajiyar, has 26+ years of experience in ethical real estate.";

    if (text.includes("about"))
      return "Hajiyar Halal Profits builds halal real estate and community ventures with zero riba.";
    if (text.includes("service"))
      return "We provide DTCP layouts, joint ventures, regenerative farms, and compliance audits.";
    if (text.includes("investment") || text.includes("profit"))
      return "Every model is riba-free with transparent profit sharing and milestone payouts.";
    if (text.includes("address") || text.includes("contact"))
      return "📍 #1 Rohini Nagar, Urapakkam West, Chennai 603211 | 📞 +91 91500 49752 / 49753";
    if (text.includes("thank"))
      return "Alhamdulillah! happy to help — message anytime about halal business.";
    if (text.includes("hi") || text.includes("hello") || text.includes("salam"))
      return "Wa Alaikum Assalam! How may I assist you today?";
    return "Let me know if you need info about services, investments, or how to reach us.";
  };

  const sendMessage = (text = input) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = getSmartReply(text);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setIsTyping(false);
      speak(reply);

      memoryRef.current.push({ question: text, answer: reply });
      if (memoryRef.current.length > 3) memoryRef.current.shift();
    }, 600);
  };

  const toggleMic = () => {
    if (!recognitionRef.current) {
      alert("Voice input not supported in this browser.");
      return;
    }
    if (isListening) recognitionRef.current.stop();
    else recognitionRef.current.start();
    setIsListening(!isListening);
  };

  return (
    <>
      {!isOpen && (
        <motion.button
          className="fixed bottom-6 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-xl transition hover:bg-brand-700"
          onClick={() => setIsOpen(true)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <MessageCircle className="h-5 w-5" />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-5 right-5 z-50 flex w-full max-w-xs flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft sm:max-w-sm"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
          >
            <div className="flex items-center justify-between bg-brand-600 px-4 py-3 text-white">
              <div>
                <p className="text-sm font-semibold">H-Assist 🤖</p>
                <p className="text-xs text-white/70">Halal Business Concierge</p>
              </div>
              <div className="flex items-center gap-3">
                {isListening ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                <button onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4" style={{ maxHeight: "55vh" }}>
              {messages.map((message, idx) => (
                <motion.div
                  key={`${message.sender}-${idx}`}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div
                    className={`rounded-2xl px-4 py-2 text-sm ${
                      message.sender === "user"
                        ? "bg-brand-600 text-white"
                        : "bg-white text-slate-800 shadow-inner"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-white px-4 py-2 text-xs text-slate-500 shadow">
                    H-Assist is typing…
                  </div>
                </div>
              )}
              <div ref={chatEndRef}></div>
            </div>

            <div className="flex items-center gap-2 border-t border-slate-100 bg-white px-3 py-3">
              <button
                onClick={toggleMic}
                className={`flex h-10 w-10 items-center justify-center rounded-2xl border transition ${
                  isListening
                    ? "border-red-200 bg-red-50 text-red-600"
                    : "border-brand-200 bg-brand-50 text-brand-600"
                }`}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none focus:border-brand-300 focus:bg-white"
                placeholder="Ask about services, contact info..."
              />
              <button
                onClick={() => sendMessage()}
                className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-white shadow transition hover:bg-brand-700"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HalalBot;

