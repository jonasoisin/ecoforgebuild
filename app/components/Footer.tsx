import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/95">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-12">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">EcoForge Build</p>
            <p className="text-sm text-slate-300">
              Integrated construction and renewable energy delivery for resilient, low-carbon communities under the vision
              of CEO Daren Adrian Laine.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-cyan-200" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <a className="transition hover:text-cyan-200" href="mailto:darenadrianlaine@ecoforgebuild.com">
                  darenadrianlaine@ecoforgebuild.com
                </a>
              </li>
              <li>+1 (503) 310-8012</li>
              <li>842 Forge Avenue, Suite 900, Portland, OR 97204</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-slate-800/60 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} EcoForge Build. All rights reserved.</p>
          <p>Forging sustainable skylines through integrated construction and clean energy systems.</p>
        </div>
      </div>
    </footer>
  );
}
