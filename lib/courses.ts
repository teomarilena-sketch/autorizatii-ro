import type { LucideIcon } from "lucide-react";
import {
  Cake,
  Car,
  ChefHat,
  Droplets,
  Frame,
  HardHat,
  Martini,
  MonitorSmartphone,
  Store,
  Sun,
  Thermometer,
  Truck,
  UtensilsCrossed,
  Wrench,
  Zap,
} from "lucide-react";

export type Course = {
  id: string;
  slug: string;
  icon: LucideIcon;
  name: string;
  short: string;
};

/**
 * Cursuri de calificare profesională (pentru persoane), distincte de cele
 * 8 autorizații de firmă din lib/services.ts. Certificatul de calificare
 * profesională este recunoscut la nivel național.
 */
export const COURSES: Course[] = [
  {
    id: "tehnician-constructii",
    slug: "tehnician-constructii-si-lucrari-publice",
    icon: HardHat,
    name: "Tehnician în construcții și lucrări publice",
    short: "Calificare pentru lucrări de construcții civile, industriale și infrastructură.",
  },
  {
    id: "electrician-constructii",
    slug: "electrician-in-constructii",
    icon: Zap,
    name: "Electrician în construcții",
    short: "Calificare pentru execuția instalațiilor electrice pe șantiere și construcții.",
  },
  {
    id: "instalator-tehnico-sanitare-gaze",
    slug: "instalator-instalatii-tehnico-sanitare-si-de-gaze",
    icon: Droplets,
    name: "Instalator instalații tehnico-sanitare și de gaze",
    short: "Calificare pentru montajul instalațiilor sanitare, termice și de gaze naturale.",
  },
  {
    id: "instalator-fotovoltaice",
    slug: "instalator-panouri-fotovoltaice-solare",
    icon: Sun,
    name: "Instalator pentru panouri fotovoltaice solare",
    short: "Calificare pentru montajul și punerea în funcțiune a sistemelor fotovoltaice.",
  },
  {
    id: "izolator-termic",
    slug: "izolator-termic",
    icon: Thermometer,
    name: "Izolator termic",
    short: "Calificare pentru lucrări de izolare termică și hidroizolații.",
  },
  {
    id: "confectioner-tamplarie",
    slug: "confectioner-tamplarie-aluminiu-si-mase-plastice",
    icon: Frame,
    name: "Confecționer tâmplărie din aluminiu și mase plastice",
    short: "Calificare pentru confecționarea și montajul tâmplăriei din aluminiu și PVC.",
  },
  {
    id: "ifronist",
    slug: "masini-utilaje-cale-si-terasamente-ifronist",
    icon: Truck,
    name: "Mașini, utilaje cale și terasamente (Ifronist)",
    short: "Calificare pentru operarea utilajelor de cale ferată și terasamente.",
  },
  {
    id: "tehnician-prestatii-vehicule",
    slug: "tehnician-prestatii-vehicule",
    icon: Car,
    name: "Tehnician prestații vehicule",
    short: "Calificare pentru inspecția tehnică și service-ul vehiculelor.",
  },
  {
    id: "electrician-auto",
    slug: "electrician-auto",
    icon: Zap,
    name: "Electrician auto",
    short: "Calificare pentru diagnoză și reparații ale instalațiilor electrice auto.",
  },
  {
    id: "mecanic-auto",
    slug: "mecanic-auto",
    icon: Wrench,
    name: "Mecanic auto",
    short: "Calificare pentru întreținerea și repararea autovehiculelor.",
  },
  {
    id: "competente-digitale",
    slug: "competente-digitale",
    icon: MonitorSmartphone,
    name: "Competențe digitale",
    short: "Curs de competențe digitale de bază pentru locul de muncă.",
  },
  {
    id: "lucrator-comercial",
    slug: "lucrator-comercial",
    icon: Store,
    name: "Lucrător comercial",
    short: "Calificare pentru activități de vânzare și gestiune comercială.",
  },
  {
    id: "bucatar",
    slug: "bucatar",
    icon: ChefHat,
    name: "Bucătar",
    short: "Calificare profesională pentru bucătării comerciale și HoReCa.",
  },
  {
    id: "ospatar",
    slug: "ospatar",
    icon: UtensilsCrossed,
    name: "Ospătar",
    short: "Calificare pentru servirea clienților în restaurante și HoReCa.",
  },
  {
    id: "barman",
    slug: "barman",
    icon: Martini,
    name: "Barman",
    short: "Calificare pentru prepararea și servirea băuturilor.",
  },
  {
    id: "cofetar",
    slug: "cofetar",
    icon: Cake,
    name: "Cofetar",
    short: "Calificare pentru producția de cofetărie și patiserie.",
  },
];
