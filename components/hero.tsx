"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Flame,
  ShieldCheck,
  Snowflake,
  Timer,
  TrainFront,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DurationCalculator } from "@/components/duration-calculator";

const METRICS = [
  { value: "8", label: "Tipuri de autorizații și licențe" },
  { value: "24h", label: "Timp de răspuns la solicitare" },
  { value: "1", label: "Punct de contact pentru tot dosarul" },
];

const DOSSIERS = [
  { icon: TrainFront, label: "Autorizație AFER — furnizor feroviar", status: "Emisă", done: true },
  { icon: Flame, label: "Autorizație ISU — securitate la incendiu", status: "Emisă", done: true },
  { icon: Zap, label: "Atestat ANRE — energie electrică", status: "În evaluare", active: true },
  { icon: Snowflake, label: "Certificare AGFR — gaze fluorurate", status: "În pregătire" },
];

export function Hero() {
  const [calcOpen, setCalcOpen] = useState(false);
  const [barFilled, setBarFilled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBarFilled(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="main"
      className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-x-0 top-0 h-[520px] bg-grid-slate bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* Left */}
        <div className="motion-safe:animate-fade-up">
          <Badge className="mb-5">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            Proces rapid de licențiere, fără birocrație în plus
          </Badge>

          <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.6rem]">
            Licențiere fără{" "}
            <span className="text-gradient">blocaje administrative.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Preluăm întregul proces de autorizare pentru firma ta — de la
            documentația tehnică până la relația cu autoritatea. Tu îți vezi de
            afacere, noi ne ocupăm de dosar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="primary" size="xl" onClick={() => setCalcOpen(true)}>
              <Timer className="h-4 w-4" aria-hidden="true" />
              Calculează durata obținerii
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() =>
                document
                  .getElementById("servicii")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Vezi serviciile
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5"
                aria-hidden="true"
              />
            </Button>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {METRICS.map((m) => (
              <div key={m.label}>
                <div className="font-display text-3xl font-extrabold text-foreground">
                  {m.value}
                </div>
                <div className="mt-1 text-xs font-medium text-muted">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-muted">
            {[
              "Analiză de eligibilitate gratuită",
              "Documentație verificată înainte de depunere",
              "Termene monitorizate zilnic",
            ].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right — illustrative dossier tracker */}
        <div className="relative motion-safe:animate-fade-up [animation-delay:120ms]">
          <div className="glass rounded-3xl p-5 shadow-glow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="text-sm font-semibold text-foreground">
                  Status dosare de autorizare
                </span>
              </div>
              <Badge>Exemplu</Badge>
            </div>

            <div className="mt-4 space-y-2.5">
              {DOSSIERS.map((row) => (
                <div
                  key={row.label}
                  className={`flex items-center gap-3 rounded-2xl border px-3 py-2.5 text-sm ${
                    row.active
                      ? "border-primary/40 bg-primary/10 text-foreground"
                      : "border-border bg-card/70 text-muted"
                  }`}
                >
                  <row.icon
                    className={`h-4 w-4 ${row.done ? "text-emerald-500" : "text-primary"}`}
                    aria-hidden="true"
                  />
                  <span className="flex-1 font-medium">{row.label}</span>
                  <span className="whitespace-nowrap text-xs font-semibold">
                    {row.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="section-invert mt-4 rounded-2xl p-4">
              <div className="flex items-center justify-between text-xs font-medium text-white/70">
                <span>Progres portofoliu dosare</span>
                <span>2 / 4 emise</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-primary transition-[width] duration-1000 ease-out motion-reduce:transition-none"
                  style={{ width: barFilled ? "50%" : "0%" }}
                />
              </div>
              <p className="mt-2 font-display text-lg font-bold text-white">
                Termen mediu estimat: 8 săptămâni
              </p>
            </div>
          </div>

          <div className="absolute -left-4 -top-4 hidden rounded-2xl border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground shadow-soft sm:block">
            <span className="text-primary">Verificat</span> înainte de depunere
          </div>
          <div className="absolute -bottom-4 -right-3 hidden rounded-2xl border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground shadow-soft sm:block">
            <span className="text-primary">Responsabil</span> de proiect dedicat
          </div>
        </div>
      </div>

      <DurationCalculator open={calcOpen} onOpenChange={setCalcOpen} />
    </section>
  );
}
