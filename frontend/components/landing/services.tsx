"use client";

import { SpotlightCard } from "@/components/animations/spotlight-card";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Brain, Bot, Wrench, Compass, Code, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/animations/magnetic-button";

import { CursorTrail } from "@/components/effects/cursor-trail";

const products = [
  {
    title: "Scale Readiness Audit",
    problem: "You don't know where your system will break next.",
    outcome: "A 360° technical roadmap and risk heatmap.",
    icon: Compass,
    color: "bg-blue-50 text-blue-600",
    spotlight: "rgba(37, 99, 235, 0.1)",
    href: "/architecture-audit",
    tag: "The Diagnostic",
    features: ["Risk Heatmap", "Architecture Map", "ROI Roadmap"]
  },
  {
    title: "System Build / Optimization",
    problem: "Your current infrastructure is a bottleneck to growth.",
    outcome: "High-performance foundation ready for 100x traffic.",
    icon: Code,
    color: "bg-brand-primary/10 text-brand-primary",
    spotlight: "rgba(124, 58, 237, 0.1)",
    href: "/solutions/build",
    tag: "The Implementation",
    features: ["Cloud-Native Setup", "Database Hardening", "API Optimization"]
  },
  {
    title: "Engineering Partnership",
    problem: "You need a technical partner, not just a freelancer.",
    outcome: "Continuous architecture evolution and AI integration.",
    icon: Brain,
    color: "bg-emerald-50 text-emerald-600",
    spotlight: "rgba(16, 185, 129, 0.1)",
    href: "/solutions/partnership",
    tag: "The Growth",
    features: ["Embedded CTO support", "AI Agent Integration", "24/7 Scaling"]
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link 
              key={product.title} 
              href={product.href}
              className="group/link flex h-full"
            >
              <SpotlightCard 
                className="h-full flex flex-col"
                spotlightColor={product.spotlight}
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <product.icon className="h-7 w-7" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-black/5 rounded-full text-brand-black/40">
                      {product.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-brand-black mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    {product.title}
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div>
                        <span className="text-[10px] font-black uppercase text-red-500 tracking-tighter block mb-1">Problem</span>
                        <p className="text-brand-black/60 text-sm font-medium leading-relaxed italic">
                            "{product.problem}"
                        </p>
                    </div>
                    <div>
                        <span className="text-[10px] font-black uppercase text-brand-primary tracking-tighter block mb-1">Outcome</span>
                        <p className="text-brand-black font-semibold text-sm leading-relaxed">
                            {product.outcome}
                        </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 border-t border-black/5 pt-6">
                    {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-medium text-brand-black/50">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/40" />
                            {feature}
                        </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center text-sm font-bold text-brand-black/40 group-hover:text-brand-primary transition-all duration-300 mt-auto">
                  <span className="mr-2 uppercase tracking-widest text-[10px]">Select Tier</span>
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
