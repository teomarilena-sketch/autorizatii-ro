import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { LeadForm } from "@/components/lead-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — cere analiza gratuită de eligibilitate",
  description:
    "Contactează Autorizații.ro pentru o analiză gratuită de eligibilitate. Îți spunem în 24h ce autorizații îți sunt necesare și în cât timp le obții.",
  alternates: { canonical: "/contact" },
};

const DETAILS = [
  { icon: Mail, label: "Email", value: site.email, href: site.emailHref },
  { icon: Phone, label: "Telefon", value: site.phone, href: site.phoneHref },
  { icon: Clock, label: "Program", value: site.schedule },
  { icon: MapPin, label: "Zonă acoperită", value: "România — la nivel național" },
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Hai să vedem de ce autorizații ai nevoie"
        description="Completează formularul sau scrie-ne direct. Primești o analiză gratuită de eligibilitate și o estimare de termene în mai puțin de 24 de ore lucrătoare."
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Contact" }]}
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {DETAILS.map((d) => (
            <div
              key={d.label}
              className="rounded-2xl border border-border bg-card p-4"
            >
              <d.icon className="h-4 w-4 text-primary" aria-hidden="true" />
              <div className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-muted">
                {d.label}
              </div>
              {d.href ? (
                <a
                  href={d.href}
                  className="mt-0.5 block text-sm font-semibold text-foreground hover:text-primary"
                >
                  {d.value}
                </a>
              ) : (
                <div className="mt-0.5 text-sm font-semibold text-foreground">
                  {d.value}
                </div>
              )}
            </div>
          ))}
        </div>
      </PageHeader>

      <LeadForm />
    </main>
  );
}
