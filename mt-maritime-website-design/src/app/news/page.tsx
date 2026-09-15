import type { Metadata } from "next";
import { newsPosts, company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "News & Media | MT Maritime",
  description: "Press releases and company news from MT Maritime.",
};

export default function NewsPage() {
  return (
    <main>
      <section className="bg-[#03101f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Newsroom</p>
          <h1 className="mt-3 font-[var(--font-heading)] text-4xl font-bold sm:text-5xl">
            News &amp; Media
          </h1>
          <p className="mt-5 max-w-2xl text-slate-300">
            The latest press releases, fleet updates and company announcements from MT Maritime.
          </p>
          <p className="mt-6 text-sm text-slate-400">
            Media enquiries:{" "}
            <a href={`mailto:${company.pressEmail}`} className="text-cyan-300 hover:text-cyan-200">
              {company.pressEmail}
            </a>
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl divide-y divide-slate-200 px-6">
          {newsPosts.map((n) => (
            <article key={n.slug} className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-[140px_1fr]">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {new Date(n.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                </p>
                <span className="mt-2 inline-block rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 ring-1 ring-cyan-100">
                  {n.category}
                </span>
              </div>
              <div>
                <h2 className="font-[var(--font-heading)] text-xl font-semibold text-slate-900">{n.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{n.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
