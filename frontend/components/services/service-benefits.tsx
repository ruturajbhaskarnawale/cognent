"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { iconMap, type IconName } from "@/lib/icon-map";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
  icon: IconName;
  metric?: string;
}

interface ServiceBenefitsProps {
  title: string;
  subtitle?: string;
  description?: string;
  benefits: Benefit[];
}

export function ServiceBenefits({ title, subtitle, description, benefits }: ServiceBenefitsProps) {
  return (
    <section className="py-32 bg-brand-black relative overflow-hidden">
      {/* Immersive Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal width="100%">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
            <div className="max-w-2xl">
              {subtitle && (
                <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="w-5 h-5 text-brand-primary animate-pulse" />
                    <span className="text-xs font-black tracking-[0.3em] uppercase text-white/40">
                        {subtitle}
                    </span>
                </div>
              )}
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-heading tracking-tight leading-none">
                {title}
              </h2>
              {description && (
                <p className="text-xl text-white/50 font-light leading-relaxed max-w-xl">
                  {description}
                </p>
              )}
            </div>
            
            <motion.div 
                whileHover={{ scale: 1.05 }}
                className="hidden lg:flex flex-col items-end text-right"
            >
                <div className="text-4xl font-black text-brand-primary mb-2 italic">10X</div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Efficiency Multiplier</div>
            </motion.div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
            <ScrollReveal key={benefit.title} delay={index * 0.1}>
              <SpotlightCard className="h-full bg-white/5 border-white/10 hover:border-brand-primary/30 group p-10 backdrop-blur-sm">
                <div className="relative z-10 space-y-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-primary/20 transition-all duration-500 shadow-inner">
                        <Icon className="w-8 h-8 text-white group-hover:text-brand-primary transition-colors" />
                    </div>
                    
                    {benefit.metric && (
                        <div>
                            <div className="text-[10px] font-bold text-brand-secondary uppercase tracking-[0.3em] mb-2 font-black">Performance Delta</div>
                            <div className="text-4xl md:text-5xl font-bold text-white font-heading">
                                {benefit.metric}
                            </div>
                        </div>
                    )}

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">
                            {benefit.title}
                        </h3>
                        <p className="text-white/40 leading-relaxed font-light text-sm">
                            {benefit.description}
                        </p>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between group/link cursor-pointer">
                        <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest group-hover/link:text-brand-primary transition-colors">Technical Spec</span>
                        <ArrowRight className="w-4 h-4 text-white/10 group-hover/link:text-brand-primary group-hover/link:translate-x-2 transition-all" />
                    </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          );
          })}
        </div>
      </div>
    </section>
  );
}
