"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll-reveal that CANNOT leave content hidden.
 *
 * - Server / no-JS / reduced-motion / above-the-fold → rendered fully visible,
 *   no animation.
 * - Below-the-fold at mount → briefly armed (hidden), then revealed when it
 *   scrolls into view. Hard fallbacks guarantee it reveals anyway:
 *     • 2s timer (covers fast scroll / anchor jumps / throttled observers)
 *     • reveal on tab becoming visible (covers background-tab throttling)
 * Uses CSS transitions (not rAF) so a backgrounded tab still resolves correctly.
 */

type Phase = "static" | "armed" | "revealed";

function useScrollReveal(ref: React.RefObject<HTMLElement | null>) {
  const [phase, setPhase] = useState<Phase>("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const belowFold = rect.top > window.innerHeight * 0.9;
    if (!belowFold) return; // already in view — show immediately, no animation

    setPhase("armed");

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setPhase("revealed");
      cleanup();
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) reveal();
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);

    const timer = window.setTimeout(reveal, 2000);
    const onVisible = () => {
      if (document.visibilityState === "visible") reveal();
    };
    document.addEventListener("visibilitychange", onVisible);

    function cleanup() {
      io.disconnect();
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVisible);
    }
    return cleanup;
  }, [ref]);

  return phase;
}

function revealStyle(
  phase: Phase,
  delay: number,
  y: number,
): React.CSSProperties {
  const hidden = phase === "armed";
  return {
    opacity: hidden ? 0 : 1,
    transform: hidden ? `translateY(${y}px)` : "none",
    transition:
      phase === "static"
        ? undefined
        : `opacity 600ms ease-out ${delay}s, transform 600ms ease-out ${delay}s`,
    willChange: hidden ? "opacity, transform" : undefined,
  };
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 20 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const phase = useScrollReveal(ref);
  return (
    <div ref={ref} className={className} style={revealStyle(phase, delay, y)}>
      {children}
    </div>
  );
}

/** Staggered reveal for a grid/list. One observer on the wrapper. */
export function RevealStagger({
  children,
  className,
  step = 0.06,
  y = 16,
}: {
  children: ReactNode[];
  className?: string;
  step?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const phase = useScrollReveal(ref);
  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div key={i} className="h-full" style={revealStyle(phase, i * step, y)}>
          {child}
        </div>
      ))}
    </div>
  );
}
