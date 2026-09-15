"use client";

import { useRouter, useSearchParams } from "next/navigation";

const statuses = ["In Service", "Available for Charter", "Under Charter", "In Drydock"];

export default function FleetFilters({ types }: { types: { type: string; category: string }[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    params.delete("page");
    router.push(`/fleet?${params.toString()}`);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    updateParam("q", String(formData.get("q") ?? ""));
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:grid-cols-2 lg:grid-cols-4">
      <input
        type="text"
        name="q"
        defaultValue={searchParams.get("q") ?? ""}
        placeholder="Search by vessel name or IMO"
        className="rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
      />
      <select
        defaultValue={searchParams.get("type") ?? ""}
        onChange={(e) => updateParam("type", e.target.value)}
        className="rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
      >
        <option value="">All Vessel Types</option>
        {types.map((t) => (
          <option key={t.type} value={t.type}>
            {t.category}
          </option>
        ))}
      </select>
      <select
        defaultValue={searchParams.get("status") ?? ""}
        onChange={(e) => updateParam("status", e.target.value)}
        className="rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
      >
        <option value="">All Statuses</option>
        {statuses.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="rounded-md bg-[#0a2540] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0f3a63]"
      >
        Search Fleet
      </button>
    </form>
  );
}
