"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { HoverCard } from "@/components/animations/hover-card";
import { iconMap, type IconName } from "@/lib/icon-map";

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
    <section className="py-24 bg-brand-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal width="100%">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            {subtitle && (
              <span className="text-brand-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <HoverCard className="h-full bg-white border-transparent group">
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-black mb-4 group-hover:text-brand-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-brand-black/60 leading-relaxed">
                    {feature.description}
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
