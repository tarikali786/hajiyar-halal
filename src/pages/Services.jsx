import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import "../styles/About.css"; // Reuse polished hover & animation effects


const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      id: 1,
      icon: "bi-cash-coin",
      title: "Halal Investment Plans",
      desc: "We offer Shariah-compliant investment options ensuring ethical, transparent, and profitable growth for every investor.",
    },
    {
      id: 2,
      icon: "bi-buildings",
      title: "Real Estate Ventures",
      desc: "Trusted property investments built on long-term value and halal business frameworks.",
    },
    {
      id: 3,
      icon: "bi-graph-up-arrow",
      title: "Business Consultation",
      desc: "Guiding individuals and firms to start or grow ethical businesses aligned with Islamic principles.",
    },
    {
      id: 4,
      icon: "bi-people-fill",
      title: "Partnership Programs",
      desc: "Collaborate with us on joint ventures — combining expertise, trust, and shared prosperity.",
    },
    {
      id: 5,
      icon: "bi-globe2",
      title: "Global Expansion Support",
      desc: "Helping halal businesses grow across borders through research, compliance, and market insights.",
    },
    {
      id: 6,
      icon: "bi-shield-check",
      title: "Halal Certification Guidance",
      desc: "Get professional assistance in obtaining Halal certifications for your products and ventures.",
    },
  ];

  const testimonials = [
    {
      name: "Abdul Rahman",
      role: "Investor, Chennai",
      text: "Hajiyar Halal Profits helped me invest in land without any interest or confusion. Everything was transparent and Shariah-compliant.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      name: "Fatima Noor",
      role: "Entrepreneur, Bangalore",
      text: "Their consultancy service helped me establish a Halal-certified brand with confidence and credibility.",
      img: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
    },
    {
      name: "Mohammed Iqbal",
      role: "Business Owner, Coimbatore",
      text: "Professional, trustworthy, and deeply ethical. Truly the best partner for Halal business growth.",
      img: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
    },
  ];

  return (
    <div className="services-page py-5" style={{ background: "#f9fdfb" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold text-success">Our Services</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            At <strong>Hajiyar Halal Profits</strong>, we provide a diverse
            range of halal business solutions designed to empower investors,
            companies, and communities. Every service reflects our core values —
            faith, ethics, and excellence.
          </p>
        </div>

        {/* Service Cards */}
        <div className="row g-4 justify-content-center">
          {services.map((service) => (
            <div
              className="col-md-4 col-sm-6"
              key={service.id}
              data-aos="zoom-in"
            >
              <div className="p-4 border rounded-4 shadow-sm h-100 bg-white text-center hover-lift">
                <div className="text-success fs-1 mb-3">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h5 className="fw-semibold">{service.title}</h5>
                <p className="text-muted small">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-5 py-5 text-center" data-aos="fade-up">
          <h3 className="fw-bold text-success mb-4">What Our Clients Say</h3>
          <div className="row justify-content-center">
            {testimonials.map((t, i) => (
              <div
                className="col-md-4 col-sm-6 mb-4"
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="p-4 border rounded-4 bg-white shadow-sm hover-scale h-100">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="rounded-circle mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                  <p className="text-muted fst-italic mb-3">“{t.text}”</p>
                  <h6 className="fw-bold mb-0">{t.name}</h6>
                  <p className="text-success small">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-5 py-5" data-aos="fade-up">
          <h3 className="fw-bold text-success text-center mb-4">
            Why Choose Hajiyar Halal Profits?
          </h3>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3" data-aos="fade-right">
              <div className="p-4 border rounded-4 bg-light hover-scale">
                <i className="bi bi-check-circle-fill text-success fs-2 mb-2"></i>
                <h6 className="fw-bold">100% Halal & Transparent</h6>
                <p className="text-muted small">
                  Each project is strictly audited for halal compliance and
                  transparency in all operations.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-3" data-aos="fade-up">
              <div className="p-4 border rounded-4 bg-light hover-scale">
                <i className="bi bi-graph-up text-success fs-2 mb-2"></i>
                <h6 className="fw-bold">Sustainable Growth</h6>
                <p className="text-muted small">
                  We build risk-managed, ethical investment models focused on
                  steady, long-term returns.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-3" data-aos="fade-left">
              <div className="p-4 border rounded-4 bg-light hover-scale">
                <i className="bi bi-heart-fill text-success fs-2 mb-2"></i>
                <h6 className="fw-bold">Ethics Above All</h6>
                <p className="text-muted small">
                  Our foundation is built on honesty, fairness, and
                  responsibility in every decision we make.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Counters */}
        <div
          className="impact-section text-center my-5 py-5 rounded-4 shadow-sm"
          style={{
            background: "linear-gradient(135deg, #f5fff7, #e6ffee)",
          }}
          data-aos="fade-up"
        >
          <h3 className="fw-bold text-success mb-4">Our Impact in Numbers</h3>
          <div className="row justify-content-center g-4">
            <div className="col-md-3 col-6">
              <div className="p-4 bg-white rounded-4 shadow-sm">
                <h2 className="fw-bold text-success mb-2">
                  <CountUp end={100} duration={3} suffix="%" />
                </h2>
                <p className="text-muted mb-0">Client Satisfaction</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="p-4 bg-white rounded-4 shadow-sm">
                <h2 className="fw-bold text-success mb-2">
                  <CountUp end={25} duration={3} suffix="+" />
                </h2>
                <p className="text-muted mb-0">Active Halal Projects</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="p-4 bg-white rounded-4 shadow-sm">
                <h2 className="fw-bold text-success mb-2">
                  <CountUp end={15} duration={3} suffix="+" />
                </h2>
                <p className="text-muted mb-0">Global Partners</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="p-4 bg-white rounded-4 shadow-sm">
                <h2 className="fw-bold text-success mb-2">
                  <CountUp end={0} duration={3} suffix="%" />
                </h2>
                <p className="text-muted mb-0">Loss Record</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Process Timeline */}
        <div
          className="timeline-section my-5 py-5"
          data-aos="fade-up"
          style={{ position: "relative" }}
        >
          <h3 className="fw-bold text-success text-center mb-5">
            How We Work — Our Process
          </h3>
          <div className="timeline position-relative">
            <div className="timeline-line"></div>

            <div className="timeline-item left" data-aos="fade-right">
              <div className="timeline-content p-4 rounded-4 shadow-sm">
                <h6 className="fw-bold text-success">Step 1: Consultation</h6>
                <p className="text-muted small mb-0">
                  We understand your goals and tailor a plan aligned with halal
                  investment principles.
                </p>
              </div>
            </div>

            <div className="timeline-item right" data-aos="fade-left">
              <div className="timeline-content p-4 rounded-4 shadow-sm">
                <h6 className="fw-bold text-success">Step 2: Proposal</h6>
                <p className="text-muted small mb-0">
                  We present transparent investment options and partnership
                  models.
                </p>
              </div>
            </div>

            <div className="timeline-item left" data-aos="fade-right">
              <div className="timeline-content p-4 rounded-4 shadow-sm">
                <h6 className="fw-bold text-success">Step 3: Execution</h6>
                <p className="text-muted small mb-0">
                  Our team manages operations efficiently under Shariah
                  compliance.
                </p>
              </div>
            </div>

            <div className="timeline-item right" data-aos="fade-left">
              <div className="timeline-content p-4 rounded-4 shadow-sm">
                <h6 className="fw-bold text-success">
                  Step 4: Profit Distribution
                </h6>
                <p className="text-muted small mb-0">
                  Profits are shared transparently — with regular updates and
                  complete accountability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-5" data-aos="zoom-in">
          <div className="p-5 bg-success bg-opacity-10 rounded-4 shadow-sm">
            <h4 className="fw-bold text-success mb-3">
              Ready to Begin Your Halal Growth Journey?
            </h4>
            <p className="text-muted mb-4">
              Join <strong>Hajiyar Halal Profits</strong> today and be part of a
              community that grows with integrity and faith.
            </p>
            <a
              href="/contact"
              className="btn btn-success px-4 py-2 rounded-pill shadow-sm"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* 🌟 Service Highlights Carousel */}
        <div className="mt-5 py-5" data-aos="fade-up">
          <h3 className="fw-bold text-success text-center mb-4">
            Service Highlights
          </h3>
          <div
            id="serviceHighlightsCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner rounded-4 shadow-sm">
              <div className="carousel-item active">
                <div className="p-5 text-center bg-light">
                  <i className="bi bi-cash-stack text-success fs-1 mb-3"></i>
                  <h5 className="fw-semibold">Ethical Wealth Building</h5>
                  <p className="text-muted">
                    Our financial plans are 100% interest-free and crafted to
                    ensure responsible profit growth under Islamic principles.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="p-5 text-center bg-light">
                  <i className="bi bi-people text-success fs-1 mb-3"></i>
                  <h5 className="fw-semibold">Community-Driven Projects</h5>
                  <p className="text-muted">
                    Every project is designed to empower the community through
                    jobs, skill development, and shared prosperity.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="p-5 text-center bg-light">
                  <i className="bi bi-globe text-success fs-1 mb-3"></i>
                  <h5 className="fw-semibold">Expanding Global Reach</h5>
                  <p className="text-muted">
                    We’re partnering with international halal ventures to take
                    your investments beyond borders — safely and transparently.
                  </p>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#serviceHighlightsCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon bg-success rounded-circle p-2"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#serviceHighlightsCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon bg-success rounded-circle p-2"></span>
            </button>
          </div>
        </div>

        {/* 💬 FAQ Section */}
        <div className="faq-section my-5 py-5" data-aos="fade-up">
          <h3 className="fw-bold text-success text-center mb-4">
            Frequently Asked Questions
          </h3>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Is Hajiyar Halal Profits fully Shariah-compliant?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="faqOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  Yes. Every business operation, partnership, and investment
                  model is reviewed and approved under certified Islamic finance
                  principles.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faqTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What kind of returns can I expect?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="faqTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  Our projects focus on stable, ethical growth. Returns vary per
                  project and are distributed transparently — without fixed
                  interest.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faqThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Can I invest from outside India?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="faqThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  Absolutely. We work with global partners and can guide you
                  through compliance and documentation for safe cross-border
                  halal investments.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
