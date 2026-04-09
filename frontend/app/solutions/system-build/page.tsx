"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cloud, 
  Zap, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  HardDrive,
  Database,
  Lock,
  Layers,
  Settings,
  Cpu
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { CursorTrail } from "@/components/effects/cursor-trail";

const buildDeliverables = [
  {
    title: "Cloud-Native Migration",
    description: "Modernizing legacy infrastructure into elastic, auto-scaling cloud environments using Kubernetes and Terraform.",
    icon: Cloud,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Database Refactoring",
    description: "Eliminating deadlocks and query latency with advanced indexing, sharding, and caching strategies.",
    icon: Database,
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "API Hardening",
    description: "Securing your entry points with rate-limiting, edge-authentication, and high-concurrency optimization.",
    icon: Lock,
    color: "bg-red-50 text-red-600"
  },
  {
    title: "CI/CD Hardening",
    description: "Zero-downtime deployment pipelines that ensure 99.99% availability during code shipment.",
    icon: Zap,
    color: "bg-emerald-50 text-emerald-600"
  }
];

export default function BuildOptimizationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    requirements: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setShowSuccess(true);
    setIsSubmitting(false);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      <CursorTrail />
      
      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -100, x: "-50%" }}
            animate={{ opacity: 1, y: 20, x: "-50%" }}
            exit={{ opacity: 0, y: -100, x: "-50%" }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] bg-brand-black text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 border border-white/10"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold tracking-tight">Estimate Request Received.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-brand-muted">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <ScrollReveal direction="up">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 backdrop-blur-md mb-8"
            >
              <Settings className="w-4 h-4 text-brand-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-brand-primary">Engineering Hardening</span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-brand-black mb-8 leading-[0.9]">
              Stop Patching. <br />
              <span className="text-brand-primary">Start Scaling.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-black/60 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              Don't let legacy technical debt throttle your growth. We rebuild your foundation so your business can handle the traffic it deserves.
            </p>
            
            <Button 
              size="lg" 
              onClick={() => document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full bg-brand-black text-white px-12 h-20 text-xl font-black shadow-2xl hover:bg-brand-primary transition-all duration-500 group"
            >
              Request Technical Estimate
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <ScrollReveal direction="left">
                <h2 className="text-4xl md:text-6xl font-black text-brand-black mb-8 leading-tight tracking-tighter">
                   Durable Architecture <br />
                   <span className="text-brand-primary italic">By Design.</span>
                </h2>
                <p className="text-xl text-brand-black/60 font-medium mb-10 leading-relaxed">
                   Scaling is not an accident—it's an engineering discipline. We audit, architect, and harden every layer of your stack to peak performance standards.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   {[
                     { title: "Latency Reduction", value: "-65%" },
                     { title: "Uptime Stability", value: "99.99%" },
                     { title: "Traffic Capacity", value: "10X" },
                     { title: "Cost Efficiency", value: "+40%" }
                   ].map((stat, i) => (
                     <div key={i} className="p-6 rounded-3xl bg-brand-muted border border-black/5">
                        <div className="text-3xl font-black text-brand-primary mb-1">{stat.value}</div>
                        <div className="text-xs font-bold uppercase tracking-widest text-brand-black/40">{stat.title}</div>
                     </div>
                   ))}
                </div>
             </ScrollReveal>

             <div className="relative">
                <div className="aspect-square rounded-[3rem] bg-brand-black border border-white/10 overflow-hidden relative group">
                   <div className="absolute inset-0 flex items-center justify-center">
                       <Cpu className="w-64 h-64 text-brand-primary/10 group-hover:scale-110 transition-transform duration-1000" />
                   </div>
                   <div className="absolute inset-0 p-12 flex flex-col justify-between">
                       <div className="space-y-4">
                          <div className="h-1 w-24 bg-brand-primary rounded-full" />
                          <h3 className="text-white text-2xl font-bold tracking-tight">System Health: Optimal</h3>
                       </div>
                       <div className="flex justify-end gap-2">
                           <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                           <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                           <div className="w-3 h-3 rounded-full bg-emerald-500/30" />
                       </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-32 bg-brand-black text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">The Hardening Package.</h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto">Absolute performance. Zero technical liabilities. We turn your infrastructure into a moat.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {buildDeliverables.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group h-full">
                   <div className={`w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-7 h-7 text-brand-primary" />
                   </div>
                   <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                   <p className="text-white/40 leading-relaxed font-light text-sm">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="estimate-form" className="py-32 bg-brand-muted">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto bg-white rounded-[3.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-black/5">
             <div className="w-full md:w-2/5 p-12 bg-brand-black text-white">
                <h2 className="text-4xl font-black mb-8 leading-tight">Secure Your Build.</h2>
                <p className="text-white/60 mb-12 font-light">"Generic code breaks. Hardened architecture scales. Let's build your future-proof foundation."</p>
                
                <div className="space-y-6">
                   <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest opacity-60">
                      <CheckCircle2 className="w-5 h-5 text-brand-primary" /> Complete System Audit First
                   </div>
                   <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest opacity-60">
                      <CheckCircle2 className="w-5 h-5 text-brand-primary" /> Dedicated Lead Architect
                   </div>
                   <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest opacity-60">
                      <CheckCircle2 className="w-5 h-5 text-brand-primary" /> 24/7 Deployment Support
                   </div>
                </div>
             </div>

             <div className="w-full md:w-3/5 p-12 lg:p-20">
                <form onSubmit={handleSubmit} className="space-y-8">
                   <div className="grid grid-cols-1 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-black/40">Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Project Lead Name"
                          className="w-full bg-brand-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-black/40">Business Email</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="name@company.com"
                          className="w-full bg-brand-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-black/40">Estimate Scale (Current Users)</label>
                        <input 
                          type="text" 
                          placeholder="e.g. 50k Concurrent"
                          className="w-full bg-brand-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-black/40">Brief Infrastructure Challenges</label>
                        <textarea 
                          rows={4}
                          value={formData.requirements}
                          onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                          placeholder="Tell us about your stack and bottlenecks..."
                          className="w-full bg-brand-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all outline-none resize-none"
                        />
                      </div>
                   </div>
                   
                   <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-2xl bg-brand-black text-white h-20 text-lg font-black shadow-xl hover:bg-brand-primary transition-all duration-500"
                   >
                     {isSubmitting ? "Processing..." : "Submit Estimate Request"}
                   </Button>
                </form>
             </div>
          </div>
        </div>
      </section>
    {/* Continuation Section */}
      <section className="py-24 bg-white border-t border-black/5">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h3 className="text-2xl font-bold text-brand-black mb-8">Need a different scale of engineering?</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/solutions">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 font-bold border-brand-black/10 hover:bg-brand-black/5">
                Explore All Solutions
              </Button>
            </Link>
            <Link href="/architecture-audit">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 font-bold border-brand-primary/20 text-brand-primary hover:bg-brand-primary/5">
                Get a Scale Audit First
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
