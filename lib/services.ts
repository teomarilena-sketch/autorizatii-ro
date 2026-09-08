import type { LucideIcon } from "lucide-react";
import {
  Award,
  Flame,
  Fuel,
  Leaf,
  ShieldAlert,
  Snowflake,
  TrainFront,
  Zap,
} from "lucide-react";

export type Service = {
  id: string;
  slug: string;
  icon: LucideIcon;
  name: string;
  short: string;
  description: string;
  authority: string;
  legal: string;
  deliverables: string[];
  /** interval orientativ de obținere, în săptămâni */
  weeks: [number, number];
};

/**
 * Cele 8 servicii. Descrierile sunt redactate din surse publice despre fiecare
 * autoritate emitentă (AFER, IGPR, IGSU, ANRE, AGFR, RENAR, APM).
 */
export const SERVICES: Service[] = [
  {
    id: "afer",
    slug: "autorizatie-afer",
    icon: TrainFront,
    name: "Autorizație AFER — furnizor feroviar",
    short: "Căi ferate, metrou și transport urban (STB)",
    description:
      "Autorizația de furnizor feroviar (AFF), agrementul tehnic feroviar (ATF) și omologarea tehnică feroviară (COTF) pentru producători și prestatori de produse și servicii critice pentru transportul feroviar, cu metroul și cu tramvaiul.",
    authority: "Autoritatea Feroviară Română (AFER)",
    legal: "OMT 290/2000",
    deliverables: [
      "Dosar de autorizare AFF / ATF / COTF",
      "Manualul sistemului de management",
      "Asistență la auditul AFER",
    ],
    weeks: [10, 20],
  },
  {
    id: "igpr",
    slug: "licenta-igpr-sisteme-alarmare",
    icon: ShieldAlert,
    name: "Licență IGPR — sisteme de alarmare",
    short: "Proiectare, instalare și mentenanță sisteme antiefracție",
    description:
      "Licența de funcționare pentru societățile care proiectează, instalează, modifică sau întrețin sisteme de alarmare împotriva efracției, inclusiv atestarea personalului tehnic.",
    authority: "Inspectoratul General al Poliției Române (IGPR)",
    legal: "Legea 333/2003 · HG 301/2012",
    deliverables: [
      "Dosar de licențiere IGPR",
      "Proceduri și documentație tehnică",
      "Atestate personal tehnic",
    ],
    weeks: [8, 16],
  },
  {
    id: "isu",
    slug: "autorizatie-isu-securitate-incendiu",
    icon: Flame,
    name: "Autorizație ISU — securitate la incendiu",
    short: "Aviz și autorizație de securitate la incendiu",
    description:
      "Scenariul de securitate la incendiu, documentația tehnică și obținerea avizului și autorizației de securitate la incendiu pentru construcții și amenajări, conform cerințelor IGSU.",
    authority: "Inspectoratul General pentru Situații de Urgență (IGSU)",
    legal: "Legea 307/2006 · HG 571/2016",
    deliverables: [
      "Scenariu de securitate la incendiu",
      "Documentație pentru aviz / autorizație",
      "Reprezentare la ISU județean",
    ],
    weeks: [6, 12],
  },
  {
    id: "anre-electric",
    slug: "atestat-anre-energie-electrica",
    icon: Zap,
    name: "Atestat ANRE — energie electrică",
    short: "Proiectare și executare instalații electrice",
    description:
      "Atestatul ANRE pentru proiectarea și/sau executarea instalațiilor electrice — de la instalații de utilizare până la linii și posturi de transformare de medie tensiune (până la 20 kV).",
    authority: "Autoritatea Națională de Reglementare în domeniul Energiei (ANRE)",
    legal: "Legea 123/2012 · Regulament ANRE",
    deliverables: [
      "Dosar de atestare (tip A / B / C / D / E)",
      "Documentație personal calificat și dotări",
      "Asistență la evaluarea ANRE",
    ],
    weeks: [6, 12],
  },
  {
    id: "anre-gaze",
    slug: "autorizatie-anre-gaze-naturale",
    icon: Fuel,
    name: "Autorizație ANRE — gaze naturale",
    short: "Proiectare și execuție sisteme de gaze naturale",
    description:
      "Autorizația ANRE pentru proiectarea și execuția sistemelor de distribuție și a instalațiilor de utilizare a gazelor naturale (tip PDS/EDS și PIU/EIU).",
    authority: "Autoritatea Națională de Reglementare în domeniul Energiei (ANRE)",
    legal: "Legea 123/2012 · Regulament ANRE",
    deliverables: [
      "Dosar de autorizare gaze naturale",
      "Documentație instalatori autorizați",
      "Asistență la evaluarea ANRE",
    ],
    weeks: [6, 12],
  },
  {
    id: "agfr",
    slug: "certificare-agfr-gaze-fluorurate",
    icon: Snowflake,
    name: "Certificare AGFR — gaze fluorurate (F-gaze)",
    short: "Frig, climatizare și pompe de căldură",
    description:
      "Certificatul pentru operatorii economici și personalul care instalează, întreține, repară, dezafectează sau verifică etanșeitatea echipamentelor cu gaze fluorurate cu efect de seră — instalații frigorifice, de climatizare și pompe de căldură.",
    authority: "Asociația Generală a Frigotehniștilor din România (AGFR)",
    legal: "Reg. (UE) 517/2014 · Reg. (UE) 2015/2067",
    deliverables: [
      "Dosar certificare firmă (categoria I–IV)",
      "Instruire și certificare personal",
      "Registru echipamente și proceduri F-gaze",
    ],
    weeks: [4, 8],
  },
  {
    id: "iso",
    slug: "certificari-iso",
    icon: Award,
    name: "Certificări ISO",
    short: "ISO 9001, 14001, 45001, 27001, 50001",
    description:
      "Implementarea și certificarea sistemelor de management: calitate (9001), mediu (14001), sănătate și securitate ocupațională (45001), securitatea informației (27001) și energie (50001), prin organisme acreditate RENAR.",
    authority: "Organisme de certificare acreditate RENAR",
    legal: "Standarde ISO / IAF",
    deliverables: [
      "Analiză de conformitate (gap analysis)",
      "Manual, proceduri și instruire",
      "Asistență la auditul de certificare",
    ],
    weeks: [8, 16],
  },
  {
    id: "mediu",
    slug: "consultanta-mediu",
    icon: Leaf,
    name: "Consultanță de mediu",
    short: "Acord, autorizație și autorizație integrată de mediu",
    description:
      "Memorii de prezentare, studii de evaluare a impactului, acordul și autorizația de mediu (inclusiv autorizația integrată de mediu) și raportările periodice către APM și Garda de Mediu.",
    authority: "Agenția pentru Protecția Mediului (APM / ANPM)",
    legal: "OUG 195/2005 · Legea 292/2018",
    deliverables: [
      "Memoriu / studiu EIM",
      "Dosar acord și autorizație de mediu",
      "Plan de conformare și raportări",
    ],
    weeks: [10, 20],
  },
];

export const SERVICE_OPTIONS = SERVICES.map((s) => ({
  value: s.id,
  label: s.name,
}));
