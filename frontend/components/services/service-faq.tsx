"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ChevronDown } from "lucide-react";
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
    <section className="py-24 bg-brand-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal width="100%">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            {subtitle && (
              <span className="text-brand-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
                {subtitle}
              </span>
            )}
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 font-heading">
              {title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="bg-white rounded-2xl border border-brand-black/5 overflow-hidden hover:shadow-lg transition-shadow">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left hover:bg-brand-muted/30 transition-colors"
                >
                  <span className="text-lg font-bold text-brand-black pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-brand-primary" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 pt-2">
                        <p className="text-brand-black/70 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
