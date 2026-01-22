"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Database, Bell } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Data Collection",
      icon: Database,
      content: "We collect information that you voluntarily provide when subscribing to our newsletter or contacting us, including your name and email address. We also collect metadata such as IP addresses and browser types for security and analytics purposes."
    },
    {
      title: "How We Use Data",
      icon: Eye,
      content: "Your data is used to deliver requested services, improve our platform performance, and send engineering insights. We do not sell your personal information to third parties."
    },
    {
      title: "Security Protocols",
      icon: Lock,
      content: "We implement industry-standard encryption and security measures to protect your data from unauthorized access, alteration, or disclosure."
    },
    {
      title: "Your Rights",
      icon: Shield,
      content: "You have the right to access, rectify, or request the deletion of your personal data at any time. To exercise these rights, please contact our privacy officer."
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary font-bold text-xs uppercase tracking-widest mb-8">
            <Lock className="w-3 h-3" />
            Security & Privacy
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-brand-black mb-6 tracking-tight">
            Privacy <span className="text-brand-primary">Policy.</span>
          </h1>
          <p className="text-xl text-brand-black/60 font-light leading-relaxed mb-16">
            Last updated: January 22, 2026. At OddJobs Engineering, we treat your data with the Same precision as our code.
          </p>

          <div className="grid gap-12">
            {sections.map((section, idx) => (
              <motion.section 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-[2rem] border border-brand-black/5 bg-white hover:border-brand-primary/10 transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                    <section.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-brand-black mb-4 tracking-tight">{section.title}</h2>
                    <p className="text-lg text-brand-black/60 leading-relaxed font-light">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

          <div className="mt-20 p-8 rounded-[2rem] bg-brand-black text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Questions about your privacy?</h3>
              <p className="text-white/60 mb-8 max-w-lg font-light">
                Our team is available to clarify how we handle your data. Feel free to reach out to our engineering support for technical details.
              </p>
              <a href="mailto:oddjobs1824@gmail.com" className="inline-flex items-center gap-2 font-bold text-brand-primary hover:text-white transition-colors">
                oddjobs1824@gmail.com
                <Bell className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
