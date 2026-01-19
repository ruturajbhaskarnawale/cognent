"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { HoverCard } from "@/components/animations/hover-card";
import { iconMap, type IconName } from "@/lib/icon-map";

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
    <section className="py-24 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            {subtitle && (
              <span className="text-white/80 font-semibold tracking-wider uppercase text-sm mb-4 block">
                {subtitle}
              </span>
            )}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              {title}
            </h2>
            {description && (
              <p className="text-xl text-white/90 font-light leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
            <ScrollReveal key={benefit.title} delay={index * 0.1}>
              <HoverCard className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 group">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                {benefit.metric && (
                  <div className="text-4xl font-bold text-white mb-3">
                    {benefit.metric}
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {benefit.description}
                </p>
              </HoverCard>
            </ScrollReveal>
          );
          })}
        </div>
      </div>
    </section>
  );
}
