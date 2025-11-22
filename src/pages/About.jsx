import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import CountUp from "react-countup";
import { useMediaQuery } from "react-responsive";

const About = () => {
  // Initialize AOS once
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about-page py-5" style={{ background: "#f9fdfb" }}>
      <div className="container">
        {/* ===== Header ===== */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold text-success">About Us</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "750px" }}>
            At <strong>Hajiyar Halal Profits</strong>, we believe that true
            success lies in ethical growth and community trust. Founded with a
            vision to empower individuals through{" "}
            <strong>
              Halal and Shariah-compliant investment opportunities
            </strong>
            , our journey represents a blend of faith, integrity, and financial
            excellence.
          </p>
          <p className="text-muted mx-auto" style={{ maxWidth: "750px" }}>
            We are not just an investment platform — we are a movement towards{" "}
            <strong>
              responsible, transparent, and sustainable business development
            </strong>
            . Every project we undertake is rooted in our promise to maintain
            100% compliance with Islamic principles while delivering reliable
            profits and genuine value to our partners.
          </p>
          <p className="text-muted mx-auto" style={{ maxWidth: "750px" }}>
            Our operations span across multiple Halal business sectors including{" "}
            <strong>
              real estate, trade, finance, and digital entrepreneurship
            </strong>
            . Through innovation and ethical leadership, we aim to bridge the
            gap between faith and finance — building a world where prosperity
            and piety coexist.
          </p>
          <p className="text-muted mx-auto" style={{ maxWidth: "750px" }}>
            Over the years, <strong>Hajiyar Halal Profits</strong> has earned
            the trust of countless investors by ensuring transparency,
            accountability, and fairness in every transaction. We continuously
            strive to nurture a business ecosystem where every decision is made
            with sincerity, every opportunity aligns with faith, and every
            success story strengthens our community.
          </p>
        </div>

        {/* ===== Divider ===== */}
        <hr className="my-5 border-success opacity-25" />

        {/* ===== Founder Section ===== */}
        <div className="row justify-content-center text-center">
          <div className="col-md-4 founder-card mx-auto p-4" data-aos="zoom-in">
            <img
              src="https://www.hypergridbusiness.com/wp-content/uploads/2023/01/Bill-Gates-Lexica-AI.jpg"
              alt="Founder"
              className="img-fluid mb-3 rounded-circle"
              style={{ width: "180px", height: "180px", objectFit: "cover" }}
            />
            <h5 className="fw-bold mb-1">Mr. Hajiyar</h5>
            <p className="text-muted">Founder & Managing Director</p>
            <p className="small text-secondary">
              A visionary entrepreneur with over two decades of experience in
              ethical investment and Halal business ventures. His leadership
              drives our commitment to transparency, trust, and long-term
              success for all stakeholders.
            </p>
          </div>
        </div>

        <hr className="my-5 border-success opacity-25" />

        {/* ===== Vision & Mission ===== */}
        <div
          className="row mt-5 p-4 rounded-4 shadow-sm"
          style={{ background: "linear-gradient(135deg, #f5fff7, #e6ffee)" }}
        >
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <div className="p-4 border rounded-4 bg-white h-100">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-eye-fill text-success fs-3 me-2"></i>
                <h4 className="fw-semibold mb-0">Our Vision</h4>
              </div>
              <p className="text-muted">
                To become a globally trusted name in Halal investment — where
                every partnership is built on faith, fairness, and financial
                prosperity. We envision a world where ethical business is not an
                alternative, but the standard for economic growth.
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4" data-aos="fade-left">
            <div className="p-4 border rounded-4 bg-white h-100">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-bullseye text-success fs-3 me-2"></i>
                <h4 className="fw-semibold mb-0">Our Mission</h4>
              </div>
              <p className="text-muted">
                To empower individuals and communities through transparent,
                Shariah-compliant investments that ensure social responsibility,
                risk-free growth, and long-term financial well-being.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-5 border-success opacity-25" />

        {/* ===== Core Values ===== */}
        <div
          className="text-center p-5 rounded-4 shadow-sm"
          style={{ background: "linear-gradient(135deg, #ffffff, #f2fff8)" }}
          data-aos="fade-up"
        >
          <h4 className="fw-bold text-success mb-3">Our Core Values</h4>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Integrity, Transparency, Trust, and Excellence — these values form
            the foundation of our success. Every decision at Hajiyar Halal
            Profits reflects our dedication to faith-driven growth and genuine
            partnership.
          </p>
        </div>

        <hr className="my-5 border-success opacity-25" />

        {/* ===== Founder Message ===== */}
        <div
          className="founder-message-section mt-5 p-5 rounded-4 shadow-sm text-center text-md-start"
          style={{ background: "linear-gradient(135deg, #e6ffee, #ffffff)" }}
          data-aos="fade-up"
        >
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 mb-4 mb-md-0 text-center">
              <img
                src="https://www.hypergridbusiness.com/wp-content/uploads/2023/01/Bill-Gates-Lexica-AI.jpg"
                alt="Founder"
                className="img-fluid rounded-circle shadow-sm"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-7">
              <h4 className="fw-bold text-success mb-3">
                Message from the Founder
              </h4>
              <p className="text-muted">
                “At <strong>Hajiyar Halal Profits</strong>, our goal has never
                been only about earning — it’s about{" "}
                <strong>earning with faith</strong>. Every project we build,
                every partnership we form, and every investor we serve is guided
                by the principle of <em>Halal integrity and trust</em>. True
                success lies not just in profits, but in the peace that comes
                from doing things the right way.”
              </p>
              <p className="mt-4 mb-0 fw-semibold text-success">
                — Mr. Hajiyar
                <br />
                <span className="text-secondary small">
                  Founder & Managing Director
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* ===== Inspirational Quote ===== */}
        <div
          className="inspiration-quote-section text-center my-5 py-5 position-relative"
          style={{
            background: "linear-gradient(180deg, #f9fffa 0%, #f0fff4 100%)",
            borderRadius: "20px",
            boxShadow: "0 0 20px rgba(0, 150, 0, 0.1)",
          }}
          data-aos="fade-up"
        >
          <i
            className="bi bi-quote text-success fs-1 mb-3 d-block"
            style={{ opacity: 0.8 }}
          ></i>
          <h4
            className="fw-semibold mx-auto"
            style={{
              maxWidth: "800px",
              fontStyle: "italic",
              color: "#155724",
              lineHeight: "1.8",
            }}
          >
            “Trade and business are blessed when conducted with honesty, trust,
            and fairness. Let every deal be a reflection of faith and
            integrity.”
          </h4>
          <p className="text-muted mt-3">— Islamic Business Principle</p>
        </div>

        {/* ===== Achievements Section ===== */}
        <div
          className="achievements-section text-center py-5"
          data-aos="fade-up"
        >
          <h3 className="fw-bold text-success mb-4">Our Achievements</h3>
          <p className="text-muted mx-auto mb-5" style={{ maxWidth: "700px" }}>
            Over the years, Hajiyar Halal Profits has built a trusted network of
            investors and projects, all aligned with our Halal and ethical
            values.
          </p>

          <div className="row justify-content-center g-4">
            {[
              { end: 100, suffix: "%", label: "Satisfied Investors" },
              { end: 26, suffix: "+", label: "Years of Experience" },
              { end: 10, suffix: "+", label: "Active Halal Projects" },
              { end: 200, suffix: "%", label: "No-Loss Guarantee" },
            ].map((item, i) => (
              <div key={i} className="col-md-3 col-6">
                <div
                  className="p-4 rounded-4 shadow-sm border bg-white"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <h2 className="fw-bold text-success mb-2">
                    <CountUp end={item.end} duration={3} suffix={item.suffix} />
                    +
                  </h2>
                  <p className="text-muted mb-0">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Meet Our Team ===== */}
        <div
          className="team-section text-center mt-5 py-5 rounded-4"
          style={{ background: "linear-gradient(135deg, #ffffff, #f2fff8)" }}
          data-aos="fade-up"
        >
          <h4 className="fw-bold text-success mb-4">Meet Our Team</h4>
          <div className="row justify-content-center">
            {[
              {
                name: "Mr. Hajiyar",
                role: "Founder & Managing Director",
                img: "https://www.hypergridbusiness.com/wp-content/uploads/2023/01/Bill-Gates-Lexica-AI.jpg",
              },
              {
                name: "Ms. Amina",
                role: "Finance Head",
                img: "https://cdn-icons-png.flaticon.com/512/921/921071.png",
              },
              {
                name: "Mr. Ahmed",
                role: "Operations Manager",
                img: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
              },
            ].map((member, index) => (
              <div className="col-md-3 col-6 mb-4" key={index}>
                <div className="p-4 border rounded-4 shadow-sm bg-white h-100">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="img-fluid mb-3 rounded-circle"
                    style={{
                      width: "140px",
                      height: "140px",
                      objectFit: "cover",
                    }}
                  />
                  <h6 className="fw-bold text-success">{member.name}</h6>
                  <p className="text-muted small">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-5 border-success opacity-25" />

        {/* ===== Awards & Certifications ===== */}
        <div className="awards-section text-center py-5" data-aos="fade-up">
          <h3 className="fw-bold text-success mb-4">Awards & Certifications</h3>
          <p className="text-muted mx-auto mb-5" style={{ maxWidth: "700px" }}>
            Recognized for our commitment to ethical business, transparency, and
            excellence — these honors reflect our dedication to 100% Halal and
            trustworthy ventures.
          </p>

          <div className="row justify-content-center g-4">
            {[
              {
                img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
                title: "Halal Certified",
                text: "Approved by recognized authorities",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/512/4315/4315445.png",
                title: "ISO 9001:2015",
                text: "Quality management certification",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/512/5357/5357883.png",
                title: "Business Excellence Award",
                text: "Recognized for ethical leadership",
              },
              {
                img: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
                title: "Investor Trust Badge",
                text: "Rated 5⭐ by our loyal investors",
              },
            ].map((award, i) => (
              <div
                key={i}
                className="col-md-3 col-6"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="p-4 border rounded-4 shadow-sm bg-white">
                  <img
                    src={award.img}
                    alt={award.title}
                    className="img-fluid mb-3"
                    style={{ width: "80px" }}
                  />
                  <h6 className="fw-semibold">{award.title}</h6>
                  <p className="small text-muted mb-0">{award.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Call To Action ===== */}
        <div className="cta-section text-center py-5 mt-5" data-aos="fade-up">
          <h3 className="fw-bold text-success mb-3">
            Ready to Start Your Halal Investment Journey?
          </h3>
          <p className="text-muted mx-auto mb-4" style={{ maxWidth: "700px" }}>
            Join thousands of investors who trust{" "}
            <strong>Hajiyar Halal Profits</strong> for transparent, ethical, and
            Shariah-compliant business ventures.
          </p>
          <a
            href="/contact"
            className="btn btn-success px-4 py-2 rounded-pill shadow-sm"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
