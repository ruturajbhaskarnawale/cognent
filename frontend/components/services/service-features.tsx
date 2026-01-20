"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { iconMap, type IconName } from "@/lib/icon-map";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: IconName;
  color: string;
}

interface ServiceFeaturesProps {
  title: string;
  subtitle?: string;
  description?: string;
  features: Feature[];
}

export function ServiceFeatures({ title, subtitle, description, features }: ServiceFeaturesProps) {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal width="100%">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            {subtitle && (
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-brand-primary animate-pulse" />
                <span className="text-xs font-black tracking-[0.3em] uppercase text-brand-black/40">
                  {subtitle}
                </span>
              </div>
            )}
            <h2 className="text-4xl md:text-6xl font-bold text-brand-black mb-8 font-heading tracking-tight leading-none">
              {title}
            </h2>
            {description && (
              <p className="text-xl text-brand-black/50 font-light leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <SpotlightCard className="h-full bg-brand-muted border-brand-black/5 hover:border-brand-primary/20 group p-10 transition-all duration-500">
                  <div className="relative z-10 space-y-8">
                    <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-brand-black group-hover:text-brand-primary transition-colors tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-brand-black/60 leading-relaxed font-light">
                        {feature.description}
                      </p>
                    </div>

                    <div className="pt-6 flex items-center justify-between border-t border-brand-black/5">
                        <span className="text-[10px] font-black tracking-widest uppercase text-brand-black/20 group-hover:text-brand-primary transition-colors">Core Function</span>
                        <motion.div 
                            whileHover={{ x: 5 }}
                            className="w-8 h-8 rounded-full bg-brand-black/5 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all cursor-pointer"
                        >
                            <ArrowRight className="w-4 h-4" />
                        </motion.div>
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
