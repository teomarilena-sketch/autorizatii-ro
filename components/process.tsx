"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ClipboardCheck,
  FileStack,
  Landmark,
  Stamp,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

type Step = {
  icon: LucideIcon;
  title: string;
  short: string;
  detail: string;
  duration: string;
};

const STEPS: Step[] = [
  {
    icon: ClipboardCheck,
    title: "Analiză de eligibilitate & audit documente",
    short: "Ziua 0–3",
    detail:
      "Verificăm obiectul de activitate, dotările, personalul și documentele existente. Primești lista exactă a cerințelor autorității și un plan cu termene realiste — gratuit.",
    duration: "24–72h",
  },
  {
    icon: FileStack,
    title: "Elaborare documentație & sistem de management",
    short: "Săpt. 1–6",
    detail:
      "Redactăm dosarul tehnic, procedurile și manualul sistemului de management, pregătim atestarea personalului și punem la punct dotările cerute de reglementare.",
    duration: "1–6 săpt.",
  },
  {
    icon: Landmark,
    title: "Depunere & interfața cu autoritatea",
    short: "Săpt. 4–12",
    detail:
      "Depunem dosarul la AFER, ANRE, IGPR, IGSU, AGFR sau APM, urmărim termenele legale, răspundem la solicitările de completare și te asistăm la audit sau la evaluarea tehnică.",
    duration: "variabil",
  },
  {
    icon: Stamp,
    title: "Emitere autorizație & mentenanța conformității",
    short: "Final + recurent",
    detail:
      "Preluăm documentul emis, îl arhivăm digital și îți urmărim termenele de valabilitate, reautorizare și raportările periodice, ca să nu pierzi autorizația.",
    duration: "—",
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => setMounted(true), []);

  return (
    <section id="proces" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Proces"
          title="Patru pași, zero surprize"
          description="Un flux transparent, cu responsabil de proiect dedicat și acces la stadiul dosarului în orice moment."
        />

        {/* Timeline */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ol className="relative space-y-2">
            <span
              className="absolute left-[27px] top-4 bottom-4 w-px bg-border"
              aria-hidden="true"
            />
            {STEPS.map((step, i) => {
              const isActive = i === active;
              return (
                <li key={step.title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition-all",
                      isActive
                        ? "border-primary/30 bg-card shadow-soft"
                        : "border-transparent hover:bg-card/60",
                    )}
                    aria-current={isActive ? "step" : undefined}
                  >
                    <span
                      className={cn(
                        "relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-sm font-bold transition-colors",
                        isActive
                          ? "border-primary bg-primary text-white"
                          : "border-border bg-card text-foreground",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wide text-primary">
                        {step.short}
                      </span>
                      <span className="mt-0.5 block font-display text-[15px] font-bold leading-snug text-foreground">
                        {step.title}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Detail panel */}
          <div className="section-invert relative overflow-hidden rounded-3xl p-7 shadow-soft">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-2xl" />
            <motion.div
              key={active}
              initial={mounted && !reduce ? { opacity: 0, y: 14 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  {(() => {
                    const Icon = STEPS[active].icon;
                    return <Icon className="h-5 w-5 text-primary" aria-hidden="true" />;
                  })()}
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                  Durată tipică: {STEPS[active].duration}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-bold">
                {STEPS[active].title}
              </h3>
              <p className="mt-3 leading-relaxed text-white/75">
                {STEPS[active].detail}
              </p>

              <div className="mt-6 flex gap-1.5">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Pasul ${i + 1}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      i === active ? "w-8 bg-primary" : "w-4 bg-white/25",
                    )}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
