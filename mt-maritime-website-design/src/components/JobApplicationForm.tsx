"use client";

import { useActionState } from "react";
import { submitJobApplication, type ActionState } from "@/lib/actions";
import { jobOpenings } from "@/lib/site-data";
import { CheckIcon } from "./Icons";

const initialState: ActionState = { status: "idle" };

export default function JobApplicationForm({ defaultPosition }: { defaultPosition?: string }) {
  const [state, formAction, pending] = useActionState(submitJobApplication, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl bg-emerald-50 p-10 text-center ring-1 ring-emerald-200">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">
          <CheckIcon />
        </span>
        <p className="font-semibold text-emerald-900">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label className="mb-1 block text-sm font-medium text-slate-700">Full Name *</label>
        <input name="name" required className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500" />
      </div>
      <div className="sm:col-span-1">
        <label className="mb-1 block text-sm font-medium text-slate-700">Email *</label>
        <input type="email" name="email" required className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500" />
      </div>
      <div className="sm:col-span-1">
        <label className="mb-1 block text-sm font-medium text-slate-700">Phone</label>
        <input name="phone" className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500" />
      </div>
      <div className="sm:col-span-1">
        <label className="mb-1 block text-sm font-medium text-slate-700">Position of Interest *</label>
        <select name="position" required defaultValue={defaultPosition ?? ""} className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500">
          <option value="" disabled>Select a position</option>
          {jobOpenings.map((j) => (
            <option key={j.title} value={j.title}>{j.title} — {j.location}</option>
          ))}
          <option value="General Application">General Application</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="mb-1 block text-sm font-medium text-slate-700">Cover Message</label>
        <textarea name="message" rows={4} className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500" placeholder="Tell us about your experience and certifications..." />
      </div>
      {state.status === "error" && (
        <p className="sm:col-span-2 text-sm text-red-600">{state.message}</p>
      )}
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-[#0a1f38] transition-colors hover:bg-amber-400 disabled:opacity-60"
        >
          {pending ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </form>
  );
}
