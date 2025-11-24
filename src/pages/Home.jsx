import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import {
  ShieldCheck,
  LineChart,
  Building2,
  Globe,
  Quote,
  Sparkles,
  Handshake,
  ArrowRight,
  Play,
} from "lucide-react";

const stats = [
  { value: 26, suffix: "+", label: "Years building halal wealth" },
  { value: 1000, suffix: "+", label: "Families & partners served" },
  { value: 0, suffix: "%", label: "Interest or riba exposure" },
  { value: 12, suffix: "+", label: "Active community ventures" },
];

const ventures = [
  {
    id: "madurai",
    title: "Hajiyar Eco Residency",
    location: "Madurai",
    tag: "Township",
    status: "Now Booking",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "chengalpattu",
    title: "Noor Acres DTCP Layout",
    location: "Chengalpattu",
    tag: "DTCP Plots",
    status: "Sold Out",
    image:
      "https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "coimbatore",
    title: "Halal Biz Park",
    location: "Coimbatore",
    tag: "Joint Venture",
    status: "Under Review",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
  },
];

const pillars = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "100% Shariah Governance",
    body: "Every rupee is screened by scholars and audited for complete riba-free compliance.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Transparent Profit Sharing",
    body: "Real-time reporting, shared decision making, and zero hidden clauses.",
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    title: "Community First",
    body: "Projects that create livelihoods, re-green land, and uplift local masajid & schools.",
  },
];

const testimonials = [
  {
    name: "Abdul Rahman",
    title: "Investor — Chennai",
    quote:
      "I never imagined real estate could stay so transparent. Every stage, every rupee was explained. This is how halal wealth should feel.",
  },
  {
    name: "Yasmin Fathima",
    title: "Entrepreneur — Chengalpattu",
    quote:
      "The joint venture gave my family recurring halal income while preserving the land we inherited. True partnership.",
  },
  {
    name: "Mohammed Iqbal",
    title: "Business Owner — Coimbatore",
    quote:
      "They showed me how to exit interest-based loans and reinvest in ethical assets. My team and conscience both sleep better.",
  },
];

const journey = [
  {
    title: "Listen & Align",
    detail: "We map your goals, appetite, and family values to craft a halal growth thesis.",
  },
  {
    title: "Co-design Strategy",
    detail: "Our due diligence team vets land, partners, and compliance frameworks.",
  },
  {
    title: "Execute with Clarity",
    detail: "Transparent documentation, digital dashboards, and milestone-based payouts.",
  },
  {
    title: "Grow & Steward",
    detail: "We reinvest profits into future-proof, socially conscious ventures.",
  },
];

