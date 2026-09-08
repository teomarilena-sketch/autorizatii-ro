import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { POSTS, getPost, type Block } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.seoTitle,
    description: p.seoDescription,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      type: "article",
      title: p.seoTitle,
      description: p.seoDescription,
      url: `${site.url}/blog/${p.slug}`,
      publishedTime: p.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function Content({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 font-display text-xl font-bold text-foreground sm:text-2xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-6 font-display text-lg font-bold text-foreground">
          {block.text}
        </h3>
      );
    case "quote":
      return (
        <blockquote className="mt-6 border-l-2 border-primary pl-4 text-lg font-medium italic text-foreground">
          {block.text}
        </blockquote>
      );
    case "ul":
      return (
        <ul className="mt-4 space-y-2">
          {block.items.map((it) => (
            <li key={it} className="flex items-start gap-2.5 text-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-4 space-y-2">
          {block.items.map((it, i) => (
            <li key={it} className="flex items-start gap-3 text-muted">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                {i + 1}
              </span>
              <span>{it}</span>
            </li>
          ))}
        </ol>
      );
    default:
      return <p className="mt-4 leading-relaxed text-muted">{block.text}</p>;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const others = POSTS.filter((x) => x.slug !== p.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.seoDescription,
    datePublished: p.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${p.slug}`,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow={p.tag}
        title={p.title}
        crumbs={[
          { label: "Acasă", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: p.tag },
        ]}
      >
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            {formatDate(p.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {p.readingMinutes} min de citit
          </span>
        </div>
      </PageHeader>

      <article className="bg-background py-14 sm:py-16">
        <div className="mx-auto max-w-2xl px-5 lg:px-8">
          <p className="text-lg font-medium leading-relaxed text-foreground">
            {p.excerpt}
          </p>
          {p.body.map((block, i) => (
            <Content key={i} block={block} />
          ))}

          <div className="mt-12 rounded-2xl border border-border bg-surface p-5 text-sm text-muted">
            Acest articol are caracter informativ și poate fi afectat de
            modificări legislative. Pentru situația concretă a firmei tale, cere o{" "}
            <Link href="/contact" className="font-semibold text-primary hover:underline">
              analiză gratuită de eligibilitate
            </Link>
            .
          </div>

          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Toate articolele
          </Link>
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-border bg-surface py-12">
          <div className="mx-auto max-w-2xl px-5 lg:px-8">
            <h2 className="font-display text-lg font-bold text-foreground">
              Continuă cu
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/blog/${o.slug}`}
                  className="group rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/30"
                >
                  <span className="text-xs font-semibold text-primary">
                    {o.tag}
                  </span>
                  <p className="mt-1 text-sm font-semibold leading-snug text-foreground group-hover:text-primary">
                    {o.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </main>
  );
}
