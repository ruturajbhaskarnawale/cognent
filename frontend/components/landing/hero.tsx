"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { TextReveal } from "@/components/animations/text-reveal";
import { InteractiveGrid } from "@/components/landing/interactive-grid";
import { TextRotator } from "@/components/animations/text-rotator";
import { MagneticButton } from "@/components/animations/magnetic-button";

export function HeroSection() {
  const rotatingTexts = [
    "Future of Work.",
    "Sales Machine.",
    "Digital Trust.",
    "Growth Engine."
  ];

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* NEW: Interactive Background Grid */}
      <InteractiveGrid />

      <div className="container relative z-10 px-6 lg:px-12 mx-auto text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 }}
           className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-white/80 backdrop-blur-md shadow-sm mb-8 hover:scale-105 transition-transform cursor-default"
        >
           <Sparkles className="w-4 h-4 text-brand-secondary animate-pulse" />
           <span className="text-sm font-medium text-brand-black/80">Reimagining Technical Consulting</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-brand-black mb-6 font-heading leading-[1.1]">
           <TextReveal text="Engineering Your" className="justify-center" />
           <br />
           <TextRotator texts={rotatingTexts} />
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-brand-black/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          We build custom tools, AI integrations, and digital platforms that turn your technical debt into a competitive advantage.
        </motion.p>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.7 }}
           className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <MagneticButton>
            <Link href="/contact">
              <Button size="lg" className="relative overflow-hidden rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white border-0 px-10 h-14 text-lg font-bold shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all group">
                <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                </span>
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0"></div>
              </Button>
            </Link>
          </MagneticButton>

          <Link href="/services">
            <Button variant="ghost" size="lg" className="rounded-full text-brand-black hover:bg-white/50 px-8 h-12 text-lg group">
              View Capabilities
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Floating UI Elements (Abstract Mockups) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute right-[-5%] top-[20%] hidden xl:block w-[300px] h-[400px] bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl shadow-2xl rotate-[-12deg] z-0 hover:rotate-0 transition-transform duration-700"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute left-[-5%] bottom-[20%] hidden xl:block w-[350px] h-[200px] bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl shadow-2xl rotate-[6deg] z-0 hover:rotate-0 transition-transform duration-700"
      ></motion.div>

    </section>
  );
}
