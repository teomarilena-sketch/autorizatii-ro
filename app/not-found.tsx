import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="font-display text-6xl font-extrabold text-foreground">404</p>
      <h1 className="mt-3 font-display text-xl font-bold text-foreground">
        Pagina nu a fost găsită
      </h1>
      <p className="mt-2 max-w-sm text-sm text-muted">
        Linkul accesat nu există sau a fost mutat.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Înapoi la pagina principală
      </Link>
    </main>
  );
}
