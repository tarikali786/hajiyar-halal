import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Coins,
  Users,
  ShieldCheck,
  Globe,
  MessageCircle,
  ArrowRight,
  Sprout,
} from "lucide-react";
import CountUp from "react-countup";

const offerings = [
  {
    icon: <Building2 className="h-6 w-6 text-brand-600" />,
    title: "Halal Real Estate Studio",
    detail:
      "DTCP layouts, villas, and commercial clusters curated with turnkey compliance & reporting.",
  },
  {
    icon: <Coins className="h-6 w-6 text-brand-600" />,
    title: "Joint Venture Structuring",
    detail:
      "Partner with us on land development with milestone-based payouts and real-time dashboards.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-brand-600" />,
    title: "Compliance Desk",
    detail:
      "Scholar board reviews, documentation cleanup, and riba exit strategies for families & SMEs.",
  },
  {
    icon: <Users className="h-6 w-6 text-brand-600" />,
    title: "Community Venture Acceleration",
    detail:
      "Incubation for women-led businesses, agri projects, and social enterprises with halal capital.",
  },
  {
    icon: <Globe className="h-6 w-6 text-brand-600" />,
    title: "NRI & GCC Concierge",
    detail:
      "End-to-end onboarding, e-KYC, and POA management for partners investing from abroad.",
  },
  {
    icon: <Sprout className="h-6 w-6 text-brand-600" />,
    title: "Regenerative Land Stewardship",
    detail:
      "Rewilding soil, water harvesting, and agri alliances that keep every acre breathing life.",
  },
];

const process = [
  {
    title: "Discovery & Alignment",
    desc: "We map faith, family, and financial goals into a clear thesis.",
  },
  {
    title: "Due Diligence Sprint",
    desc: "Legal, soil, partner, and compliance checks completed in 30-45 days.",
  },
  {
    title: "Build & Report",
    desc: "Execution pods work in shared dashboards with scholar-signed updates.",
  },
  {
    title: "Profit Stewardship",
    desc: "Milestone-based payouts with reinvestment or exit planning guidance.",
  },
];

const testimonials = [
  {
    name: "Sabah & Imran",
    role: "Founders — Riyadh",
    quote:
      "Hajiyar Halal Profits helped us exit conventional loans and reinvest in a DTCP project. Payouts were punctual and documents immaculate.",
  },
  {
    name: "Yousuf Ali",
    role: "Builder — Chennai",
    quote:
      "Their JV structuring kept both my crews and investors confident. Transparent dashboards cut all friction.",
  },
  {
    name: "Aisha Khan",
    role: "Angel Investor — Bengaluru",
    quote:
      "The compliance desk cleansed my portfolio and I finally feel aligned with my values.",
  },
];

const faqs = [
  {
    q: "What returns can I expect from a JV?",
    a: "Each venture has its own projection. Historically our partners have realised 14–24% IRR depending on asset type, duration, and market movement.",
  },
  {
    q: "Do you support investors abroad?",
    a: "Yes. NRIs and GCC families can onboard remotely with notarised POA, e-KYC, and concierge updates in their timezone.",
  },
  {
    q: "How do you ensure projects stay halal?",
    a: "Every rupee is screened by scholars, zero-interest financing is enforced, and vendors undergo ethics audits before onboarding.",
  },
];

