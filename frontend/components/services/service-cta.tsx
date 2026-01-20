"use client";

import { useRef, useState, useMemo } from "react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceCTAProps {
  title: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: "default" | "gradient" | "minimal";
}

export function ServiceCTA({ 
  title, 
  description, 
  primaryCTA = { text: "Get Started", href: "/estimate" },
  secondaryCTA = { text: "Contact Us", href: "/contact" },
  variant = "default"
}: ServiceCTAProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Effect Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const trustIndicators = [
    { text: "Free Consultation", icon: Sparkles },
    { text: "No Obligation", icon: CheckCircle2 },
    { text: "Quick Response", icon: MessageCircle },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal width="100%">
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className={cn(
                "relative rounded-[2.5rem] p-12 md:p-20 lg:p-24 overflow-hidden shadow-2xl transition-all duration-500",
                variant === "gradient" 
                  ? "bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent shadow-brand-primary/20" 
                  : "bg-brand-black border border-white/10"
            )}
          >
            {/* Liquid Glow/Animated Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div 
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1/4 -left-1/4 w-full h-full bg-brand-primary/20 blur-[120px] rounded-full"
              />
              <motion.div 
                animate={{
                  x: [0, -80, 0],
                  y: [0, 60, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-brand-secondary/20 blur-[120px] rounded-full"
              />
              {/* Glass Shards */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-[10%] w-20 h-20 bg-white rotate-12 blur-sm" />
                <div className="absolute bottom-20 right-[15%] w-32 h-16 bg-white -rotate-45 blur-md" />
              </div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center" style={{ transform: "translateZ(50px)" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="px-4 py-1.5 rounded-full bg-white/10 text-white/80 font-medium text-sm mb-8 backdrop-blur-md border border-white/10 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-brand-secondary" />
                <span>Ready to Elevate?</span>
              </motion.div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-heading tracking-tight leading-[1.1]">
                {title}
              </h2>
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-12 max-w-2xl">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
                <Link href={primaryCTA.href} className="w-full sm:w-auto">
                    <Button 
                        size="lg" 
                        className="w-full sm:w-auto rounded-full px-12 h-16 text-lg font-bold group relative overflow-hidden bg-white text-brand-black hover:bg-white/90 shadow-xl hover:shadow-white/20 transition-all border-0"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Calendar className="w-6 h-6" />
                            {primaryCTA.text}
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </span>
                        {/* Shimmer Effect */}
                        <motion.div 
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent skew-x-12 pointer-events-none"
                        />
                    </Button>
                </Link>

                <Link href={secondaryCTA.href} className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full sm:w-auto rounded-full px-12 h-16 text-lg border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all"
                  >
                    <MessageCircle className="w-6 h-6 mr-2" />
                    {secondaryCTA.text}
                  </Button>
                </Link>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="mt-20 pt-12 border-t border-white/10 w-full" style={{ transform: "translateZ(30px)" }}>
                <div className="flex flex-wrap justify-center gap-10 md:gap-16">
                  {trustIndicators.map((item, index) => (
                    <motion.div 
                      key={item.text}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300"
                    >
                      <item.icon className="w-6 h-6 text-brand-primary" />
                      <span className="text-sm font-bold uppercase tracking-widest">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
