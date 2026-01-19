"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { iconMap, type IconName } from "@/lib/icon-map";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: IconName;
}

interface ServiceProcessProps {
  title: string;
  subtitle?: string;
  description?: string;
  steps: ProcessStep[];
}

export function ServiceProcess({ title, subtitle, description, steps }: ServiceProcessProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal width="100%">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            {subtitle && (
              <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
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

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent opacity-20" />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
              <ScrollReveal key={step.number} delay={index * 0.15}>
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="flex-1 lg:text-right" style={index % 2 === 1 ? { textAlign: 'left' } : {}}>
                    <div className="inline-block">
                      <div className="flex items-center gap-4 mb-4" style={index % 2 === 1 ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' }}>
                        <span className="text-6xl font-bold text-brand-primary/20">{step.number}</span>
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-3">
                        {step.title}
                      </h3>
                      <p className="text-lg text-brand-black/60 leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary shadow-lg" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />
                </div>
              </ScrollReveal>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
