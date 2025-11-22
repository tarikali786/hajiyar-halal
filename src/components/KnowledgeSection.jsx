import React from "react";
import { motion } from "framer-motion";

const KnowledgeSection = () => {
  const articles = [
    {
      title: "What Makes a Business Truly Halal?",
      desc: "Understanding Shariah-compliant principles for modern entrepreneurship — avoiding riba (interest) and unethical investments.",
      icon: "bi-book-fill",
    },
    {
      title: "Halal vs Conventional Investments",
      desc: "Explore how Halal investing provides peace of mind and long-term sustainability compared to traditional financial systems.",
      icon: "bi-graph-up-arrow",
    },
    {
      title: "Building Ethical Wealth in Islam",
      desc: "Learn how honesty, trust, and fair profit-sharing are the keys to building wealth that benefits both you and the community.",
      icon: "bi-lightbulb-fill",
    },
  ];

  return (
    <section
      className="py-5 bg-light"
      id="knowledge"
      style={{ background: "linear-gradient(135deg, #f9fdfb, #e6ffee)" }}
    >
      <div className="container text-center">
        <motion.h2
          className="fw-bold text-success mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Halal Knowledge Hub
        </motion.h2>
        <p className="text-muted mx-auto mb-5" style={{ maxWidth: "700px" }}>
          Empowering the community with insights into Halal business, finance,
          and entrepreneurship — guided by Islamic principles.
        </p>

        <div className="row g-4 justify-content-center">
          {articles.map((a, i) => (
            <motion.div
              key={i}
              className="col-md-4 col-sm-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 hover-lift">
                <i className={`bi ${a.icon} fs-2 text-success mb-3`}></i>
                <h5 className="fw-bold mb-2">{a.title}</h5>
                <p className="text-muted small mb-0">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
