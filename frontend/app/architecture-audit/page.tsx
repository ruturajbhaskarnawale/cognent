"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  AlertCircle, 
  Map, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Lock,
  Layers,
  Search,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { CursorTrail } from "@/components/effects/cursor-trail";
import { sendAuditRequest } from "@/lib/api";

const auditDeliverables = [
  {
    title: "System Architecture Map",
    description: "A high-fidelity visual blueprint of your entire stack, mapping every dependency and data flow.",
    icon: Map,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Prioritized Risk Heatmap",
    description: "Identification of single points of failure, security gaps, and performance bottlenecks.",
    icon: AlertCircle,
    color: "bg-red-50 text-red-600"
  },
  {
    title: "12-Month Optimization Roadmap",
    description: "A strategic execution plan to harden your infrastructure for your next 10x growth phase.",
    icon: TrendingUp,
    color: "bg-emerald-50 text-emerald-600"
  }
];

export default function AuditPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    challenges: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    
    setIsSubmitting(true);
    setError(null);
    
    try {
        await sendAuditRequest(formData);
        setShowSuccess(true);
        setFormData({ name: "", email: "", phone: "", website: "", challenges: "" });
        setTimeout(() => setShowSuccess(false), 5000);
    } catch (err: any) {
        console.error("Audit request error:", err);
        setError(err.message || "Failed to submit request. Please try again later.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-brand-primary/20">
      <CursorTrail />
      
      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -100, x: "-50%" }}
            animate={{ opacity: 1, y: 20, x: "-50%" }}
            exit={{ opacity: 0, y: -100, x: "-50%" }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] bg-brand-black text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 border border-white/10 backdrop-blur-md"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold tracking-tight">Audit Request Received. We'll be in touch.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-brand-muted">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal direction="up">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 backdrop-blur-md mb-8"
              >
                <Search className="w-4 h-4 text-brand-primary" />
                <span className="text-xs font-bold tracking-widest uppercase text-brand-primary">Scale Readiness Diagnostic</span>
              </motion.div>

              <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-brand-black mb-8 leading-[0.9]">
                Stop Guessing. <br />
                <span className="text-brand-primary">Audit Your System</span> <br />
                for Scale.
              </h1>
              
              <p className="text-xl md:text-2xl text-brand-black/60 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                Most architecture fails before the traffic hits. Get a 360° technical diagnostic that identifies your breaking points before they become disasters.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                 <div className="flex items-center gap-3 text-brand-black/40 font-bold text-sm uppercase tracking-widest">
                    <ShieldCheck className="w-5 h-5 text-brand-primary" />
                    Senior-Led Review
                 </div>
                 <div className="flex items-center gap-3 text-brand-black/40 font-bold text-sm uppercase tracking-widest">
                    <Zap className="w-5 h-5 text-amber-500" />
                    48-Hour Deep Dive
                 </div>
                 <div className="flex items-center gap-3 text-brand-black/40 font-bold text-sm uppercase tracking-widest">
                    <Lock className="w-5 h-5 text-emerald-500" />
                    Zero-Risk Access
                 </div>
              </div>
              
              <Button 
                size="lg" 
                onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full bg-brand-black text-white px-12 h-20 text-xl font-black shadow-2xl hover:bg-brand-primary transition-all duration-500 group"
              >
                Claim Your Priority Audit
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </ScrollReveal>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* Problem Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <ScrollReveal direction="left">
                <h2 className="text-4xl md:text-6xl font-black text-brand-black mb-8 leading-tight tracking-tighter">
                   The Unknown is <br />
                   <span className="text-red-500 italic">Killing Your Growth.</span>
                </h2>
                <p className="text-xl text-brand-black/60 font-medium mb-10">
                   80% of founders believe their system is "fine"—until it hits 10x traffic. Don't build your empire on a foundation of sand.
                </p>
                <ul className="space-y-6">
                   {[
                     "Unseen single points of failure in your cloud stack.",
                     "Silent memory leaks robbing you of server performance.",
                     "Inefficient API design preventing high-concurrency scale.",
                     "Technical debt stealing 40% of your current engineering time."
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-4 text-lg font-bold text-brand-black/80">
                        <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                           <AlertCircle className="w-4 h-4" />
                        </div>
                        {item}
                     </li>
                   ))}
                </ul>
             </ScrollReveal>

             <div className="relative">
                <div className="aspect-square rounded-[3rem] bg-brand-muted border border-black/5 overflow-hidden relative group">
                   <div className="absolute inset-0 flex items-center justify-center">
                       <Layers className="w-48 h-48 text-brand-black/5 group-hover:scale-110 transition-transform duration-700" />
                   </div>
                   <div className="absolute inset-0 p-12 flex flex-col justify-between">
                       <div className="flex justify-between items-start">
                           <div className="p-4 rounded-2xl bg-white shadow-xl max-w-[200px] animate-float">
                               <div className="h-2 w-12 bg-red-100 rounded-full mb-2" />
                               <div className="text-xs font-black text-red-500 mb-1">RISK DETECTED</div>
                               <div className="text-[10px] text-brand-black/40 font-bold uppercase">Database Deadlock Looming</div>
                           </div>
                       </div>
                       <div className="flex justify-end">
                           <div className="p-4 rounded-2xl bg-white shadow-xl max-w-[200px] animate-float-delayed">
                               <div className="h-2 w-12 bg-emerald-100 rounded-full mb-2" />
                               <div className="text-xs font-black text-emerald-500 mb-1">FIX SUGGESTED</div>
                               <div className="text-[10px] text-brand-black/40 font-bold uppercase">Async Worker Migration</div>
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
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">What You Get.</h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto">Absolute clarity. Zero fluff. A professional engineering report authored by senior architects.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {auditDeliverables.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="p-12 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                   <div className={`w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-8 h-8 text-brand-primary" />
                   </div>
                   <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                   <p className="text-white/50 leading-relaxed font-light">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="audit-form" className="py-32 bg-brand-muted">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto bg-white rounded-[3.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-black/5">
             {/* Form Info */}
             <div className="w-full md:w-2/5 p-12 bg-brand-black text-white flex flex-col justify-between">
                <div>
                   <h2 className="text-4xl font-black mb-6 leading-tight">Claim Your Roadmap.</h2>
                   <p className="text-white/60 mb-10 font-light italic">"The most valuable 48 hours your technical team will spend this year."</p>
                   
                   <div className="space-y-8">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-primary">
                            <CheckCircle2 className="w-5 h-5" />
                         </div>
                         <div className="text-sm font-bold uppercase tracking-widest">₹14,999 Flat Fee</div>
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-amber-500">
                            <Zap className="w-5 h-5" />
                         </div>
                         <div className="text-sm font-bold uppercase tracking-widest">Only 4 slots per month</div>
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-emerald-500">
                            <FileText className="w-5 h-5" />
                         </div>
                         <div className="text-sm font-bold uppercase tracking-widest">Full report in 48h</div>
                      </div>
                   </div>
                </div>
                
                <div className="pt-12 border-t border-white/10 text-xs text-white/30 uppercase tracking-widest font-black">
                   Cognent Scale Readiness Audit © 2026
                </div>
             </div>

             {/* Form Fields */}
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
                          placeholder="Your full name"
                          className="w-full bg-brand-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all outline-none text-brand-black font-bold"
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
                          className="w-full bg-brand-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all outline-none text-brand-black font-bold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-black/40">Contact Number</label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+91 99999 99999"
                          className="w-full bg-brand-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all outline-none text-brand-black font-bold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-black/40">URL / System Description</label>
                        <input 
                          type="text" 
                          value={formData.website}
                          onChange={(e) => setFormData({...formData, website: e.target.value})}
                          placeholder="e.g. app.yourgrowth.com"
                          className="w-full bg-brand-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all outline-none text-brand-black font-bold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-black/40">Current Scaling Bottlenecks</label>
                        <textarea 
                          rows={4}
                          value={formData.challenges}
                          onChange={(e) => setFormData({...formData, challenges: e.target.value})}
                          placeholder="Tell us about your traffic spikes, database lag, or legacy debt..."
                          className="w-full bg-brand-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all outline-none text-brand-black font-bold resize-none"
                        />
                      </div>
                   </div>
                   
                   {error && (
                        <div className="bg-red-50 p-4 rounded-2xl border border-red-100 text-red-600 text-sm font-medium flex items-center gap-3">
                           <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                           {error}
                        </div>
                    )}
                    
                    <Button 
                     type="submit"
                     disabled={isSubmitting}
                     className="w-full rounded-2xl bg-brand-black text-white h-20 text-lg font-black shadow-xl hover:bg-brand-primary transition-all duration-500"
                    >
                     {isSubmitting ? "Securing Slot..." : "Complete Audit Request"}
                    </Button>
                   
                   <p className="text-center text-[10px] font-bold text-brand-black/40 uppercase tracking-widest">
                     🔒 Secure & confidential engineering review
                   </p>
                </form>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
