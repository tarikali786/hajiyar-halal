import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import KnowledgeSection from "../components/KnowledgeSection";
import { useMediaQuery } from "react-responsive";

<KnowledgeSection />;
function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Counter animation logic
  const [years, setYears] = useState(0);
  const [halal, setHalal] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const animateCounter = (setter, target) => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setter(count);
        if (count >= target) clearInterval(interval);
      }, 40);
    };
    animateCounter(setYears, 26);
    animateCounter(setHalal, 100);
    animateCounter(setClients, 200);
  }, []);

  return (
    <>
      {/* 🌟 Responsive Hero Carousel with Framer Motion */}
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
        style={{ overflow: "hidden" }}
      >
        <div className="carousel-inner">
          {[
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80",
          ].map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                style={{
                  position: "relative",
                  height: "90vh",
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Gradient Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.7) 100%)",
                  }}
                ></div>

                {/* Text Content */}
                <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="p-4 rounded-4"
                    style={{
                      backdropFilter: "blur(6px)",
                      backgroundColor: "rgba(0,0,0,0.45)",
                      maxWidth: "850px",
                    }}
                  >
                    <h1 className="display-5 fw-bold text-white mb-3">
                      Welcome to Hajiyar Halal Profits
                    </h1>

                    <p
                      className="lead text-white fs-5 mb-4"
                      style={{
                        lineHeight: "1.7",
                        textShadow: "0px 2px 10px rgba(0,0,0,0.6)",
                      }}
                    >
                      Building <strong>Trust Through Halal Real Estate</strong>{" "}
                      for over <strong>26 years</strong> — guided by{" "}
                      <strong>integrity</strong>, <strong>transparency</strong>,
                      and the <strong>values of faith</strong>. Every investment
                      we build reflects our promise of{" "}
                      <strong>Halal growth</strong> and{" "}
                      <strong>community prosperity</strong>.
                    </p>

                    <a
                      href="/about"
                      className="btn btn-success btn-lg rounded-pill px-4 shadow-sm"
                    >
                      Learn More
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>
        {`
          @media (max-width: 768px) {
            #heroCarousel .carousel-item > div {
              height: 70vh !important;
            }
            #heroCarousel h1 {
              font-size: 1.8rem !important;
            }
            #heroCarousel p {
              font-size: 1rem !important;
            }
          }
        `}
      </style>

      {/* 🏡 Property Showcase Grid */}
      <section className="py-5 bg-white" data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold text-success text-center mb-5">
            Featured Projects
          </h2>
          <div className="row g-4">
            {[
              {
                img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
                title: "Luxury Villa, Chennai",
                status: "Available",
              },
              {
                img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
                title: "Green Acres, Coimbatore",
                status: "SOLD",
              },
              {
                img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
                title: "Hajiyar Residency, Madurai",
                status: "Available",
              },
            ].map((property, i) => (
              <div key={i} className="col-md-4">
                <div
                  className="card border-0 shadow-sm h-100"
                  style={{ transition: "transform 0.3s" }}
                >
                  <img
                    src={property.img}
                    className="card-img-top"
                    alt={property.title}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{property.title}</h5>
                    <span
                      className={`badge ${
                        property.status === "SOLD" ? "bg-danger" : "bg-success"
                      }`}
                    >
                      {property.status}
                    </span>
                    <br />
                    <a href="#" className="btn btn-outline-success mt-3">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Halal Business Principles */}
      <section className="py-5 bg-light" data-aos="fade-right">
        <div className="container text-center">
          <h2 className="fw-bold text-success mb-4">
            Our Halal Business Principles
          </h2>
          <div className="row justify-content-center">
            {[
              {
                icon: "🤝",
                title: "Joint Venture Partnership",
                desc: "We grow together — fair sharing and transparency in every project.",
              },
              {
                icon: "🚫💰",
                title: "No Interest (Riba-Free)",
                desc: "All our projects are 100% interest-free and Shariah-compliant.",
              },
              {
                icon: "🕌",
                title: "Ethical Investment",
                desc: "We ensure every rupee is earned ethically, building long-term trust.",
              },
            ].map((item, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div className="card border-0 shadow-sm h-100 p-4">
                  <div className="fs-1">{item.icon}</div>
                  <h5 className="fw-bold mt-3">{item.title}</h5>
                  <p className="text-secondary mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 Testimonials Section */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container text-center">
          <h2 className="fw-bold text-success mb-4">What Our Clients Say</h2>
          <p className="text-secondary mb-5">
            Hear from those who trusted Hajiyar Halal Profits for ethical real
            estate investments.
          </p>

          <div
            id="testimonialCarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div
                  className="card border-0 shadow-sm p-4 mx-auto"
                  style={{ maxWidth: "700px" }}
                >
                  <p className="lead text-secondary fst-italic">
                    “Hajiyar Halal Profits helped me invest in land without any
                    interest or confusion. Everything was transparent and
                    Shariah-compliant.”
                  </p>
                  <h5 className="mt-3 text-success fw-bold">
                    – Abdul Rahman, Chennai
                  </h5>
                </div>
              </div>

              <div className="carousel-item">
                <div
                  className="card border-0 shadow-sm p-4 mx-auto"
                  style={{ maxWidth: "700px" }}
                >
                  <p className="lead text-secondary fst-italic">
                    “They truly deliver on their promise — ethical dealings,
                    genuine profits, and no stress. Highly recommended for
                    anyone seeking Halal business.”
                  </p>
                  <h5 className="mt-3 text-success fw-bold">
                    – Farook Basha, Tambaram
                  </h5>
                </div>
              </div>

              <div className="carousel-item">
                <div
                  className="card border-0 shadow-sm p-4 mx-auto"
                  style={{ maxWidth: "700px" }}
                >
                  <p className="lead text-secondary fst-italic">
                    “I’ve worked with them on multiple projects — every
                    transaction was clean, quick, and 100% Halal. Excellent
                    experience!”
                  </p>
                  <h5 className="mt-3 text-success fw-bold">
                    – Yasmin Fathima, Chengalpattu
                  </h5>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* 💎 Trust & Branding Section */}
      <section className="py-5 bg-white" data-aos="fade-up">
        <div className="container text-center">
          <h2 className="fw-bold text-success mb-4">
            Trusted by Thousands — Built on Faith & Integrity
          </h2>
          <p className="text-secondary mb-5">
            Our name stands for transparency, ethical investment, and genuine
            growth opportunities guided by Halal principles.
          </p>

          <div className="row g-4 justify-content-center">
            <div className="col-6 col-md-3" data-aos="fade-right">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <i className="bi bi-shield-check text-success display-5 mb-3"></i>
                <h5 className="fw-bold">ISO Certified</h5>
                <p className="text-muted small">
                  Verified processes and secure investment standards.
                </p>
              </div>
            </div>

            <div className="col-6 col-md-3" data-aos="fade-up">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <i className="bi bi-coin text-success display-5 mb-3"></i>
                <h5 className="fw-bold">100% Halal Business</h5>
                <p className="text-muted small">
                  Absolutely interest-free, compliant with Islamic principles.
                </p>
              </div>
            </div>

            <div className="col-6 col-md-3" data-aos="fade-left">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <i className="bi bi-people text-success display-5 mb-3"></i>
                <h5 className="fw-bold">1000+ Happy Partners</h5>
                <p className="text-muted small">
                  Real relationships, long-term returns, and mutual success.
                </p>
              </div>
            </div>

            <div className="col-6 col-md-3" data-aos="fade-left">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <i className="bi bi-globe text-success display-5 mb-3"></i>
                <h5 className="fw-bold">Global Reach</h5>
                <p className="text-muted small">
                  Expanding across regions with the same ethical foundation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🌄 Parallax Quote */}
      <section
        className="text-white text-center d-flex align-items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
      >
        <div
          className="container bg-dark bg-opacity-50 py-5 rounded-3"
          data-aos="fade-up"
        >
          <h2 className="display-6 fw-bold">
            “Trade with fairness, honesty, and transparency.”
          </h2>
          <p className="lead mt-3">
            — Inspired by Islamic principles of Halal business & ethical growth.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
