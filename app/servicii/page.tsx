import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Landmark, ScrollText } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { AuthoritiesBar } from "@/components/authorities-bar";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Servicii de licențiere și autorizare",
  description:
    "Cele 7 tipuri de autorizații și licențe pentru care oferim consultanță: AFER, IGPR, ISU, ANRE energie electrică, ANRE gaze, AGFR și certificări ISO.",
  alternates: { canonical: "/servicii" },
};

export default function ServiciiPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Servicii"
        title="Șapte tipuri de autorizații, un singur interlocutor"
        description="Întocmim și depunem dosarele de licențiere pentru societăți din domenii reglementate. Alege serviciul de care ai nevoie sau cere o analiză gratuită de eligibilitate."
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Servicii" }]}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                href={`/servicii/${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white shadow-soft transition-colors group-hover:bg-primary">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-5 font-display text-lg font-bold leading-snug text-foreground">
                  {s.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-primary">{s.short}</p>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-0.5 text-[11px] font-semibold text-muted">
                    <Landmark className="h-3 w-3" aria-hidden="true" />
                    {s.authority}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-0.5 text-[11px] font-semibold text-muted">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {s.weeks[0]}–{s.weeks[1]} săpt.
                  </span>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Vezi detalii
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-muted">
            <ScrollText className="h-4 w-4 text-primary" aria-hidden="true" />
            Nu ești sigur ce autorizație îți trebuie?{" "}
            <Link href="/contact" className="font-semibold text-primary hover:underline">
              Cere analiza gratuită de eligibilitate
            </Link>
          </p>
        </div>
      </section>

      <AuthoritiesBar />
      <CtaBand />
    </main>
  );
}
