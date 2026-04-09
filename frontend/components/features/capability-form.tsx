"use client";

import { useState } from "react";
import { CheckCircle2, Zap, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendAuditRequest } from "@/lib/api";

interface CapabilityFormProps {
  capability: string;
  onSuccess?: () => void;
}

export function CapabilityForm({ capability, onSuccess }: CapabilityFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    challenges: `I'm interested in the "${capability}" capability.\nOur current situation involves: `
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    
    setIsSubmitting(true);
    setError(null);
    
    try {
        await sendAuditRequest(formData);
        setShowSuccess(true);
        if (onSuccess) {
            setTimeout(onSuccess, 3000);
        }
    } catch (err: any) {
        console.error("Capability request error:", err);
        setError(err.message || "Failed to submit request.");
    } finally {
        setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-black text-brand-black mb-2 tracking-tight">Request Received!</h3>
        <p className="text-brand-black/60 font-medium italic">Our technical lead will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-brand-muted/50 p-6 rounded-3xl border border-brand-black/5">
         <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
               <Zap className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-black/60">48h Response</span>
         </div>
         <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
               <FileText className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-black/60">Senior Review</span>
         </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-brand-black/40 ml-4">Full Name</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Your full name"
              className="w-full bg-brand-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all outline-none text-brand-black font-bold"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-black/40 ml-4">Business Email</label>
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
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-black/40 ml-4">Contact Number</label>
                <input 
                type="tel" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+91 99999 99999"
                className="w-full bg-brand-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all outline-none text-brand-black font-bold"
                />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-brand-black/40 ml-4">Company Website</label>
            <input 
              type="text" 
              value={formData.website}
              onChange={(e) => setFormData({...formData, website: e.target.value})}
              placeholder="e.g. app.yourgrowth.com"
              className="w-full bg-brand-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all outline-none text-brand-black font-bold"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-brand-black/40 ml-4">Project Context / Challenges</label>
            <textarea 
              rows={4}
              value={formData.challenges}
              onChange={(e) => setFormData({...formData, challenges: e.target.value})}
              placeholder="Briefly describe your current technical challenges..."
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
          className="w-full rounded-[1.5rem] bg-brand-black text-white h-16 text-lg font-black shadow-xl hover:bg-brand-primary transition-all duration-500 group"
        >
          {isSubmitting ? "Submitting..." : `Request ${capability}`}
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </form>
    </div>
  );
}
