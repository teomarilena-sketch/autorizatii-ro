import { site } from "./site";

export type LegalBlock =
  | { h: string }
  | { p: string }
  | { ul: string[] };

export type LegalDoc = {
  slug: string;
  title: string;
  updated: string;
  intro: string;
  blocks: LegalBlock[];
};

const COMPANY = `${site.legalName} (denumită în continuare „Autorizații.ro")`;

export const LEGAL: Record<string, LegalDoc> = {
  "termeni-si-conditii": {
    slug: "termeni-si-conditii",
    title: "Termeni și condiții",
    updated: "2026-09-08",
    intro:
      "Acești termeni reglementează utilizarea site-ului autorizații.ro și relația precontractuală dintre vizitatori și Autorizații.ro. Prin utilizarea site-ului, ești de acord cu termenii de mai jos.",
    blocks: [
      { h: "1. Cine suntem" },
      {
        p: `Site-ul autorizații.ro este operat de ${COMPANY}, cu sediul în ${site.address}, înregistrată la Registrul Comerțului sub nr. ${site.cui}. Ne poți contacta la ${site.email} sau ${site.phone}.`,
      },
      { h: "2. Serviciile oferite" },
      {
        p: "Autorizații.ro oferă servicii de consultanță pentru obținerea autorizațiilor și licențelor în domenii reglementate (AFER, IGPR, ISU, ANRE, AGFR, certificări ISO). Descrierile de pe site au caracter informativ; oferta fermă și obligațiile părților se stabilesc prin contract scris.",
      },
      { h: "3. Formularul de contact" },
      {
        ul: [
          "Formularul de pe site se folosește exclusiv pentru solicitări de ofertă și informații.",
          "Transmiterea unei solicitări nu creează o obligație contractuală pentru niciuna dintre părți.",
          "Datele transmise sunt prelucrate conform Politicii de confidențialitate.",
        ],
      },
      { h: "4. Proprietate intelectuală" },
      {
        p: "Conținutul site-ului (texte, structură, elemente grafice) aparține Autorizații.ro sau este utilizat cu drept legal. Poți cita fragmente scurte cu indicarea sursei; reproducerea integrală necesită acordul nostru scris.",
      },
      { h: "5. Limitarea răspunderii" },
      {
        p: "Informațiile de pe site pot fi afectate de modificări legislative și nu constituie consultanță juridică personalizată. Autorizații.ro nu răspunde pentru decizii luate exclusiv pe baza conținutului informativ al site-ului, în lipsa unei analize a situației concrete.",
      },
      { h: "6. Legea aplicabilă" },
      {
        p: "Acești termeni sunt guvernați de legea română. Eventualele litigii se soluționează pe cale amiabilă sau, în lipsă, de instanțele competente de la sediul operatorului.",
      },
      { h: "7. Soluționarea alternativă a litigiilor (ANPC / SOL)" },
      {
        p: "Pentru consumatori, este disponibilă platforma europeană de soluționare online a litigiilor (SOL): ec.europa.eu/consumers/odr. De asemenea, poți sesiza Autoritatea Națională pentru Protecția Consumatorilor (anpc.ro).",
      },
      { h: "8. Modificări" },
      {
        p: "Putem actualiza acești termeni. Versiunea aplicabilă este cea publicată pe site la momentul utilizării, cu data ultimei actualizări indicată mai sus.",
      },
    ],
  },
  "politica-de-confidentialitate": {
    slug: "politica-de-confidentialitate",
    title: "Politica de confidențialitate",
    updated: "2026-09-08",
    intro:
      "Această politică explică ce date personale prelucrăm, în ce scop, pe ce temei și ce drepturi ai, conform Regulamentului (UE) 2016/679 (GDPR).",
    blocks: [
      { h: "1. Operatorul de date" },
      {
        p: `${COMPANY}, ${site.address}, ${site.cui}. Contact pentru protecția datelor: ${site.email}.`,
      },
      { h: "2. Ce date prelucrăm" },
      {
        ul: [
          "Date de identificare și contact: nume, telefon, email, denumirea firmei",
          "Detalii despre proiect / solicitare, transmise voluntar prin formular",
          "Date tehnice de navigare: adresă IP, tip de dispozitiv, pagini vizitate (prin analytics agregat)",
        ],
      },
      { h: "3. Scopurile și temeiurile prelucrării" },
      {
        ul: [
          "Răspuns la solicitări și transmiterea de oferte — temei: măsuri precontractuale la cererea ta (art. 6(1)(b) GDPR)",
          "Executarea contractului de consultanță, dacă se încheie — art. 6(1)(b) GDPR",
          "Îmbunătățirea site-ului prin statistici agregate — interes legitim (art. 6(1)(f) GDPR)",
          "Îndeplinirea obligațiilor legale (fiscale, contabile) — art. 6(1)(c) GDPR",
        ],
      },
      { h: "4. Cât timp păstrăm datele" },
      {
        p: "Datele din solicitările care nu se transformă în contract se păstrează maximum 12 luni. Datele aferente contractelor se păstrează pe durata relației contractuale și ulterior conform termenelor legale de arhivare (de regulă 5–10 ani pentru documente financiar-contabile).",
      },
      { h: "5. Cui divulgăm datele" },
      {
        ul: [
          "Proiectanți, verificatori și experți atestați implicați în dosarul tău, strict în acest scop",
          "Autoritățile emitente (AFER, IGPR, IGSU, ANRE, AGFR etc.), pentru depunerea dosarului",
          "Furnizori de servicii IT (găzduire, email, analytics), pe bază de contract și garanții adecvate",
          "Autorități publice, când există o obligație legală",
        ],
      },
      { h: "6. Transferuri în afara SEE" },
      {
        p: "Unii furnizori de servicii IT pot prelucra date în afara Spațiului Economic European. În aceste cazuri ne asigurăm că există garanții adecvate (clauze contractuale standard sau decizii de adecvare).",
      },
      { h: "7. Drepturile tale" },
      {
        ul: [
          "Acces, rectificare, ștergere, restricționare și portabilitate a datelor",
          "Opoziție la prelucrarea bazată pe interes legitim",
          "Retragerea consimțământului, unde prelucrarea se bazează pe consimțământ",
          "Plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (dataprotection.ro)",
        ],
      },
      {
        p: `Îți poți exercita drepturile printr-o cerere la ${site.email}. Răspundem în cel mult 30 de zile.`,
      },
    ],
  },
  "politica-de-cookies": {
    slug: "politica-de-cookies",
    title: "Politica de cookie-uri",
    updated: "2026-09-08",
    intro:
      "Această politică explică ce cookie-uri și tehnologii similare folosim pe autorizații.ro și cum îți poți gestiona preferințele.",
    blocks: [
      { h: "1. Ce sunt cookie-urile" },
      {
        p: "Cookie-urile sunt fișiere text mici stocate în browserul tău. Ele permit funcționarea corectă a site-ului și, cu acordul tău, măsurarea traficului.",
      },
      { h: "2. Ce cookie-uri folosim" },
      {
        ul: [
          "Strict necesare: rețin preferința de temă (deschis / închis) și consimțământul pentru cookie-uri. Nu necesită acord.",
          "De analiză (opționale): statistici agregate de trafic prin Vercel Web Analytics, fără profilare individuală și fără vânzarea datelor. Se activează doar cu acordul tău.",
        ],
      },
      { h: "3. Gestionarea preferințelor" },
      {
        p: "La prima vizită poți accepta sau respinge cookie-urile de analiză din bannerul afișat. Îți poți schimba oricând alegerea ștergând datele site-ului din browser. Poți bloca toate cookie-urile din setările browserului, dar unele funcții ale site-ului pot fi afectate.",
      },
      { h: "4. Durata" },
      {
        p: "Cookie-urile de preferință și consimțământ se păstrează până la 12 luni. Cookie-urile de sesiune se șterg la închiderea browserului.",
      },
      { h: "5. Contact" },
      { p: `Întrebări despre cookie-uri: ${site.email}.` },
    ],
  },
};

export const LEGAL_LINKS = Object.values(LEGAL).map((d) => ({
  label: d.title,
  href: `/${d.slug}`,
}));
