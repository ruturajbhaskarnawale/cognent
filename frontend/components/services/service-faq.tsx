"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  title: string;
  subtitle?: string;
  faqs: FAQItem[];
}

export function ServiceFAQ({ title, subtitle, faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-brand-muted/50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            {subtitle && (
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-medium text-sm mb-6 inline-block backdrop-blur-sm uppercase tracking-widest"
              >
                {subtitle}
              </motion.span>
            )}
            <h2 className="text-4xl md:text-6xl font-bold text-brand-black mb-6 font-heading tracking-tight">
              {title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="relative">
                {/* Background Question Number */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-[8rem] font-bold text-brand-black/[0.02] select-none pointer-events-none hidden lg:block">
                  Q{index + 1}
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: openIndex === index ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.7)",
                  }}
                  className="relative rounded-3xl border border-brand-black/5 overflow-hidden backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-8 flex items-start justify-between gap-6 text-left group"
                  >
                    <div className="flex items-start gap-6 flex-1">
                      <motion.div
                        animate={{
                          scale: openIndex === index ? 1.1 : 1,
                          rotate: openIndex === index ? 360 : 0,
                        }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                          openIndex === index
                            ? "bg-gradient-to-br from-brand-primary to-brand-secondary"
                            : "bg-brand-black/5"
                        }`}
                      >
                        <HelpCircle
                          className={`w-6 h-6 transition-colors ${
                            openIndex === index ? "text-white" : "text-brand-primary"
                          }`}
                        />
                      </motion.div>

                      <div className="flex-1 pt-1">
                        <span className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-2 block opacity-60">
                          Question {index + 1}
                        </span>
                        <span
                          className={`text-xl md:text-2xl font-bold transition-colors ${
                            openIndex === index ? "text-brand-primary" : "text-brand-black"
                          }`}
                        >
                          {faq.question}
                        </span>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 mt-2"
                    >
                      <ChevronDown
                        className={`w-7 h-7 transition-colors ${
                          openIndex === index ? "text-brand-primary" : "text-brand-black/40"
                        }`}
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ x: -20 }}
                          animate={{ x: 0 }}
                          exit={{ x: -20 }}
                          className="px-8 pb-8 pl-[5.5rem]"
                        >
                          <div className="pt-6 border-t border-brand-black/5">
                            <p className="text-lg text-brand-black/70 leading-relaxed font-light">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
