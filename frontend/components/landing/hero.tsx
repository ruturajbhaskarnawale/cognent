"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles, Code, Brain, BarChart3, Terminal, Zap } from "lucide-react";
import { TextRotator } from "@/components/animations/text-rotator";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { FluidBackground } from "@/components/effects/fluid-background";
import { CursorTrail } from "@/components/effects/cursor-trail";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotatingTexts = [
    "Systems for Scale.",
    "Bespoke AI Architecture.",
    "High-Performance Infra.",
    "Technical Debt Surgery."
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 });

  const titleWords = "Build systems that".split(" ");

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 bg-white"
    >
      {/* Layer 0: Animated Aurora Glows */}
      <div className="absolute inset-0 -z-30 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-primary/10 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-brand-secondary/10 rounded-full blur-[180px]"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -80, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-brand-accent/5 rounded-full blur-[120px]"
        />
      </div>

      {/* Advanced Fluid Background */}
      <FluidBackground />
      
      {/* Interactive Cursor Trail */}
      <CursorTrail />
      
      <div className="container relative z-10 px-6 lg:px-12 mx-auto">
        <motion.div 
          style={{ opacity, scale }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
             className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 border border-brand-primary/10 backdrop-blur-md shadow-sm mb-8 hover:bg-white/80 transition-colors cursor-default"
          >
             <div className="w-5 h-5 bg-white rounded-md flex items-center justify-center p-0.5 overflow-hidden shadow-inner">
               <img src="/logo/cognent1.png" className="w-full h-full object-contain mix-blend-multiply" alt="Cognent" />
             </div>
             <span className="text-xs font-bold tracking-widest uppercase text-brand-primary/80">Productized Engineering Partner</span>
          </motion.div>

          {/* Kinetic Headline */}
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-brand-black mb-8 font-heading leading-[0.9] flex flex-col items-center">
            <span className="flex flex-wrap justify-center gap-x-4">
              {titleWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    delay: 0.1 + idx * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="mt-2 text-brand-primary relative">
               <TextRotator texts={rotatingTexts} className="min-w-[400px]" />
               <motion.span 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 1 }}
                 className="block text-brand-black/90 mt-2"
               >
                 Don’t Break at Scale.
               </motion.span>
               {/* Decorative underline */}
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ delay: 1, duration: 1 }}
                 className="absolute -bottom-2 left-0 h-1.5 bg-brand-primary/20 rounded-full"
               />
            </span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-lg md:text-xl text-brand-black/50 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            From architecture to AI — we help you avoid rebuilding your product. Stop fighting fires; start scaling with absolute engineering confidence.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.5 }}
             className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <MagneticButton>
              <Link href="/architecture-audit">
                <Button size="lg" className="relative group overflow-hidden rounded-full bg-brand-black text-white px-10 h-16 text-lg font-bold shadow-2xl hover:bg-brand-primary transition-all duration-500">
                  <span className="relative z-10 flex items-center gap-2">
                      Get Your Scale Audit
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Pulsing Glow */}
                  <div className="absolute inset-0 bg-brand-primary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
                </Button>
              </Link>
            </MagneticButton>

            <Link href="/work">
              <Button variant="ghost" size="lg" className="rounded-full text-brand-black/60 font-bold hover:text-brand-black hover:bg-brand-black/5 px-8 h-12 text-lg">
                View Scaling Proof
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Premium Glassmorphic Mockups (Parallax) */}
      <motion.div
        style={{ y: springY1 }}
        className="absolute right-[-5%] top-[15%] hidden 2xl:block w-[450px] aspect-video bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] rotate-[-8deg] z-0 overflow-hidden group hover:rotate-0 transition-transform duration-700"
      >
        <div className="p-6 h-full flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-black/5 pb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/20" />
              <div className="w-3 h-3 rounded-full bg-amber-400/20" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/20" />
            </div>
            <Terminal className="w-4 h-4 text-black/20" />
          </div>
          <div className="flex-1 space-y-3 font-mono text-[10px] text-black/40">
            <div className="flex items-center gap-2"><span className="text-brand-primary">const</span> engine = <span className="text-brand-secondary">new</span> CognentCore();</div>
            <div className="flex items-center gap-2">engine.optimize(<span className="text-brand-accent">"enterprise-scale"</span>);</div>
            <div className="h-2 w-[80%] bg-black/5 rounded-full" />
            <div className="h-2 w-[60%] bg-black/5 rounded-full" />
            <div className="flex items-center gap-2 text-brand-primary/60 mt-4"><Brain className="w-3 h-3" /> Initializing AI Layer...</div>
            <div className="h-2 w-[40%] bg-brand-primary/10 rounded-full" />
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: springY2 }}
        className="absolute left-[-5%] bottom-[10%] hidden 2xl:block w-[400px] h-[300px] bg-white/60 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] rotate-[12deg] z-0 overflow-hidden group hover:rotate-0 transition-transform duration-700"
      >
        <div className="p-8 h-full flex flex-col gap-6">
           <div className="flex items-center gap-3">
             <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <BarChart3 className="w-6 h-6" />
             </div>
             <div>
                <div className="text-sm font-bold text-black">Efficiency Delta</div>
                <div className="text-xs text-black/40">Real-time optimization</div>
             </div>
           </div>
           <div className="flex-1 flex items-end gap-2">
              {[60, 40, 80, 50, 90, 70].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 2 + i * 0.1, duration: 1 }}
                  className="flex-1 bg-gradient-to-t from-brand-primary/20 to-brand-primary/40 rounded-t-lg"
                />
              ))}
           </div>
        </div>
      </motion.div>

      {/* Floating Icons */}
      {[
        { Icon: Zap, top: "20%", left: "15%", delay: 1.5, color: "text-amber-500/20" },
        { Icon: Code, top: "60%", right: "12%", delay: 1.8, color: "text-brand-primary/20" },
        { Icon: Brain, bottom: "25%", left: "20%", delay: 2.1, color: "text-brand-secondary/20" },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: item.delay, type: "spring" }}
          style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
          className={item.color + " absolute hidden lg:block"}
        >
          <item.Icon className="w-12 h-12" />
        </motion.div>
      ))}
    </section>
  );
}