const Home = () => {
  return (
    <div className="space-y-24 bg-slate-50 pb-16">
      <section className="overflow-hidden bg-gradient-to-br from-white via-slate-50 to-brand-50/30 pt-6 shadow-inner lg:pt-0">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 pb-20 pt-24 text-slate-900 lg:flex-row lg:items-center lg:px-6 lg:pb-28 lg:pt-32">
          <div className="flex-1 space-y-6">
            <p className="text-sm uppercase text-brand-500">
              Halal Real Estate Studio
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Designing wealth that keeps faith, family, and future aligned.
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              For 26+ years we have delivered halal joint ventures, DTCP layouts,
              and ethical business incubations that protect amanah while
              multiplying impact.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700"
              >
                Explore Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 rounded-full border border-brand-200 px-6 py-3 text-sm font-semibold text-brand-600 transition hover:bg-brand-50"
              >
                Watch Story
                <Play className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="overflow-hidden rounded-3xl border border-white/80 bg-white/70 p-1 shadow-2xl shadow-brand-900/10">
              <div
                className="h-[420px] rounded-[26px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80')",
                }}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-5 px-5 pb-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/60 bg-white/80 p-5 text-slate-900 shadow-card backdrop-blur-xl"
            >
              <p className="text-4xl font-semibold text-slate-900">
                <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} />
              </p>
              <p className="mt-2 text-sm uppercase tracking-widest text-brand-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-4">
            <p className="text-xs font-semibold uppercase text-brand-600">
              Featured ventures
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Each project is engineered for transparent growth & shared barakah.
            </h2>
            <p className="text-base text-slate-500">
              From DTCP layouts to community-centric business parks, we curate
              opportunities that blend strong fundamentals, green design, and
              uncompromising halal governance.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-brand-200 px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
          >
            Request Portfolio Deck
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ventures.map((venture) => (
            <div
              key={venture.title}
              className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card"
            >
              <div
                className="h-64 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${venture.image})` }}
              >
                <div className="flex items-center justify-between bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent p-5 text-white h-full">
                  <span className="rounded-full bg-white/20 px-4 py-1 text-xs uppercase tracking-widest">
                    {venture.tag}
                  </span>
                  <span className="text-sm font-semibold">{venture.status}</span>
                </div>
              </div>
              <div className="space-y-3 p-6">
                <p className="text-sm uppercase text-brand-500">
                  {venture.location}
                </p>
                <h3 className="text-xl font-semibold text-slate-900">
                  {venture.title}
                </h3>
                <Link
                  to={`/projects#${venture.id}`}
                  className="flex items-center gap-2 text-sm font-semibold text-brand-600"
                >
                  View dossier <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-6xl px-5 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase text-brand-600">
                The Hajiyar method
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Governance frameworks that make halal growth repeatable.
              </h2>
              <p className="text-slate-500">
                We combine scholar-backed governance, forensic due diligence, and
                digital reporting to give you institutional-grade comfort with
                boutique care.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    icon: <ShieldCheck className="h-5 w-5 text-brand-600" />,
                    title: "Scholar Board",
                    detail: "Quarterly reviews & signed compliance memos.",
                  },
                  {
                    icon: <LineChart className="h-5 w-5 text-brand-600" />,
                    title: "Live Dashboards",
                    detail: "Track milestones, payouts, and land titles online.",
                  },
                  {
                    icon: <Globe className="h-5 w-5 text-brand-600" />,
                    title: "Global Desk",
                    detail: "Onboarding for NRIs & GCC investors with e-KYC.",
                  },
                  {
                    icon: <Building2 className="h-5 w-5 text-brand-600" />,
                    title: "Asset Stewardship",
                    detail: "Dedicated care team for rentals & re-sale.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <h3 className="text-base font-semibold text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-slate-100 bg-slate-900/95 p-8 text-white shadow-soft">
              <p className="text-xs uppercase tracking-[0.5em] text-brand-200">
                Operating pillars
              </p>
              <div className="grid gap-6">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="space-y-3 rounded-2xl bg-white/5 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                      {pillar.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                    <p className="text-sm text-slate-300">{pillar.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-card md:p-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-4">
              <p className="text-xs font-semibold uppercase text-brand-600">
                Partner stories
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                “We invest in trust before we invest in land.”
              </h2>
              <p className="text-slate-500">
                Hear from founders, homemakers, and NRIs who now use Hajiyar Halal
                Profits as their go-to halal wealth desk.
              </p>
            </div>
            <div className="grid flex-1 gap-6 sm:grid-cols-2">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-3xl border border-slate-100 bg-slate-50/60 p-5"
                >
                  <Quote className="h-6 w-6 text-brand-500" />
                  <p className="mt-4 text-sm text-slate-600">{item.quote}</p>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                    <p className="text-xs uppercase tracking-[0.35em] text-brand-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-5 lg:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-3">
              <p className="text-xs font-semibold uppercase text-brand-200">
                Our process
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                From first salam to sustainable returns.
              </h2>
              <p className="text-slate-300">
                A guided workflow that eliminates speculation and keeps you updated
                at every milestone.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Book a discovery call
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {journey.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm text-slate-300">{step.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-emerald-700 p-10 text-white shadow-soft">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex-1 space-y-4">
              <p className="text-xs uppercase text-white/70">
                Ready to begin
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Book a 30-minute halal wealth blueprint session.
              </h2>
              <p className="text-sm text-white/80">
                We’ll audit your current portfolio, highlight riba risk, and chart a
                personalized roadmap within 5 business days.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg transition hover:bg-slate-100"
              >
                Speak to the team
              </Link>
              <a
                href="https://wa.me/919150049753"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp concierge
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-4">
              <p className="text-xs font-semibold uppercase text-brand-500">
                Knowledge capsules
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Learn the halal wealth playbook in under five minutes.
              </h2>
              <p className="text-sm text-slate-500">
                Our advisory desk publishes micro playbooks that break down shariah-compliant
                instruments, legal structures, and on-ground insights from 26+ years of building.
              </p>
            </div>
            <div className="grid flex-1 gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Exit Riba In 3 Steps",
                  summary: "Assessment, refinancing, and stewardship to rebuild clean capital.",
                },
                {
                  title: "DTCP Layout Checklist",
                  summary: "Everything to verify before signing—from soil tests to patta lineage.",
                },
                {
                  title: "JV Governance Stack",
                  summary: "Sample MoUs, waterfall models, and shariah audit frequency.",
                },
                {
                  title: "Community Impact Blueprint",
                  summary: "How we tie every acre to masjid upkeep, jobs, and reforestation.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.summary}</p>
                  <button className="mt-3 text-xs font-semibold uppercase tracking-[0.35em] text-brand-600">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
