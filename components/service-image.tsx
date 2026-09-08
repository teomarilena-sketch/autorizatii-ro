import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Foto de serviciu cu tratament consistent. Dacă `src` lipsește, afișează un
 * panou cu gradient + iconiță (aceeași estetică cu restul site-ului).
 */
export function ServiceImage({
  src,
  alt,
  icon: Icon,
  label,
  priority = false,
  className,
}: {
  src?: string;
  alt: string;
  icon: LucideIcon;
  label?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[16/7] w-full overflow-hidden rounded-3xl border border-border",
        className,
      )}
    >
      {src ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 960px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
          <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 backdrop-blur">
            <Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
        </>
      ) : (
        <div className="section-invert absolute inset-0 flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-grid-slate bg-[size:40px_40px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-indigo/40 blur-3xl" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">
            <Icon className="h-9 w-9 text-white" aria-hidden="true" />
          </div>
          {label && (
            <p className="relative mt-4 max-w-xs text-center text-sm font-medium text-white/75">
              {label}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
