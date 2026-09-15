import type { Metadata } from "next";
import { company, offices } from "@/lib/site-data";
import ContactForm from "@/components/ContactForm";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us | MT Maritime",
  description: "Get in touch with MT Maritime for chartering enquiries, careers or general information.",
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function ContactPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const subject = typeof params.subject === "string" ? params.subject : "";

  return (
    <main>
      <section className="bg-[#03101f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Contact</p>
          <h1 className="mt-3 max-w-2xl font-[var(--font-heading)] text-4xl font-bold sm:text-5xl">
            Get in touch with our team
          </h1>
          <p className="mt-5 max-w-2xl text-slate-300">
            Whether you need a charter quote, technical information or want to join our crew, our team
            is ready to help.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-50 text-cyan-700">
              <PhoneIcon />
            </span>
            <p className="mt-4 text-sm font-semibold text-slate-900">General Enquiries</p>
            <a href={`tel:${company.phone}`} className="text-sm text-cyan-700 hover:text-cyan-800">{company.phone}</a>
            <p className="mt-2 text-xs text-amber-600 font-medium">24/7 Ops Center: {company.emergencyPhone}</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-50 text-cyan-700">
              <MailIcon />
            </span>
            <p className="mt-4 text-sm font-semibold text-slate-900">Email</p>
            <a href={`mailto:${company.email}`} className="block text-sm text-cyan-700 hover:text-cyan-800">{company.email}</a>
            <a href={`mailto:${company.charterEmail}`} className="block text-sm text-cyan-700 hover:text-cyan-800">{company.charterEmail}</a>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-50 text-cyan-700">
              <MapPinIcon />
            </span>
            <p className="mt-4 text-sm font-semibold text-slate-900">Global Headquarters</p>
            <p className="text-sm text-slate-600">{company.address}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-slate-900">Send us a message</h2>
            <p className="mt-2 text-sm text-slate-600">
              Fill out the form and a member of our team will respond within one business day.
            </p>
            <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <ContactForm defaultSubject={subject} />
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-slate-900">Find our HQ</h2>
            <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-slate-200">
              <iframe
                title="MT Maritime Global HQ Map"
                src={offices[0]!.map}
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-[var(--font-heading)] text-3xl font-bold text-slate-900">Our Global Offices</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((o) => (
              <div key={o.city} className="rounded-xl border border-slate-200 p-6">
                <p className="font-[var(--font-heading)] text-lg font-semibold text-slate-900">{o.city}</p>
                <p className="mt-2 flex items-start gap-2 text-sm text-slate-600">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" /> {o.address}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                  <PhoneIcon className="h-4 w-4 shrink-0 text-cyan-600" /> {o.phone}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                  <MailIcon className="h-4 w-4 shrink-0 text-cyan-600" /> {o.email}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
