"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { HoverCard } from "@/components/animations/hover-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { iconMap, type IconName } from "@/lib/icon-map";

interface RelatedService {
  title: string;
  description: string;
  icon: IconName;
  href: string;
  color: string;
}

interface RelatedServicesProps {
  title?: string;
  services: RelatedService[];
}

export function RelatedServices({ 
  title = "Related Services", 
  services 
}: RelatedServicesProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4 font-heading">
              {title}
            </h2>
            <p className="text-xl text-brand-black/60 font-light">
              Explore our other services that might interest you
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <Link href={service.href}>
                <HoverCard className="h-full bg-brand-muted/30 border-transparent hover:bg-white group">
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-brand-black/60 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-brand-black/40 group-hover:text-brand-primary transition-colors">
                    Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </HoverCard>
              </Link>
            </ScrollReveal>
          );
          })}
        </div>
      </div>
    </section>
  );
}
