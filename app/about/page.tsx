import Image from "next/image";
import Link from "next/link";

const milestones = [
  {
    year: "2011",
    title: "EcoForge Build Founded",
    copy: "Daren Adrian Laine established EcoForge Build to unite precision construction with emerging clean technologies.",
  },
  {
    year: "2015",
    title: "Hybrid Energy Program Launch",
    copy: "Introduced our integrated solar and wind campus framework, unlocking rapid deployment for education districts.",
  },
  {
    year: "2019",
    title: "Global Supply Coalition",
    copy: "Formed low-carbon manufacturing alliances across three continents to reduce embodied emissions in materials.",
  },
  {
    year: "2023",
    title: "1 GW Renewable Milestone",
    copy: "Surpassed one gigawatt of renewable capacity delivered through utility-scale and community microgrid projects.",
  },
];

const leadership = [
  {
    name: "Daren Adrian Laine",
    role: "Chief Executive Officer",
    bio: "Daren guides EcoForge Build with two decades of experience in structural engineering and clean-tech finance. Under his leadership, the company has become a benchmark for climate-positive infrastructure.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 pb-24 pt-20 sm:px-12">
        <section className="grid gap-10 rounded-3xl bg-slate-900/60 p-10 shadow-xl shadow-cyan-500/10 sm:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">About EcoForge Build</p>
            <h1 className="text-4xl font-semibold leading-snug text-white sm:text-5xl">
              Engineering the future of resilient, clean, and human-centered infrastructure.
            </h1>
            <p className="text-lg leading-relaxed text-slate-200">
              EcoForge Build designs and delivers spaces that harmonize structural excellence with renewable energy ecosystems.
              From groundbreak to commissioning, we orchestrate digital planning, modular construction, and data-rich operations
              that keep communities thriving. Our teams operate across North America, Europe, and the Pacific Rim, stewarded by CEO
              Daren Adrian Laine and a leadership collective that blends construction mastery with environmental stewardship.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-slate-200/40 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
              >
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Work With Us
              </Link>
            </div>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-3xl border border-slate-800 shadow-inner shadow-black/30">
            <Image
              src="/image/Whisk_fd724636a621ceda5104bca8f03caa60dr.jpeg"
              alt="EcoForge Build team reviewing architectural plans next to solar arrays."
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-xl shadow-cyan-500/10">
          <h2 className="text-sm uppercase tracking-[0.4em] text-cyan-300">How We Operate</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-950/60 p-6 shadow-inner shadow-black/20">
              <p className="text-lg font-semibold text-white">Holistic Project Delivery</p>
              <p className="mt-3 text-sm text-slate-300">
                We co-locate design, structural analysis, and energy modeling teams to eliminate silos and maximize performance outcomes.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-6 shadow-inner shadow-black/20">
              <p className="text-lg font-semibold text-white">Circular Supply Chain</p>
              <p className="mt-3 text-sm text-slate-300">
                Materials are vetted for cradle-to-cradle certifications, and offcuts are recaptured through partner reuse programs.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-6 shadow-inner shadow-black/20">
              <p className="text-lg font-semibold text-white">People-First Culture</p>
              <p className="mt-3 text-sm text-slate-300">
                Apprenticeships, safety labs, and community outreach ensure our projects generate lasting social value.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-6 shadow-inner shadow-black/20">
              <p className="text-lg font-semibold text-white">Performance Analytics</p>
              <p className="mt-3 text-sm text-slate-300">
                Post-occupancy intelligence verifies energy yield, indoor comfort, and maintenance optimization across portfolios.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-slate-900/60 p-10 shadow-xl shadow-cyan-500/10">
          <h2 className="text-sm uppercase tracking-[0.4em] text-cyan-300">Milestones</h2>
          <div className="mt-8 space-y-6">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 shadow-inner shadow-black/20 sm:grid-cols-[120px_1fr]"
              >
                <p className="text-2xl font-semibold text-cyan-300">{milestone.year}</p>
                <div>
                  <p className="text-lg font-semibold text-white">{milestone.title}</p>
                  <p className="mt-2 text-sm text-slate-300">{milestone.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-xl shadow-cyan-500/10">
          <h2 className="text-sm uppercase tracking-[0.4em] text-cyan-300">Leadership Team</h2>
          <div className="mt-8 flex justify-center">
            {leadership.map((leader) => (
              <article
                key={leader.name}
                className="flex max-w-md flex-col rounded-2xl bg-slate-950/60 p-8 shadow-inner shadow-black/20"
              >
                <p className="text-xl font-semibold text-white">{leader.name}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-cyan-200">{leader.role}</p>
                <p className="mt-6 text-sm text-slate-300">{leader.bio}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
