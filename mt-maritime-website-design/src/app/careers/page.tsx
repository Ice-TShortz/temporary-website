import Image from "next/image";
import type { Metadata } from "next";
import { jobOpenings, company } from "@/lib/site-data";
import JobApplicationForm from "@/components/JobApplicationForm";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Careers | MT Maritime",
  description: "Explore sea-going and onshore careers with MT Maritime, a global offshore support vessel operator.",
};

const perks = [
  "Competitive rotational contracts and onshore salaries",
  "Structured cadet-to-captain career progression",
  "Comprehensive medical and life insurance",
  "Ongoing STCW and DP certification support",
  "Global mobility across 34 countries of operation",
  "Modern, well-maintained fleet with strong safety record",
];

export default function CareersPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#03101f] py-20 text-white">
        <Image src="/images/careers-crew.jpg" alt="MT Maritime crew on deck" fill className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03101f] via-[#03101f]/70 to-[#03101f]/40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Careers</p>
          <h1 className="mt-3 max-w-2xl font-[var(--font-heading)] text-4xl font-bold sm:text-5xl">
            Build your career at sea and ashore
          </h1>
          <p className="mt-5 max-w-2xl text-slate-300">
            From deck cadets to fleet operations managers, MT Maritime offers career paths across our
            137-vessel fleet and six regional offices.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p) => (
              <div key={p} className="flex items-start gap-3 rounded-xl border border-slate-200 p-5">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                <p className="text-sm text-slate-700">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-[var(--font-heading)] text-3xl font-bold text-slate-900">Current Openings</h2>
          <div className="mt-8 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-xs uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-5 py-3">Position</th>
                  <th className="px-5 py-3">Location</th>
                  <th className="px-5 py-3">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {jobOpenings.map((j) => (
                  <tr key={j.title} className="hover:bg-slate-50">
                    <td className="px-5 py-3.5 font-medium text-slate-900">{j.title}</td>
                    <td className="px-5 py-3.5 text-slate-600">{j.location}</td>
                    <td className="px-5 py-3.5">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${j.type === "Sea-going" ? "bg-cyan-100 text-cyan-800" : "bg-amber-100 text-amber-800"}`}>
                        {j.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-[var(--font-heading)] text-3xl font-bold text-slate-900">Apply Now</h2>
          <p className="mt-3 text-slate-600">
            Complete the form below and our crewing and HR teams will review your application. You can
            also email your CV directly to{" "}
            <a href={`mailto:${company.careersEmail}`} className="text-cyan-700 hover:text-cyan-800">
              {company.careersEmail}
            </a>
            .
          </p>
          <div className="mt-8">
            <JobApplicationForm />
          </div>
        </div>
      </section>
    </main>
  );
}
