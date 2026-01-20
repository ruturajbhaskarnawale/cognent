"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { iconMap, type IconName } from "@/lib/icon-map";
import { motion } from "framer-motion";
import { Trophy, ArrowRight } from "lucide-react";

interface UseCase {
  title: string;
  description: string;
  icon: IconName;
  industry?: string;
  result?: string;
}

interface ServiceUseCasesProps {
  title: string;
  subtitle?: string;
  description?: string;
  useCases: UseCase[];
}

export function ServiceUseCases({ title, subtitle, description, useCases }: ServiceUseCasesProps) {
  return (
    <section className="py-32 bg-brand-muted/50 relative overflow-hidden">
      {/* Background Decorative Auras */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            {subtitle && (
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="px-4 py-1.5 rounded-full bg-brand-secondary/10 text-brand-secondary font-medium text-sm mb-6 inline-block backdrop-blur-sm uppercase tracking-widest"
              >
                {subtitle}
              </motion.span>
            )}
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-brand-black mb-8 tracking-tight">
              {title}
            </h2>
            {description && (
              <p className="text-xl text-brand-black/60 font-light leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          {useCases.map((useCase, index) => {
            const Icon = iconMap[useCase.icon];
            return (
              <ScrollReveal 
                key={useCase.title} 
                delay={index * 0.1}
                direction={index % 2 === 0 ? "right" : "left"}
              >
                <SpotlightCard className="h-full flex flex-col p-0 overflow-hidden border-brand-black/5 group">
                  <div className="p-8 pb-6 flex-1">
                    <div className="flex justify-between items-start mb-8">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary p-4 flex items-center justify-center shadow-lg transition-transform duration-500"
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      {useCase.industry && (
                        <span className="px-3 py-1 rounded-full bg-brand-black/5 text-[10px] font-bold text-brand-black/60 uppercase tracking-tighter backdrop-blur-sm border border-brand-black/5">
                          {useCase.industry}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 group-hover:text-brand-primary transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    <p className="text-lg text-brand-black/60 leading-relaxed font-light mb-6">
                      {useCase.description}
                    </p>
                  </div>

                  {useCase.result && (
                    <div className="mt-auto bg-brand-black/[0.02] border-t border-brand-black/5 p-6 flex items-center gap-4 group-hover:bg-brand-primary/[0.03] transition-colors duration-300">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-secondary/10 flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-brand-secondary" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-bold text-brand-secondary uppercase tracking-widest block mb-1 opacity-60">
                          Impact Result
                        </span>
                        <p className="text-brand-black font-semibold leading-tight">
                          {useCase.result}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-brand-black/20 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  )}
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
