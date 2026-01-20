"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Zap, Shield, BarChart, Cpu, Database, Network } from "lucide-react";
import { CursorTrail } from "@/components/effects/cursor-trail";

const features = [
    {
        id: "ai",
        title: "AI & Intelligent Agents",
        description: "We don't just 'use' AI; we architect custom agentic workflows that live within your ecosystem, learning and optimizing your specific operations in real-time.",
        points: ["Autonomous Workflow Agents", "Context-Aware RAG Systems", "Custom Model Fine-tuning"],
        icon: Zap,
        color: "text-purple-600",
        bgColor: "bg-purple-500/5",
        borderColor: "border-purple-500/10",
        accent: "purple"
    },
    {
        id: "legacy",
        title: "Legacy Infrastructure Modernization",
        description: "Technical debt is a silent killer. We perform deep-tissue surgery on legacy codebases, refactoring monolithic systems into modern, scalable microservices without service interruption.",
        points: ["Zero-Downtime Migration", "Microservices Architecture", "Performance Optimization"],
        icon: Shield,
        color: "text-teal-600",
        bgColor: "bg-teal-500/5",
        borderColor: "border-teal-500/10",
        accent: "teal"
    },
    {
        id: "data",
        title: "Data-Driven Development",
        description: "Every pixel and every line of code is backed by data. We build platforms that don't just look good, but are scientifically designed to convert and scale based on user behavior metrics.",
        points: ["Real-time Analytics Pipelines", "Behavioral Data Modeling", "Scalable Data Warehousing"],
        icon: BarChart,
        color: "text-blue-600",
        bgColor: "bg-blue-500/5",
        borderColor: "border-blue-500/10",
        accent: "blue"
    }
];

const VisualAI = () => (
    <div className="relative w-full h-full flex items-center justify-center p-12">
        <div className="relative w-full aspect-square max-w-md">
            {/* Background Rings */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{ 
                        rotate: 360,
                        scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                        rotate: { duration: 10 + i * 5, repeat: Infinity, ease: "linear" },
                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute inset-0 border border-purple-500/20 rounded-full"
                    style={{ margin: i * 40 }}
                />
            ))}
            
            {/* Central Core */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                    animate={{ 
                        boxShadow: ["0 0 20px rgba(168,85,247,0.2)", "0 0 40px rgba(168,85,247,0.4)", "0 0 20px rgba(168,85,247,0.2)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-32 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-purple-100 z-10"
                >
                    <Cpu className="w-16 h-16 text-purple-600" />
                </motion.div>
            </div>

            {/* Floating Nodes */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{ 
                        y: [-10, 10, -10],
                        x: [-5, 5, -5]
                    }}
                    transition={{ 
                        duration: 3 + i, 
                        repeat: Infinity, 
                        delay: i * 0.5 
                    }}
                    className="absolute w-12 h-12 bg-white rounded-xl shadow-lg border border-purple-50 flex items-center justify-center"
                    style={{ 
                        top: `${20 + Math.sin(i) * 30}%`, 
                        left: `${50 + Math.cos(i * 1.5) * 40}%` 
                    }}
                >
                    <Network className="w-6 h-6 text-purple-400" />
                </motion.div>
            ))}
        </div>
    </div>
);

