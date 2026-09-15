import Link from "next/link";
import { statusStyles, formatNumber } from "@/lib/ui";

export type VesselCardData = {
  slug: string;
  name: string;
  type: string;
  category: string;
  yearBuilt: number;
  flag: string;
  status: string;
  lengthM: string;
  deadweightT: number;
  bollardPullT: number | null;
};

export default function VesselCard({ vessel }: { vessel: VesselCardData }) {
  return (
    <Link
      href={`/fleet/${vessel.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl hover:ring-cyan-300"
    >
      <div className="relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a2540] via-[#0f3a63] to-[#125e86]">
        <span className="text-4xl font-black tracking-widest text-white/10">{vessel.type}</span>
        <span className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyles(vessel.status)}`}>
          {vessel.status}
        </span>
        <span className="absolute left-3 top-3 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-cyan-300 ring-1 ring-white/20">
          {vessel.type}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-[var(--font-heading)] text-lg font-semibold text-slate-900 group-hover:text-cyan-700">
            {vessel.name}
          </h3>
          <p className="text-xs text-slate-500">{vessel.category}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
          <div><span className="text-slate-400">Built</span><br />{vessel.yearBuilt}</div>
          <div><span className="text-slate-400">Flag</span><br />{vessel.flag}</div>
          <div><span className="text-slate-400">Length</span><br />{vessel.lengthM} m</div>
          <div>
            <span className="text-slate-400">{vessel.bollardPullT ? "Bollard Pull" : "Deadweight"}</span><br />
            {vessel.bollardPullT ? `${vessel.bollardPullT} t` : `${formatNumber(vessel.deadweightT)} t`}
          </div>
        </div>
      </div>
    </Link>
  );
}
