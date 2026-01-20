"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { iconMap, type IconName } from "@/lib/icon-map";
import { SpotlightCard } from "@/components/animations/spotlight-card";

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
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[600px] h-[600px] bg-brand-primary/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-[600px] h-[600px] bg-brand-secondary/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-32 max-w-3xl mx-auto">
            {subtitle && (
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-medium text-sm mb-6 inline-block backdrop-blur-sm uppercase tracking-wider"
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

        <div className="relative max-w-6xl mx-auto">
          {/* Central Animated Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-black/5 -translate-x-1/2 hidden lg:block">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute inset-0 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent shadow-[0_0_10px_rgba(37,99,235,0.2)]"
            />
          </div>

          <div className="space-y-32 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon];
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.number} className="relative lg:h-[400px] flex items-center">
                  {/* Background Large Number */}
                  <div 
                    className={`absolute top-1/2 -translate-y-1/2 hidden lg:block select-none opacity-[0.03] text-[15rem] font-bold font-heading pointer-events-none ${
                        isEven ? 'right-0' : 'left-0'
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Connector Circle (Desktop) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block z-20">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="w-4 h-4 rounded-full bg-white border-4 border-brand-primary shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                    />
                  </div>

                  <div className={`w-full lg:w-[45%] ${isEven ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                    <ScrollReveal 
                      width="100%" 
                      delay={0.1}
                      direction={isEven ? "right" : "left"}
                    >
                      <SpotlightCard className="group">
                        <div className="flex flex-col sm:flex-row items-start gap-8">
                          <div className="flex-shrink-0 relative">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary p-4 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-sm font-bold text-brand-primary lg:hidden">
                                {step.number}
                            </span>
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 group-hover:text-brand-primary transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="text-lg text-brand-black/60 leading-relaxed font-light">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </SpotlightCard>
                    </ScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
