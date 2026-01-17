import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Smartphone, BarChart3, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "High-performance websites built with Next.js and React. Optimized for speed and SEO.",
    icon: Monitor,
  },
  {
    title: "Mobile Apps",
    description: "Native-like mobile experiences using cross-platform technologies.",
    icon: Smartphone,
  },
  {
    title: "Growth Marketing",
    description: "Data-driven strategies to increase traffic and convert visitors into customers.",
    icon: BarChart3,
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security audits and compliance implementations.",
    icon: ShieldCheck,
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
            Comprehensive digital solutions to help your business grow and succeed in the modern era.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
