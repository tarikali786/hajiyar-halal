import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3 md:px-6">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-brand-200">
            Halal + Human
          </p>
          <h4 className="mt-3 text-2xl font-semibold">
            Hajiyar Halal Profits
          </h4>
          <p className="mt-4 text-sm text-slate-400">
            Ethical real estate, joint ventures, and business acceleration that
            honour both faith and finance for over 26 years.
          </p>
        </div>

        <div>
          <h5 className="text-sm font-semibold uppercase tracking-widest text-slate-300">
            Visit Us
          </h5>
          <p className="mt-4 text-sm text-slate-400">
            #1, Rohini Nagar, Railway Station Road, Opp. Hajiyar Provisions,
            Urapakkam West, Chennai – 603211
          </p>
          <div className="mt-4 space-y-1 text-sm text-slate-300">
            <p>Mobile: 91500 49752</p>
            <p>WhatsApp: 91500 49753</p>
            <a
              href="mailto:info@hajiyarhalalprofits.com"
              className="text-brand-200 underline-offset-4 hover:underline"
            >
              info@hajiyarhalalprofits.com
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-sm font-semibold uppercase tracking-widest text-slate-300">
            Quick Links
          </h5>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="inline-flex items-center gap-2 text-slate-300 transition hover:text-brand-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400"></span>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 flex gap-4">
            {[
              { icon: <FaFacebookF />, href: "https://facebook.com" },
              { icon: <FaInstagram />, href: "https://instagram.com" },
              { icon: <FaWhatsapp />, href: "https://wa.me/9150049753" },
              { icon: <FaYoutube />, href: "https://youtube.com" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-200 transition hover:border-brand-300 hover:text-brand-200"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs uppercase tracking-[0.4em] text-slate-400">
        © {new Date().getFullYear()} Hajiyar Halal Profits — Ethical Growth for
        Every Generation
      </div>
    </footer>
  );
};

export default Footer;
