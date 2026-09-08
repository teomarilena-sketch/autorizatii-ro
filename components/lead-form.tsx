"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  Lock,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
  company: string; // honeypot
};

type Errors = Partial<Record<keyof FormState, string>>;

const PROJECT_OPTIONS = [
  "Autorizație AFER (feroviar)",
  "Licență IGPR (alarme)",
  "Autorizație ISU (incendiu)",
  "Atestat ANRE (energie electrică)",
  "Autorizație ANRE (gaze naturale)",
  "Certificare AGFR (gaze fluorurate)",
  "Certificări ISO",
  "Consultanță de mediu",
  "Altele / nu sunt sigur",
];

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  message: "",
  company: "",
};

function validate(v: FormState): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 3) e.name = "Introdu numele complet.";
  if (!/^[+0-9()\s-]{9,}$/.test(v.phone.trim()))
    e.phone = "Introdu un număr de telefon valid.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    e.email = "Introdu o adresă de email validă.";
  if (!v.projectType) e.projectType = "Alege tipul de proiect.";
  if (v.message.trim().length < 10)
    e.message = "Adaugă câteva detalii despre proiect (min. 10 caractere).";
  return e;
}

export function LeadForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [serverMsg, setServerMsg] = useState<string>("");

  const update =
    (key: keyof FormState) =>
    (
      ev: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setValues((s) => ({ ...s, [key]: ev.target.value }));
      setErrors((s) => ({ ...s, [key]: undefined }));
    };

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    setServerMsg("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
      };
      if (!res.ok || !data.ok) {
        throw new Error(data.message || "A apărut o eroare. Încearcă din nou.");
      }
      setStatus("success");
      setValues(initial);
    } catch (err) {
      setStatus("error");
      setServerMsg(
        err instanceof Error ? err.message : "A apărut o eroare. Încearcă din nou.",
      );
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left — copy */}
          <div className="flex flex-col">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Contact
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Solicită analiza gratuită de eligibilitate
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Află exact ce autorizații îți sunt necesare și în cât timp le
                obții — în mai puțin de 24 de ore. Fără obligații, fără costuri.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <ul className="mt-8 space-y-3 text-sm text-foreground">
                {[
                  "Audit gratuit al documentelor și dotărilor existente",
                  "Lista completă a cerințelor autorității + estimare de termene",
                  "Ofertă transparentă, fără costuri ascunse",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 flex flex-col gap-2 rounded-2xl bg-surface p-4 text-sm">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {site.phone}
                </a>
                <span className="text-muted">
                  Program: Luni–Vineri, 09:00–18:00
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <div className="relative">
            <AnimatePresence mode="wait" initial={false}>
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl border border-primary/20 bg-primary/[0.06] p-8 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                    <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                    Solicitare trimisă!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted">
                    Îți mulțumim. Un consultant Autorizații.ro te va contacta în
                    mai puțin de 24 de ore lucrătoare.
                  </p>
                  <Button
                    variant="outline"
                    size="md"
                    className="mt-6"
                    onClick={() => setStatus("idle")}
                  >
                    Trimite altă solicitare
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  noValidate
                  className="space-y-4"
                >
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.company}
                    onChange={update("company")}
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <TextField
                      id="name"
                      label="Nume complet"
                      value={values.name}
                      onChange={update("name")}
                      error={errors.name}
                      autoComplete="name"
                      placeholder="Ion Popescu"
                    />
                    <TextField
                      id="phone"
                      label="Telefon"
                      type="tel"
                      value={values.phone}
                      onChange={update("phone")}
                      error={errors.phone}
                      autoComplete="tel"
                      placeholder="07xx xxx xxx"
                    />
                  </div>

                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    value={values.email}
                    onChange={update("email")}
                    error={errors.email}
                    autoComplete="email"
                    placeholder="nume@companie.ro"
                  />

                  <div>
                    <label
                      htmlFor="projectType"
                      className="mb-1.5 block text-sm font-semibold text-foreground"
                    >
                      Tip proiect
                    </label>
                    <select
                      id="projectType"
                      value={values.projectType}
                      onChange={update("projectType")}
                      className={cn(
                        "h-11 w-full rounded-2xl border bg-card px-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20",
                        errors.projectType ? "border-red-400" : "border-border",
                      )}
                    >
                      <option value="">Alege o opțiune…</option>
                      {PROJECT_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="mt-1 text-xs font-medium text-red-500">
                        {errors.projectType}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-semibold text-foreground"
                    >
                      Mesaj / detalii proiect
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={values.message}
                      onChange={update("message")}
                      placeholder="Ex: firmă de instalații electrice, vrem atestat ANRE tip A și B; avem 2 electricieni autorizați."
                      className={cn(
                        "w-full resize-y rounded-2xl border bg-card px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20",
                        errors.message ? "border-red-400" : "border-border",
                      )}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs font-medium text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <p className="rounded-xl bg-red-500/10 px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400">
                      {serverMsg}
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Se trimite…
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                        Trimite Solicitarea
                      </>
                    )}
                  </Button>

                  <p className="flex items-center justify-center gap-1.5 text-xs text-muted">
                    <Lock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    Informațiile tale sunt 100% confidențiale.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function TextField({
  id,
  label,
  error,
  ...props
}: {
  id: string;
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        className={cn(
          "h-11 w-full rounded-2xl border bg-card px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20",
          error ? "border-red-400" : "border-border",
        )}
        aria-invalid={!!error}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs font-medium text-red-500">{error}</p>
      )}
    </div>
  );
}
