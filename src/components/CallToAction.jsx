import React from "react";
import "aos/dist/aos.css";

const CallToAction = ({
  title = "Ready to Start Your Halal Investment Journey?",
  description = "Join thousands of investors who trust Hajiyar Halal Profits for transparent, ethical, and Shariah-compliant business ventures.",
  buttonText = "Contact Us Today",
  buttonLink = "/contact",
}) => {
  return (
    <div className="cta-section text-center py-5 mt-5" data-aos="fade-up">
      <div className="container">
        <h3 className="fw-bold text-success mb-3">{title}</h3>
        <p className="text-muted mx-auto mb-4" style={{ maxWidth: "700px" }}>
          {description}
        </p>
        <a
          href={buttonLink}
          className="btn btn-success px-4 py-2 rounded-pill shadow-sm"
        >
          {buttonText}
        </a>
        <CallToAction
          title="Want to Learn More About Our Services?"
          description="Explore how we build ethical, Halal-compliant investment opportunities for you."
          buttonText="View Services"
          buttonLink="/services"
        />
      </div>
    </div>
  );
};

export default CallToAction;
