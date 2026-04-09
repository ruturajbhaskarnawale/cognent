import { HeroSection } from "@/components/landing/hero";
import { TechMarquee } from "@/components/landing/tech-marquee";
import { ServicesSection } from "@/components/landing/services";
import { ProblemSection } from "@/components/landing/problem-section";
import { InsightSection } from "@/components/landing/insight-section";
import { SelectedWork } from "@/components/landing/selected-work";
import { ProcessFlow } from "@/components/landing/process-flow";
import { ServiceDeepDive } from "@/components/landing/deep-dive";
import { Testimonials } from "@/components/landing/testimonials";
import { FAQ } from "@/components/landing/faq";
import { getProjects } from "@/lib/api";
import { ScrollLeadTrigger } from "@/components/features/scroll-lead-trigger";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="flex min-h-screen flex-col bg-brand-muted">
      <ScrollLeadTrigger />
      <HeroSection />
      <TechMarquee />
      <ProblemSection />
      <InsightSection />
      <ServicesSection />
      <ProcessFlow />
      <ServiceDeepDive />
      <SelectedWork projects={projects} />
      <Testimonials />
      <FAQ />
    </main>
  );
}
