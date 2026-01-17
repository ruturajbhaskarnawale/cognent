import { HeroSection } from "@/components/landing/hero";
import { TechMarquee } from "@/components/landing/tech-marquee";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <TechMarquee />
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold">More coming in Phase 4...</h2>
      </section>
    </main>
  );
}
