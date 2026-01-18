"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { TextReveal } from "@/components/animations/text-reveal";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-muted">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-pastel-purple/60 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-pastel-blue/60 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-pastel-teal/60 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 px-6 lg:px-12 mx-auto text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 }}
           className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-white/80 backdrop-blur-md shadow-sm mb-8"
        >
           <Sparkles className="w-4 h-4 text-brand-secondary" />
           <span className="text-sm font-medium text-brand-black/80">Reimagining Technical Consulting</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-brand-black mb-6 font-heading leading-[1.1]">
           <TextReveal text="Engineering the" className="justify-center" />
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
               Future of Work.
           </span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-brand-black/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          We build the custom tools, AI integrations, and digital platforms that high-performance companies run on.
        </motion.p>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.7 }}
           className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/contact">
            <Button size="lg" className="rounded-full bg-brand-black text-white hover:bg-brand-black/80 px-8 h-12 text-lg shadow-lg hover:shadow-xl transition-all">
              Start Your Project
            </Button>
          </Link>
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
        className="absolute right-[-5%] top-[20%] hidden xl:block w-[300px] h-[400px] bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl shadow-2xl rotate-[-12deg] z-0"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute left-[-5%] bottom-[20%] hidden xl:block w-[350px] h-[200px] bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl shadow-2xl rotate-[6deg] z-0"
      ></motion.div>

    </section>
  );
}
