import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";

const contactTiles = [
  {
    icon: <MapPin className="h-5 w-5 text-brand-600" />,
    title: "Studio Address",
    detail:
      "1/1 Rohini Nagar, Railway Station Road, Opp. Hajiyar Provisions, Urapakkam West, Chennai – 603211",
  },
  {
    icon: <Phone className="h-5 w-5 text-brand-600" />,
    title: "Call Us",
    detail: "+91 91500 49752 / +91 91500 49753",
  },
  {
    icon: <Mail className="h-5 w-5 text-brand-600" />,
    title: "Email",
    detail: "hello@hajiyarhalalprofits.com",
  },
  {
    icon: <Clock className="h-5 w-5 text-brand-600" />,
    title: "Office Hours",
    detail: "Mon – Sat • 9:00 AM – 7:00 PM",
  },
];

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();
    if (!formRef.current) return;

    try {
      setLoading(true);
      await emailjs.sendForm(
        "your_service_id",
        "your_template_id",
        formRef.current,
        { publicKey: "your_public_key" }
      );
      toast.success("Message sent successfully. We’ll reach out shortly!");
      formRef.current.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again or WhatsApp us.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 pb-16">
      <section className="bg-white pt-12">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-6">
          <p className="text-xs font-semibold uppercase text-brand-600">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
            Let’s design your next halal venture.
          </h1>
          <p className="mt-4 text-slate-600">
            Share your ambitions, land, or ongoing business challenges. Our concierge team will
            return with a tailored blueprint inside 48 hours.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-2 lg:px-6">
        <div className="space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
          <h2 className="text-2xl font-semibold text-slate-900">Reach our concierge team</h2>
          <p className="text-sm text-slate-500">
            We route every enquiry to the right pod (compliance, layouts, JV, or community ventures)
            and respond within one business day.
          </p>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white"
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Topic
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="E.g. DTCP layout, JV, audit"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Project / message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white"
                placeholder="Tell us about your land, business, or challenge..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
          {contactTiles.map((tile) => (
            <div key={tile.title} className="flex gap-4 rounded-2xl border border-slate-100 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50">
                {tile.icon}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-brand-500">{tile.title}</p>
                <p className="text-sm font-semibold text-slate-900">{tile.detail}</p>
              </div>
            </div>
          ))}
          <button
            onClick={() => window.open("https://wa.me/919150049753", "_blank")}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-brand-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-100"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </button>
          <div className="overflow-hidden rounded-3xl">
            <iframe
              title="Hajiyar Halal Profits"
              src="https://www.google.com/maps?q=12.867393,80.069794&z=15&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-emerald-600 p-10 text-white shadow-soft">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs uppercase text-white/70">Visit us</p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Walk into the studio for a whiteboard session.
              </h2>
              <p className="text-sm text-white/80">
                Schedule an in-person review of layouts, compliance reports, or model projections.
                We keep artisan tea ready.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl bg-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                Concierge line
              </p>
              <p className="text-2xl font-semibold">+91 91500 49752</p>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Email</p>
              <p className="text-lg font-semibold">hello@hajiyarhalalprofits.com</p>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">WhatsApp</p>
              <p className="text-lg font-semibold">+91 91500 49753</p>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default Contact;

