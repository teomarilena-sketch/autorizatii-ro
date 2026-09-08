import { Mail, MapPin, Phone } from "lucide-react";
import { BrandMark, Wordmark } from "@/components/brand-mark";
import { site } from "@/lib/site";

const COLUMNS = [
  {
    title: "Servicii",
    links: [
      ["Autorizație AFER (feroviar)", "#servicii"],
      ["Licență IGPR (alarme)", "#servicii"],
      ["Autorizație ISU (incendiu)", "#servicii"],
      ["Atestat ANRE (energie electrică)", "#servicii"],
      ["Autorizație ANRE (gaze naturale)", "#servicii"],
      ["Certificare AGFR (gaze fluorurate)", "#servicii"],
      ["Certificări ISO", "#servicii"],
    ],
  },
  {
    title: "Companie",
    links: [
      ["Despre noi", "#despre"],
      ["Procesul nostru", "#proces"],
      ["Expertiză", "#expertiza"],
      ["Contact", "#contact"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Termeni și condiții", "#"],
      ["Politica de confidențialitate", "#"],
      ["Politica de cookie-uri", "#"],
      ["GDPR", "#"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="section-invert border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <BrandMark />
              <span className="font-display text-lg font-extrabold text-white">
                Autorizații<span className="text-primary">.ro</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Platformă digitală de consultanță pentru obținerea avizelor și
              autorizațiilor tehnice și juridice în România.
            </p>

            <div className="mt-6 space-y-2 text-sm text-white/70">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                {site.email}
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
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {label}
                    </a>
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
