export function statusStyles(status: string) {
  switch (status) {
    case "In Service":
      return "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-600/20";
    case "Available for Charter":
      return "bg-cyan-100 text-cyan-800 ring-1 ring-cyan-600/20";
    case "Under Charter":
      return "bg-amber-100 text-amber-800 ring-1 ring-amber-600/20";
    case "In Drydock":
      return "bg-slate-200 text-slate-700 ring-1 ring-slate-500/20";
    default:
      return "bg-slate-200 text-slate-700 ring-1 ring-slate-500/20";
  }
}

export function formatNumber(n: number) {
  return new Intl.NumberFormat("en-US").format(n);
}

export const vesselTypeLabels: Record<string, string> = {
  AHTS: "Anchor Handling Tug Supply",
  PSV: "Platform Supply Vessel",
  MPSV: "Multi-Purpose Support Vessel",
  ROVSV: "ROV Support Vessel",
  OAV: "Offshore Accommodation Vessel",
  CTV: "Crew Transfer Vessel",
  SSV: "Standby Safety Vessel",
  CLSV: "Cable Lay & Survey Vessel",
  HLCV: "Heavy Lift & Construction Vessel",
  TUG: "Harbour & Terminal Tug",
};
