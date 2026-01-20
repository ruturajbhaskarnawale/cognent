"use client";

import { useState, useMemo } from "react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { motion, AnimatePresence } from "framer-motion";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { cn } from "@/lib/utils";

interface Technology {
  name: string;
  logo?: string;
  category: string;
}

interface ServiceTechStackProps {
  title: string;
  subtitle?: string;
  description?: string;
  technologies: Technology[];
}

export function ServiceTechStack({ title, subtitle, description, technologies }: ServiceTechStackProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(technologies.map(t => t.category)));
    return ["All", ...cats];
  }, [technologies]);

  const filteredTechnologies = useMemo(() => {
    if (activeCategory === "All") return technologies;
    return technologies.filter(t => t.category === activeCategory);
  }, [activeCategory, technologies]);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            {subtitle && (
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-medium text-sm mb-6 inline-block backdrop-blur-sm uppercase tracking-widest"
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

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden",
                activeCategory === category 
                  ? "text-white shadow-lg shadow-brand-primary/25" 
                  : "text-brand-black/60 hover:text-brand-primary bg-brand-muted/50 hover:bg-brand-primary/5"
              )}
            >
              <span className="relative z-10">{category}</span>
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <motion.div 
            layout 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTechnologies.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <SpotlightCard 
                    className="p-6 h-full flex flex-col items-center justify-center gap-4 group cursor-pointer border-brand-black/5 hover:border-brand-primary/30"
                    spotlightColor="rgba(var(--brand-primary-rgb), 0.1)"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative"
                  >
                    {tech.logo ? (
                      <img src={tech.logo} alt={tech.name} className="w-14 h-14 object-contain group-hover:drop-shadow-xl transition-all" />
                    ) : (
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 flex items-center justify-center group-hover:from-brand-primary group-hover:to-brand-secondary transition-all duration-500">
                        <span className="text-2xl font-bold text-brand-primary group-hover:text-white transition-colors duration-500">
                          {tech.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </motion.div>
                  
                  <div className="text-center">
                    <span className="text-sm font-bold text-brand-black group-hover:text-brand-primary transition-colors block mb-1">
                      {tech.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-brand-black/30 font-medium group-hover:text-brand-primary/50 transition-colors">
                        {tech.category}
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
