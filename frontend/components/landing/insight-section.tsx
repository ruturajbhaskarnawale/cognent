"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TrendingUp, DollarSign, Database, Server } from "lucide-react";

const stats = [
  {
    label: "Infrastructure Waste",
    value: "30%",
    description: "Average cloud spend wasted on unoptimized architecture.",
    icon: DollarSign
  },
  {
    label: "Scaling Failure Rate",
    value: "70%",
    description: "Startups that fail due to technical debt-driven stagnation.",
    icon: TrendingUp
  },
  {
    label: "API Efficiency",
    value: "20x",
    description: "Performance delta between generic and bespoke engineering.",
    icon: Database
  }
];

export function InsightSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/[0.02] rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24 max-w-2xl mx-auto">
             <ScrollReveal direction="up">
                <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-xs uppercase tracking-widest mb-6 inline-block"
                >
                    Strategic Insight
                </motion.span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-brand-black mb-8 leading-[1.2]">
                    Scaling isn't about adding servers. <br />
                    <span className="text-brand-primary">It's about removing friction.</span>
                </h2>
                <p className="text-lg text-brand-black/50 font-medium leading-relaxed">
                    Most companies try to solve scaling issues by throwing more money at cloud providers. We solve it by re-engineering the foundation.
                </p>
             </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.15} direction="up">
                    <div className="flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-brand-muted hover:bg-brand-primary/5 transition-colors border border-black/5">
                        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand-primary mb-6 shadow-sm">
                            <stat.icon className="w-7 h-7" />
                        </div>
                        <div className="text-5xl font-black text-brand-black mb-2 tracking-tighter">
                            {stat.value}
                        </div>
                        <div className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">
                            {stat.label}
                        </div>
                        <p className="text-brand-black/50 text-sm font-medium leading-loose">
                            {stat.description}
                        </p>
                    </div>
                </ScrollReveal>
            ))}
        </div>

        <div className="mt-20 p-12 rounded-[3.5rem] bg-brand-black text-white overflow-hidden relative group">
             {/* Decorative Background Icon */}
             <Server className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] text-white/5 opacity-10 rotate-[-15deg] group-hover:rotate-0 transition-transform duration-700 pointer-events-none" />
             
             <div className="relative z-10 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">The "10x Rule" of Engineering</h3>
                    <p className="text-white/60 font-light leading-relaxed">
                        If your system cannot handle 10x the current load without a full rebuild, you have a strategic liability on your hands. We identify these vulnerabilities before they manifest as downtime.
                    </p>
                </div>
                <div className="shrink-0">
                    <div className="px-6 py-3 rounded-full bg-brand-primary text-white font-bold text-sm uppercase tracking-widest">
                       Strategic Audit Required
                    </div>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
}
