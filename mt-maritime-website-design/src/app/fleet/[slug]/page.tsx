import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getVesselBySlug,
  getRelatedVessels,
  vessels,
} from "@/lib/vessels";
import {
  statusStyles,
  formatNumber,
  vesselTypeLabels,
} from "@/lib/ui";
import VesselCard from "@/components/VesselCard";
import { ArrowRightIcon } from "@/components/Icons";

type Params = Promise<{
  slug: string;
}>;

export function generateStaticParams() {
  return vessels.map((vessel) => ({
    slug: vessel.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const vessel = getVesselBySlug(slug);

  if (!vessel) {
    return {
      title: "Vessel Not Found | MT Maritime",
    };
  }

  return {
    title: `${vessel.name} | MT Maritime Fleet`,
    description: vessel.description,
  };
}

export default async function VesselDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const vessel = getVesselBySlug(slug);

  if (!vessel) {
    notFound();
  }

  const related = getRelatedVessels(vessel, 3);

  const specs = [
    {
      label: "IMO Number",
      value: vessel.imo,
    },
    {
      label: "Vessel Type",
      value: `${vessel.type} — ${
        vesselTypeLabels[vessel.type] ??
        vessel.category
      }`,
    },
    {
      label: "Year Built",
      value: String(vessel.yearBuilt),
    },
    {
      label: "Flag State",
      value: vessel.flag,
    },
    {
      label: "Home Port",
      value: vessel.homePort,
    },
    {
      label: "Classification",
      value: vessel.classification,
    },
    {
      label: "Length Overall",
      value: `${vessel.lengthM} m`,
    },
    {
      label: "Beam",
      value: `${vessel.beamM} m`,
    },
    {
      label: "Deadweight",
      value: `${formatNumber(
        vessel.deadweightT
      )} t`,
    },
    ...(vessel.bollardPullT
      ? [
          {
            label: "Bollard Pull",
            value: `${vessel.bollardPullT} t`,
          },
        ]
      : []),
    {
      label: "Main Engine Power",
      value: `${formatNumber(
        vessel.enginePowerBhp
      )} bhp`,
    },
    ...(vessel.deckAreaSqm
      ? [
          {
            label: "Clear Deck Area",
            value: `${formatNumber(
              vessel.deckAreaSqm
            )} m²`,
          },
        ]
      : []),
    {
      label: "Crew / POB Capacity",
      value: `${vessel.crewCapacity}`,
    },
  ];

  return (
    <main>
      <section className="relative overflow-hidden bg-[#03101f] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/fleet"
            className="text-sm text-cyan-300 hover:text-cyan-200"
          >
            ← Back to Fleet
          </Link>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 ring-1 ring-cyan-400/30">
              {vessel.type}
            </span>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles(
                vessel.status
              )}`}
            >
              {vessel.status}
            </span>
          </div>

          <h1 className="mt-4 font-[var(--font-heading)] text-4xl font-bold sm:text-5xl">
            {vessel.name}
          </h1>

          <p className="mt-3 max-w-2xl text-slate-300">
            {vessel.category}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-[var(--font-heading)] text-2xl font-bold text-slate-900">
            Overview
          </h2>

          <p className="mt-4 leading-relaxed text-slate-600">
            {vessel.description}
          </p>

          <h2 className="mt-10 font-[var(--font-heading)] text-2xl font-bold text-slate-900">
            Technical Specifications
          </h2>

          <div className="mt-5 overflow-hidden rounded-xl ring-1 ring-slate-200">
            <table className="w-full text-sm">
              <tbody>
                {specs.map((spec, index) => (
                  <tr
                    key={spec.label}
                    className={
                      index % 2 === 0
                        ? "bg-white"
                        : "bg-slate-50"
                    }
                  >
                    <td className="w-1/2 px-5 py-3 font-medium text-slate-500">
                      {spec.label}
                    </td>

                    <td className="px-5 py-3 font-semibold text-slate-900">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl bg-gradient-to-br from-[#0a2540] to-[#0f3a63] p-6 text-white shadow-lg">
            <h3 className="font-[var(--font-heading)] text-lg font-semibold">
              Interested in this vessel?
            </h3>

            <p className="mt-2 text-sm text-slate-200">
              Contact our chartering desk for availability, day rates and
              mobilisation timelines.
            </p>

            <Link
              href={`/contact?subject=${encodeURIComponent(
                `Charter enquiry: ${vessel.name}`
              )}`}
              className="mt-5 flex items-center justify-center gap-2 rounded-md bg-amber-500 px-4 py-3 text-sm font-semibold text-[#0a1f38] hover:bg-amber-400"
            >
              Request a Quote <ArrowRightIcon />
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-[var(--font-heading)] text-lg font-semibold text-slate-900">
              Quick Facts
            </h3>

            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                Flag:{" "}
                <span className="font-semibold text-slate-900">
                  {vessel.flag}
                </span>
              </li>

              <li>
                Class:{" "}
                <span className="font-semibold text-slate-900">
                  {vessel.classification}
                </span>
              </li>

              <li>
                Home Port:{" "}
                <span className="font-semibold text-slate-900">
                  {vessel.homePort}
                </span>
              </li>

              <li>
                Built:{" "}
                <span className="font-semibold text-slate-900">
                  {vessel.yearBuilt}
                </span>
              </li>
            </ul>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-slate-900">
              Similar Vessels in Our Fleet
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((vessel) => (
                <VesselCard
                  key={vessel.id}
                  vessel={vessel}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
