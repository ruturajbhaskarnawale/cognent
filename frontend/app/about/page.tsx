"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Zap, 
  Target, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Lock 
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { CursorTrail } from "@/components/effects/cursor-trail";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <CursorTrail />
      
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-brand-muted">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <ScrollReveal direction="up">
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-brand-black mb-8 leading-none">
                        Systems <br />
                        <span className="text-brand-primary">Before Features.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-brand-black/60 max-w-2xl mx-auto mb-10 font-medium">
                        At Cognent, we don't believe in building more. We believe in building better. We design the infrastructure that doesn't break when you win.
                    </p>
                </ScrollReveal>
            </div>
        </div>
      </section>

      {/* Philosophy Grids */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <ScrollReveal direction="left">
                    <div className="p-12 rounded-[3.5rem] bg-brand-muted border border-black/5 h-full">
                        <div className="w-14 h-14 rounded-2xl bg-brand-primary text-white flex items-center justify-center mb-8">
                            <Layers className="w-7 h-7" />
                        </div>
                        <h3 className="text-3xl font-black text-brand-black mb-6 tracking-tight">Scale &gt; Speed.</h3>
                        <p className="text-lg text-brand-black/60 leading-relaxed font-medium">
                            The tech industry is obsessed with "moving fast and breaking things." We believe that's a recipe for disaster at scale. We move fast—but we build with the durability of a 100-year-old bank.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.2}>
                    <div className="p-12 rounded-[3.5rem] bg-brand-black text-white h-full">
                        <div className="w-14 h-14 rounded-2xl bg-brand-primary text-white flex items-center justify-center mb-8">
                            <Lock className="w-7 h-7" />
                        </div>
                        <h3 className="text-3xl font-black mb-6 tracking-tight">Durable Architecture.</h3>
                        <p className="text-lg text-white/50 leading-relaxed font-light">
                            Features are temporary; architecture is permanent. We prioritize the invisible foundation that ensures your app stays up during its biggest traffic spikes.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </div>
      </section>

      {/* Stats / Proof Section */}
      <section className="py-32 bg-brand-muted relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {[
                    { label: "Systems Audited", value: "500+", sub: "Architecture reviews performed" },
                    { label: "Max Traffic Spike", value: "100X", sub: "Systems survived 100x traffic" },
                    { label: "Uptime Guaranteed", value: "99.99%", sub: "High-concurrency infrastructure" }
                ].map((stat, i) => (
                    <ScrollReveal key={i} delay={i * 0.1}>
                        <div className="p-10 rounded-3xl bg-white shadow-xl shadow-black/[0.02]">
                            <div className="text-5xl font-black text-brand-primary mb-2 leading-none">{stat.value}</div>
                            <div className="text-sm font-black uppercase tracking-widest text-brand-black mb-4">{stat.label}</div>
                            <p className="text-xs text-brand-black/40 font-bold uppercase">{stat.sub}</p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
            <ScrollReveal direction="up">
                <h2 className="text-4xl md:text-7xl font-black text-brand-black mb-10 tracking-tighter leading-none">
                    Ready to Build a <br />
                    <span className="text-brand-primary">Bulletproof Future?</span>
                </h2>
                <Link href="/architecture-audit">
                    <Button size="lg" className="rounded-full bg-brand-black text-white px-12 h-20 text-xl font-black shadow-2xl hover:bg-brand-primary transition-all duration-500 group">
                        Get Your Scale Audit
                        <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </Button>
                </Link>
            </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
