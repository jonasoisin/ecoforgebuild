import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const offerings = [
    {
      title: "Integrated Construction",
      description:
        "Full-cycle delivery for commercial, residential, and civic infrastructure with prefabricated systems that compress schedules and reduce waste.",
      points: ["Architectural design-build", "Smart materials sourcing", "Carbon-aware logistics"],
    },
    {
      title: "Renewable Energy Systems",
      description:
        "Custom solar, wind, and hybrid microgrid installations engineered for resilience and optimal load balancing.",
      points: ["Utility-scale solar arrays", "Wind turbine deployment", "Battery storage integration"],
    },
    {
      title: "EcoRetrofit Services",
      description:
        "Modernize legacy properties with energy audits, envelope upgrades, and intelligent building automation.",
      points: ["Thermal performance assessments", "HVAC modernization", "IoT monitoring rollout"],
    },
  ];

  const stats = [
    { label: "Projects Delivered", value: "325+" },
    { label: "Renewable Capacity Deployed", value: "1.8 GW" },
    { label: "Carbon Reduction Achieved", value: "42%" },
    { label: "Cities Served", value: "28" },
  ];

  const pillars = [
    {
      title: "Sustainable from Blueprint",
      copy: "Lifecycle modeling informs every proposal to ensure each build earns long-term environmental and financial returns.",
    },
    {
      title: "Data-Guided Delivery",
      copy: "Real-time dashboards track procurement, crews, and energy yields so stakeholders stay aligned and adaptive.",
    },
    {
      title: "Community Partnerships",
      copy: "We invest in workforce training and local suppliers, strengthening regions where our projects take root.",
    },
  ];

  const galleryItems = [
    {
      title: "Hybrid Logistics Fleet",
      description:
        "Low-emission haul trucks deliver prefabricated components while monitoring fuel efficiency in real time.",
      image:
        "/image/engt1.2.jpeg",
      alt: "Eco-friendly construction trucks staged on site at sunrise.",
    },
    {
      title: "Wind Turbine Commissioning",
      description:
        "Adaptive pitch turbines with predictive maintenance analytics extend output even in variable coastal winds.",
      image:
        "/image/emg1.2.jpeg",
      alt: "Wind turbines spinning along a coastline during sunset.",
    },
    {
      title: "Solar Workforce in Action",
      description:
        "Certified installers mount bifacial solar panels with safety-first protocols and smart torque verification.",
      image:
        "/image/eng2.png",
      alt: "Technicians working atop a roof installing solar panels.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-20 sm:px-12">
        <section className="grid gap-10 rounded-3xl bg-slate-900/60 p-10 shadow-xl shadow-cyan-500/10 backdrop-blur">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.4em] text-cyan-300">
              Led by CEO Daren Adrian Laine
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Building climate-positive infrastructure that powers cities and empowers communities.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-200">
              EcoForge Build unites master builders, energy engineers, and digital specialists to deliver high-performance
              structures and renewable systems. From net-zero campuses to offshore wind hubs, we combine precision
              fabrication with clean-power ecosystems so every project advances resilient futures.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 text-center shadow-inner shadow-black/30"
              >
                <p className="text-3xl font-semibold text-cyan-300">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-xl shadow-cyan-500/10">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.4em] text-cyan-300">Field-Proven Assets</h2>
            <p className="mt-4 text-lg text-slate-200">
              Our project sites blend precision equipment, high-performance renewables, and skilled teams to deliver reliable
              outcomes across construction zones, wind corridors, and solar arrays.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <figure
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/60 shadow-inner shadow-black/30"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="space-y-3 px-6 py-5">
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <p className="text-sm text-slate-300">{item.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-xl shadow-cyan-500/5">
            <h2 className="text-sm uppercase tracking-[0.4em] text-cyan-300">Our Expertise</h2>
            <p className="mt-6 text-3xl font-semibold text-white">
              Comprehensive delivery across construction, renewables, and intelligent operations.
            </p>
            <p className="mt-4 text-base text-slate-200">
              We engineer environments that make clean energy the default. Our multidisciplinary teams coordinate civil, electrical,
              and digital disciplines, ensuring safety, compliance, and community value under the leadership of Daren Adrian Laine.
            </p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              {offerings.map((offering) => (
                <div key={offering.title} className="rounded-2xl bg-slate-950/60 p-6 shadow-inner shadow-black/20">
                  <dt className="text-lg font-semibold text-white">{offering.title}</dt>
                  <dd className="mt-3 text-sm text-slate-300">{offering.description}</dd>
                  <ul className="mt-4 space-y-2 text-sm text-cyan-200">
                    {offering.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span aria-hidden className="mt-1 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex flex-col justify-between gap-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-cyan-500/10 via-slate-900 to-slate-950 p-10">
            <div>
              <h2 className="text-sm uppercase tracking-[0.4em] text-cyan-300">Energy Integration</h2>
              <p className="mt-6 text-2xl font-semibold text-white">
                Solar, wind, geothermal, and storage solutions engineered as unified ecosystems.
              </p>
              <p className="mt-4 text-base text-slate-200">
                We model production curves, grid interconnections, and smart metering before groundbreak to accelerate commissioning.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Featured Approach</p>
              <p className="mt-3 text-lg font-semibold text-white">Hybrid Microgrid Campus Blueprint</p>
              <p className="mt-2 text-sm text-slate-300">
                Adaptive solar canopies, vertical-axis wind turbines, and on-site hydrogen storage deliver 24/7 resilience with a 62% reduction in operational emissions.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Plan a Consultation
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-xl shadow-cyan-500/10">
          <h2 className="text-sm uppercase tracking-[0.4em] text-cyan-300">Our Pillars</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl bg-slate-950/60 p-6 shadow-inner shadow-black/20">
                <p className="text-lg font-semibold text-white">{pillar.title}</p>
                <p className="mt-3 text-sm text-slate-300">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl bg-slate-900/60 p-10 shadow-xl shadow-cyan-500/10">
          <div className="max-w-3xl">
            <h2 className="text-sm uppercase tracking-[0.4em] text-cyan-300">Leadership Perspective</h2>
            <p className="mt-6 text-2xl font-semibold text-white">
              “We forge smarter skylines by coupling circular construction practices with renewable intelligence. Every project
              is a chance to prove that resilient infrastructure and thriving communities are inseparable.”
            </p>
            <p className="mt-4 text-base text-cyan-200">Daren Adrian Laine, Chief Executive Officer</p>
          </div>
          <div className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-950/60 p-6 text-sm text-slate-200 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-white">Latest Wins</p>
              <ul className="mt-3 space-y-2">
                <li>• Commissioned the Seabright Offshore Wind Port ahead of schedule.</li>
                <li>• Delivered 14 eco-certified mixed-use towers with embedded solar skins.</li>
                <li>• Partnered with three municipalities on rapid-deploy energy resilience hubs.</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Partnership Focus</p>
              <ul className="mt-3 space-y-2">
                <li>• Green financing alliances for public-private projects.</li>
                <li>• Industrial symbiosis programs to upcycle construction waste streams.</li>
                <li>• Workforce pipelines establishing 1,200+ clean-tech apprenticeships.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-slate-950 p-10 shadow-xl shadow-cyan-500/20">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.4em] text-cyan-300">Ready to Collaborate?</h2>
            <p className="mt-6 text-3xl font-semibold text-white">
              Bring your next build, retrofit, or renewable rollout to life with EcoForge Build.
            </p>
            <p className="mt-4 text-base text-slate-100">
              Our teams align design intent with performance metrics from day one. Share your project brief and we will fast-track a feasibility roadmap tailored to your goals.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Start a Project
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-slate-200/40 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Discover Our Story
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
