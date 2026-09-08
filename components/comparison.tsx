"use client";

import { Check, X } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

const ROWS: { label: string; traditional: string; us: string }[] = [
  {
    label: "Identificarea cerințelor autorității",
    traditional: "Interpretezi singur regulamentele AFER, ANRE sau IGPR",
    us: "Listă completă de cerințe în 24–72h, după analiza gratuită",
  },
  {
    label: "Pregătirea dosarului",
    traditional: "Coordonezi separat proiectanți, personal atestat și dotări",
    us: "Un singur punct de contact, specialiști atestați coordonați de noi",
  },
  {
    label: "Termene",
    traditional: "Depășiri frecvente, fără vizibilitate asupra dosarului",
    us: "Calendar cu termene legale monitorizate zilnic",
  },
  {
    label: "Solicitări de completare",
    traditional: "Reiei procesul și pierzi rândul la evaluare",
    us: "Răspuns pregătit de echipă, în termenul legal",
  },
  {
    label: "Risc de respingere",
    traditional: "Ridicat — dosare incomplete sau neconforme",
    us: "Minim — verificare de conformitate înainte de depunere",
  },
  {
    label: "După emitere",
    traditional: "Uiți de termenele de reautorizare și raportare",
    us: "Îți urmărim valabilitatea și raportările periodice",
  },
];

export function Comparison() {
  return (
    <section id="despre" className="scroll-mt-24 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="De ce Autorizații.ro?"
          title="Diferența dintre a spera și a ști că dosarul trece"
          description="Aceeași autorizație, obținută fără drumuri pierdute, dosare respinse și termene ratate."
        />

        <Reveal>
          <div className="mt-14 overflow-hidden rounded-3xl border border-border shadow-soft">
            {/* Header row */}
            <div className="grid grid-cols-1 sm:grid-cols-[1.1fr_1fr_1fr]">
              <div className="hidden bg-surface p-5 sm:block" />
              <div className="bg-surface p-5 text-center">
                <span className="font-display text-sm font-bold text-muted">
                  Fără asistență
                </span>
                <p className="mt-1 text-xs text-muted/80">
                  Birocrație · întârzieri · risc de respingere
                </p>
              </div>
              <div className="section-invert p-5 text-center">
                <span className="font-display text-sm font-bold text-white">
                  Cu Autorizații.ro
                </span>
                <p className="mt-1 text-xs text-white/70">
                  Proces digitalizat · transparență · conformitate
                </p>
              </div>
            </div>

            {/* Rows */}
            {ROWS.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 border-t border-border sm:grid-cols-[1.1fr_1fr_1fr]"
              >
                <div className="bg-card p-5">
                  <span className="font-semibold text-foreground">
                    {row.label}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 bg-card p-5 text-sm text-muted">
                  <X
                    className="mt-0.5 h-4 w-4 shrink-0 text-muted/50"
                    aria-hidden="true"
                  />
                  <span>{row.traditional}</span>
                </div>
                <div className="flex items-start gap-2.5 bg-primary/[0.07] p-5 text-sm text-foreground">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="font-medium">{row.us}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-center text-sm text-muted">
            Lucrăm pe bază de obiective clare și te ținem la curent la fiecare
            etapă — fără costuri ascunse.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
