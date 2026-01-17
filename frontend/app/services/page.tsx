import { ServicesSection } from "@/components/landing/services";
import { Process } from "@/components/landing/process";
import { FAQ } from "@/components/landing/faq";

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
       <div className="container mx-auto px-4 md:px-6 text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
                Our Expertise
            </h1>
            <p className="max-w-[800px] mx-auto text-xl text-zinc-500 dark:text-zinc-400">
                Data-driven strategies and engineering excellence to help you scale.
            </p>
       </div>
      <ServicesSection />
      <Process />
      <FAQ />
    </main>
  );
}
