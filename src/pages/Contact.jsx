import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const handleSubmit = async (e) => {
  e.preventDefault();
 
};



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("your_service_id", "your_template_id", form.current, {
        publicKey: "your_public_key",
      })
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          toast.error("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="contact-page py-5" style={{ background: "#f9fdfb" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold text-success">Get in Touch</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Have questions about our Halal business ventures or want to discuss
            partnership opportunities? We’d love to hear from you.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="row align-items-start g-5">
          {/* Left: Info Section */}
          <div className="col-md-5" data-aos="fade-right">
            <div className="p-4 rounded-4 shadow-sm bg-white h-100">
              <h4 className="fw-bold text-success mb-3">Contact Information</h4>

              <p className="text-muted mb-2">
                <i className="bi bi-geo-alt text-success me-2"></i>
                1/1 Rohini Nagar, Railway Station Road, Opp. Hajiyar Provisions,
                Urapakkam West, Chennai – 603211
              </p>

              <p className="text-muted mb-2">
                <i className="bi bi-telephone text-success me-2"></i>
                +91 98765 43210
              </p>

              <p className="text-muted mb-2">
                <i className="bi bi-envelope text-success me-2"></i>
                info@hajiyarhalalprofits.com
              </p>

              <p className="text-muted">
                <i className="bi bi-globe text-success me-2"></i>
                www.hajiyarhalalprofits.com
              </p>

              <hr className="my-4 border-success opacity-25" />

              {/* Business Hours */}
              <div className="bg-light p-3 rounded-3 shadow-sm mb-4">
                <h6 className="fw-bold text-success mb-2">
                  <i className="bi bi-clock me-2"></i>Business Hours
                </h6>
                <p className="text-muted small mb-0">
                  Monday – Saturday: <strong>9:00 AM – 7:00 PM</strong>
                </p>
                <p className="text-muted small mb-0">
                  Sunday: <strong>Closed</strong>
                </p>
              </div>

              {/* WhatsApp Contact */}
              <div
                className="d-flex align-items-center bg-success bg-opacity-10 p-3 rounded-3 shadow-sm hover-lift"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("https://wa.me/919876543210", "_blank")
                }
              >
                <i className="bi bi-whatsapp text-success fs-3 me-3"></i>
                <div>
                  <h6 className="fw-bold text-success mb-0">
                    Chat on WhatsApp
                  </h6>
                  <p className="small text-muted mb-0">
                    Quick response within business hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="col-md-7" data-aos="fade-left">
            <div className="p-4 rounded-4 shadow-sm bg-white h-100">
              <h4 className="fw-bold text-success mb-4">Send Us a Message</h4>
              <form ref={form} onSubmit={sendEmail}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="user_name"
                      className="form-control border-success border-opacity-25"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="user_email"
                      className="form-control border-success border-opacity-25"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control border-success border-opacity-25"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      rows="5"
                      className="form-control border-success border-opacity-25"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-success px-4 py-2 mt-3 rounded-pill shadow-sm"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* 🏢 Visit Our Office Banner */}
        <div
          className="office-banner position-relative my-5 rounded-4 overflow-hidden shadow-sm"
          data-aos="fade-up"
        >
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
            alt="Hajiyar Halal Profits Office"
            className="img-fluid w-100"
            style={{
              height: "350px",
              objectFit: "cover",
              filter: "brightness(70%)",
            }}
          />
          <div
            className="position-absolute top-50 start-50 translate-middle text-center text-white"
            style={{ zIndex: 2 }}
          >
            <h3 className="fw-bold mb-2">Visit Our Office</h3>
            <p className="mb-0">
              Experience ethical growth and transparency in person.
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div
          className="map-section mt-5 rounded-4 shadow-sm overflow-hidden"
          data-aos="fade-up"
        >
          <iframe
            title="Hajiyar Halal Profits Location"
            src="https://www.google.com/maps?q=12.867393,80.069794&z=15&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default Contact;
