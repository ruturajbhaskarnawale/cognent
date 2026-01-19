"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { HoverCard } from "@/components/animations/hover-card";
import { iconMap, type IconName } from "@/lib/icon-map";

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
    <section className="py-24 bg-brand-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal width="100%">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            {subtitle && (
              <span className="text-brand-secondary font-semibold tracking-wider uppercase text-sm mb-4 block">
                {subtitle}
              </span>
            )}
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 font-heading">
              {title}
            </h2>
            {description && (
              <p className="text-xl text-brand-black/60 font-light leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = iconMap[useCase.icon];
            return (
            <ScrollReveal key={useCase.title} delay={index * 0.1}>
              <HoverCard className="h-full bg-white border-transparent group">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-brand-primary" />
                  </div>
                  <div className="flex-1">
                    {useCase.industry && (
                      <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-2 block">
                        {useCase.industry}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-primary transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-brand-black/60 leading-relaxed mb-4">
                      {useCase.description}
                    </p>
                    {useCase.result && (
                      <div className="pt-4 border-t border-brand-black/5">
                        <span className="text-sm font-semibold text-brand-secondary">
                          Result: {useCase.result}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </HoverCard>
            </ScrollReveal>
          );
          })}
        </div>
      </div>
    </section>
  );
}
