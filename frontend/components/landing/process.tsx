import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your business goals, target audience, and current challenges to map out a strategic path forward.",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description: "Our team crafts a comprehensive strategy and high-fidelity designs that align with your brand identity.",
  },
  {
    number: "03",
    title: "Development",
    description: "We build your solution using cutting-edge technologies, ensuring performance, security, and scalability.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description: "After rigorous testing, we launch your product and monitor metrics to optimize for continuous growth.",
  },
];

export function Process() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Process</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
            A proven methodology to deliver exceptional results.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="mb-4 text-4xl font-bold text-zinc-200 dark:text-zinc-800">{step.number}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
