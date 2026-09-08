import { Reveal } from "@/components/motion/reveal";

const AUTHORITIES = [
  { short: "AFER", full: "Autoritatea Feroviară Română" },
  { short: "IGPR", full: "Inspectoratul General al Poliției Române" },
  { short: "IGSU", full: "Inspectoratul General pentru Situații de Urgență" },
  { short: "ANRE", full: "Autoritatea Națională de Reglementare în Energie" },
  { short: "AGFR", full: "Asociația Generală a Frigotehniștilor din România" },
  { short: "APM / ANPM", full: "Agenția pentru Protecția Mediului" },
  { short: "RENAR", full: "Asociația de Acreditare din România" },
];

export function AuthoritiesBar() {
  return (
    <section className="border-y border-border bg-surface py-10">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Depunem dosare și susținem evaluări la
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {AUTHORITIES.map((a) => (
              <div
                key={a.short}
                className="group flex flex-col items-center text-center"
                title={a.full}
              >
                <span className="font-display text-lg font-extrabold tracking-tight text-foreground/70 transition-colors group-hover:text-foreground">
                  {a.short}
                </span>
                <span className="mt-0.5 hidden max-w-[12rem] text-[11px] leading-tight text-muted/80 sm:block">
                  {a.full}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
