import Link from "next/link";
import type { Metadata } from "next";
import VesselCard from "@/components/VesselCard";
import FleetFilters from "@/components/FleetFilters";
import {
  vessels,
  vesselTypes,
} from "@/lib/vessels";

export const metadata: Metadata = {
  title: "Our Fleet | MT Maritime",
  description:
    "Browse MT Maritime's fleet of over 137 offshore support vessels.",
};

const PAGE_SIZE = 24;

type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export default async function FleetPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;

  const q =
    typeof params.q === "string"
      ? params.q.trim().toLowerCase()
      : "";

  const type =
    typeof params.type === "string"
      ? params.type
      : "";

  const status =
    typeof params.status === "string"
      ? params.status
      : "";

  const page = Math.max(
    1,
    Number(params.page) || 1
  );

  let filteredVessels = vessels;

  if (q) {
    filteredVessels = filteredVessels.filter(
      (vessel) =>
        vessel.name.toLowerCase().includes(q) ||
        vessel.imo.toLowerCase().includes(q)
    );
  }

  if (type) {
    filteredVessels = filteredVessels.filter(
      (vessel) => vessel.type === type
    );
  }

  if (status) {
    filteredVessels = filteredVessels.filter(
      (vessel) => vessel.status === status
    );
  }

  filteredVessels = filteredVessels
    .slice()
    .sort((a, b) =>
      a.name.localeCompare(b.name)
    );

  const total = filteredVessels.length;

  const totalPages = Math.max(
    1,
    Math.ceil(total / PAGE_SIZE)
  );

  const currentPage = Math.min(
    page,
    totalPages
  );

  const rows = filteredVessels.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  function pageHref(p: number) {
    const search = new URLSearchParams();

    if (q) search.set("q", q);
    if (type) search.set("type", type);
    if (status) search.set("status", status);

    search.set("page", String(p));

    return `/fleet?${search.toString()}`;
  }

  return (
    <main>
      <section className="bg-[#03101f] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Our Fleet
          </p>

          <h1 className="mt-3 font-[var(--font-heading)] text-4xl font-bold sm:text-5xl">
            137 Offshore Support Vessels
          </h1>

          <p className="mt-4 max-w-2xl text-slate-300">
            Search and filter our diversified fleet of AHTS, PSV, MPSV,
            ROV support, crew transfer, standby safety, cable-lay, heavy
            lift and harbour tug vessels.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <FleetFilters types={vesselTypes} />

        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-slate-600">
            Showing{" "}
            <span className="font-semibold text-slate-900">
              {rows.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-900">
              {total}
            </span>{" "}
            vessels
          </p>
        </div>

        {rows.length === 0 ? (
          <div className="mt-10 rounded-xl border border-dashed border-slate-300 p-16 text-center text-slate-500">
            No vessels match your search. Try adjusting your filters.
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {rows.map((vessel) => (
              <VesselCard
                key={vessel.id}
                vessel={vessel}
              />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {Array.from(
              { length: totalPages },
              (_, i) => i + 1
            ).map((p) => (
              <Link
                key={p}
                href={pageHref(p)}
                className={`flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium ${
                  p === currentPage
                    ? "bg-[#0a2540] text-white"
                    : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100"
                }`}
              >
                {p}
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}