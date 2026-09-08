import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#070D17" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Autorizații.ro — Licențiere fără blocaje administrative",
    template: "%s · Autorizații.ro",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "autorizatie AFER",
    "licenta IGPR sisteme de alarmare",
    "autorizatie ISU securitate la incendiu",
    "atestat ANRE energie electrica",
    "autorizatie ANRE gaze naturale",
    "certificare AGFR gaze fluorurate",
    "certificari ISO",
    "consultanta licentiere",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  verification: {
    google: "RwexBui29hGMF4XUTMk_RxKN9sBHI9cKQuFgV9pxZmA",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: site.url,
    siteName: site.name,
    title: "Autorizații.ro — Licențiere fără blocaje administrative",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Autorizații.ro — Licențiere fără blocaje administrative",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: site.url },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ro"
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
          >
            Sari la conținut
          </a>
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: site.name,
              url: site.url,
              email: site.email,
              telephone: site.phone,
              areaServed: "RO",
              description: site.description,
              slogan: "Licențiere fără blocaje administrative.",
            }),
          }}
        />
      </body>
    </html>
  );
}
