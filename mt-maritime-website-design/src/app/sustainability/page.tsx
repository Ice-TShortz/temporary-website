import type { Metadata } from "next";
import { CheckIcon, ShieldIcon, AnchorIcon, UsersIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Sustainability | MT Maritime",
  description: "MT Maritime's approach to environmental responsibility, safety and social impact across our offshore fleet.",
};

const pillars = [
  {
    icon: AnchorIcon,
    title: "Decarbonisation",
    description:
      "We are investing in hybrid battery-diesel propulsion, shore power connectivity and route optimisation software to reduce fleet-wide emissions by 30% by 2032.",
    points: [
      "First hybrid AHTS newbuild series ordered in 2025",
      "Silicon-carbide power electronics on 18 vessels",
      "Biofuel trials across the North Sea fleet",
    ],
  },
  {
    icon: ShieldIcon,
    title: "Safety Culture",
    description:
      "Safety is our first value. Our HSEQ management system is certified to ISM, ISO 45001 and ISO 14001, and every crew member completes rigorous safety training.",
    points: [
      "10 million+ hours without a lost-time incident",
      "Behaviour-based safety observation programme fleet-wide",
      "Zero tolerance policy on safety shortcuts",
    ],
  },
  {
    icon: UsersIcon,
    title: "People & Communities",
    description:
      "We invest in seafarer welfare, training academies and local community programmes in every region where we operate.",
    points: [
      "Cadet training academy in Mumbai graduating 200+ annually",
      "Mental health and wellbeing support at sea",
      "Local crewing and supplier programmes in 34 countries",
    ],
  },
];

const esgStats = [
  { value: "-22%", label: "CO₂ intensity reduction since 2019" },
  { value: "18", label: "Hybrid-battery vessels in the fleet" },
  { value: "99.4%", label: "Waste responsibly recycled or reused" },
  { value: "6,200+", label: "Seafarers trained annually" },
];

export default function SustainabilityPage() {
  return (
    <main>
      <section className="bg-[#03101f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Sustainability</p>
          <h1 className="mt-3 max-w-3xl font-[var(--font-heading)] text-4xl font-bold sm:text-5xl">
            Charting a cleaner course for offshore operations
          </h1>
          <p className="mt-5 max-w-2xl text-slate-300">
            We are committed to reducing the environmental footprint of our fleet while protecting the
            safety and wellbeing of our people and the communities where we operate.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200 md:grid-cols-4">
            {esgStats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-[var(--font-heading)] text-3xl font-bold text-[#0a2540]">{s.value}</p>
                <p className="mt-2 text-xs text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl space-y-10 px-6">
          {pillars.map((p) => (
            <div key={p.title} className="grid grid-cols-1 gap-8 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:grid-cols-3">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
                  <p.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 font-[var(--font-heading)] text-2xl font-bold text-slate-900">{p.title}</h2>
              </div>
              <div className="lg:col-span-2">
                <p className="text-slate-600">{p.description}</p>
                <ul className="mt-4 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0a2540] py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-[var(--font-heading)] text-3xl font-bold">
            Our commitment to the UN Sustainable Development Goals
          </h2>
          <p className="mt-4 text-slate-300">
            MT Maritime aligns its ESG strategy with SDG 8 (Decent Work), SDG 13 (Climate Action) and
            SDG 14 (Life Below Water), reporting progress annually in our public ESG Report.
          </p>
        </div>
      </section>
    </main>
  );
}
