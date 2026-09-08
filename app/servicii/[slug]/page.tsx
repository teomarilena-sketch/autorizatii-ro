import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Landmark,
  ScrollText,
  Users,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { ServiceImage } from "@/components/service-image";
import { ButtonLink } from "@/components/ui/button";
import { SERVICES, getService } from "@/lib/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.seoTitle,
    description: s.seoDescription,
    alternates: { canonical: `/servicii/${s.slug}` },
    openGraph: {
      title: s.seoTitle,
      description: s.seoDescription,
      url: `${site.url}/servicii/${s.slug}`,
    },
  };
}

const STEPS = [
  "Analiză de eligibilitate gratuită și lista exactă a cerințelor",
  "Elaborarea dosarului, a procedurilor și pregătirea personalului",
  "Depunere la autoritate și răspuns la solicitările de completare",
  "Emiterea documentului și urmărirea termenelor de menținere",
];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = SERVICES.filter((x) => x.id !== s.id).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.seoDescription,
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: "RO",
    url: `${site.url}/servicii/${s.slug}`,
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <PageHeader
        eyebrow={s.short}
        title={s.name}
        description={s.intro}
        crumbs={[
          { label: "Acasă", href: "/" },
          { label: "Servicii", href: "/servicii" },
          { label: s.cardTitle },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" variant="primary" size="lg">
            Cere ofertă pentru {s.cardTitle}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Landmark className="h-4 w-4 text-primary" aria-hidden="true" />
              {s.authority}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ScrollText className="h-4 w-4 text-primary" aria-hidden="true" />
              {s.legal}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
              {s.weeks[0]}–{s.weeks[1]} săptămâni
            </span>
          </div>
        </div>
      </PageHeader>

      <div className="bg-background pt-10">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <ServiceImage
            src={s.image || undefined}
            alt={s.imageAlt}
            icon={s.icon}
            label={s.short}
            priority
          />
        </div>
      </div>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 lg:grid-cols-[1.5fr_1fr] lg:px-8">
          <div className="space-y-12">
            <Block icon={Users} title="Cine are nevoie de acest serviciu">
              <ul className="space-y-2.5">
                {s.whoNeedsIt.map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-sm text-muted">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block icon={FileText} title="Documente necesare (orientativ)">
              <ul className="space-y-2.5">
                {s.documents.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted/80">
                Lista finală se stabilește după analiza gratuită, în funcție de
                activitatea și structura firmei tale.
              </p>
            </Block>

            <Block icon={ScrollText} title="Întrebări frecvente">
              <div className="divide-y divide-border rounded-2xl border border-border bg-surface">
                {s.faq.map((f) => (
                  <details key={f.q} className="group px-4 py-3">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-foreground marker:hidden">
                      {f.q}
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </Block>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-display text-sm font-bold text-foreground">
                Ce livrăm
              </h3>
              <ul className="mt-3 space-y-2">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-display text-sm font-bold text-foreground">
                Cum decurge
              </h3>
              <ol className="mt-3 space-y-3">
                {STEPS.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="section-invert rounded-2xl p-5 text-white">
              <p className="text-sm text-white/80">
                Trimite-ne situația firmei tale și primești în 24h lista exactă a
                pașilor pentru {s.cardTitle}.
              </p>
              <ButtonLink
                href="/contact"
                variant="primary"
                size="md"
                className="mt-4 w-full"
              >
                Cere analiza gratuită
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-border bg-surface py-14">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <h2 className="font-display text-lg font-bold text-foreground">
            Alte servicii
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/servicii/${r.slug}`}
                className="group rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/30"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-white">
                    <r.icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {r.cardTitle}
                  </span>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Vezi
                  <ArrowRight
                    className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Users;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}
