import Image from "next/image";
import type { Metadata } from "next";
import { company, leadership, values } from "@/lib/site-data";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us | MT Maritime",
  description: "Learn about MT Maritime's history, leadership, fleet and safety culture.",
};

const milestones = [
  { year: "1994", text: "MT Maritime founded in Singapore with a single anchor handling tug." },
  { year: "2003", text: "Fleet grows to 25 vessels; first long-term charter with a national oil company." },
  { year: "2011", text: "Opens Aberdeen and Houston offices to support North Sea and Gulf of Mexico clients." },
  { year: "2016", text: "Launches in-house newbuild programme with DP2 platform supply vessels." },
  { year: "2020", text: "Fleet surpasses 100 vessels; ISO 14001 environmental certification achieved." },
  { year: "2025", text: "Fleet reaches 137 vessels with dedicated offshore wind CTV division." },
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[#03101f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">About MT Maritime</p>
          <h1 className="mt-3 max-w-3xl font-[var(--font-heading)] text-4xl font-bold sm:text-5xl">
            A global offshore support vessel operator built on trust
          </h1>
          <p className="mt-5 max-w-2xl text-slate-300">
            For more than three decades, {company.name} has delivered safe, reliable marine support
            to the offshore energy industry &mdash; from anchor handling and platform supply to subsea
            construction and crew transfer.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl sm:h-[26rem]">
            <Image src="/images/about-fleet.jpg" alt="MT Maritime vessels docked at port" fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700">Our story</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold text-slate-900">
              From one tug to a global fleet of 137 vessels
            </h2>
            <p className="mt-5 text-slate-600">
              {company.name} was founded in {company.founded} in Singapore to serve the growing offshore
              oil and gas industry in Southeast Asia. Today, we own and manage one of the largest
              independent offshore support vessel fleets in the world, with regional hubs in Aberdeen,
              Dubai, Houston, Rio de Janeiro and Mumbai.
            </p>
            <p className="mt-4 text-slate-600">
              Our vessels support every phase of the offshore energy lifecycle &mdash; exploration,
              development, production and decommissioning &mdash; for national oil companies, supermajors,
              drilling contractors and offshore wind developers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700">Milestones</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold text-slate-900">Our journey</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {milestones.map((m) => (
              <div key={m.year} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <p className="font-[var(--font-heading)] text-2xl font-bold text-cyan-700">{m.year}</p>
                <p className="mt-2 text-sm text-slate-600">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700">Our values</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold text-slate-900">
              What guides every operation
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-slate-200 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50 text-cyan-700">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-[var(--font-heading)] text-lg font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a2540] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Leadership</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold">Meet our executive team</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((l) => (
              <div key={l.name} className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/20 font-[var(--font-heading)] text-lg font-bold text-cyan-300 ring-1 ring-cyan-400/30">
                  {l.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <h3 className="mt-4 font-[var(--font-heading)] text-lg font-semibold">{l.name}</h3>
                <p className="text-sm text-cyan-300">{l.role}</p>
                <p className="mt-2 text-sm text-slate-300">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
