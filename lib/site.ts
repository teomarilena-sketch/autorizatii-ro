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
  // Domeniul principal e cu diacritică: autorizații.ro (punycode xn--autorizaii-oyd.ro).
  // Folosim forma punycode în URL-uri pentru compatibilitate maximă cu crawlere/tooling.
  domain: "autorizații.ro",
  url: "https://xn--autorizaii-oyd.ro",
  description:
    "Consultanță pentru obținerea autorizațiilor și licențelor în România: AFER, IGPR, ISU, ANRE (energie și gaze), AGFR și certificări ISO. Proces digitalizat, un singur punct de contact.",

  phone: "+40 3XX XXX XXX", // TODO: telefon real
  phoneHref: "tel:+403XXXXXXXX", // TODO
  email: "contact@autorizatii.ro",
  emailHref: "mailto:contact@autorizatii.ro",
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
