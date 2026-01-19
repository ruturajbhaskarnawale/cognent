"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { motion } from "framer-motion";

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
  // Group technologies by category
  const groupedTech = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, Technology[]>);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal width="100%">
          <div className="text-center mb-16 max-w-3xl mx-auto">
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

        <div className="space-y-12">
          {Object.entries(groupedTech).map(([category, techs], categoryIndex) => (
            <ScrollReveal key={category} delay={categoryIndex * 0.1}>
              <div>
                <h3 className="text-xl font-bold text-brand-black mb-6 uppercase tracking-wide">
                  {category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {techs.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-brand-muted/30 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 border border-brand-black/5 hover:border-brand-primary/20 hover:shadow-lg transition-all cursor-pointer group"
                    >
                      {tech.logo ? (
                        <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center">
                          <span className="text-xl font-bold text-brand-primary">
                            {tech.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <span className="text-sm font-medium text-brand-black/70 text-center group-hover:text-brand-primary transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
