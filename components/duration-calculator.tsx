"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock, Gauge, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/services";
import { cn } from "@/lib/utils";

const COMPLEXITY = [
  { id: "simpla", label: "Simplă", factor: 0.85, hint: "un singur amplasament / o categorie de produse" },
  { id: "medie", label: "Medie", factor: 1, hint: "activitate standard, mai multe puncte de lucru" },
  { id: "complexa", label: "Complexă", factor: 1.35, hint: "domenii multiple, personal numeros, dotări extinse" },
];

const READINESS = [
  { id: "gata", label: "Documente complete", factor: 0.8 },
  { id: "partial", label: "Parțial pregatite", factor: 1 },
  { id: "zero", label: "Pornim de la zero", factor: 1.25 },
];

export function DurationCalculator({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [serviceId, setServiceId] = useState(SERVICES[0].id);
  const [complexity, setComplexity] = useState("medie");
  const [readiness, setReadiness] = useState("partial");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onOpenChange(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onOpenChange]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const estimate = useMemo(() => {
    const svc = SERVICES.find((s) => s.id === serviceId)!;
    const cf = COMPLEXITY.find((c) => c.id === complexity)!.factor;
    const rf = READINESS.find((r) => r.id === readiness)!.factor;
    const low = Math.max(2, Math.round(svc.weeks[0] * cf * rf));
    const high = Math.round(svc.weeks[1] * cf * rf);
    const tradLow = Math.round(low * 1.6);
    const tradHigh = Math.round(high * 1.9);
    return { low, high, tradLow, tradHigh, svc };
  }, [serviceId, complexity, readiness]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Calculator estimativ pentru durata obținerii autorizației"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 30, stiffness: 320 }}
            className="relative w-full max-w-lg overflow-hidden rounded-t-3xl bg-card shadow-2xl sm:rounded-3xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border bg-surface px-6 py-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <Gauge className="h-4 w-4" aria-hidden="true" />
                  Estimare durată
                </div>
                <h3 className="mt-1 font-display text-lg font-bold text-foreground">
                  Cât durează obținerea autorizației?
                </h3>
              </div>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border text-foreground"
                aria-label="Închide"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-[70vh] space-y-5 overflow-y-auto px-6 py-5">
              <Field label="Tip de autorizație">
                <div className="grid gap-2">
                  {SERVICES.map((s) => (
                    <Choice
                      key={s.id}
                      active={serviceId === s.id}
                      onClick={() => setServiceId(s.id)}
                    >
                      {s.name}
                    </Choice>
                  ))}
                </div>
              </Field>

              <Field label="Complexitate">
                <div className="grid grid-cols-3 gap-2">
                  {COMPLEXITY.map((c) => (
                    <Choice
                      key={c.id}
                      active={complexity === c.id}
                      onClick={() => setComplexity(c.id)}
                    >
                      {c.label}
                    </Choice>
                  ))}
                </div>
                <p className="mt-1.5 text-xs text-muted">
                  {COMPLEXITY.find((c) => c.id === complexity)?.hint}
                </p>
              </Field>

              <Field label="Stadiul documentelor">
                <div className="grid gap-2 sm:grid-cols-3">
                  {READINESS.map((r) => (
                    <Choice
                      key={r.id}
                      active={readiness === r.id}
                      onClick={() => setReadiness(r.id)}
                    >
                      {r.label}
                    </Choice>
                  ))}
                </div>
              </Field>

              <div className="rounded-2xl border border-primary/20 bg-primary/[0.07] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                  Estimare cu Autorizații.ro
                </div>
                <p className="mt-1 font-display text-3xl font-extrabold text-foreground">
                  {estimate.low}–{estimate.high}{" "}
                  <span className="text-base font-semibold text-muted">
                    săptămâni
                  </span>
                </p>
                <p className="mt-2 text-xs text-muted">
                  Emitent: {estimate.svc.authority}. Traseu neasistat estimat:{" "}
                  <span className="font-semibold text-foreground/70">
                    {estimate.tradLow}–{estimate.tradHigh} săptămâni
                  </span>
                  . Estimare orientativă, confirmată după analiza gratuită de
                  eligibilitate.
                </p>
              </div>
            </div>

            <div className="border-t border-border bg-surface px-6 py-4">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => {
                  onOpenChange(false);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Vreau o estimare exactă
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-foreground">{label}</p>
      {children}
    </div>
  );
}

function Choice({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-sm transition-all",
        active
          ? "border-primary bg-primary/10 font-semibold text-foreground shadow-soft"
          : "border-border bg-card text-muted hover:border-primary/40 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
