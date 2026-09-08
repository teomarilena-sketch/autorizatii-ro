"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Landmark, Plus, ScrollText } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { RevealStagger } from "@/components/motion/reveal";
import { SERVICES } from "@/lib/services";
import { cn } from "@/lib/utils";

export function Services() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="servicii" className="scroll-mt-24 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Servicii"
          title="Opt tipuri de autorizații, un singur interlocutor"
          description="Întocmim și depunem dosarele de licențiere pentru societăți din domenii reglementate — soluții eficiente, adaptate specificului fiecărei activități."
        />

        <RevealStagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const isOpen = open === s.id;
            return (
              <article
                key={s.id}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-surface p-6 transition-all duration-300",
                  isOpen
                    ? "border-primary/40 bg-card shadow-soft"
                    : "border-border hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-soft",
                )}
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-indigo transition-transform duration-300 group-hover:scale-x-100" />

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white shadow-soft transition-colors group-hover:bg-primary">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-foreground">
                  {s.name}
                </h3>
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
                    <ScrollText className="h-3 w-3" aria-hidden="true" />
                    {s.legal}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : s.id)}
                  aria-expanded={isOpen}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  <Plus
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isOpen && "rotate-45",
                    )}
                    aria-hidden="true"
                  />
                  {isOpen ? "Ascunde detaliile" : "Ce livrăm"}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="mt-3 space-y-1.5 overflow-hidden text-sm text-muted"
                    >
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {d}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100"
                >
                  Solicită ofertă
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
