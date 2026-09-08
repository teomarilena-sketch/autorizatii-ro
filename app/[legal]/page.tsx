import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { LEGAL } from "@/lib/legal";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(LEGAL).map((legal) => ({ legal }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ legal: string }>;
}): Promise<Metadata> {
  const { legal } = await params;
  const doc = LEGAL[legal];
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.intro,
    alternates: { canonical: `/${doc.slug}` },
    robots: { index: true, follow: true },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ legal: string }>;
}) {
  const { legal } = await params;
  const doc = LEGAL[legal];
  if (!doc) notFound();

  return (
    <main>
      <PageHeader
        eyebrow="Legal"
        title={doc.title}
        description={doc.intro}
        crumbs={[{ label: "Acasă", href: "/" }, { label: doc.title }]}
      />

      <section className="bg-background py-14 sm:py-16">
        <div className="mx-auto max-w-2xl px-5 lg:px-8">
          <p className="text-xs font-medium text-muted">
            Ultima actualizare: {formatDate(doc.updated)}
          </p>

          <div className="mt-6 space-y-1">
            {doc.blocks.map((b, i) => {
              if ("h" in b)
                return (
                  <h2
                    key={i}
                    className="!mt-8 font-display text-lg font-bold text-foreground"
                  >
                    {b.h}
                  </h2>
                );
              if ("ul" in b)
                return (
                  <ul key={i} className="!mt-3 space-y-2">
                    {b.ul.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                );
              return (
                <p
                  key={i}
                  className="!mt-3 text-sm leading-relaxed text-muted"
                >
                  {b.p}
                </p>
              );
            })}
          </div>

          <p className="mt-10 rounded-2xl border border-border bg-surface p-4 text-xs text-muted">
            Acest document este un model și trebuie revizuit de un consilier
            juridic înainte de utilizarea comercială, împreună cu datele reale ale
            firmei (denumire, CUI, sediu).
          </p>
        </div>
      </section>
    </main>
  );
}
