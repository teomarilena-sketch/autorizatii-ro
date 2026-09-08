/**
 * Date centralizate ale site-ului.
 *
 * ⚠️ ÎNLOCUIEȘTE valorile marcate cu TODO cu datele reale Autorizații.ro
 * înainte de lansare (telefon, email, adresă, entitate juridică, CUI).
 * Numerele de mai jos sunt PLACEHOLDER.
 */
export const site = {
  name: "Autorizații.ro",
  legalName: "TODO SRL", // TODO: denumirea firmei
  cui: "TODO", // TODO: CUI / nr. Reg. Com.
  domain: "autorizatii.ro",
  url: "https://autorizatii.ro",
  description:
    "Consultanță pentru obținerea autorizațiilor și licențelor în România: AFER, IGPR, ISU, ANRE (energie și gaze), AGFR, certificări ISO și consultanță de mediu. Proces digitalizat, un singur punct de contact.",

  phone: "+40 3XX XXX XXX", // TODO: telefon real
  phoneHref: "tel:+403XXXXXXXX", // TODO
  email: "contact@autorizatii.ro", // TODO: email real
  emailHref: "mailto:contact@autorizatii.ro", // TODO
  address: "București, România", // TODO: adresă completă
  schedule: "Luni–Vineri, 09:00–18:00",

  nav: [
    { label: "Servicii", href: "#servicii" },
    { label: "Proces", href: "#proces" },
    { label: "Expertiză", href: "#expertiza" },
    { label: "Despre", href: "#despre" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
