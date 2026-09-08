import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { site } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { LEGAL_LINKS } from "@/lib/legal";

const COLUMNS = [
  {
    title: "Servicii",
    links: SERVICES.map((s) => [s.cardTitle, `/servicii/${s.slug}`] as const),
  },
  {
    title: "Companie",
    links: [
      ["Despre noi", "/despre"],
      ["Procesul nostru", "/proces"],
      ["Blog", "/blog"],
      ["Contact", "/contact"],
    ] as const,
  },
  {
    title: "Legal",
    links: LEGAL_LINKS.map((l) => [l.label, l.href] as const),
  },
];

export function SiteFooter() {
  return (
    <footer className="section-invert border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <BrandMark />
              <span className="font-display text-lg font-extrabold text-white">
                Autorizații<span className="text-primary">.ro</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Consultanță pentru obținerea autorizațiilor și licențelor în
              domenii reglementate din România.
            </p>

            <div className="mt-6 space-y-2 text-sm text-white/70">
              <a
                href={site.emailHref}
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                {site.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                {site.address}
              </span>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white/50">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Toate drepturile rezervate.
          </p>
          <p>
            Consultanță în licențiere și autorizare pentru firme din domenii
            reglementate.
          </p>
        </div>
      </div>
    </footer>
  );
}
