"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-12">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          <span className="rounded-full border border-cyan-400/50 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-cyan-200">
            Eco
          </span>
          <span className="text-white">Forge Build</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 text-sm font-semibold md:flex">
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
            className="ml-2 rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Start a Project
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`h-0.5 w-6 bg-cyan-300 transition-all ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-cyan-300 transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-cyan-300 transition-all ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="border-t border-slate-800/70 bg-slate-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full border px-4 py-3 text-center text-sm font-semibold transition ${
                    isActive ? activeClasses : baseClasses
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full bg-cyan-500 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Start a Project
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
