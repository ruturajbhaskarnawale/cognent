"use client";

import { SpotlightCard } from "@/components/animations/spotlight-card";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Brain, Bot, Wrench, Compass, Code, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/animations/magnetic-button";

import { CursorTrail } from "@/components/effects/cursor-trail";

const services = [
  {
    title: "AI & ML Solutions",
    description: "Leverage advanced artificial intelligence to automate decision-making. LLM integration & predictive analytics.",
    icon: Brain,
    color: "bg-purple-50 text-purple-600",
    spotlight: "rgba(124, 58, 237, 0.1)",
    href: "/services/ai-integration",
    className: "md:col-span-8 lg:col-span-7",
  },
  {
    title: "Custom Automation",
    description: "Bespoke automation tools designed to eliminate manual bottlenecks.",
    icon: Bot,
    color: "bg-blue-50 text-blue-600",
    spotlight: "rgba(37, 99, 235, 0.1)",
    href: "/services/automation",
    className: "md:col-span-4 lg:col-span-5",
  },
  {
    title: "Technical Debugging",
    description: "Complex problem solving for legacy systems. We identify root causes.",
    icon: Wrench,
    color: "bg-teal-50 text-teal-600",
    spotlight: "rgba(13, 148, 136, 0.1)",
    href: "/services/debugging",
    className: "md:col-span-4 lg:col-span-4",
  },
  {
    title: "Web & App Development",
    description: "Enterprise-grade web and mobile applications built for scale. Modern stacks like Next.js.",
    icon: Code,
    color: "bg-orange-50 text-orange-600",
    spotlight: "rgba(249, 115, 22, 0.1)",
    href: "/services/development",
    className: "md:col-span-8 lg:col-span-8",
  },
  {
    title: "End-to-End Guidance",
    description: "Strategic project management from concept to deployment.",
    icon: Compass,
    color: "bg-rose-50 text-rose-600",
    spotlight: "rgba(225, 29, 72, 0.1)",
    href: "/services/consulting",
    className: "md:col-span-6 lg:col-span-6",
  },
  {
    title: "System Optimization",
    description: "Enhancing existing platforms for speed, security, and reliability.",
    icon: TrendingUp,
    color: "bg-lime-50 text-lime-600",
    spotlight: "rgba(101, 163, 13, 0.1)",
    href: "/services/optimization",
    className: "md:col-span-6 lg:col-span-6",
  },
];

export function ServicesSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Cursor Trail Effect */}
      <CursorTrail />

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-medium text-sm mb-6 inline-block backdrop-blur-sm"
            >
              Our Expertise
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-brand-black mb-8 tracking-tight">
              Comprehensive Technical <br />
              <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-slow">
                Capabilities.
              </span>
            </h2>
            <p className="text-xl text-brand-black/60 font-light leading-relaxed">
              From intelligent automation to complex system debugging, we provide the technical backbone for your growth.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link 
              key={service.title} 
              href={service.href}
              className={`${service.className} group/link`}
            >
              <SpotlightCard 
                className="h-full flex flex-col justify-between"
                spotlightColor={service.spotlight}
              >
                <div>
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className="h-8 w-8 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-black mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-brand-black/60 leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center text-sm font-bold text-brand-black/40 group-hover:text-brand-primary transition-all duration-300">
                  <span className="mr-2 uppercase tracking-widest text-[10px]">Explore Service</span>
                  <div className="w-8 h-[2px] bg-brand-black/10 transition-all duration-300 group-hover:w-12 group-hover:bg-brand-primary" />
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </div>
              </SpotlightCard>
            </Link>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="mt-20 text-center">
            <MagneticButton>
                <Link 
                    href="/services" 
                    className="relative overflow-hidden inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full font-bold shadow-2xl shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all duration-300 group"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        View All Expertise
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0" />
                </Link>
            </MagneticButton>
        </div>
      </div>
    </section>
  );
}
