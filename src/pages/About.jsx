import React from "react";
import CountUp from "react-countup";
import {
  Target,
  Award,
  ShieldCheck,
  Users,
  BookOpen,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: 26, suffix: "+", label: "Years safeguarding halal portfolios" },
  { value: 18, suffix: "", label: "Scholars & advisors on our board" },
  { value: 320, suffix: "cr", label: "Worth of projects stewarded" },
  { value: 0, suffix: "", label: "Interest-bearing instruments used" },
];

const timeline = [
  {
    year: "1998",
    title: "The Early Layouts",
    detail: "Started with DTCP layouts built on riba-free financing for families in Chennai.",
  },
  {
    year: "2008",
    title: "JV Acceleration",
    detail: "Expanded into halal joint ventures with partner ownership and transparent payouts.",
  },
  {
    year: "2016",
    title: "Digital Compliance Desk",
    detail: "Launched online dashboards & scholar signed compliance reports for NRIs.",
  },
  {
    year: "2023",
    title: "Impact Studio",
    detail: "Built in-house team for regenerative farming, women-led businesses, and skill hubs.",
  },
];

const leadership = [
  {
    name: "Mr. Hajiyar",
    role: "Founder & Managing Director",
    quote:
      "Every acre we touch must return dignity to the land, jobs to the people, and barakah to every partner.",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Amina Rahman",
    role: "Head of Ethical Finance",
    quote:
      "We engineer exit routes from interest-based instruments and replace them with measurable, halal growth.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
];

const values = [
  {
    icon: <ShieldCheck className="h-5 w-5 text-brand-600" />,
    title: "Amanah First",
    detail: "Money entrusted to us is protected like family capital.",
  },
  {
    icon: <Leaf className="h-5 w-5 text-brand-600" />,
    title: "Regenerative Impact",
    detail: "Rewild land, reduce waste, and invest in people-centric outcomes.",
  },
  {
    icon: <Users className="h-5 w-5 text-brand-600" />,
    title: "Radical Transparency",
    detail: "Open books, monthly reporting, and on-ground access for partners.",
  },
  {
    icon: <BookOpen className="h-5 w-5 text-brand-600" />,
    title: "Continuous Learning",
    detail: "Scholar workshops and venture labs keep us adaptive yet grounded.",
  },
];

const About = () => {
  return (
    <div className="space-y-16 bg-slate-50 pb-16">
      <section className="bg-white pt-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 pb-16 lg:flex-row lg:items-center lg:px-6">
          <div className="flex-1 space-y-5">
            <p className="text-xs font-semibold uppercase text-brand-600">
              Our story
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Faith-rooted builders of ethical real estate and halal ventures.
            </h1>
            <p className="text-slate-600">
              Hajiyar Halal Profits was born out of a single promise made in
              Rohini Nagar: to grow wealth without ever compromising deen or
              dignity. Today, families in India, GCC, and Southeast Asia trust us
              to curate transparent joint ventures, regenerative layouts, and
              community-first businesses.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700"
              >
                Meet our team
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-brand-200 px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
              >
                View capabilities
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-[32px] border border-slate-100 bg-gradient-to-br from-brand-50 via-white to-white p-1 shadow-card">
              <div className="rounded-[28px] bg-white p-6">
                <div className="space-y-6 rounded-3xl bg-slate-50 p-6">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between text-slate-700"
                    >
                      <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                        {stat.label}
                      </p>
                      <p className="text-3xl font-semibold text-brand-600">
                        <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-5 lg:flex-row lg:px-6">
        <div className="flex-1 space-y-4 rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
          <Target className="h-6 w-6 text-brand-600" />
          <h2 className="text-2xl font-semibold text-slate-900">Our Mission</h2>
          <p className="text-slate-600">
            Mentor families and founders to build wealth anchored in Shariah,
            sustainability, and shared prosperity. We champion ethical joint
            ventures, loss-protection frameworks, and purpose-built communities.
          </p>
        </div>
        <div className="flex-1 space-y-4 rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
          <Award className="h-6 w-6 text-brand-600" />
          <h2 className="text-2xl font-semibold text-slate-900">Our Vision</h2>
          <p className="text-slate-600">
            Normalise halal investing as the gold standard for real estate and
            business building. A future where profits feel as pure as the
            intentions that sparked them.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="rounded-3xl border border-slate-100 bg-slate-50/60 p-8 shadow-card"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-36 w-36 rounded-3xl object-cover shadow-lg"
                  />
                  <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-brand-600">
                      {leader.role}
                    </p>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {leader.name}
                    </h3>
                    <p className="mt-3 text-sm text-slate-500">“{leader.quote}”</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-card md:p-12">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            A timeline of trust
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Each decade sharpened our craft—moving from humble layouts to a
            full-spectrum halal venture studio.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {timeline.map((item) => (
              <div key={item.year} className="rounded-3xl border border-slate-100 p-6">
                <p className="text-xs uppercase tracking-[0.5em] text-brand-500">
                  {item.year}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-5 lg:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase text-brand-200">
                Core values
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Principles that hold us accountable.
              </h2>
              <p className="mt-3 text-slate-300">
                Every engagement is reviewed by our ethics circle that includes
                scholars, lawyers, agronomists, and technologists.
              </p>
            </div>
            <div className="flex-1 grid gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="rounded-3xl bg-white/5 p-5 shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    {value.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{value.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6">
        <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-brand-50 via-white to-white p-8 shadow-card md:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase text-brand-600">
                Community impact
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                We reinvest profits into scholarships, micro-business grants, and
                masjid upkeep funds.
              </h2>
              <p className="text-slate-600">
                Over 40% of our net profits are redirected into impact pools that
                finance women-led stores, farmer collectives, and free medical camps.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-700"
              >
                Request the impact report
              </Link>
            </div>
            <div className="space-y-5 rounded-3xl border border-slate-100 bg-white p-8">
              {[
                { label: "Micro businesses funded", value: "120+" },
                { label: "Students on scholarships", value: "75" },
                { label: "Acres revived via regenerative farming", value: "210" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-6">
        <div className="overflow-hidden rounded-3xl bg-slate-900 p-10 text-white shadow-soft">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex-1 space-y-4">
              <p className="text-xs uppercase text-white/60">
                Work with us
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Build something beautiful, ethical, and enduring.
              </h2>
              <p className="text-sm text-slate-300">
                Start with a discovery call. We map your goals, evaluate ongoing
                assets, and craft a halal-first roadmap.
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

      <section className="mx-auto max-w-6xl px-5 lg:px-6">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-card md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-3">
              <p className="text-xs font-semibold uppercase text-brand-600">
                Advisory circle
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                The scholars & specialists guiding our compass.
              </h2>
              <p className="text-slate-600">
                We invite third-party auditors from finance, law, agriculture, and technology to sit
                with us every quarter. Their independent notes are shared with all partners.
              </p>
            </div>
            <div className="grid flex-1 gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Shariah Board",
                  desc: "Muftis with expertise in Islamic finance review every MoU and money flow.",
                },
                {
                  title: "Risk & Legal Pod",
                  desc: "Real estate lawyers and chartered accountants vet titles & compliance.",
                },
                {
                  title: "Sustainability Squad",
                  desc: "Agronomists and hydrology experts ensure land heals as we build.",
                },
                {
                  title: "Technology Fellows",
                  desc: "Data and product specialists who build the transparent dashboards you see.",
                },
              ].map((tile) => (
                <div key={tile.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{tile.title}</p>
                  <p className="mt-2 text-xs text-slate-500">{tile.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
