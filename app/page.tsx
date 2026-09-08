import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { AuthoritiesBar } from "@/components/authorities-bar";
import { Services } from "@/components/services";
import { Expertise } from "@/components/expertise";
import { Process } from "@/components/process";
import { Comparison } from "@/components/comparison";
import { CtaBand } from "@/components/cta-band";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AuthoritiesBar />
      <Services />
      <Expertise />
      <Process />
      <Comparison />
      <CtaBand />
      <LeadForm />
    </main>
  );
}
