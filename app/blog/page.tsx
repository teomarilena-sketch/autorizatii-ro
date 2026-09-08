import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — ghiduri despre autorizări și licențiere",
  description:
    "Ghiduri practice despre obținerea autorizațiilor în România: ISU, ANRE, AFER, IGPR, AGFR și certificări ISO — termene, documente și greșeli frecvente.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main>
      <PageHeader
        eyebrow="Blog"
        title="Ghiduri despre autorizări și licențiere"
        description="Articole practice despre termene reale, documente necesare și motivele frecvente pentru care se blochează dosarele — pe fiecare autoritate."
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Blog" }]}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="grid gap-5">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card hover:shadow-soft"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-muted">
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 font-semibold text-primary">
                    {p.tag}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {formatDate(p.date)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {p.readingMinutes} min
                  </span>
                </div>
                <h2 className="mt-3 font-display text-lg font-bold leading-snug text-foreground group-hover:text-primary">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Citește
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
