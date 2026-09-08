"use client";

import {
  Factory,
  Fingerprint,
  HardDrive,
  LineChart,
  ShieldCheck,
  Snowflake,
  TrainFront,
  UserRound,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealStagger } from "@/components/motion/reveal";

/** Sectoare de clienți, aliniate la domeniile de autorizare acoperite. */
const SECTORS = [
  {
    icon: TrainFront,
    title: "Transport feroviar & metrou",
    desc: "Producători și prestatori de servicii pentru CFR, metrou și STB care au nevoie de autorizare AFER pentru produse și servicii feroviare critice.",
  },
  {
    icon: Zap,
    title: "Energie & instalații",
    desc: "Firme de proiectare și execuție instalații electrice și de gaze naturale care obțin atestate și autorizații ANRE.",
  },
  {
    icon: ShieldCheck,
    title: "Securitate & sisteme de alarmare",
    desc: "Societăți care proiectează și instalează sisteme antiefracție și au nevoie de licență de funcționare IGPR și personal atestat.",
  },
  {
    icon: Factory,
    title: "Industrie & producție",
    desc: "Unități industriale și logistice cu obligații de securitate la incendiu (ISU) și sisteme de management certificate ISO.",
  },
  {
    icon: Snowflake,
    title: "Frig, climatizare & HVAC",
    desc: "Firme care instalează și întrețin echipamente cu gaze fluorurate și au nevoie de certificare AGFR pentru firmă și personal.",
  },
];

const MODEL = [
  {
    icon: HardDrive,
    title: "Dosar digitalizat",
    desc: "Toate documentele într-un singur loc, cu stadiul fiecărui dosar vizibil în timp real.",
  },
  {
    icon: Fingerprint,
    title: "Verificare de conformitate pre-depunere",
    desc: "Fiecare dosar trece printr-un control intern înainte să ajungă la autoritate.",
  },
  {
    icon: LineChart,
    title: "Estimări bazate pe date",
    desc: "Termene calculate din istoricul real al fiecărei autorități, nu din promisiuni.",
  },
  {
    icon: UserRound,
    title: "Un singur punct de contact",
    desc: "Un responsabil de proiect dedicat coordonează toți specialiștii implicați.",
  },
];

export function Expertise() {
  return (
    <section
      id="expertiza"
      className="section-invert scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Expertiză juridică și tehnică"
          title={
            <span className="text-white">
              Cunoaștem cerințele legislative ale fiecărei autorități
            </span>
          }
          description={
            <span className="text-white/70">
              Echipa are experiența necesară pentru a naviga eficient cerințele
              AFER, ANRE, IGPR, IGSU și AGFR, alături de proiectanți și
              verificatori atestați pentru fiecare specialitate.
            </span>
          }
        />

        <RevealStagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((d) => (
            <div
              key={d.title}
              className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.08]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <d.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-white">
                {d.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {d.desc}
              </p>
            </div>
          ))}
        </RevealStagger>

        <Reveal delay={0.05}>
          <div className="mt-6 grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
            {MODEL.map((m) => (
              <div key={m.title}>
                <m.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h4 className="mt-3 font-display text-sm font-bold text-white">
                  {m.title}
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-white/55">
            Fiecare dosar este coordonat de un responsabil de proiect și
            verificat de un specialist pe domeniul respectiv înainte de depunere.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
