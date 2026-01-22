"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { CursorTrail } from "@/components/effects/cursor-trail";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Timelines depend on complexity. Most engineering projects range from 4-8 weeks for focused solutions to 4-6 months for full-scale enterprise platforms.",
  },
  {
    question: "How do you handle legacy system integration?",
    answer: "We specialize in 'digital surgery'—gradually refactoring legacy monoliths into modern, scalable microservices without interrupting your business operations.",
  },
  {
    question: "Do you provide dedicated post-launch engineering?",
    answer: "Absolutely. We offer premium support tiers that include proactive monitoring, security hardening, and continuous performance optimization for your scale.",
  },
  {
    question: "What is your core technology stack?",
    answer: "We are experts in the modern high-performance stack: Next.js/React, TypeScript, Go/Rust for performance critical parts, and robust cloud infra on AWS/GCP.",
  },
  {
    question: "Can you help as an external R&D team?",
    answer: "Yes, we often act as an extension of your internal team, tackling high-complexity R&D challenges that require specialized engineering expertise.",
  },
];

export function FAQ() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Cursor Trail Effect */}
      <CursorTrail />

      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Left Side: Header (Sticky on Desktop) */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 self-start">
            <ScrollReveal width="100%" direction="left">
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="px-4 py-1.5 rounded-full bg-brand-black/5 text-brand-black/60 font-medium text-sm mb-6 inline-block"
              >
                Information
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-bold font-heading text-brand-black mb-8 tracking-tight leading-tight">
                Common <br /> <span className="text-brand-primary">Inquiries.</span>
              </h2>
              <p className="text-xl text-brand-black/60 font-light leading-relaxed mb-10">
                Transparent answers to clarify our engineering process, technology choices, and project delivery.
              </p>
              
              <Link href="/contact">
                <div className="hidden lg:flex items-center gap-4 text-brand-primary font-bold group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-brand-primary/20 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span>Need more clarity? Contact us.</span>
                </div>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Side: Accordion */}
          <div className="w-full lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal 
                key={index} 
                width="100%" 
                direction="up" 
                delay={index * 0.1}
              >
                <FAQItem question={faq.question} answer={faq.answer} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={cn(
        "group border rounded-[2rem] transition-all duration-500 overflow-hidden",
        isOpen 
          ? "border-brand-primary/30 bg-brand-primary/[0.02] shadow-xl shadow-brand-primary/5" 
          : "border-brand-black/5 bg-white hover:border-brand-black/20 hover:shadow-lg hover:shadow-brand-black/5"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-8 md:p-10 text-left transition-all"
      >
        <span className={cn(
          "text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300",
          isOpen ? "text-brand-primary" : "text-brand-black"
        )}>
          {question}
        </span>
        <div className={cn(
          "shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
          isOpen ? "bg-brand-primary text-white rotate-180" : "bg-brand-black/5 text-brand-black"
        )}>
          {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="px-10 pb-10 text-xl font-light text-brand-black/60 leading-relaxed border-t border-brand-primary/10 pt-8">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
