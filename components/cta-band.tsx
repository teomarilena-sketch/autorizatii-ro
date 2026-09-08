import { ArrowRight, PhoneCall } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Ai un dosar blocat la autoritate?",
  text = "Trimite-ne situația actuală. În 24h de lucru îți spunem ce lipsește și cum îl deblocăm — soluții adaptate specificului activității tale.",
  eyebrow = "Consultanță personalizată",
}: {
  title?: string;
  text?: string;
  eyebrow?: string;
}) {
  return (
    <section className="bg-background py-10">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <div className="section-invert relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-primary/25 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                  {eyebrow}
                </span>
                <h3 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">
                  {title}
                </h3>
                <p className="mt-2 text-white/70">{text}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="primary" size="lg">
                  Cere Ofertă Rapidă
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href={site.phoneHref} variant="glass" size="lg">
                  <PhoneCall className="h-4 w-4" aria-hidden="true" />
                  Sună acum
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
