"use client";

import { useActionState } from "react";
import { subscribeNewsletter, type ActionState } from "@/lib/actions";

const initialState: ActionState = { status: "idle" };

export default function NewsletterForm() {
  const [state, formAction, pending] = useActionState(subscribeNewsletter, initialState);

  return (
    <form action={formAction} className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex overflow-hidden rounded-md ring-1 ring-white/15 focus-within:ring-cyan-400">
        <input
          type="email"
          name="email"
          required
          placeholder="Your email address"
          className="w-full bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none"
        />
        <button
          type="submit"
          disabled={pending}
          className="whitespace-nowrap bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-[#04121f] transition-colors hover:bg-cyan-400 disabled:opacity-60"
        >
          {pending ? "..." : "Subscribe"}
        </button>
      </div>
      {state.status !== "idle" && (
        <p className={`text-xs ${state.status === "success" ? "text-cyan-400" : "text-red-400"}`}>
          {state.message}
        </p>
      )}
    </form>
  );
}
