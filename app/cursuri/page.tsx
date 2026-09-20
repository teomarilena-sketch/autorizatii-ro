import type { Metadata } from "next";
import { GraduationCap, ScrollText } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { COURSES } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Cursuri de calificare profesională",
  description:
    "16 cursuri de calificare profesională pentru persoane: construcții, instalații, auto, HoReCa și competențe digitale. Certificat recunoscut național.",
  alternates: { canonical: "/cursuri" },
};

export default function CursuriPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Cursuri de calificare"
        title="Calificare profesională pentru meseriile căutate pe piața muncii"
        description="Cursuri de calificare pentru persoane, cu certificat recunoscut național — distincte de autorizațiile de firmă din secțiunea Servicii. Spune-ne ce meserie te interesează și îți dăm detalii despre înscriere."
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Cursuri" }]}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((c) => (
              <div
                key={c.id}
                className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/30 hover:bg-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white shadow-soft">
                  <c.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-5 font-display text-base font-bold leading-snug text-foreground">
                  {c.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {c.short}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-muted">
            <ScrollText className="h-4 w-4 text-primary" aria-hidden="true" />
            Nu găsești meseria căutată?{" "}
            <Link href="/contact" className="font-semibold text-primary hover:underline">
              Scrie-ne și îți spunem ce opțiuni ai
            </Link>
          </p>
        </div>
      </section>

      <section className="section-invert py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
            <p className="text-sm text-white/70">
              Certificatul de calificare profesională este recunoscut la nivel
              național și este util atât pentru angajare, cât și pentru
              personalul cerut la unele dintre autorizațiile de firmă (ex.
              ISCIR, ANRE).
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Înscrieri"
        title="Vrei să te califici într-o meserie căutată?"
        text="Trimite-ne meseria care te interesează și numărul de persoane, iar noi îți spunem pașii și termenele de înscriere."
      />
    </main>
  );
}
