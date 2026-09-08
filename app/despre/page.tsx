import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Factory,
  Fingerprint,
  Gauge,
  HardDrive,
  ShieldCheck,
  Snowflake,
  TrainFront,
  UserRound,
  Zap,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { AuthoritiesBar } from "@/components/authorities-bar";

export const metadata: Metadata = {
  title: "Despre noi — consultanță în licențiere și autorizare",
  description:
    "Suntem o echipă de consultanță care preia întregul proces de autorizare pentru firme din domenii reglementate: analiză, documentație, depunere și menținerea conformității.",
  alternates: { canonical: "/despre" },
};

const VALUES = [
  {
    icon: HardDrive,
    title: "Dosar digitalizat",
    desc: "Toate documentele într-un singur loc, cu stadiul fiecărui dosar vizibil în timp real.",
  },
  {
    icon: Fingerprint,
    title: "Verificare pre-depunere",
    desc: "Fiecare dosar trece printr-un control intern de conformitate înainte să ajungă la autoritate.",
  },
  {
    icon: Gauge,
    title: "Estimări bazate pe date",
    desc: "Termene calculate din istoricul real al fiecărei autorități, nu din promisiuni.",
  },
  {
    icon: UserRound,
    title: "Un singur punct de contact",
    desc: "Un responsabil de proiect coordonează toți specialiștii și verificatorii implicați.",
  },
];

const SECTORS = [
  {
    icon: TrainFront,
    title: "Transport feroviar & metrou",
    desc: "Producători și prestatori pentru CFR, metrou și STB — autorizare AFER.",
  },
  {
    icon: Zap,
    title: "Energie & instalații",
    desc: "Firme de proiectare și execuție instalații electrice și de gaze — atestate și autorizații ANRE.",
  },
  {
    icon: ShieldCheck,
    title: "Securitate & alarme",
    desc: "Integratori de sisteme antiefracție — licență de funcționare IGPR și personal atestat.",
  },
  {
    icon: Factory,
    title: "Industrie & producție",
    desc: "Unități industriale și logistice — securitate la incendiu (ISU) și sisteme de management ISO.",
  },
  {
    icon: Snowflake,
    title: "Frig, climatizare & HVAC",
    desc: "Firme care lucrează cu gaze fluorurate — certificare AGFR pentru firmă și personal.",
  },
  {
    icon: Building2,
    title: "Dezvoltatori & investitori",
    desc: "Proiecte de construcții și amenajări — avize și autorizații de securitate la incendiu.",
  },
];

export default function DesprePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Despre noi"
        title="Preluăm birocrația autorizării, tu îți vezi de afacere"
        description="Autorizații.ro este o platformă de consultanță pentru obținerea autorizațiilor și licențelor în domenii reglementate din România. Lucrăm cu proiectanți și verificatori atestați și gestionăm întregul proces — de la analiză până la menținerea conformității."
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Despre" }]}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              Multe firme din domenii reglementate pierd luni întregi și
              contracte pentru că un dosar de autorizare a fost respins sau
              blocat. Cerințele sunt stufoase, se schimbă des și diferă de la o
              autoritate la alta.
            </p>
            <p>
              Noi facem un singur lucru, dar îl facem bine:{" "}
              <strong className="text-foreground">
                ducem dosarul de la zero până la documentul emis
              </strong>
              . Începem cu o analiză gratuită de eligibilitate, îți dăm lista
              exactă a cerințelor și un plan cu termene realiste, apoi elaborăm
              documentația, depunem și susținem dosarul în relația cu autoritatea.
            </p>
            <p>
              După emitere nu dispărem: îți urmărim termenele de valabilitate,
              reautorizare și raportările periodice, ca să nu pierzi autorizația.
            </p>
          </div>
        </div>
      </section>

      <section className="section-invert py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
            Cum lucrăm
          </span>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">
            Un model de lucru care reduce riscul de respingere
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <v.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-3 font-display text-sm font-bold text-white">
                  {v.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertiza" className="scroll-mt-24 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
            Expertiză
          </span>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Sectoarele cu care lucrăm
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Cunoaștem particularitățile de autorizare ale fiecărui tip de
            activitate și cerințele fiecărei autorități emitente.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-surface p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-white">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-3 font-display text-sm font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/servicii"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Vezi toate serviciile
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <AuthoritiesBar />
      <CtaBand />
    </main>
  );
}
