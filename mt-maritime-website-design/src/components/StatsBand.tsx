import { stats } from "@/lib/site-data";

export default function StatsBand() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="text-center md:text-left">
          <p className="font-[var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">{s.value}</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-slate-300 sm:text-sm">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
