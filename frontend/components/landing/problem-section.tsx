"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ZapOff, Layers, BarChart4 } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

const problems = [
  {
    title: "Brittle Architecture",
    description: "Systems built for 1,000 users that collapse at 100,000. We identify the structural cracks before they break.",
    icon: Layers,
    color: "text-red-500",
    bg: "bg-red-50"
  },
  {
    title: "Technical Debt Rot",
    description: "Features take months instead of days. Legacy code isn't just slow; it's a strategic liability.",
    icon: ZapOff,
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  {
    title: "Scaling Bottlenecks",
    description: "Database locks, memory leaks, and inefficient API design that choke your growth engine.",
    icon: AlertTriangle,
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    title: "Wasted Infra Spend",
    description: "Over-provisioned servers and inefficient cloud usage. Most companies waste 30% of their cloud budget.",
    icon: BarChart4,
    color: "text-rose-500",
    bg: "bg-rose-50"
  }
];

export function ProblemSection() {
  return (
    <section className="py-32 bg-brand-muted relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal direction="left">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="px-4 py-1.5 rounded-full bg-red-100 text-red-600 font-bold text-xs uppercase tracking-widest mb-6 inline-block"
              >
                The Crisis of Scale
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-bold font-heading text-brand-black mb-8 leading-[1.1]">
                The Silent Killer of <br />
                <span className="text-red-600 underline decoration-red-200 decoration-8 underline-offset-8">Your Growth.</span>
              </h2>
              <p className="text-xl text-brand-black/60 font-medium leading-relaxed mb-10 max-w-xl">
                Most systems are built for *now*, not for *next*. When you hit 10x traffic, your technical debt becomes a strategic disaster. 
              </p>
              
              <div className="space-y-6">
                 <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-black/5 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                       <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                       <div className="font-bold text-brand-black">90% of systems fail</div>
                       <div className="text-sm text-brand-black/50 font-medium">Internal architecture usually plateaus long before the business does.</div>
                    </div>
                 </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {problems.map((problem, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                <div className="group p-8 rounded-[2rem] bg-white border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <div className={`w-14 h-14 rounded-2xl ${problem.bg} ${problem.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <problem.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-3">{problem.title}</h3>
                  <p className="text-brand-black/50 text-sm leading-relaxed font-medium">
                    {problem.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
