"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const KEY = "consent-cookies-v1";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* localStorage blocked — don't nag */
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] p-3 sm:p-4">
      <div className="glass mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl p-4 shadow-soft sm:flex-row sm:items-center">
        <Cookie
          className="h-5 w-5 shrink-0 text-primary sm:mt-0.5"
          aria-hidden="true"
        />
        <p className="flex-1 text-xs leading-relaxed text-muted">
          Folosim cookie-uri strict necesare pentru funcționarea site-ului și,
          cu acordul tău, cookie-uri de analiză agregată.{" "}
          <Link
            href="/politica-de-cookies"
            className="font-semibold text-primary hover:underline"
          >
            Detalii
          </Link>
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => decide("rejected")}
            className="rounded-xl border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-foreground/5"
          >
            Doar necesare
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-xl bg-primary px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
