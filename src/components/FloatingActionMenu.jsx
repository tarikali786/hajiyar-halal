import React, { useState } from "react";
import QuickContactButton from "./QuickContactButton";

const FloatingActionMenu = () => {
  const [open, setOpen] = useState(false);
  const [showQuickContact, setShowQuickContact] = useState(false);

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          zIndex: 2000,
        }}
      >
        <div
          className="d-flex flex-column align-items-center mb-2"
          style={{
            transition: "all 0.4s ease",
            transform: open ? "translateY(0)" : "translateY(80px)",
            opacity: open ? 1 : 0,
            pointerEvents: open ? "auto" : "none",
          }}
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/9150049753"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success rounded-circle mb-2 shadow-sm"
            title="WhatsApp"
          >
            <i className="bi bi-whatsapp fs-5"></i>
          </a>

          {/* Scroll To Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn btn-success rounded-circle mb-2 shadow-sm"
            title="Scroll to Top"
          >
            <i className="bi bi-arrow-up fs-5"></i>
          </button>

          {/* Halal Seal */}
          <button
            className="btn btn-success rounded-circle mb-2 shadow-sm"
            onClick={() =>
              alert(
                "✅ This platform is 100% Halal Certified & Shariah Compliant!"
              )
            }
            title="Halal Seal"
          >
            <i className="bi bi-patch-check-fill fs-5"></i>
          </button>

          {/* HalalBot */}
          <button
            className="btn btn-success rounded-circle mb-2 shadow-sm"
            onClick={() => alert("🤖 HalalBot is under active development!")}
            title="HalalBot"
          >
            <i className="bi bi-robot fs-5"></i>
          </button>

          {/* Quick Contact */}
          <button
            className="btn btn-success rounded-circle mb-2 shadow-sm"
            onClick={() => setShowQuickContact(true)}
            title="Quick Contact"
          >
            <i className="bi bi-chat-dots fs-5"></i>
          </button>
        </div>

        {/* Main Floating Button */}
        <button
          className="btn btn-success rounded-circle shadow-lg"
          onClick={() => setOpen(!open)}
          style={{
            width: "60px",
            height: "60px",
            transition: "all 0.3s ease",
          }}
        >
          <i
            className={`bi ${open ? "bi-x-lg" : "bi-grid-3x3-gap-fill"} fs-5`}
          ></i>
        </button>
      </div>

      {/* Quick Contact Modal */}
      {showQuickContact && (
        <QuickContactButton onClose={() => setShowQuickContact(false)} />
      )}
    </>
  );
};

export default FloatingActionMenu;
