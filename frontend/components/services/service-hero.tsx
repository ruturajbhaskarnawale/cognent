"use client";

import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ChevronDown, 
  Brain, 
  Bot, 
  Wrench, 
  Compass, 
  Code, 
  TrendingUp,
  Sparkles,
  Shield,
  Zap,
  Cpu
} from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

const iconMap = {
  Brain,
  Bot,
  Wrench,
  Compass,
  Code,
  TrendingUp,
};

interface ServiceHeroProps {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  gradient: string;
  iconColor: string;
}

export function ServiceHero({ title, description, icon, gradient, iconColor }: ServiceHeroProps) {
  const Icon = iconMap[icon];
  
  // Extract a base color from iconColor for the Aurora glows
  // Simple heuristic: if it contains 'blue', use a blue glow, etc.
  const glowColor = iconColor.includes('blue') ? 'bg-blue-500/20' : 
                    iconColor.includes('purple') ? 'bg-purple-500/20' :
                    iconColor.includes('amber') ? 'bg-amber-500/20' :
                    iconColor.includes('emerald') ? 'bg-emerald-500/20' : 'bg-brand-primary/20';

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Cinematic Aurora Glows (Atmospheric Layer 0) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute top-[-10%] right-[-10%] w-[60%] h-[60%] ${glowColor} rounded-full blur-[140px] opacity-40`}
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className={`absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] bg-brand-primary/10 rounded-full blur-[160px] opacity-30`}
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
        {/* Superior Navigation Hook */}
        <div className="absolute top-10 left-6 lg:left-12">
            <MagneticButton>
                <Link 
                    href="/services" 
                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-brand-black/5 border border-brand-black/5 backdrop-blur-xl text-brand-black/60 hover:text-brand-black hover:bg-brand-black/10 transition-all group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-bold tracking-widest uppercase">Archive</span>
                </Link>
            </MagneticButton>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-12">
            <ScrollReveal>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-primary/5 border border-brand-primary/10 backdrop-blur-md mb-4">
                <Sparkles className="w-4 h-4 text-brand-primary animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-brand-primary/80">Premium Enterprise Vertical</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-brand-black leading-[0.85] font-heading">
                {title.split(' ').map((word, i) => (
                    <span key={i} className="block last:text-brand-primary">
                        {word}
                    </span>
                ))}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-xl md:text-2xl text-brand-black/50 font-light leading-relaxed max-w-xl border-l-2 border-brand-primary/20 pl-8">
                {description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-8 items-center pt-8 border-t border-brand-black/5">
                <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-brand-muted overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?u=service${i}`} alt="Specialist" className="w-full h-full object-cover" />
                        </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-black flex items-center justify-center text-[10px] font-bold text-white">
                        +12
                    </div>
                </div>
                <div className="text-xs font-bold text-brand-black/40 tracking-widest uppercase">
                    Architects Assigned <br /> to this Vertical
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Glassmorphic Icon Hub */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-72 h-72 md:w-[450px] md:h-[450px]"
            >
              {/* Floating Orbs */}
              <div className="absolute inset-0 rounded-full bg-white/40 border border-white/60 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] backdrop-blur-3xl overflow-hidden flex items-center justify-center group">
                 <div className={`absolute inset-0 ${iconColor} opacity-5 group-hover:opacity-10 transition-opacity`} />
                 
                 {/* Inner Bioluminescent Glow */}
                 <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className={`w-1/2 h-1/2 rounded-full ${glowColor} blur-[80px] pointer-events-none`}
                 />

                 <Icon className="w-24 h-24 md:w-40 md:h-40 text-brand-black/10 absolute transition-all group-hover:scale-110 group-hover:text-brand-primary/10" />
                 <Icon className="w-20 h-20 md:w-32 md:h-32 text-brand-black relative z-10 transition-all group-hover:scale-110 group-hover:translate-y-[-10px]" />
              </div>

              {/* Orbital Mini-Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 p-6 rounded-3xl bg-white/80 border border-white/60 shadow-xl backdrop-blur-xl z-20"
              >
                <div className="text-2xl font-black text-brand-black">99.9%</div>
                <div className="text-[10px] font-bold text-brand-black/40 uppercase tracking-widest">Efficiency</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-8 -left-8 p-6 rounded-3xl bg-brand-black text-white shadow-2xl z-20"
              >
                <div className="flex items-center gap-2 text-brand-primary mb-2">
                    <Shield className="w-4 h-4" />
                    <span className="text-[8px] font-black tracking-widest uppercase">Verified System</span>
                </div>
                <div className="text-xl font-bold">Secure Stack</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex justify-center lg:justify-start"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-6"
          >
            <div className="w-[1px] h-12 bg-brand-black/10" />
            <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-black/40">Technical Specs</span>
                <ChevronDown className="w-5 h-5 text-brand-primary" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Wave Replacement (Clean Segment) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
