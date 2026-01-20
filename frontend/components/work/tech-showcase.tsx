"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface TechItem {
  name: string;
  category: string;
  description: string;
  logo?: string;
}

interface TechShowcaseProps {
  technologies: TechItem[];
  title?: string;
  subtitle?: string;
}

export function TechShowcase({ 
  technologies,
  title = "Technology Stack",
  subtitle = "Cutting-edge tools for modern solutions"
}: TechShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(technologies.map(t => t.category)))];

  // Filter technologies
  const filteredTech = activeCategory === "All" 
    ? technologies 
    : technologies.filter(t => t.category === activeCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-brand-muted/30 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-brand-black mb-4 font-heading"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-black/60 font-light mb-8"
          >
            {subtitle}
          </motion.p>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-brand-black text-white shadow-lg"
                    : "bg-white text-brand-black/60 hover:bg-brand-black/5 border border-brand-black/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredTech.map((tech, idx) => (
            <TechCard key={tech.name} tech={tech} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TechCard({ tech, index }: { tech: TechItem; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="relative h-48 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-2xl bg-white border border-brand-black/5 shadow-lg p-6 flex flex-col items-center justify-center group">
          {/* Logo or Initial */}
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 flex items-center justify-center mb-4 text-3xl font-bold text-brand-primary group-hover:scale-110 transition-transform duration-300">
            {tech.logo ? (
              <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
            ) : (
              tech.name.charAt(0)
            )}
          </div>

          {/* Name */}
          <h3 className="text-lg font-bold text-brand-black text-center mb-2">
            {tech.name}
          </h3>

          {/* Category Badge */}
          <span className="text-xs px-3 py-1 rounded-full bg-brand-black/5 text-brand-black/60 font-medium">
            {tech.category}
          </span>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-primary/0 to-brand-secondary/0 group-hover:from-brand-primary/5 group-hover:to-brand-secondary/5 transition-all duration-500 pointer-events-none" />
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary p-6 flex flex-col items-center justify-center text-white rotate-y-180">
          <p className="text-sm text-center leading-relaxed">
            {tech.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
