"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { iconMap, type IconName } from "@/lib/icon-map";
import { motion } from "framer-motion";

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
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Auras */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/3 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-secondary/3 rounded-full blur-[120px] translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-medium text-sm mb-6 inline-block backdrop-blur-sm uppercase tracking-widest"
            >
              Explore More
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-black mb-6 font-heading tracking-tight">
              {title}
            </h2>
            <p className="text-xl text-brand-black/60 font-light max-w-2xl mx-auto">
              Explore our other services that might interest you
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <Link href={service.href} className="block h-full">
                <SpotlightCard className="h-full group cursor-pointer border-brand-black/5 hover:border-brand-primary/20">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-brand-black mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-brand-black/60 leading-relaxed mb-8 font-light">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-bold text-brand-primary uppercase tracking-wider mt-auto">
                    Learn more 
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </div>
                </SpotlightCard>
              </Link>
            </ScrollReveal>
          );
          })}
        </div>
      </div>
    </section>
  );
}
