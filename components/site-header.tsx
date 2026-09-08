"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Phone, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMark, Wordmark } from "@/components/brand-mark";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function scrollToId(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Announcement pill */}
      <div className="hidden justify-center px-4 pt-3 md:flex">
        <button
          type="button"
          onClick={() => scrollToId("contact")}
          className="glass flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted shadow-soft transition-colors hover:text-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          Prima analiză de eligibilitate este gratuită — răspuns în 24h
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </button>
      </div>

      <div className="px-4 pt-3 md:pt-2">
        <div
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-300",
            scrolled
              ? "glass shadow-soft"
              : "border border-transparent bg-card/40 backdrop-blur-sm",
          )}
        >
          <a href="#" className="flex items-center gap-2.5" aria-label={site.name}>
            <BrandMark />
            <Wordmark />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <a
              href={site.phoneHref}
              className="inline-flex h-11 items-center gap-2 rounded-2xl px-3 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phone}
            </a>
            <Button variant="primary" size="md" onClick={() => scrollToId("contact")}>
              Cere Ofertă Rapidă
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card text-foreground shadow-soft"
              aria-label="Deschide meniul"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              className="absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-card p-5 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              role="dialog"
              aria-label="Meniu de navigare"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <BrandMark />
                  <Wordmark />
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground"
                  aria-label="Închide meniul"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-1" aria-label="Mobil">
                {site.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 pt-6">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border px-4 py-3 text-sm font-semibold text-foreground"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {site.phone}
                </a>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    setOpen(false);
                    scrollToId("contact");
                  }}
                >
                  Cere Ofertă Rapidă
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
