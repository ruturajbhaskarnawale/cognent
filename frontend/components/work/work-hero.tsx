"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";

export function WorkHero() {
  return (
    <section className="relative w-full pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Aurora Glows (Comfort Palette) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-5%] left-[-5%] w-[60%] h-[60%] bg-purple-500/5 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-amber-500/5 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 border border-brand-primary/10 backdrop-blur-md mb-8"
          >
            <Sparkles className="w-4 h-4 text-brand-primary animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand-primary/80">Studio Archive</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-brand-black mb-10 font-heading leading-[0.9]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="block"
            >
              Engineering
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="block text-brand-primary"
            >
              Success Stories.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-black/50 mb-12 max-w-2xl font-light leading-relaxed"
          >
            A curated selection of technical breakthroughs, custom architected systems, and digital product evolutions for market-leading brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-12 pt-8 border-t border-brand-black/5"
          >
            {[
              { label: "Systems Architected", value: "50+" },
              { label: "Successful Launches", value: "100%" },
              { label: "Strategic Partners", value: "25+" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-bold text-brand-black mb-1 font-heading">{stat.value}</div>
                <div className="text-sm text-brand-black/40 font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-black/20"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
