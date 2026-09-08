import type { LucideIcon } from "lucide-react";
import {
  Award,
  Flame,
  Fuel,
  ShieldAlert,
  Snowflake,
  TrainFront,
  Zap,
} from "lucide-react";

export type Faq = { q: string; a: string };

export type Service = {
  id: string;
  slug: string;
  icon: LucideIcon;
  name: string;
  /** titlu scurt pentru card / meniu */
  cardTitle: string;
  short: string;
  description: string;
  authority: string;
  legal: string;
  deliverables: string[];
  /** interval orientativ de obținere, în săptămâni */
  weeks: [number, number];
  /** foto Unsplash pentru pagina de serviciu (cale în /public) */
  image: string;
  imageAlt: string;
  /** paragraf introductiv pentru pagina dedicată */
  intro: string;
  whoNeedsIt: string[];
  documents: string[];
  faq: Faq[];
  seoTitle: string;
  seoDescription: string;
};

/**
 * Cele 7 servicii. Descrierile sunt redactate din surse publice despre fiecare
 * autoritate emitentă (AFER, IGPR, IGSU, ANRE, AGFR, RENAR).
 */
export const SERVICES: Service[] = [
  {
    id: "afer",
    slug: "autorizatie-afer",
    icon: TrainFront,
    name: "Autorizație AFER — furnizor feroviar",
    cardTitle: "Autorizație AFER",
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
    image: "/img/servicii/afer.jpg",
    imageAlt: "Infrastructură feroviară — șine și macazuri",
    intro:
      "Activitățile de construcție, modernizare, reparare și întreținere a materialului rulant și a infrastructurii feroviare pot fi desfășurate numai de agenți economici autorizați și supravegheați tehnic de Autoritatea Feroviară Română. Te ducem prin tot procesul de autorizare ca furnizor feroviar.",
    whoNeedsIt: [
      "Producători de produse feroviare critice (material rulant, componente, subansamble)",
      "Firme de execuție lucrări la infrastructura feroviară, de metrou sau de tramvai",
      "Prestatori de servicii de mentenanță, reparații sau revizii pentru operatori feroviari",
      "Furnizori pentru CFR, Metrorex, STB sau operatori privați de transport feroviar",
    ],
    documents: [
      "Certificat constatator ONRC cu obiectul de activitate relevant",
      "Organigramă și dovada personalului tehnic calificat",
      "Lista dotărilor, echipamentelor și a spațiilor de lucru",
      "Documentația sistemului de management al calității",
      "Documentație tehnică pentru produsele / serviciile supuse autorizării",
    ],
    faq: [
      {
        q: "Care e diferența dintre AFF, ATF și COTF?",
        a: "AFF (Autorizația de Furnizor Feroviar) atestă că firma poate produce sau presta o categorie de produse/servicii critice. ATF (Agrementul Tehnic Feroviar) și COTF (Certificatul de Omologare Tehnică Feroviară) se referă la un anumit produs sau tip de produs. De regulă ai nevoie de mai multe dintre ele, în funcție de activitate.",
      },
      {
        q: "Cât este valabilă autorizația AFER?",
        a: "Autorizația de furnizor feroviar se acordă pe perioadă determinată și se vizează / reînnoiește periodic. Îți urmărim termenele și pregătim documentația de menținere.",
      },
      {
        q: "Am nevoie de sistem de management al calității certificat?",
        a: "Da, AFER cere un sistem de management adecvat activității. Dacă nu ai deja ISO 9001, îl putem implementa în paralel cu dosarul AFER.",
      },
    ],
    seoTitle: "Autorizație AFER — furnizor feroviar (căi ferate, metrou, STB)",
    seoDescription:
      "Consultanță pentru obținerea autorizației de furnizor feroviar AFER (AFF, ATF, COTF). Dosar complet, sistem de management, asistență la audit.",
  },
  {
    id: "igpr",
    slug: "licenta-igpr-sisteme-alarmare",
    icon: ShieldAlert,
    name: "Licență IGPR — sisteme de alarmare",
    cardTitle: "Licență IGPR (alarme)",
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
    image: "",
    imageAlt: "Sisteme de alarmare împotriva efracției",
    intro:
      "Proiectarea, instalarea, modificarea și întreținerea sistemelor de alarmare împotriva efracției se pot face numai de societăți licențiate de Inspectoratul General al Poliției Române. Pregătim dosarul de licențiere și atestarea personalului tehnic.",
    whoNeedsIt: [
      "Firme care instalează sisteme de alarmă, control acces sau supraveghere video",
      "Integratori de securitate care preiau lucrări pentru clienți comerciali sau industriali",
      "Societăți de pază care își extind activitatea către sisteme tehnice de securitate",
    ],
    documents: [
      "Certificat constatator ONRC cu activitatea de sisteme de alarmare",
      "Contracte de muncă și atestate pentru personalul tehnic",
      "Dovada spațiului și a dotărilor tehnice",
      "Regulamentul de organizare și funcționare",
      "Cazier judiciar pentru asociați și administratori",
    ],
    faq: [
      {
        q: "Personalul are nevoie de atestat individual?",
        a: "Da. Tehnicienii care proiectează sau instalează sisteme de alarmare trebuie să dețină atestat profesional. Organizăm cursul și examinarea și includem atestatele în dosarul firmei.",
      },
      {
        q: "Licența se acordă pe județ sau la nivel național?",
        a: "Licența de funcționare este națională, dar trebuie notificată la inspectoratele județene unde desfășori activitate. Ne ocupăm și de aceste notificări.",
      },
    ],
    seoTitle: "Licență IGPR sisteme de alarmare — proiectare și instalare antiefracție",
    seoDescription:
      "Obținerea licenței IGPR pentru sisteme de alarmare împotriva efracției: dosar de licențiere, proceduri, atestare personal tehnic.",
  },
  {
    id: "isu",
    slug: "autorizatie-isu-securitate-incendiu",
    icon: Flame,
    name: "Autorizație ISU — securitate la incendiu",
    cardTitle: "Autorizație ISU",
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
    image: "",
    imageAlt: "Securitate la incendiu",
    intro:
      "Avizul de securitate la incendiu se obține înainte de construire sau amenajare, iar autorizația la finalizarea lucrărilor și înainte de punerea în funcțiune. Elaborăm scenariul de securitate la incendiu și gestionăm dosarul la Inspectoratul pentru Situații de Urgență.",
    whoNeedsIt: [
      "Investitori și dezvoltatori de construcții civile, comerciale sau industriale",
      "Firme care amenajează spații comerciale, HoReCa, birouri sau hale",
      "Proprietari de clădiri care schimbă destinația sau extind un spațiu existent",
    ],
    documents: [
      "Certificat de urbanism și documentația de proiectare (DTAC / PT)",
      "Scenariul de securitate la incendiu întocmit de un evaluator autorizat",
      "Planuri de arhitectură, instalații de detecție și stingere",
      "Documente privind performanța la foc a materialelor și elementelor de construcție",
    ],
    faq: [
      {
        q: "Când am nevoie de aviz și când de autorizație ISU?",
        a: "Avizul se cere în faza de proiect, înainte de a începe lucrările. Autorizația se obține după finalizare, pe baza documentelor „as-built” și a verificărilor instalațiilor. Îți spunem exact ce se aplică proiectului tău la analiza gratuită.",
      },
      {
        q: "Ce se întâmplă dacă funcționez fără autorizație ISU?",
        a: "Funcționarea fără autorizație, când aceasta este obligatorie, se sancționează contravențional și poate atrage oprirea activității. Dacă ești deja în funcțiune, putem construi un plan de intrare în legalitate.",
      },
    ],
    seoTitle: "Autorizație ISU securitate la incendiu — aviz și scenariu de incendiu",
    seoDescription:
      "Aviz și autorizație de securitate la incendiu de la IGSU: scenariu de securitate la incendiu, documentație tehnică, reprezentare la ISU.",
  },
  {
    id: "anre-electric",
    slug: "atestat-anre-energie-electrica",
    icon: Zap,
    name: "Atestat ANRE — energie electrică",
    cardTitle: "Atestat ANRE electric",
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
    image: "/img/servicii/anre-electric.jpg",
    imageAlt: "Tehnician lucrând la un tablou electric",
    intro:
      "Firmele care proiectează sau execută instalații electrice racordate la rețeaua de distribuție au nevoie de atestat ANRE, pe tipuri (A, B, C, D, E) în funcție de complexitatea lucrărilor. Pregătim dosarul de atestare și te asistăm la evaluare.",
    whoNeedsIt: [
      "Firme de instalații electrice care execută branșamente și instalații de utilizare",
      "Proiectanți de instalații electrice de joasă și medie tensiune",
      "Constructori care vor să presteze lucrări electrice cu forțe proprii",
    ],
    documents: [
      "Certificat constatator ONRC cu activitatea de instalații electrice",
      "Diplome, legitimații și adeverințe pentru electricienii autorizați ANRE",
      "Lista aparatelor de măsură și control, verificate metrologic",
      "Dovada sediului și a punctelor de lucru",
    ],
    faq: [
      {
        q: "Ce tip de atestat îmi trebuie?",
        a: "Depinde de lucrări: tip A (proiectare) și tip B (execuție) pentru instalații de utilizare, tipuri C–E pentru rețele și posturi de transformare. La analiza gratuită stabilim exact ce tipuri se potrivesc activității tale.",
      },
      {
        q: "Electricienii trebuie să fie angajați ai firmei?",
        a: "Da, ANRE cere ca electricienii autorizați să aibă contract de muncă cu firma solicitantă. Te ajutăm și cu autorizarea individuală a electricienilor, dacă e nevoie.",
      },
    ],
    seoTitle: "Atestat ANRE energie electrică — proiectare și execuție instalații electrice",
    seoDescription:
      "Obținerea atestatului ANRE pentru instalații electrice (tip A–E): dosar de atestare, documentație personal și dotări, asistență la evaluarea ANRE.",
  },
  {
    id: "anre-gaze",
    slug: "autorizatie-anre-gaze-naturale",
    icon: Fuel,
    name: "Autorizație ANRE — gaze naturale",
    cardTitle: "Autorizație ANRE gaze",
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
    image: "/img/servicii/anre-gaze.jpg",
    imageAlt: "Sudură la o conductă industrială",
    intro:
      "Proiectarea și execuția sistemelor de distribuție a gazelor naturale și a instalațiilor de utilizare se fac de operatori economici autorizați ANRE (tip PDS/EDS pentru distribuție, PIU/EIU pentru instalații de utilizare). Îți pregătim dosarul complet.",
    whoNeedsIt: [
      "Firme de instalații termice și de gaze care execută instalații de utilizare",
      "Proiectanți de sisteme de distribuție și instalații de gaze naturale",
      "Constructori de rețele de distribuție pentru operatorii de distribuție",
    ],
    documents: [
      "Certificat constatator ONRC cu activitatea de instalații de gaze",
      "Legitimații de instalatori autorizați ANRE (proiectare / execuție)",
      "Lista dotărilor și a aparatelor de verificare, cu buletine de verificare",
      "Documentația sistemului de management al calității",
    ],
    faq: [
      {
        q: "Care e diferența dintre autorizația de distribuție și cea de instalații de utilizare?",
        a: "Autorizația de tip PDS/EDS acoperă rețelele de distribuție (conducte, branșamente, stații). Tipul PIU/EIU acoperă instalațiile de utilizare din interiorul clădirilor, până la aparatele consumatoare. Multe firme au nevoie de ambele.",
      },
      {
        q: "Instalatorii trebuie reautorizați periodic?",
        a: "Da, legitimațiile de instalator autorizat ANRE au valabilitate limitată și se prelungesc. Îți urmărim termenele pentru firmă și pentru fiecare instalator.",
      },
    ],
    seoTitle: "Autorizație ANRE gaze naturale — proiectare și execuție sisteme de gaze",
    seoDescription:
      "Obținerea autorizației ANRE pentru gaze naturale (PDS/EDS, PIU/EIU): dosar de autorizare, documentație instalatori autorizați, asistență la evaluare.",
  },
  {
    id: "agfr",
    slug: "certificare-agfr-gaze-fluorurate",
    icon: Snowflake,
    name: "Certificare AGFR — gaze fluorurate (F-gaze)",
    cardTitle: "Certificare AGFR",
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
    image: "",
    imageAlt: "Frig, climatizare și pompe de căldură",
    intro:
      "Orice lucrare la instalații de frig, climatizare sau pompe de căldură care conțin gaze fluorurate cu efect de seră se poate face numai de firme și persoane certificate, conform Regulamentului (UE) 517/2014. Îți obținem certificatul de firmă și certificăm personalul.",
    whoNeedsIt: [
      "Firme de instalare și service climatizare, ventilație și pompe de căldură",
      "Firme de frig comercial și industrial (magazine, depozite frigorifice, HoReCa)",
      "Echipe de mentenanță internă care lucrează pe echipamente proprii cu F-gaze",
    ],
    documents: [
      "Certificat constatator ONRC cu activitatea de instalații frigorifice / climatizare",
      "Certificate de personal categoria I–IV (recuperare, verificare etanșeitate, instalare)",
      "Lista echipamentelor și a sculelor specifice (detectoare, recuperatoare, balanțe)",
      "Proceduri de lucru și registru de evidență a agenților frigorifici",
    ],
    faq: [
      {
        q: "Ce categorie de certificare de personal îmi trebuie?",
        a: "Categoria I acoperă toate operațiunile (inclusiv recuperarea agentului frigorific), categoriile II–IV sunt limitate în funcție de cantitatea de agent și tipul de operațiune. Cele mai multe firme au nevoie de personal categoria I.",
      },
      {
        q: "Certificatul de firmă e același lucru cu certificatul de personal?",
        a: "Nu. Firma primește un certificat de operator economic, iar fiecare tehnician are propriul certificat de personal. Firma trebuie să aibă cel puțin un angajat certificat pentru categoria de lucrări pe care le prestează.",
      },
    ],
    seoTitle: "Certificare AGFR gaze fluorurate (F-gaze) — frig, climatizare, pompe de căldură",
    seoDescription:
      "Certificare AGFR pentru firme și personal care lucrează cu gaze fluorurate: dosar categoria I–IV, instruire și certificare personal, proceduri F-gaze.",
  },
  {
    id: "iso",
    slug: "certificari-iso",
    icon: Award,
    name: "Certificări ISO",
    cardTitle: "Certificări ISO",
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
    image: "/img/servicii/iso.jpg",
    imageAlt: "Ședință de audit — documente și laptop pe masă",
    intro:
      "Certificările ISO sunt cerute frecvent la licitații, în relația cu clienți mari sau ca pre-condiție pentru alte autorizări (AFER, ANRE). Implementăm sistemul de management adaptat firmei tale și te ducem până la certificarea de către un organism acreditat RENAR.",
    whoNeedsIt: [
      "Firme care participă la licitații publice sau private cu cerință de certificare ISO",
      "Furnizori care trebuie să demonstreze un sistem de management față de clienți mari",
      "Firme în curs de autorizare AFER / ANRE, care au nevoie de ISO 9001 în paralel",
    ],
    documents: [
      "Organigramă și fișe de post",
      "Procese și fluxuri de lucru existente",
      "Evidențe privind instruirea personalului",
      "Registre de neconformități, reclamații și acțiuni corective",
    ],
    faq: [
      {
        q: "Cât durează implementarea unui sistem ISO?",
        a: "Pentru o firmă mică-medie, implementarea unui singur standard (ex. ISO 9001) durează de regulă 8–12 săptămâni, plus timpul de programare al auditului de certificare. Sistemele integrate (mai multe standarde) durează mai mult.",
      },
      {
        q: "Certificatul este recunoscut internațional?",
        a: "Da, dacă este emis de un organism acreditat (RENAR în România sau alt membru IAF). Lucrăm doar cu organisme acreditate, pentru ca certificatul să fie acceptat la licitații și de clienți externi.",
      },
    ],
    seoTitle: "Certificări ISO 9001, 14001, 45001 — implementare și audit de certificare",
    seoDescription:
      "Implementare și certificare ISO (9001, 14001, 45001, 27001, 50001) prin organisme acreditate RENAR: gap analysis, proceduri, instruire, asistență la audit.",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_OPTIONS = SERVICES.map((s) => ({
  value: s.id,
  label: s.name,
}));
