"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Zap, Shield, BarChart } from "lucide-react";

const features = [
    {
        title: "AI-Powered Automation",
        description: "Transform your operational efficiency with custom AI agents that handle repetitive tasks, data analysis, and decision support.",
        points: ["Custom LLM Integration", "Predictive Analytics", "Automated Workflows"],
        icon: Zap,
        color: "bg-pastel-purple text-brand-secondary",
        image: "linear-gradient(135deg, #e9d5ff 0%, #fae8ff 100%)" // Placeholder for an abstract tech visual
    },
    {
        title: "Legacy System Modernization",
        description: "Don't let technical debt hold you back. We refactor, stabilize, and upgrade your critical infrastructure without downtime.",
        points: ["Codebase Audits", "Performance Tuning", "Security Hardening"],
        icon: Shield,
        color: "bg-pastel-teal text-brand-accent",
        image: "linear-gradient(135deg, #ccfbf1 0%, #ecfccb 100%)"
    },
    {
        title: "Data-Driven Development",
        description: "We build scalable web and mobile applications backed by rigorous data analysis and user behavior metrics.",
        points: ["Scalable Architecture", "Real-time Dashboards", "User-Centric Design"],
        icon: BarChart,
        color: "bg-pastel-blue text-brand-primary",
        image: "linear-gradient(135deg, #bfdbfe 0%, #ddd6fe 100%)"
    }
];

export function ServiceDeepDive() {
  return (
    <section className="py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal width="100%">
            <div className="text-center mb-24">
                 <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Deep Capabilities</span>
                <h2 className="text-4xl font-bold font-heading text-brand-black mb-6">Built for Complexity</h2>
                <p className="text-xl text-brand-black/60 font-light max-w-2xl mx-auto">
                    We thrive where off-the-shelf tools fail. Our engineering is bespoke, robust, and future-proof.
                </p>
            </div>
        </ScrollReveal>

        <div className="space-y-32">
            {features.map((feature, index) => (
                <div key={feature.title} className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* Visual Side */}
                    <div className="w-full lg:w-1/2">
                        <ScrollReveal width="100%" delay={0.2}>
                            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl group">
                                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: feature.image }}></div>
                                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm m-8 rounded-2xl border border-white/50 flex items-center justify-center">
                                    <motion.div 
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        className={`w-32 h-32 rounded-3xl ${feature.color} flex items-center justify-center shadow-lg`}
                                    >
                                        <feature.icon className="w-16 h-16" />
                                    </motion.div>
                                </div>
                                
                                {/* Decorators */}
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <ScrollReveal width="100%" delay={0.4}>
                            <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-brand-black mb-6 font-heading">{feature.title}</h3>
                            <p className="text-xl text-brand-black/60 leading-relaxed mb-8">
                                {feature.description}
                            </p>
                            <ul className="space-y-4 mb-10">
                                {feature.points.map((point) => (
                                    <li key={point} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-brand-secondary" />
                                        <span className="text-brand-black/80 font-medium">{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button variant="outline" className="rounded-full px-8 h-12 border-brand-black/20 hover:bg-brand-muted text-brand-black group">
                                Explore Solution <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </ScrollReveal>
                    </div>

                </div>
            ))}
        </div>

      </div>
    </section>
  );
}
