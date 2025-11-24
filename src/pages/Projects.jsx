import React from "react";
import { Link } from "react-router-dom";
import { Compass, MapPinned, Building2, Award, Leaf, Sparkles } from "lucide-react";

const dossiers = [
  {
    id: "madurai",
    title: "Hajiyar Eco Residency",
    subtitle: "Madurai • Luxury Township",
    description:
      "A 42-acre gated enclave with villas, community farms, and learning pods for the next generation.",
    highlights: ["172 smart villas", "Masjid & skill hub on-site", "Grey-water recycling loops"],
  },
  {
    id: "chengalpattu",
    title: "Noor Acres DTCP Layout",
    subtitle: "Chengalpattu • DTCP Plots",
    description:
      "Thoughtfully planned plots adjacent to the GST road corridor, tailored for self-build families.",
    highlights: ["DTCP + RERA approvals", "Neighbourhood souk & clinic", "Solar-ready infrastructure"],
  },
  {
    id: "coimbatore",
    title: "Halal Biz Park",
    subtitle: "Coimbatore • Joint Venture",
    description:
      "Co-create a mixed-use commercial asset with steady rentals, anchored by halal-compliant brands.",
    highlights: ["Curated tenant mix", "Revenue share dashboard", "Dedicated asset management pod"],
  },
];

const timeline = [
  {
    label: "Phase 01",
    title: "Discovery & Onboarding",
    detail: "We workshop your goals, capital position, and risk comfort. Expect clarity within 5 days.",
  },
  {
    label: "Phase 02",
    title: "Design & Documentation",
    detail: "Pods craft layout plans, JV sheets, and compliance memos. Every document is co-signed.",
  },
  {
    label: "Phase 03",
    title: "Execution & Reporting",
    detail: "Site teams, dashboards, and scholar audits keep everyone synced without micromanaging.",
  },
  {
    label: "Phase 04",
    title: "Scale or Exit",
    detail: "Reinvest dividends into the next pod or schedule an exit with verified buyback partners.",
  },
];

const Projects = () => {
  return (
    <div className="space-y-16 bg-slate-50 pb-16">
      <section className="bg-white pt-12">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-6">
          <p className="text-xs font-semibold uppercase text-brand-600">Project dossiers</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
            Deep dive into the ventures we’re currently stewarding.
          </h1>
          <p className="mt-4 text-slate-600">
            Explore site data, governance layers, and partner outcomes. Each dossier includes legal
            readiness, sustainability metrics, and impact commitments.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl grid gap-8 px-5 lg:px-6 md:grid-cols-2">
        {dossiers.map((dossier) => (
          <div key={dossier.id} id={dossier.id} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase text-brand-500">
              <MapPinned className="h-4 w-4" />
              {dossier.subtitle}
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">{dossier.title}</h2>
            <p className="mt-3 text-sm text-slate-600">{dossier.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {dossier.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center rounded-full border border-brand-200 px-5 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              Request the full dossier
            </Link>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-card md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase text-brand-600">Why partners stay</p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Systems that safeguard capital and conscience.
              </h2>
              <p className="text-sm text-slate-600">
                Three pods shadow every project—compliance, impact, and experience. Their only KPI is
                to surface risk early and keep communication transparent.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: <Building2 className="h-5 w-5" />, title: "Institutional documentation" },
                { icon: <Award className="h-5 w-5" />, title: "Scholar & legal sign-offs" },
                { icon: <Leaf className="h-5 w-5" />, title: "Regenerative land playbooks" },
                { icon: <Sparkles className="h-5 w-5" />, title: "Concierge-grade reporting" },
              ].map((pill) => (
                <div key={pill.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    {pill.icon}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-900">{pill.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
          <div className="grid gap-6 md:grid-cols-4">
            {timeline.map((step) => (
              <div key={step.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase text-brand-500">{step.label}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 lg:px-6">
        <div className="rounded-3xl bg-slate-900 p-10 text-white shadow-soft">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase text-white/70">Need a custom thesis?</p>
              <h2 className="mt-3 text-3xl font-semibold">Let’s co-create your next halal venture.</h2>
              <p className="mt-2 text-sm text-white/80">
                Share your land parcel, capital pool, or exit requirement—we’ll assemble a specialist
                pod and revert with a roadmap in 5 working days.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
              >
                Book a discovery call
              </Link>
              <a
                href="https://wa.me/919150049753"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp the concierge
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

