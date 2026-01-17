"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity. A standard website typically takes 4-6 weeks, while more complex web applications can take 3-6 months.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we offer comprehensive maintenance and support packages to ensure your digital product remains secure, up-to-date, and performing optimally.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web stack technologies including React, Next.js, Node.js, Python/FastAPI, and cloud infrastructure on AWS/Vercel.",
  },
  {
    question: "Can you help with rebranding?",
    answer: "Absolutely. Our design team is experienced in creating complete brand identities, from logo design to design systems and voice/tone guidelines.",
  },
];

export function FAQ() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left font-medium transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900"
      >
        <span>{question}</span>
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-4 pt-0 text-zinc-500 dark:text-zinc-400">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
