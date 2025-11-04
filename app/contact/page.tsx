import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-14 px-6 pb-24 pt-20 sm:px-12">
        <section className="grid gap-10 rounded-3xl bg-slate-900/60 p-10 shadow-xl shadow-cyan-500/10 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Contact EcoForge Build</p>
            <h1 className="text-4xl font-semibold leading-snug text-white sm:text-5xl">
              Let&apos;s shape resilient infrastructure together.
            </h1>
            <p className="text-lg leading-relaxed text-slate-200">
              Whether you&apos;re exploring a new build, retrofitting existing assets, or scaling renewable capacity, our team is ready
              to collaborate. Reach us directly at{" "}
              <a className="text-cyan-300 underline decoration-cyan-400 underline-offset-4" href="mailto:darenadrian.laine@ecoforgebuild.com">
                darenadrian.laine@ecoforgebuild.com
              </a>{" "}
              or share details below to connect with Daren Adrian Laine and our project strategists.
            </p>
            <Link
              href="/"
              className="inline-flex w-fit items-center justify-center rounded-full border border-slate-200/40 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Home
            </Link>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-3xl border border-slate-800 shadow-inner shadow-black/30">
            <Image
              src="/image/Screenshot 2025-11-01 at 10.40.48.png"
              alt="EcoForge Build solar installation"
              fill
              sizes="(min-width: 1024px) 35vw, (min-width: 640px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-xl shadow-cyan-500/10">
          <h2 className="text-sm uppercase tracking-[0.4em] text-cyan-300">Project Intake Form</h2>
          <form
            className="mt-8 space-y-6"
            action="mailto:darenadrian.laine@ecoforgebuild.com"
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col text-sm font-semibold text-slate-100">
                Full Name
                <input
                  className="mt-2 rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                  type="text"
                  name="Full Name"
                  placeholder="Jordan Rivers"
                  required
                />
              </label>
              <label className="flex flex-col text-sm font-semibold text-slate-100">
                Organization
                <input
                  className="mt-2 rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                  type="text"
                  name="Organization"
                  placeholder="Forge City Partners"
                />
              </label>
              <label className="flex flex-col text-sm font-semibold text-slate-100">
                Email
                <input
                  className="mt-2 rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                  type="email"
                  name="Email"
                  placeholder="you@company.com"
                  required
                />
              </label>
              <label className="flex flex-col text-sm font-semibold text-slate-100">
                Phone
                <input
                  className="mt-2 rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                  type="tel"
                  name="Phone"
                  placeholder="+1 (555) 012-3456"
                />
              </label>
            </div>
            <label className="flex flex-col text-sm font-semibold text-slate-100">
              <span>Project Type</span>
              <div className="relative mt-2">
                <select
                  className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 pr-12 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                  name="Project Type"
                  defaultValue="Construction + Renewable Integration"
                >
                  <option>Construction + Renewable Integration</option>
                  <option>Utility-Scale Renewable Deployment</option>
                  <option>Commercial Retrofit</option>
                  <option>Energy Storage & Microgrid</option>
                  <option>Advisory & Feasibility</option>
                </select>
                <svg
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-400"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.75 1.75 6 6.25 1.25 1.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </label>
            <label className="flex flex-col text-sm font-semibold text-slate-100">
              Project Location
              <input
                className="mt-2 rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                type="text"
                name="Project Location"
                placeholder="City, State/Province, Country"
              />
            </label>
            <label className="flex flex-col text-sm font-semibold text-slate-100">
              Project Timeline
              <input
                className="mt-2 rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                type="text"
                name="Project Timeline"
                placeholder="Q3 2024 kickoff, completion 18 months"
              />
            </label>
            <label className="flex flex-col text-sm font-semibold text-slate-100">
              Project Overview
              <textarea
                className="mt-2 min-h-[160px] rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                name="Project Overview"
                placeholder="Share site context, sustainability targets, energy demands, and any permitting milestones."
                required
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 sm:w-auto"
            >
              Send to Daren Adrian Laine
            </button>
          </form>
        </section>

        <section className="rounded-3xl bg-slate-900/60 p-10 shadow-xl shadow-cyan-500/10">
          <h2 className="text-sm uppercase tracking-[0.4em] text-cyan-300">Direct Access</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/60 p-6 shadow-inner shadow-black/20">
              <div className="space-y-3">
                <p className="text-sm font-semibold text-cyan-200">Email</p>
                <a
                  className="block text-sm text-slate-200 break-words"
                  href="mailto:darenadrian.laine@ecoforgebuild.com"
                >
                  darenadrian.laine@ecoforgebuild.com
                </a>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/60 p-6 shadow-inner shadow-black/20">
              <div className="space-y-3">
                <p className="text-sm font-semibold text-cyan-200">Headquarters</p>
                <address className="not-italic text-sm text-slate-200 leading-relaxed">
                  842 Forge Avenue
                  <br />
                  Suite 900
                  <br />
                  Portland, OR 97204
                </address>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/60 p-6 shadow-inner shadow-black/20">
              <div className="space-y-3">
                <p className="text-sm font-semibold text-cyan-200">Partnership Hotline</p>
                <p className="text-sm text-slate-200">+1 (503) 310-8012</p>
                <p className="text-xs text-slate-400">Monday–Friday, 8:00–18:00 PT</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
