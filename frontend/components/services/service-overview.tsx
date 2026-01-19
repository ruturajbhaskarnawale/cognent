"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { CheckCircle2 } from "lucide-react";

interface ServiceOverviewProps {
  title: string;
  subtitle?: string;
  description: string[];
  highlights?: string[];
  stats?: { label: string; value: string }[];
  image?: string;
}

export function ServiceOverview({ 
  title, 
  subtitle, 
  description, 
  highlights, 
  stats,
  image 
}: ServiceOverviewProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <ScrollReveal>
            <div>
              {subtitle && (
                <span className="text-brand-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
                  {subtitle}
                </span>
              )}
              <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-8 font-heading">
                {title}
              </h2>
              
              <div className="space-y-6 text-lg text-brand-black/70 leading-relaxed">
                {description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {highlights && highlights.length > 0 && (
                <div className="mt-10 space-y-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-brand-secondary flex-shrink-0 mt-1" />
                      <span className="text-brand-black/80 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Visual Side */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              {stats && stats.length > 0 ? (
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-brand-muted to-white p-8 rounded-3xl border border-brand-black/5 hover:shadow-xl transition-shadow"
                    >
                      <div className="text-4xl md:text-5xl font-bold text-brand-secondary mb-2">
                        {stat.value}
                      </div>
                      <div className="text-brand-black/60 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div 
                  className="aspect-square rounded-3xl bg-gradient-to-br from-brand-muted via-pastel-purple to-pastel-blue p-12 flex items-center justify-center"
                  style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover' } : {}}
                >
                  {!image && (
                    <div className="w-full h-full bg-white/30 backdrop-blur-sm rounded-2xl border border-white/50" />
                  )}
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
