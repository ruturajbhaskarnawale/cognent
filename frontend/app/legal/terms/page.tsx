"use client";

import { motion } from "framer-motion";
import { FileText, Gavel, Scale, AlertTriangle, Copyright, Terminal } from "lucide-react";

export default function TermsPage() {
  const provisions = [
    {
      title: "Service Acceptance",
      icon: Gavel,
      content: "By accessing or using the OddJobs platform, you agree to be bound by these high-stakes engineering terms. If you do not agree, you must cease all use of our services immediately."
    },
    {
      title: "Intellectual Property",
      icon: Copyright,
      content: "All source code, proprietary algorithms, design systems, and visual assets are the exclusive property of OddJobs Engineering Inc. Unauthorized replication or reverse engineering is strictly prohibited."
    },
    {
      title: "Acceptable Use",
      icon: Terminal,
      content: "Users are prohibited from using our infrastructure for malicious activities, including but not limited to DDoS attacks, unauthorized data scraping, or attempting to penetrate our security perimeters."
    },
    {
      title: "Limitation of Liability",
      icon: AlertTriangle,
      content: "OddJobs providing high-performance bespoke solutions, we shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our specialized frameworks."
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/5 border border-brand-secondary/10 text-brand-secondary font-bold text-xs uppercase tracking-widest mb-8">
            <Scale className="w-3 h-3" />
            Legal Framework
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-brand-black mb-6 tracking-tight">
            Terms of <span className="text-brand-secondary">Service.</span>
          </h1>
          <p className="text-xl text-brand-black/60 font-light leading-relaxed mb-16">
            Last updated: January 22, 2026. These terms govern the professional relationship between your enterprise and OddJobs Engineering.
          </p>

          <div className="grid gap-12">
            {provisions.map((provision, idx) => (
              <motion.section 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-[2rem] border border-brand-black/5 bg-white hover:border-brand-secondary/10 transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-secondary/5 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all duration-500">
                    <provision.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-brand-black mb-4 tracking-tight">{provision.title}</h2>
                    <p className="text-lg text-brand-black/60 leading-relaxed font-light">
                      {provision.content}
                    </p>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

          <div className="mt-20 border-t border-brand-black/5 pt-12 text-center">
            <p className="text-brand-black/40 text-sm font-medium">
              These terms are subject to change as our engineering methodologies evolve. <br />
              Continued use of the platform constitutes acceptance of all updated provisions.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
