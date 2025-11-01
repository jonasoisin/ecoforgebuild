"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const activeClasses =
  "text-cyan-300 border-cyan-400 bg-cyan-400/10 hover:text-cyan-200";
const baseClasses =
  "text-slate-200 border-transparent hover:text-cyan-200 hover:border-cyan-300/60";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-12">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          <span className="rounded-full border border-cyan-400/50 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-cyan-200">
            Eco
          </span>
          <span className="text-white">Forge Build</span>
        </Link>
        <nav className="flex items-center gap-2 text-sm font-semibold">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full border px-4 py-2 transition ${isActive ? activeClasses : baseClasses}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 hidden rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 sm:inline-flex"
          >
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
