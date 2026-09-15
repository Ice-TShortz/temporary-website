"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { company } from "@/lib/site-data";
import { MailIcon, MenuIcon, PhoneIcon, CloseIcon, ShipWheelIcon } from "./Icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/fleet", label: "Our Fleet" },
  { href: "/services", label: "Services" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/news", label: "News" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="hidden bg-[#03101f] text-slate-300 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <a href={`tel:${company.phone}`} className="flex items-center gap-1.5 hover:text-cyan-400">
              <PhoneIcon className="h-3.5 w-3.5" /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-cyan-400">
              <MailIcon className="h-3.5 w-3.5" /> {company.email}
            </a>
          </div>
          <div className="flex items-center gap-4 uppercase tracking-wider">
            <span className="text-amber-400">24/7 Operations Center: {company.emergencyPhone}</span>
          </div>
        </div>
      </div>

      <div className="border-b border-white/10 bg-[#061a30]/95 backdrop-blur supports-[backdrop-filter]:bg-[#061a30]/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <Link href="/" className="flex items-center gap-2.5 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400 ring-1 ring-cyan-400/40">
              <ShipWheelIcon className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block font-[var(--font-heading)] text-lg font-bold tracking-wide">MT MARITIME</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-cyan-400">Offshore Fleet Services</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active ? "bg-white/10 text-cyan-400" : "text-slate-200 hover:bg-white/5 hover:text-cyan-400"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-[#0a1f38] transition-colors hover:bg-amber-400"
            >
              Charter a Vessel
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="rounded-md p-2 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-[#061a30] px-6 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium ${
                    pathname === link.href ? "bg-white/10 text-cyan-400" : "text-slate-200"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-md bg-amber-500 px-4 py-2.5 text-center text-sm font-semibold text-[#0a1f38]"
              >
                Charter a Vessel
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
