import type { Metadata } from "next";
import { CheckCircle2, Clock, MessageSquareText } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Process } from "@/components/process";
import { Comparison } from "@/components/comparison";
import { CtaBand } from "@/components/cta-band";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cum obținem autorizația — procesul în 4 pași",
  description:
    "Procesul nostru de obținere a autorizațiilor: analiză de eligibilitate gratuită, elaborarea documentației, depunere și interfața cu autoritatea, emitere și menținerea conformității.",
  alternates: { canonical: "/proces" },
};

const FAQ = [
  {
    q: "Cât durează în total obținerea unei autorizații?",
    a: "Depinde de tipul autorizației și de autoritate — de la 4–8 săptămâni (ex. certificare AGFR) până la 10–20 de săptămâni (ex. AFER sau autorizații de mediu). La analiza gratuită primești o estimare pe cazul tău.",
  },
  {
    q: "Ce presupune analiza gratuită de eligibilitate?",
    a: "Verificăm obiectul de activitate, dotările, personalul și documentele existente și îți dăm lista exactă a cerințelor autorității, un plan cu termene și o ofertă transparentă. Nu implică niciun cost sau obligație.",
  },
  {
    q: "Cine depune dosarul la autoritate?",
    a: "Noi. Pe baza unei împuterniciri, depunem dosarul, urmărim termenele legale, răspundem la solicitările de completare și te asistăm la audit sau la evaluarea tehnică.",
  },
  {
    q: "Ce se întâmplă după ce primesc autorizația?",
    a: "Îți arhivăm digital dosarul complet și îți urmărim termenele de valabilitate, reautorizare și raportările periodice, ca să nu pierzi autorizația.",
  },
  {
    q: "Lucrați și cu firme din afara Bucureștiului?",
    a: "Da. Dosarele se pot pregăti și depune la distanță, iar interfața cu inspectoratele județene o gestionăm noi.",
  },
];

export default function ProcesPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <PageHeader
        eyebrow="Proces"
        title="Cum obținem autorizația — patru pași, zero surprize"
        description="Un flux transparent, cu un responsabil de proiect dedicat și acces la stadiul dosarului în orice moment. Tu primești lista de cerințe și termenele; noi ne ocupăm de dosar și de autoritate."
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Proces" }]}
      >
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted">
          <span className="inline-flex items-center gap-2">
            <MessageSquareText className="h-4 w-4 text-primary" aria-hidden="true" />
            Răspuns în {"<"} 24h
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
            Verificare de conformitate înainte de depunere
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
            Termene monitorizate zilnic
          </span>
        </div>
      </PageHeader>

      <Process />
      <Comparison />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Întrebări frecvente despre proces
          </h2>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-surface">
            {FAQ.map((f) => (
              <details key={f.q} className="group px-5 py-4">
                <summary className="cursor-pointer list-none font-semibold text-foreground marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Primul pas"
        title="Începe cu analiza gratuită de eligibilitate"
        text={`Trimite-ne câteva detalii despre firmă și primești în 24h lista exactă a cerințelor și un plan cu termene. Scrie-ne la ${site.email}.`}
      />
    </main>
  );
}
