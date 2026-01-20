"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { MessageSquare, Search, Hammer, Rocket } from "lucide-react";
import { SpotlightCard } from "@/components/animations/spotlight-card";

import { CursorTrail } from "@/components/effects/cursor-trail";

const steps = [
    {
        icon: MessageSquare,
        title: "Describe",
        desc: "You explain your technical challenge or idea. We listen, dive deep, and define the scope together.",
        color: "bg-blue-50 text-blue-600",
        spotlight: "rgba(59, 130, 246, 0.1)"
    },
    {
        icon: Search,
        title: "Analyze",
        desc: "We research and architect the perfect solution, choosing the right stack for scalability and speed.",
        color: "bg-purple-50 text-purple-600",
        spotlight: "rgba(168, 85, 247, 0.1)"
    },
    {
        icon: Hammer,
        title: "Build",
        desc: "Our engineers construct your tool or platform with precision, following agile best practices.",
        color: "bg-teal-50 text-teal-600",
        spotlight: "rgba(20, 184, 166, 0.1)"
    },
    {
        icon: Rocket,
        title: "Deliver",
        desc: "We deploy, test, and hand over the keys. Your success is our ultimate delivery metric.",
        color: "bg-rose-50 text-rose-600",
        spotlight: "rgba(225, 29, 72, 0.1)"
    }
];

export function ProcessFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      {/* Cursor Trail Effect */}
      <CursorTrail />

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal width="100%">
            <div className="text-center mb-32 max-w-3xl mx-auto">
                <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-medium text-sm mb-6 inline-block backdrop-blur-sm"
                >
                    Workflow
                </motion.span>
                <h2 className="text-4xl md:text-6xl font-bold font-heading text-brand-black mb-8 tracking-tight">
                    Our <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-slow">Process.</span>
                </h2>
                <p className="text-xl text-brand-black/60 font-light leading-relaxed">
                    A simple, transparent journey designed to get you from problem to solution without the headache.
                </p>
            </div>
        </ScrollReveal>

        <div className="relative max-w-5xl mx-auto">
            {/* Central Animated Line (Desktop) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-brand-black/5 -translate-x-1/2 hidden md:block">
                <motion.div 
                    style={{ scaleY, originY: 0 }}
                    className="absolute inset-0 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent rounded-full shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                />
            </div>

            <div className="space-y-24 md:space-y-0">
                {steps.map((step, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={step.title} className="relative md:h-80 flex items-center">
                            {/* Connector Circle */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block z-20">
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="w-4 h-4 rounded-full bg-white border-4 border-brand-primary shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                                />
                            </div>

                            <div className={`w-full md:w-[45%] ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                <ScrollReveal 
                                    width="100%" 
                                    delay={0.1}
                                    direction={isEven ? "right" : "left"}
                                >
                                    <SpotlightCard 
                                        className="text-left group"
                                        spotlightColor={step.spotlight}
                                    >
                                        <div className="flex items-start gap-6">
                                            <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                                <step.icon className="h-7 w-7 transition-transform duration-500 group-hover:rotate-12" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-brand-primary font-mono text-xs tracking-tighter opacity-50">{index + 1}</span>
                                                    <h3 className="text-2xl font-bold text-brand-black group-hover:text-brand-primary transition-colors">
                                                        {step.title}
                                                    </h3>
                                                </div>
                                                <p className="text-brand-black/60 leading-relaxed">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </ScrollReveal>
                            </div>

                            {/* Mobile Number/Connector (Simple) */}
                            <div className="absolute top-0 left-0 -translate-y-12 block md:hidden">
                                <span className="text-6xl font-black text-brand-black/5 select-none tracking-tighter">0{index + 1}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  );
}
