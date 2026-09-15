import Link from "next/link";
import { company, offices, services, socialLinks } from "@/lib/site-data";
import { MailIcon, MapPinIcon, PhoneIcon, ShipWheelIcon, LinkedInIcon, XIcon, YoutubeIcon, InstagramIcon } from "./Icons";
import NewsletterForm from "./NewsletterForm";

const socialIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  LinkedIn: LinkedInIcon,
  X: XIcon,
  YouTube: YoutubeIcon,
  Instagram: InstagramIcon,
};

export default function Footer() {
  return (
    <footer className="bg-[#03101f] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400 ring-1 ring-cyan-400/40">
                <ShipWheelIcon className="h-6 w-6" />
              </span>
              <span className="font-[var(--font-heading)] text-lg font-bold tracking-wide">MT MARITIME</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              MT Maritime owns and operates a fleet of over 137 offshore support vessels, delivering
              anchor handling, platform supply, subsea construction and crew transfer services to
              energy operators across 34 countries.
            </p>
            <p className="mt-5 text-sm font-semibold text-white">Subscribe to our newsletter</p>
            <p className="mb-3 text-xs text-slate-400">Fleet updates, chartering news and press releases.</p>
            <NewsletterForm />
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = socialIcon[s.name];
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-cyan-500 hover:text-[#04121f]"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-cyan-400">About Us</Link></li>
              <li><Link href="/fleet" className="hover:text-cyan-400">Our Fleet</Link></li>
              <li><Link href="/sustainability" className="hover:text-cyan-400">Sustainability</Link></li>
              <li><Link href="/news" className="hover:text-cyan-400">News &amp; Media</Link></li>
              <li><Link href="/careers" className="hover:text-cyan-400">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="hover:text-cyan-400">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">Global HQ</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                <span>{offices[0]!.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 shrink-0 text-cyan-400" />
                <a href={`tel:${company.phone}`} className="hover:text-cyan-400">{company.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 shrink-0 text-cyan-400" />
                <a href={`mailto:${company.email}`} className="hover:text-cyan-400">{company.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/contact" className="hover:text-cyan-400">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-cyan-400">Terms of Service</Link>
            <Link href="/sustainability" className="hover:text-cyan-400">ESG Report</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
