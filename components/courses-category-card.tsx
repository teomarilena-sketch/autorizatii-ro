"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, GraduationCap, Plus } from "lucide-react";
import { COURSES } from "@/lib/courses";
import { cn } from "@/lib/utils";

/**
 * Card de categorie „Cursuri de Calificare", afișat lângă cardurile de
 * autorizații. Se extinde pentru a lista toate cursurile și trimite la /cursuri.
 */
export function CoursesCategoryCard() {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-surface p-6 transition-all duration-300",
        open
          ? "border-primary/40 bg-card shadow-soft"
          : "border-border hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-soft",
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-indigo transition-transform duration-300 group-hover:scale-x-100" />

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white shadow-soft transition-colors group-hover:bg-primary">
        <GraduationCap className="h-5 w-5" aria-hidden="true" />
      </div>

      <h3 className="mt-5 font-display text-lg font-bold leading-snug text-foreground">
        Cursuri de Calificare
      </h3>
      <p className="mt-1 text-sm font-medium text-primary">
        {COURSES.length} calificări profesionale pentru persoane
      </p>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
        Construcții, instalații, auto, HoReCa, comerț și competențe digitale,
        cu certificat de calificare recunoscut la nivel național.
      </p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
      >
        <Plus
          className={cn("h-4 w-4 transition-transform", open && "rotate-45")}
          aria-hidden="true"
        />
        {open ? "Ascunde cursurile" : "Vezi cursurile"}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-3 space-y-1.5 overflow-hidden text-sm text-muted"
          >
            {COURSES.map((c) => (
              <li key={c.id} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {c.name}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <Link
        href="/cursuri"
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
      >
        Toate cursurile
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
