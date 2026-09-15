import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/site-data";
import ServiceIcon from "@/components/ServiceIcon";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services | MT Maritime",
  description: "Explore MT Maritime's offshore support vessel services: AHTS, PSV, MPSV, ROV support, crew transfer, standby safety and heavy lift.",
};

const capabilities: Record<string, string[]> = {
  "anchor-handling-tug-supply": [
    "Rig moves, mooring installation and deep-water towage",
    "DP2 and DP3 dynamic positioning systems",
    "Bollard pull up to 320 tonnes",
    "Chain lockers and anchor handling winches to 400t",
  ],
  "platform-supply-vessels": [
    "Bulk cement, brine, fuel and potable water transport",
    "Large clear deck areas for containerised and project cargo",
    "Fuel-efficient hull forms reducing emissions per cargo tonne",
    "Dedicated mud and methanol tank configurations",
  ],
  "subsea-construction-support": [
    "Moonpool-fitted vessels for IMR and light construction",
    "Work-class ROV spreads and survey suites",
    "Accommodation for up to 90 project personnel",
    "Cable and umbilical lay capability",
  ],
  "crew-transfer": [
    "Low-motion catamaran hulls for technician comfort",
    "Motion-compensated gangways on accommodation vessels",
    "Capacity for up to 450 persons on board",
    "Daily rotations to offshore wind and oil & gas assets",
  ],
  "emergency-response": [
    "Fast rescue craft and davit-launched systems",
    "Firefighting monitors (FiFi 1) and foam systems",
    "On-board medical facilities and trained medics",
    "24/7 dedicated standby cover per platform requirements",
  ],
  "heavy-lift-construction": [
    "Main crane capacity up to 1,200 tonnes",
    "Jacket, topside and module installation",
    "Platform decommissioning and removal",
    "DP3 station-keeping for precision lifts",
  ],
};

export default function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#03101f] py-20 text-white">
        <Image
          src="/images/services-operations.jpg"
          alt="Offshore vessel operating near a drilling platform"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03101f] via-[#03101f]/70 to-[#03101f]/40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Our services</p>
          <h1 className="mt-3 max-w-2xl font-[var(--font-heading)] text-4xl font-bold sm:text-5xl">
            End-to-end offshore vessel solutions
          </h1>
          <p className="mt-5 max-w-2xl text-slate-300">
            Six specialised service lines, one integrated fleet. We support every phase of the offshore
            energy lifecycle with the right vessel, crew and equipment.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-6">
          {services.map((s, idx) => (
            <div
              key={s.slug}
              id={s.slug}
              className={`grid scroll-mt-24 grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
                idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
                  <ServiceIcon icon={s.icon} className="h-7 w-7" />
                </span>
                <h2 className="mt-5 font-[var(--font-heading)] text-2xl font-bold text-slate-900 sm:text-3xl">
                  {s.name}
                </h2>
                <p className="mt-4 text-slate-600">{s.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {(capabilities[s.slug] ?? []).map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                      {c}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#0a2540] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0f3a63]"
                >
                  Enquire About This Service <ArrowRightIcon />
                </Link>
              </div>
              <div className="flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0a2540] via-[#0f3a63] to-[#125e86] shadow-lg sm:h-80">
                <ServiceIcon icon={s.icon} className="h-24 w-24 text-white/15" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-[#0a2540] to-[#0f3a63] px-8 py-14 text-center text-white shadow-xl">
          <h2 className="font-[var(--font-heading)] text-3xl font-bold sm:text-4xl">
            Not sure which vessel type you need?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Our fleet operations team will assess your project scope and recommend the right vessel
            configuration, anywhere in the world.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3.5 text-sm font-semibold text-[#0a1f38] hover:bg-amber-400"
          >
            Talk to Our Team <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </main>
  );
}
