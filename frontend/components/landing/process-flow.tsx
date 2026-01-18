"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { MessageSquare, Search, Hammer, Rocket } from "lucide-react";

const steps = [
    {
        icon: MessageSquare,
        title: "Describe",
        desc: "You explain your technical challenge or idea.",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icon: Search,
        title: "Analyze",
        desc: "We research and architect the perfect solution.",
        color: "bg-purple-100 text-purple-600"
    },
    {
        icon: Hammer,
        title: "Build",
        desc: "Our engineers construct your tool or platform.",
        color: "bg-teal-100 text-teal-600"
    },
    {
        icon: Rocket,
        title: "Deliver",
        desc: "We deploy, test, and hand over the keys.",
        color: "bg-pink-100 text-pink-600"
    }
];

export function ProcessFlow() {
  return (
    <section className="py-32 bg-brand-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-pastel-blue rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pastel-purple rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal width="100%">
            <div className="text-center mb-24">
                <h2 className="text-4xl font-bold font-heading text-brand-black mb-6">How OddJobs Works</h2>
                <p className="text-xl text-brand-black/60 font-light max-w-2xl mx-auto">
                    A simple, transparent process designed to get you from problem to solution without the headache.
                </p>
            </div>
        </ScrollReveal>

        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-full -z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {steps.map((step, index) => (
                    <ScrollReveal key={step.title} delay={index * 0.2}>
                        <div className="flex flex-col items-center text-center">
                            <motion.div 
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center mb-6 shadow-lg border-4 border-white z-10 relative`}
                            >
                                <step.icon className="h-8 w-8" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-black text-white rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
                                    {index + 1}
                                </div>
                            </motion.div>
                            <h3 className="text-xl font-bold text-brand-black mb-3">{step.title}</h3>
                            <p className="text-brand-black/60 leading-relaxed text-sm">
                                {step.desc}
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
