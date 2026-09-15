import Link from "next/link";
import Image from "next/image";
import StatsBand from "@/components/StatsBand";
import VesselCard from "@/components/VesselCard";
import ServiceIcon from "@/components/ServiceIcon";
import {
  services,
  newsPosts,
  offices,
  company,
} from "@/lib/site-data";
import {
  ArrowRightIcon,
  CheckIcon,
} from "@/components/Icons";
import {
  vessels,
  vesselCount,
  vesselCategories,
} from "@/lib/vessels";

export default function HomePage() {
  const featuredVessels = vessels.filter(
    (vessel) => vessel.featured
  ).slice(0, 6);

  const displayVessels =
    featuredVessels.length >= 6
      ? featuredVessels
      : vessels
          .slice()
          .sort((a, b) => b.yearBuilt - a.yearBuilt)
          .slice(0, 6);

  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#03101f] text-white">
        <Image
          src="/images/hero-offshore.jpg"
          alt="MT Maritime offshore support vessel underway"
          fill
          priority
          className="object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#03101f] via-[#03101f]/60 to-[#03101f]/30" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
          <p className="inline-block rounded-full bg-cyan-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 ring-1 ring-cyan-400/30">
            {vesselCount}+ Offshore Vessels · 34 Countries
          </p>

          <h1 className="mt-6 max-w-3xl font-[var(--font-heading)] text-[clamp(2.2rem,6vw,4.2rem)] font-bold leading-[1.05]">
            Powering the World&apos;s Offshore Energy Operations
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-200">
            MT Maritime owns and operates one of the largest independent
            offshore support vessel fleets in the world &mdash; anchor
            handling, platform supply, subsea construction and crew transfer,
            delivered with an unwavering safety record.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/fleet"
              className="flex items-center gap-2 rounded-md bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-[#04121f] transition-colors hover:bg-cyan-400"
            >
              Explore Our Fleet <ArrowRightIcon />
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Request a Charter Quote
            </Link>
          </div>

          <div className="mt-16 max-w-4xl rounded-2xl bg-white/5 p-6 backdrop-blur ring-1 ring-white/10">
            <StatsBand />
          </div>
        </div>
      </section>

      {/* About snapshot */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700">
              Who we are
            </p>

            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold text-slate-900 sm:text-4xl">
              Three decades of offshore marine expertise
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Since {company.founded}, {company.name} has grown from a single
              anchor handling tug into a global offshore support vessel
              operator with {vesselCount}+ vessels serving national oil
              companies, supermajors and offshore wind developers across every
              major offshore basin.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "IMCA and OCIMF aligned safety management systems",
                "DP1, DP2 and DP3 capable vessels across the fleet",
                "24/7 global operations and emergency response centre",
                "In-house technical management and newbuild programme",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-800"
            >
              Learn more about MT Maritime <ArrowRightIcon />
            </Link>
          </div>

          <div className="relative h-80 overflow-hidden rounded-2xl shadow-2xl sm:h-[26rem]">
            <Image
              src="/images/about-fleet.jpg"
              alt="MT Maritime fleet in port"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700">
              What we do
            </p>

            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold text-slate-900 sm:text-4xl">
              End-to-end offshore vessel solutions
            </h2>

            <p className="mt-4 text-slate-600">
              From rig moves to subsea construction, our diversified fleet is
              built to support every phase of the offshore energy lifecycle.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.slug}
                id={s.slug}
                className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
                  <ServiceIcon icon={s.icon} />
                </span>

                <h3 className="mt-4 font-[var(--font-heading)] text-lg font-semibold text-slate-900">
                  {s.name}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  {s.short}
                </p>

                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 transition-all group-hover:gap-2.5"
                >
                  Learn more <ArrowRightIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet highlight */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700">
                Our fleet
              </p>

              <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold text-slate-900 sm:text-4xl">
                Featured vessels
              </h2>
            </div>

            <Link
              href="/fleet"
              className="flex items-center gap-2 rounded-md bg-[#0a2540] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0f3a63]"
            >
              View Full Fleet ({vesselCount} vessels) <ArrowRightIcon />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayVessels.map((vessel) => (
              <VesselCard
                key={vessel.id}
                vessel={vessel}
              />
            ))}
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 sm:grid-cols-3 md:grid-cols-5">
            {vesselCategories.map((category) => (
              <div
                key={category.category}
                className="text-center"
              >
                <p className="font-[var(--font-heading)] text-2xl font-bold text-[#0a2540]">
                  {category.count}
                </p>

                <p className="mt-1 text-xs text-slate-600">
                  {category.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="relative bg-[#0a2540] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Global presence
            </p>

            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold sm:text-4xl">
              Operating where offshore energy happens
            </h2>

            <p className="mt-4 text-slate-300">
              With regional offices and crewing hubs across six continents,
              MT Maritime delivers local expertise backed by global standards.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((office) => (
              <div
                key={office.city}
                className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10"
              >
                <p className="font-[var(--font-heading)] text-lg font-semibold text-cyan-300">
                  {office.city}
                </p>

                <p className="mt-2 text-sm text-slate-300">
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700">
                Newsroom
              </p>

              <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold text-slate-900 sm:text-4xl">
                Latest news
              </h2>
            </div>

            <Link
              href="/news"
              className="flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-800"
            >
              View all news <ArrowRightIcon />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {newsPosts.slice(0, 3).map((news) => (
              <Link
                key={news.slug}
                href="/news"
                className="flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-lg"
              >
                <span className="w-fit rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 ring-1 ring-cyan-100">
                  {news.category}
                </span>

                <h3 className="mt-4 font-[var(--font-heading)] text-lg font-semibold text-slate-900">
                  {news.title}
                </h3>

                <p className="mt-2 flex-1 text-sm text-slate-600">
                  {news.excerpt}
                </p>

                <p className="mt-4 text-xs text-slate-400">
                  {new Date(news.date).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-[#0a2540] to-[#0f3a63] px-8 py-14 text-center text-white shadow-xl">
          <h2 className="font-[var(--font-heading)] text-3xl font-bold sm:text-4xl">
            Need offshore support vessels for your project?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Our chartering desk operates around the clock to match the right
            vessel to your operation, anywhere in the world.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-amber-500 px-6 py-3.5 text-sm font-semibold text-[#0a1f38] hover:bg-amber-400"
            >
              Get a Charter Quote
            </Link>

            <a
              href={`mailto:${company.charterEmail}`}
              className="rounded-md border border-white/30 px-6 py-3.5 text-sm font-semibold hover:bg-white/10"
            >
              Email Chartering Desk
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}