const Services = () => {
  return (
    <div className="space-y-16 bg-slate-50 pb-16">
      <section className="bg-white pt-10">
        <div className="mx-auto max-w-6xl px-5 pb-16 text-center lg:px-6">
          <p className="text-xs font-semibold uppercase text-brand-600">
            What we do
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
            Strategies that keep your portfolio halal, human, and high-performing.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-slate-600">
            We craft bespoke ventures across real estate, ethical joint ventures, and regenerative
            businesses—combining scholar-backed governance with modern execution pods.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700"
            >
              Design my portfolio
            </Link>
            <a
              href="https://wa.me/919150049753"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-brand-200 px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-brand-200"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50">
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{service.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:px-6">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase text-brand-600">
              Proven workflow
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              A guided process that removes guesswork.
            </h2>
            <p className="text-slate-600">
              Each phase is managed by a dedicated pod—compliance, build, payments, and partner
              success—so you always know who is accountable.
            </p>
            <div className="space-y-4 rounded-3xl border border-slate-100 bg-slate-50 p-6">
              {process.map((step, idx) => (
                <div key={step.title} className="flex gap-4">
                  <span className="mt-1 text-sm font-semibold text-brand-600">
                    {`0${idx + 1}`}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-slate-900">{step.title}</p>
                    <p className="text-sm text-slate-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-slate-900 p-8 text-white shadow-soft">
            <p className="text-xs uppercase tracking-[0.5em] text-brand-200">Impact metrics</p>
            <div className="mt-6 grid gap-6">
              {[
                { label: "Cumulative investor IRR", value: "18.4%" },
                { label: "Projects with zero delay", value: "92%" },
                { label: "Scholar audits per year", value: "24" },
                { label: "NPS (partner happiness)", value: "72" },
              ].map((metric) => (
                <div key={metric.label}>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                    {metric.label}
                  </p>
                  <p className="text-3xl font-semibold">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-3">
              <p className="text-xs font-semibold uppercase text-brand-600">
                Sector pods
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Specialists for every track we build in.
              </h2>
              <p className="text-slate-600">
                Each pod owns research, compliance, and operations for its niche, ensuring that a
                villa township receives the same obsessive care as an agro venture.
              </p>
            </div>
            <div className="grid flex-1 gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Premium Residences",
                  info: "Architects, cost engineers, and lifestyle curators for villa clusters.",
                },
                {
                  title: "Agro & Regenerative",
                  info: "Agronomists and supply-chain leads driving farm-to-market playbooks.",
                },
                {
                  title: "Commercial & Co-warehousing",
                  info: "Lease modeling, anchor tenant sourcing, and asset management pros.",
                },
                {
                  title: "Digital & Community Ventures",
                  info: "Operators who incubate women-led micro businesses and learning hubs.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-xs text-slate-500">{item.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-card md:p-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-4">
              <p className="text-xs font-semibold uppercase text-brand-600">
                Voices
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Partners who now treat us as their in-house halal desk.
              </h2>
            </div>
            <div className="grid flex-1 gap-6 sm:grid-cols-2">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-3xl border border-slate-100 bg-slate-50 p-5"
                >
                  <MessageCircle className="h-5 w-5 text-brand-600" />
                  <p className="mt-3 text-sm text-slate-600">“{item.quote}”</p>
                  <p className="mt-4 text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs uppercase tracking-[0.4em] text-brand-500">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-5 lg:px-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase text-brand-200">
                FAQ
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">Clarity before commitment.</h2>
              <p className="mt-3 text-slate-300">
                We answer every question—even the hard ones—before you sign a single paper.
              </p>
            </div>
            <div className="flex-1 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-3xl border border-white/15 bg-white/5 p-4 shadow-soft"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold">
                    {faq.q}
                    <ArrowRight className="h-4 w-4 transition group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-sm text-slate-200">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
            <p className="text-xs font-semibold uppercase text-brand-600">
              Ready to co-build?
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
              Book a 30-minute blueprint session.
            </h2>
            <p className="mt-3 text-slate-600">
              We evaluate current assets, identify riba exposure, and draft a halal-first plan.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-700"
            >
              Schedule a call
            </Link>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-brand-600 to-emerald-600 p-8 text-white shadow-soft">
            <p className="text-xs uppercase text-white/60">By the numbers</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {[
                { label: "Projects delivered", value: 48, suffix: "+" },
                { label: "Families onboarded", value: 1000, suffix: "+" },
                { label: "Cities served", value: 9, suffix: "" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-3xl font-semibold">
                    <CountUp end={item.value} suffix={item.suffix} duration={2} />
                  </p>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/65">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/80">
              Need something custom? We love solving unstructured problems. Drop us a line and we’ll
              assemble a solution pod.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6">
        <div className="overflow-hidden rounded-3xl bg-slate-900 p-10 text-white shadow-soft">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex-1 space-y-4">
              <p className="text-xs uppercase text-white/60">Work with us</p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Build something beautiful, ethical, and enduring.
              </h2>
              <p className="text-sm text-slate-300">
                Start with a discovery call. We map your goals, evaluate ongoing assets, and craft a
                halal-first roadmap.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
              >
                Book a conversation
              </Link>
              <a
                href="https://wa.me/919150049753"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp our concierge
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

