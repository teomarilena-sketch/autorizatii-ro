export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date */
  date: string;
  readingMinutes: number;
  tag: string;
  seoTitle: string;
  seoDescription: string;
  body: Block[];
};

export const POSTS: Post[] = [
  {
    slug: "cat-dureaza-autorizatie-isu",
    title: "Cât durează obținerea unei autorizații ISU și de ce se blochează dosarele",
    excerpt:
      "Termenele reale pentru avizul și autorizația de securitate la incendiu, etapele procesului și cele mai frecvente motive de respingere.",
    date: "2026-09-08",
    readingMinutes: 6,
    tag: "ISU",
    seoTitle: "Cât durează autorizația ISU (securitate la incendiu) — ghid 2026",
    seoDescription:
      "Termene reale pentru avizul și autorizația de securitate la incendiu, etapele la IGSU și motivele frecvente de respingere a dosarelor.",
    body: [
      {
        type: "p",
        text: "Autorizația de securitate la incendiu este una dintre cele mai des întâlnite condiții pentru punerea în funcțiune a unui spațiu comercial, a unei hale sau a unei clădiri de birouri. În practică, durata de obținere variază mult — de la câteva săptămâni la câteva luni — în funcție de tipul construcției, de calitatea documentației și de încărcarea inspectoratului județean.",
      },
      { type: "h2", text: "Aviz sau autorizație: care e diferența" },
      {
        type: "p",
        text: "Avizul de securitate la incendiu se solicită în faza de proiect, înainte de a începe lucrările de construire sau de amenajare. Autorizația se obține la finalizarea lucrărilor, pe baza documentelor „as-built” și a verificării instalațiilor de detecție, semnalizare și stingere.",
      },
      {
        type: "p",
        text: "Multe firme cred că au nevoie doar de autorizație și descoperă târziu că, pentru situația lor, era obligatoriu și avizul în faza de proiect. Din acest motiv, primul pas util este o analiză de eligibilitate care stabilește exact ce se aplică.",
      },
      { type: "h2", text: "Etapele procesului" },
      {
        type: "ol",
        items: [
          "Întocmirea scenariului de securitate la incendiu de către un evaluator autorizat",
          "Elaborarea documentației tehnice: planuri de arhitectură, instalații, performanța la foc a materialelor",
          "Depunerea dosarului la Inspectoratul pentru Situații de Urgență județean",
          "Analiza dosarului și, eventual, solicitări de completare",
          "Verificarea în teren a instalațiilor (pentru autorizație)",
          "Emiterea avizului sau a autorizației",
        ],
      },
      { type: "h2", text: "Termene orientative" },
      {
        type: "p",
        text: "Pentru un spațiu comercial mediu, cu documentație completă și corectă, avizul se poate obține în 3–6 săptămâni. Autorizația, care presupune și verificarea instalațiilor, durează de obicei 6–12 săptămâni. Proiectele complexe — ansambluri, funcțiuni multiple, zone protejate — pot depăși aceste intervale.",
      },
      { type: "h2", text: "De ce se blochează dosarele" },
      {
        type: "ul",
        items: [
          "Scenariul de securitate la incendiu incomplet sau necorelat cu proiectul de arhitectură",
          "Lipsa documentelor privind performanța la foc a elementelor de construcție",
          "Instalații de detecție sau stingere nefinalizate la momentul verificării",
          "Neconcordanțe între proiect și situația reală din teren",
          "Răspuns tardiv la solicitările de completare, care resetează termenele",
        ],
      },
      {
        type: "quote",
        text: "Cea mai frecventă cauză de întârziere nu este autoritatea, ci un dosar care ajunge incomplet la depunere și generează runde succesive de completări.",
      },
      { type: "h2", text: "Ce poți face ca să scurtezi termenele" },
      {
        type: "p",
        text: "Verifică documentația printr-un control de conformitate înainte de depunere, corelează scenariul cu proiectul de arhitectură și pregătește din timp răspunsurile la eventualele solicitări. Dacă ai deja un dosar respins, o re-analiză completă e de obicei mai rapidă decât corecțiile punctuale.",
      },
    ],
  },
  {
    slug: "atestat-anre-ce-tip-iti-trebuie",
    title: "Atestat ANRE: ce tip îți trebuie și ce documente pregătești",
    excerpt:
      "Tipurile de atestat ANRE pentru instalații electrice (A–E), condițiile pentru firmă și pentru electricieni și greșelile care duc la respingere.",
    date: "2026-09-06",
    readingMinutes: 7,
    tag: "ANRE",
    seoTitle: "Atestat ANRE energie electrică — tipuri A–E, condiții și documente",
    seoDescription:
      "Ghid despre atestatul ANRE pentru instalații electrice: ce tip îți trebuie (A–E), condiții pentru firmă și electricieni, documente și proces.",
    body: [
      {
        type: "p",
        text: "Firmele care proiectează sau execută instalații electrice racordate la rețeaua de distribuție au nevoie de atestat ANRE. Atestatul se acordă pe tipuri, în funcție de complexitatea lucrărilor, iar alegerea greșită a tipului este una dintre cele mai frecvente cauze de întârziere.",
      },
      { type: "h2", text: "Tipurile de atestat, pe scurt" },
      {
        type: "ul",
        items: [
          "Tip A — proiectare de instalații electrice de utilizare",
          "Tip B — executare de instalații electrice de utilizare",
          "Tipuri C — linii electrice aeriene și subterane de joasă și medie tensiune",
          "Tipuri D — posturi de transformare și stații",
          "Tipuri E — instalații de utilizare complexe / mari consumatori",
        ],
      },
      {
        type: "p",
        text: "Denumirile exacte și subtipurile se pot modifica prin ordin ANRE. Important este să pornești de la lucrările pe care vrei să le faci și să identifici toate tipurile necesare — de multe ori sunt două sau trei, nu unul singur.",
      },
      { type: "h2", text: "Condiții pentru firmă" },
      {
        type: "ul",
        items: [
          "Obiect de activitate corespunzător în certificatul constatator ONRC",
          "Electricieni autorizați ANRE, angajați cu contract de muncă",
          "Dotare cu aparate de măsură și control, verificate metrologic",
          "Sediu și, după caz, puncte de lucru declarate",
        ],
      },
      { type: "h2", text: "Condiții pentru electricieni" },
      {
        type: "p",
        text: "Electricienii trebuie să dețină legitimație de electrician autorizat ANRE, pe grade și tipuri corespunzătoare. Autorizarea individuală se face separat de atestarea firmei; dacă electricienii tăi nu sunt încă autorizați, acest pas trebuie planificat din timp pentru că are propriul calendar de examinare.",
      },
      { type: "h2", text: "Greșeli frecvente" },
      {
        type: "ul",
        items: [
          "Solicitarea unui singur tip de atestat, deși lucrările necesită mai multe",
          "Electricieni cu legitimații expirate sau pe tipuri necorespunzătoare",
          "Aparate de măsură fără buletine de verificare metrologică valabile",
          "Obiect de activitate ONRC care nu acoperă lucrările electrice",
        ],
      },
      { type: "h2", text: "Cât durează" },
      {
        type: "p",
        text: "Pentru o firmă cu electricieni deja autorizați și dotare completă, dosarul de atestare se pregătește în 2–4 săptămâni, iar evaluarea ANRE adaugă de regulă încă 4–8 săptămâni. Dacă electricienii trebuie autorizați individual, planifică timp suplimentar.",
      },
    ],
  },
  {
    slug: "certificare-agfr-firme-climatizare",
    title: "Certificarea AGFR pentru firmele de climatizare și frig — ghid complet",
    excerpt:
      "Ce înseamnă certificarea F-gaze, ce categorie de personal îți trebuie, diferența dintre certificatul de firmă și cel de personal și cum decurge procesul.",
    date: "2026-09-03",
    readingMinutes: 6,
    tag: "AGFR",
    seoTitle: "Certificare AGFR (F-gaze) — ghid pentru firme de climatizare și frig",
    seoDescription:
      "Certificarea AGFR pentru gaze fluorurate: categorii de personal I–IV, certificat de firmă vs. de personal, documente și proces, conform Reg. (UE) 517/2014.",
    body: [
      {
        type: "p",
        text: "Orice lucrare la instalații de frig, climatizare sau pompe de căldură care conțin gaze fluorurate cu efect de seră se poate face numai de firme și persoane certificate. Cadrul este dat de Regulamentul (UE) nr. 517/2014 și de Regulamentul de punere în aplicare (UE) 2015/2067.",
      },
      { type: "h2", text: "Certificat de firmă vs. certificat de personal" },
      {
        type: "p",
        text: "Firma primește un certificat de operator economic. Fiecare tehnician are propriul certificat de personal, pe categorii. Firma trebuie să aibă cel puțin un angajat certificat pentru categoria de lucrări pe care le prestează — cele două certificări sunt distincte și obligatorii ambele.",
      },
      { type: "h2", text: "Categoriile de personal" },
      {
        type: "ul",
        items: [
          "Categoria I — toate operațiunile, inclusiv recuperarea agentului frigorific, fără limită de cantitate",
          "Categoria II — operațiuni limitate la echipamente sub un anumit prag de agent frigorific",
          "Categoria III — recuperarea agentului frigorific din echipamente mici",
          "Categoria IV — verificarea etanșeității fără intervenție în circuitul frigorific",
        ],
      },
      {
        type: "p",
        text: "Cele mai multe firme de instalare și service au nevoie de personal categoria I. Categoriile II–IV acoperă activități mai restrânse.",
      },
      { type: "h2", text: "Documente necesare pentru firmă" },
      {
        type: "ul",
        items: [
          "Certificat constatator ONRC cu activitatea de instalații frigorifice / climatizare",
          "Certificate de personal pentru cel puțin un angajat, pe categoria relevantă",
          "Lista sculelor și echipamentelor specifice: detectoare de scurgeri, recuperatoare, balanțe",
          "Proceduri de lucru și registru de evidență a agenților frigorifici",
        ],
      },
      { type: "h2", text: "Cât durează" },
      {
        type: "p",
        text: "Dacă ai deja personal certificat, dosarul de firmă se poate finaliza în 4–8 săptămâni. Dacă tehnicienii trebuie mai întâi instruiți și examinați, adaugă timpul aferent sesiunilor de certificare.",
      },
      {
        type: "quote",
        text: "Fără certificare AGFR, firma nu poate cumpăra legal agent frigorific în vrac și nu poate emite documente valabile pentru lucrările efectuate.",
      },
    ],
  },
  {
    slug: "autorizatie-afer-furnizor-feroviar-pasi",
    title: "Autorizația de furnizor feroviar AFER: pași și greșeli frecvente",
    excerpt:
      "Ce este autorizarea AFER, diferența dintre AFF, ATF și COTF, cerințele de sistem de management și cum eviți respingerea la audit.",
    date: "2026-08-30",
    readingMinutes: 7,
    tag: "AFER",
    seoTitle: "Autorizație AFER furnizor feroviar — AFF, ATF, COTF: pași și cerințe",
    seoDescription:
      "Ghid despre autorizarea AFER ca furnizor feroviar: diferența AFF / ATF / COTF, cerințe de sistem de management, documente și pregătirea pentru audit.",
    body: [
      {
        type: "p",
        text: "Activitățile de construcție, modernizare, reparare și întreținere a materialului rulant și a infrastructurii feroviare pot fi desfășurate numai de agenți economici autorizați și supravegheați tehnic de Autoritatea Feroviară Română, în baza OMT 290/2000.",
      },
      { type: "h2", text: "AFF, ATF, COTF" },
      {
        type: "ul",
        items: [
          "AFF — Autorizația de Furnizor Feroviar: atestă că firma poate produce sau presta o categorie de produse ori servicii feroviare critice",
          "ATF — Agrementul Tehnic Feroviar: se referă la un produs sau tip de produs",
          "COTF — Certificatul de Omologare Tehnică Feroviară: pentru produse noi sau modificate substanțial",
        ],
      },
      {
        type: "p",
        text: "În practică, o firmă are nevoie de o combinație a acestora, în funcție de produsele și serviciile din portofoliu.",
      },
      { type: "h2", text: "Cerința de sistem de management" },
      {
        type: "p",
        text: "AFER cere un sistem de management adecvat activității. Dacă nu ai deja ISO 9001, este recomandat să îl implementezi în paralel cu dosarul AFER — auditorul verifică procesele reale, nu doar existența unui manual.",
      },
      { type: "h2", text: "Pașii dosarului" },
      {
        type: "ol",
        items: [
          "Stabilirea categoriilor de produse și servicii supuse autorizării",
          "Documentarea proceselor, a personalului tehnic și a dotărilor",
          "Elaborarea manualului sistemului de management și a procedurilor",
          "Depunerea cererii și a dosarului la AFER",
          "Auditul AFER la sediul și punctele de lucru",
          "Emiterea autorizației și planificarea vizelor periodice",
        ],
      },
      { type: "h2", text: "Greșeli frecvente" },
      {
        type: "ul",
        items: [
          "Proceduri „de raft”, necorelate cu modul real de lucru",
          "Personal tehnic fără dovada calificării pentru produsele feroviare vizate",
          "Trasabilitate incompletă a materialelor și a controalelor de calitate",
          "Necunoașterea termenelor de vizare, cu pierderea valabilității autorizației",
        ],
      },
    ],
  },
  {
    slug: "licenta-igpr-sisteme-alarmare-conditii",
    title: "Licența IGPR pentru sisteme de alarmare: condiții și proces",
    excerpt:
      "Cine are nevoie de licență de funcționare IGPR, ce atestate trebuie să aibă personalul tehnic și cum se notifică activitatea în teritoriu.",
    date: "2026-08-24",
    readingMinutes: 5,
    tag: "IGPR",
    seoTitle: "Licență IGPR sisteme de alarmare — condiții, atestate personal, proces",
    seoDescription:
      "Ghid despre licența de funcționare IGPR pentru sisteme de alarmare împotriva efracției: condiții pentru firmă, atestarea personalului și notificările județene.",
    body: [
      {
        type: "p",
        text: "Proiectarea, instalarea, modificarea și întreținerea sistemelor de alarmare împotriva efracției se pot face numai de societăți licențiate de Inspectoratul General al Poliției Române, conform Legii 333/2003 și HG 301/2012.",
      },
      { type: "h2", text: "Cine are nevoie de licență" },
      {
        type: "ul",
        items: [
          "Firme care instalează sisteme de alarmă, control acces sau supraveghere video pentru clienți",
          "Integratori de securitate care preiau lucrări pentru spații comerciale sau industriale",
          "Societăți de pază care își extind activitatea către sisteme tehnice de securitate",
        ],
      },
      { type: "h2", text: "Condiții pentru firmă" },
      {
        type: "ul",
        items: [
          "Obiect de activitate corespunzător în certificatul constatator ONRC",
          "Personal tehnic cu atestat profesional, angajat cu contract de muncă",
          "Spațiu și dotări tehnice adecvate",
          "Regulament de organizare și funcționare",
          "Cazier judiciar pentru asociați și administratori",
        ],
      },
      { type: "h2", text: "Atestarea personalului" },
      {
        type: "p",
        text: "Tehnicienii care proiectează sau instalează sisteme de alarmare trebuie să dețină atestat profesional individual, obținut în urma unui curs și a unei examinări. Atestatele se includ în dosarul de licențiere al firmei.",
      },
      { type: "h2", text: "Notificarea în teritoriu" },
      {
        type: "p",
        text: "Licența de funcționare este națională, dar activitatea trebuie notificată la inspectoratele județene de poliție unde firma prestează servicii. Neîndeplinirea acestei obligații poate atrage sancțiuni chiar dacă licența este valabilă.",
      },
      { type: "h2", text: "Cât durează" },
      {
        type: "p",
        text: "Dacă personalul este deja atestat, dosarul se pregătește în 3–5 săptămâni, iar analiza IGPR adaugă de regulă câteva săptămâni. Dacă tehnicienii trebuie mai întâi atestați, planifică timpul pentru sesiunea de curs și examinare.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
