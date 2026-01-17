import { HeroSection } from "@/components/landing/hero";
import { TechMarquee } from "@/components/landing/tech-marquee";
import { ServicesSection } from "@/components/landing/services";
import { SelectedWork } from "@/components/landing/selected-work";
import { Process } from "@/components/landing/process";
import { Testimonials } from "@/components/landing/testimonials";
import { FAQ } from "@/components/landing/faq";
import { getProjects } from "@/lib/api";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <TechMarquee />
      <ServicesSection />
      <SelectedWork projects={projects} />
      <Process />
      <Testimonials />
      <FAQ />
    </main>
  );
}
