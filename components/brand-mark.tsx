import { cn } from "@/lib/utils";

/** Abstract shield / badge mark used in the header and footer. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
    >
      <path
        d="M16 2.5 27 6.4v9.2c0 7.2-4.7 11.6-11 13.9C9.7 27.2 5 22.8 5 15.6V6.4L16 2.5Z"
        fill="url(#bm-g)"
      />
      <path
        d="M11 16.2 14.6 20 21.5 12.4"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="bm-g"
          x1="5"
          y1="3"
          x2="27"
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

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-lg font-extrabold tracking-tight text-foreground",
        className,
      )}
    >
      Autorizații<span className="text-primary">.ro</span>
    </span>
  );
}
