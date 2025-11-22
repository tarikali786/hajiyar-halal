import React, { useState } from "react";

function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // WhatsApp submission
  const handleWhatsApp = (e) => {
    e.preventDefault();
    const whatsappNumber = "9150049753"; // change if needed
    const message = `*Halal Joint Venture Inquiry*\n\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg border-success">
        <div className="card-header bg-success text-white text-center fw-bold">
          Joint Venture / Investment Inquiry
        </div>
        <div className="card-body">
          <form onSubmit={handleWhatsApp}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                placeholder="Enter your contact number"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                Message / Investment Interest
              </label>
              <textarea
                className="form-control"
                name="message"
                rows="4"
                placeholder="Tell us about your investment interest..."
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-warning fw-semibold px-4"
              >
                📩 Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InquiryForm;
