# Autorizații.ro

Landing page premium pentru **Autorizații.ro** — platformă digitală de consultanță
pentru obținerea autorizațiilor și licențelor în domenii reglementate din România
(AFER, IGPR, ISU, ANRE energie și gaze, AGFR, certificări ISO, mediu).

## Stack

| Zonă        | Tehnologie                              |
| ----------- | --------------------------------------- |
| Framework   | Next.js 15 (App Router) + TypeScript    |
| Styling     | Tailwind CSS 3.4                        |
| Animații    | Framer Motion 11                        |
| Iconografie | Lucide React                            |
| UI patterns | Shadcn-style (`Button`, `Badge`, `cn`)  |

## Rulare locală

```bash
npm install
npm run dev
```

Aplicația pornește pe [http://localhost:3000](http://localhost:3000).

## Build de producție

```bash
npm run build
npm run start
```

## Structură

```
app/
  layout.tsx        # fonturi (Inter + Plus Jakarta Sans), metadate SEO, JSON-LD
  page.tsx          # compune toate secțiunile landing page-ului
  globals.css       # Tailwind + utilitare (.glass, .text-gradient)
  api/lead/route.ts # endpoint POST pentru formularul de contact
  sitemap.ts / robots.ts
components/
  site-header.tsx        # nav sticky + pill anunț + drawer mobil animat
  hero.tsx               # hero split + metrici + panou „status dosare” (exemplu)
  authorities-bar.tsx    # strip cu autoritățile emitente (AFER, ANRE, IGPR…)
  duration-calculator.tsx# modal interactiv „Calculează durata obținerii”
  services.tsx           # grilă 8 servicii, card-uri cu detalii expandabile
  expertise.tsx          # sectoare de clienți + model de lucru
  process.tsx            # timeline interactiv în 4 pași
  comparison.tsx         # tabel „fără asistență vs. cu Autorizații.ro”
  cta-band.tsx           # bandă CTA intermediară
  lead-form.tsx          # formular validat, stări loading/success/error
  site-footer.tsx        # footer complet
  ui/                    # Button, Badge
  motion/reveal.tsx      # reveal la scroll (CSS, cu fallback garantat)
lib/
  site.ts           # date centralizate (nume, contact, meniu)
  services.ts       # cele 8 servicii (autoritate, temei legal, livrabile)
  utils.ts          # `cn()` (clsx + tailwind-merge)
```

## Personalizare rapidă

- **Date de contact / meniu:** `lib/site.ts`
- **Paletă de culori:** `tailwind.config.ts` → `theme.extend.colors`
- **Conținut servicii:** `components/services.tsx` → `SERVICES`
- **Pași proces:** `components/process.tsx` → `STEPS`

## Formular de contact

`POST /api/lead` validează server-side și, momentan, doar loghează lead-ul.
Pentru producție, decomentează în `app/api/lead/route.ts` integrarea dorită
(Resend / SendGrid / CRM / webhook Slack) și adaugă cheile în `.env.local`
(vezi `.env.example`).

## Performanță

- Fonturi self-hosted via `next/font` (fără request extern, fără layout shift)
- Zero scripturi render-blocking; animații gated pe `prefers-reduced-motion`
- `optimizePackageImports` pentru `lucide-react` și `framer-motion`
- Imagini: folosește `next/image` când adaugi fotografii reale

## Înainte de lansare

- Completează datele reale în `lib/site.ts` (câmpurile marcate `TODO`: telefon,
  email, adresă, denumire firmă, CUI).
- Conectează formularul (`app/api/lead/route.ts`) la un serviciu de email/CRM.
- Adaugă paginile legale reale (Termeni, Confidențialitate, Cookie, GDPR) —
  linkurile din footer sunt momentan placeholder (`#`).
- Verifică statisticile din hero și înlocuiește-le dacă ai date proprii.
