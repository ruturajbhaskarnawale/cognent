"use client";

import { HoverCard } from "@/components/animations/hover-card";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Brain, Bot, Wrench, Compass, Code, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "AI & ML Solutions",
    description: "Leverage advanced artificial intelligence to automate decision-making. LLM integration & predictive analytics.",
    icon: Brain,
    color: "bg-pastel-purple text-brand-secondary",
    href: "/services/ai-integration",
  },
  {
    title: "Custom Automation",
    description: "Bespoke automation tools designed to eliminate manual bottlenecks. We build custom software for your workflows.",
    icon: Bot,
    color: "bg-pastel-blue text-brand-primary",
    href: "/services/automation",
  },
  {
    title: "Technical Debugging",
    description: "Complex problem solving for legacy systems. We identify root causes and implement robust, long-term fixes.",
    icon: Wrench,
    color: "bg-pastel-teal text-brand-accent",
    href: "/services/debugging",
  },
  {
    title: "End-to-End Guidance",
    description: "Strategic project management from concept to deployment. Architecture, stack selection, and execution.",
    icon: Compass,
    color: "bg-pastel-pink text-pink-600",
    href: "/services/consulting",
  },
  {
    title: "Web & App Development",
    description: "Enterprise-grade web and mobile applications built for scale. Modern stacks like Next.js and Python.",
    icon: Code,
    color: "bg-orange-50 text-orange-600",
    href: "/services/development",
  },
  {
    title: "System Optimization",
    description: "Enhancing existing platforms for speed, security, and reliability. Performance tuning and refactoring.",
    icon: TrendingUp,
    color: "bg-lime-50 text-lime-600",
    href: "/services/optimization",
  },
];

export function ServicesSection() {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal width="100%">
            <div className="text-center mb-20 max-w-3xl mx-auto">
                <span className="text-brand-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-brand-black mb-6">
                    Comprehensive Technical <br />
                    <span className="text-brand-secondary">Capabilities.</span>
                </h2>
                <p className="text-xl text-brand-black/60 font-light">
                    From intelligent automation to complex system debugging, we provide the technical backbone for your growth.
                </p>
            </div>
        </ScrollReveal>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
                <Link href={service.href}>
                    <HoverCard className="h-full border-transparent bg-brand-muted/50 hover:bg-white group transition-all duration-300">
                        <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <service.icon className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-black mb-3 group-hover:text-brand-primary transition-colors">{service.title}</h3>
                        <p className="text-brand-black/60 leading-relaxed mb-6">
                            {service.description}
                        </p>
                        <div className="flex items-center text-sm font-semibold text-brand-black/40 group-hover:text-brand-primary transition-colors">
                            Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </HoverCard>
                </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
