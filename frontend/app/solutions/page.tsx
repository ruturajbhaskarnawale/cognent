"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Zap, 
  Brain, 
  ArrowRight, 
  CheckCircle2, 
  HardDrive, 
  Cloud, 
  Network 
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { CursorTrail } from "@/components/effects/cursor-trail";

const tiers = [
  {
    id: "audit",
    title: "Scale Readiness Audit",
    price: "₹50,000",
    description: "The 360° technical diagnostic to identify bottlenecks before they break your business.",
    features: ["Architecture Risk Mapping", "Database Heatmaps", "Deliverable: 12-Month Roadmap", "Deliverable: Technical Debt Audit"],
    cta: "Claim Your Audit",
    href: "/architecture-audit",
    highlight: false,
    icon: Network
  },
  {
    id: "build",
    title: "System Build & Optimization",
    price: "₹2L - ₹10L+",
    description: "End-to-end infrastructure hardening for high-concurrency systems.",
    features: ["Cloud-Native Migration", "API Hardening", "Database Refactoring", "Zero-Downtime Deployment"],
    cta: "Get Estimate",
    href: "/solutions/build",
    highlight: true,
    icon: Cloud
  },
  {
    id: "partnership",
    title: "Engineering Partnership",
    price: "Monthly Retainer",
    description: "Continuous architecture evolution and AI integration for high-growth teams.",
    features: ["Embedded CTO Advisory", "24/7 Security Hardening", "AI Agent Integration", "Scaling Support Team"],
    cta: "Request Partnership",
    href: "/solutions/partnership",
    highlight: false,
    icon: Shield
  }
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <CursorTrail />
      
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-brand-muted">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
            <ScrollReveal direction="up">
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-brand-black mb-8 leading-none">
                    High-Impact <br />
                    <span className="text-brand-primary">Scaling Solutions.</span>
                </h1>
                <p className="text-xl md:text-2xl text-brand-black/60 max-w-2xl mx-auto mb-10 font-medium">
                    We don't build generic features. We build systems that survive 100x traffic spikes. Choose your path to technical authority.
                </p>
            </ScrollReveal>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {tiers.map((tier, idx) => (
                    <ScrollReveal key={tier.id} delay={idx * 0.1}>
                        <SpotlightCard 
                            className={`h-full flex flex-col p-10 rounded-[3rem] border-2 transition-all duration-500 ${
                                tier.highlight ? 'border-brand-primary bg-brand-primary/[0.02] shadow-2xl' : 'border-brand-black/5 bg-white'
                            }`}
                        >
                            <div className="mb-8">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${
                                    tier.highlight ? 'bg-brand-primary text-white' : 'bg-brand-black/5 text-brand-black'
                                }`}>
                                    <tier.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-black text-brand-black mb-2 tracking-tight">{tier.title}</h3>
                                <div className="text-brand-primary font-black text-sm uppercase tracking-widest mb-6">Starts at {tier.price}</div>
                                <p className="text-brand-black/60 font-medium mb-8 leading-relaxed">
                                    {tier.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-10 border-t border-black/5 pt-8 flex-1">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-brand-black/80">
                                        <CheckCircle2 className={`w-5 h-5 ${tier.highlight ? 'text-brand-primary' : 'text-brand-black/20'}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link href={tier.href}>
                                <Button 
                                    className={`w-full rounded-2xl h-14 font-black text-lg transition-all duration-500 ${
                                        tier.highlight ? 'bg-brand-primary text-white hover:bg-brand-black shadow-lg' : 'bg-brand-black text-white hover:bg-brand-primary'
                                    }`}
                                >
                                    {tier.cta}
                                </Button>
                            </Link>
                        </SpotlightCard>
                    </ScrollReveal>
                ))}
            </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-brand-black text-white overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <ScrollReveal direction="left">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
                        Architecture-First <br />
                        <span className="text-brand-primary">Engineering.</span>
                    </h2>
                    <p className="text-xl text-white/50 mb-10 leading-relaxed font-light">
                        Most agencies chase features. We chase stability. A system that can't scale is a technical liability. We turn your infrastructure into a competitive advantage.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <div className="text-4xl font-black text-brand-primary mb-2">99.99%</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-white/30">Uptime Reliability</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-white mb-2">10X</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-white/30">Traffic Handling</div>
                        </div>
                    </div>
                </ScrollReveal>
                <div className="relative">
                    <div className="aspect-[4/3] rounded-[3rem] bg-white/5 border border-white/10 flex items-center justify-center">
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="w-1/2 h-1/2 border-4 border-dashed border-brand-primary/20 rounded-full flex items-center justify-center"
                        >
                            <Zap className="w-24 h-24 text-brand-primary opacity-20" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}
