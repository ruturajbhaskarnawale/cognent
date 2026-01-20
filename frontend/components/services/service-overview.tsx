"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { CheckCircle2, Shield, Target, Zap, Rocket } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceOverviewProps {
  title: string;
  subtitle?: string;
  description: string[];
  highlights?: string[];
  stats?: { label: string; value: string }[];
  image?: string;
}

export function ServiceOverview({ 
  title, 
  subtitle, 
  description, 
  highlights, 
  stats,
  image 
}: ServiceOverviewProps) {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Content Side */}
          <div className="lg:col-span-7">
            <ScrollReveal>
                <div className="flex items-center gap-3 mb-6">
                    <Target className="w-5 h-5 text-brand-primary" />
                    <span className="text-xs font-black tracking-[0.3em] uppercase text-brand-black/40">
                        {subtitle || "Service Mission"}
                    </span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold text-brand-black mb-10 font-heading tracking-tight leading-tight">
                    {title}
                </h2>
                
                <div className="space-y-8 text-xl text-brand-black/50 font-light leading-relaxed max-w-2xl border-l-[1px] border-brand-black/5 pl-8">
                    {description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                    ))}
                </div>

                {highlights && highlights.length > 0 && (
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {highlights.map((highlight, index) => (
                        <motion.div 
                            key={index} 
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-4 p-4 rounded-2xl hover:bg-brand-muted transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                <Zap className="w-5 h-5" />
                            </div>
                            <span className="text-brand-black/70 font-medium leading-tight pt-1">{highlight}</span>
                        </motion.div>
                    ))}
                    </div>
                )}
            </ScrollReveal>
          </div>

          {/* Metric / Visual Side */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <ScrollReveal delay={0.2}>
              <div className="relative">
                {stats && stats.length > 0 ? (
                  <div className="space-y-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white p-10 rounded-[2.5rem] border border-brand-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden group"
                      >
                         <div className="relative z-10">
                            <div className="text-sm font-black text-brand-black/20 uppercase tracking-[0.2em] mb-4">{stat.label}</div>
                            <div className="text-5xl md:text-6xl font-bold text-brand-black font-heading mb-2">
                                {stat.value}
                            </div>
                            <div className="w-12 h-1 bg-brand-primary/20 rounded-full group-hover:w-20 transition-all duration-500" />
                         </div>
                         {/* Decorative Icon Background */}
                         <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Rocket className="w-32 h-32" />
                         </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden group shadow-2xl">
                    <img 
                      src={image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"} 
                      alt="" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
                    <div className="absolute bottom-10 left-10 text-white">
                        <Shield className="w-12 h-12 mb-4 text-brand-primary" />
                        <h4 className="text-xl font-bold">Reliable Execution</h4>
                        <p className="text-white/60 text-sm">Engineered for absolute performance.</p>
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