const VisualLegacy = () => (
    <div className="relative w-full h-full flex items-center justify-center p-12">
        <div className="relative w-full aspect-square max-w-md grid grid-cols-3 gap-4">
            {[...Array(9)].map((_, i) => (
                <motion.div
                    key={i}
                    whileInView={{ 
                        opacity: [0, 1],
                        scale: [0.8, 1],
                        rotate: [i * 10, 0]
                    }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className={`aspect-square rounded-2xl border flex items-center justify-center ${
                        i === 4 ? 'bg-teal-600 text-white border-teal-600 shadow-xl z-20' : 'bg-white border-teal-100 text-teal-600 shadow-sm'
                    }`}
                >
                    {i === 4 ? <Shield className="w-10 h-10" /> : <Database className="w-6 h-6 opacity-40" />}
                </motion.div>
            ))}
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
                <motion.path
                    d="M 50,50 L 50,350 M 50,50 L 350,50"
                    stroke="rgba(20,184,166,0.1)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5 }}
                />
            </svg>
        </div>
    </div>
);

const VisualData = () => (
    <div className="relative w-full h-full flex items-center justify-center p-12">
        <div className="relative w-full aspect-square max-w-md">
            <div className="absolute inset-0 flex items-end justify-between gap-2">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: "10%" }}
                        whileInView={{ height: `${30 + Math.random() * 60}%` }}
                        transition={{ 
                            duration: 1, 
                            delay: i * 0.1,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 2
                        }}
                        className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-xl"
                    />
                ))}
            </div>
            <motion.div 
                animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-10 w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center border border-blue-100"
            >
                <BarChart className="w-12 h-12 text-blue-600" />
            </motion.div>
        </div>
    </div>
);

const FeatureVisual = ({ id }: { id: string }) => {
    switch (id) {
        case "ai": return <VisualAI />;
        case "legacy": return <VisualLegacy />;
        case "data": return <VisualData />;
        default: return null;
    }
};

export function ServiceDeepDive() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      {/* Cursor Trail Effect */}
      <CursorTrail />

      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal width="100%">
            <div className="text-center mb-32 max-w-3xl mx-auto">
                <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-medium text-sm mb-6 inline-block backdrop-blur-sm"
                >
                    Deep Capabilities
                </motion.span>
                <h2 className="text-4xl md:text-6xl font-bold font-heading text-brand-black mb-8 tracking-tight">
                    Built for <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-slow">Extreme Complexity.</span>
                </h2>
                <p className="text-xl text-brand-black/60 font-light leading-relaxed">
                    We thrive where off-the-shelf tools fail. Our engineering is bespoke, robust, and designed to outlast the competition.
                </p>
            </div>
        </ScrollReveal>

        <div className="space-y-40">
            {features.map((feature, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div key={feature.id} className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                        {/* Visual Side (Sticky) */}
                        <div className={`w-full lg:w-1/2 lg:sticky lg:top-32 ${!isEven ? 'lg:order-last' : ''}`}>
                            <ScrollReveal width="100%" direction={isEven ? "left" : "right"}>
                                <div className={`relative rounded-[40px] border ${feature.borderColor} ${feature.bgColor} overflow-hidden aspect-square flex items-center justify-center shadow-inner`}>
                                    <FeatureVisual id={feature.id} />
                                    
                                    {/* Abstract Decorators */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 blur-3xl -translate-y-1/2 translate-x-1/2" />
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/40 blur-3xl translate-y-1/2 -translate-x-1/2" />
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 py-8 lg:py-16">
                            <ScrollReveal width="100%" direction={isEven ? "right" : "left"}>
                                <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-8 border ${feature.borderColor}`}>
                                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                                </div>
                                <h3 className="text-3xl lg:text-5xl font-bold text-brand-black mb-8 tracking-tight leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-xl text-brand-black/60 leading-relaxed mb-12">
                                    {feature.description}
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                    {feature.points.map((point) => (
                                        <div key={point} className="flex items-center gap-4 group">
                                            <div className={`w-6 h-6 rounded-full ${feature.bgColor} border ${feature.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                <CheckCircle2 className={`w-3.5 h-3.5 ${feature.color}`} />
                                            </div>
                                            <span className="text-brand-black/80 font-medium">{point}</span>
                                        </div>
                                    ))}
                                </div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="inline-block"
                                >
                                    <Button variant="outline" className="rounded-full px-10 h-14 border-brand-black/10 hover:border-brand-primary/30 hover:bg-brand-primary/5 text-brand-black font-bold group">
                                        Deep Dive Into Solution 
                                        <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </motion.div>
                            </ScrollReveal>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
}
