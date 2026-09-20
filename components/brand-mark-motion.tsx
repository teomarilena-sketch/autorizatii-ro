"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const MTM = ["M", "T", "M"];
const AUTH = ["A", "u", "t", "o", "r", "i", "z", "a", "ț", "i", "i"];

/** Total time before the reveal (scan → letters → stamp) restarts. */
const CYCLE_MS = 4800;

/**
 * Animated "MTM Autorizații" lockup — scanline reveals the letters, a seal
 * stamps in at the end. Replays on a loop via a reflow-reset (CSS animations
 * can't natively repeat with per-letter delays without re-triggering them).
 */
export function AnimatedBrandMark({ className }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      const el = ref.current;
      if (!el) return;
      const nodes = el.querySelectorAll<HTMLElement>(".fx");
      nodes.forEach((n) => {
        n.style.animation = "none";
      });
      void el.offsetWidth;
      nodes.forEach((n) => {
        n.style.animation = "";
      });
    }, CYCLE_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <span
      ref={ref}
      className={cn("relative inline-flex items-center gap-3", className)}
    >
      <span
        aria-hidden="true"
        className="fx animate-brand-scan pointer-events-none absolute inset-y-0 w-[2px] rounded-full bg-primary shadow-[0_0_10px_1px_rgba(0,141,218,0.7)]"
      />

      <SealIcon />

      <span className="font-display text-2xl leading-none tracking-tight">
        <span className="inline-flex">
          {MTM.map((ch, i) => (
            <span
              key={`m-${i}`}
              className="fx animate-letter-in inline-block font-extrabold text-foreground"
              style={{ animationDelay: `${150 + i * 70}ms` }}
            >
              {ch}
            </span>
          ))}
        </span>
        <span className="ml-1.5 inline-flex text-muted">
          {AUTH.map((ch, i) => (
            <span
              key={`a-${i}`}
              className="fx animate-letter-in inline-block font-medium"
              style={{ animationDelay: `${450 + i * 45}ms` }}
            >
              {ch}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}

function SealIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="fx animate-stamp-in h-11 w-11 shrink-0"
      style={{ animationDelay: "1500ms" }}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="14.5" fill="url(#seal-motion-g)" />
      <path
        d="M10 17 14 21 22 11"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <defs>
        <linearGradient
          id="seal-motion-g"
          x1="3"
          y1="3"
          x2="29"
          y2="29"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#008DDA" />
          <stop offset="1" stopColor="#1E3E62" />
        </linearGradient>
      </defs>
    </svg>
  );
}
