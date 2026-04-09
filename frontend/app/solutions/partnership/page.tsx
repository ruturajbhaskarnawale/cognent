"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Brain, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Rocket,
  Search,
  Zap,
  Bot,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { CursorTrail } from "@/components/effects/cursor-trail";

const partnershipDeliverables = [
  {
    title: "Embedded CTO Advisory",
    description: "Senior strategic leadership to navigate technical roadmap decisions and organizational scaling.",
    icon: Search,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Continuous AI Evolution",
    description: "Ongoing integration of custom AI agents and automation to maintain your competitive edge.",
    icon: Bot,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "24/7 Reliability Eng",
    description: "Proactive security hardening and performance tuning to ensure zero downtime, always.",
    icon: ShieldCheck,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Team Scaling & Mentoring",
    description: "Upskilling your internal team while establishing world-class engineering standards.",
    icon: Users,
    color: "bg-brand-primary/5 text-brand-primary"
  }
];

export default function PartnershipPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    vision: ""
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
    <main className="min-h-screen bg-white">
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
            <span className="font-bold tracking-tight">Briefing Request Submitted.</span>
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
              <Heart className="w-4 h-4 text-brand-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-brand-primary">Long-Term Copilot</span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-brand-black mb-8 leading-[0.9]">
              Your Internal CTO, <br />
              <span className="text-brand-primary">Externalized.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-black/60 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              Engineering is not a one-time project. It's a continuous evolution. We partner with high-growth teams to ensure their technology is always their strongest asset.
            </p>
            
            <Button 
              size="lg" 
              onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full bg-brand-black text-white px-12 h-20 text-xl font-black shadow-2xl hover:bg-brand-primary transition-all duration-500 group"
            >
              Request Partnership Briefing
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <ScrollReveal direction="left">
                <h2 className="text-4xl md:text-6xl font-black text-brand-black mb-8 leading-tight tracking-tighter">
                   Deeply Embedded. <br />
                   <span className="text-brand-primary italic">Relentlessly Aligned.</span>
                </h2>
                <p className="text-xl text-brand-black/60 font-medium mb-10 leading-relaxed">
                   We don't work *for* you. We work *as* you. Our senior architects join your internal channels, slack groups, and board meetings to drive the technical vision forward.
                </p>
                <div className="space-y-6">
                   {[
                     "Strategic Technical Roadmap Design",
                     "AI Automation & LLM Integration",
                     "Security & Compliance Stewardship",
                     "High-Performance Cultural Standards"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 text-lg font-bold text-brand-black/80">
                        <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                        {item}
                     </div>
                   ))}
                </div>
             </ScrollReveal>

             <div className="relative">
                <div className="aspect-[4/3] rounded-[3rem] bg-brand-muted border border-black/5 overflow-hidden relative group">
                   <div className="absolute inset-0 flex items-center justify-center">
                       <Users className="w-48 h-48 text-brand-black/5 group-hover:scale-110 transition-transform duration-1000" />
                   </div>
                   <div className="absolute inset-0 p-12 flex flex-col justify-end">
                       <div className="p-8 rounded-[2rem] bg-white shadow-2xl border border-black/5 max-w-sm ml-auto">
                          <Brain className="w-10 h-10 text-brand-primary mb-4" />
                          <p className="text-sm font-bold text-brand-black leading-tight">
                            "Cognent isn't an agency. They are our engineering heartbeat."
                          </p>
                          <div className="mt-4 pt-4 border-t border-black/5 text-[10px] uppercase font-black tracking-widest text-brand-black/40">
                             Founder @ BharatScale
                          </div>
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
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">The Partnership Core.</h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto">Strategic guidance meets tactical execution. We handle the complexity; you handle the growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipDeliverables.map((item, idx) => (
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
      <section id="partnership-form" className="py-32 bg-brand-muted">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto bg-white rounded-[3.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-black/5">
             <div className="w-full md:w-2/5 p-12 bg-brand-black text-white">
                <h2 className="text-4xl font-black mb-8 leading-tight">Apply for Partnership.</h2>
                <p className="text-white/60 mb-12 font-light">"We only accept 2 new partnerships per quarter to ensure zero compromise on engineering standards. Let's see if we're a fit."</p>
                
                <div className="space-y-6">
                   <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest opacity-60">
                      <Target className="w-5 h-5 text-brand-primary" /> Strategic Alignment Check
                   </div>
                   <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest opacity-60">
                      <Rocket className="w-5 h-5 text-brand-primary" /> Long-Term Scale Focus
                   </div>
                   <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest opacity-60">
                      <Zap className="w-5 h-5 text-brand-primary" /> Immediate Impact Deployment
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
                          placeholder="Your Name"
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
                          placeholder="ceo@company.com"
                          className="w-full bg-brand-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-black/40">Your Role</label>
                        <input 
                          type="text" 
                          required
                          value={formData.role}
                          onChange={(e) => setFormData({...formData, role: e.target.value})}
                          placeholder="e.g. Founder / CTO"
                          className="w-full bg-brand-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-black/40">The Vision / Challenge</label>
                        <textarea 
                          rows={4}
                          value={formData.vision}
                          onChange={(e) => setFormData({...formData, vision: e.target.value})}
                          placeholder="Where do you want your technology to be in 2 years?"
                          className="w-full bg-brand-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all outline-none resize-none"
                        />
                      </div>
                   </div>
                   
                   <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-2xl bg-brand-black text-white h-20 text-lg font-black shadow-xl hover:bg-brand-primary transition-all duration-500"
                   >
                     {isSubmitting ? "Submitting Application..." : "Request Partnership Exploration"}
                   </Button>
                </form>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
