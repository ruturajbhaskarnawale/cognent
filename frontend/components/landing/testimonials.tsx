"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { CursorTrail } from "@/components/effects/cursor-trail";

const testimonials = [
  {
    quote: "OddJobs completely re-engineered our logistics pipeline. Their AI agents now handle 90% of our scheduling, reducing overhead by 40% in just six months.",
    author: "Aryan Sharma",
    role: "Director, Varta Systems",
    rating: 5,
    company: "Varta"
  },
  {
    quote: "The digital surgery they performed on our legacy architecture was flawless. Zero downtime, perfectly microserviced, and significantly faster performance.",
    author: "Priya Patel",
    role: "Founder, Zenith Hub",
    rating: 5,
    company: "Zenith Hub"
  },
  {
    quote: "Engineering precision at its finest. They don't just build apps; they build high-performance data platforms that convert behaving users into loyal customers.",
    author: "Rohan Mehta",
    role: "CTO, Indus Soft",
    rating: 5,
    company: "Indus"
  },
  {
    quote: "Their focus on scalable architecture and security hardening gives us the confidence to scale globally. The most professional agency we've ever partnered with.",
    author: "Ananya Iyer",
    role: "VP Engineering, BharatScale",
    rating: 5,
    company: "BharatScale"
  },
  {
    quote: "A rare blend of aesthetic design and robust engineering. Our new membership portal is a masterpiece of both form and function. Highly recommended.",
    author: "Vikram Singh",
    role: "Director of Operations, Kratos Tech",
    rating: 5,
    company: "Kratos"
  },
  {
    quote: "The real-time analytics dashboard they built for us has become our company's command center. The data density and performance are truly impressive.",
    author: "Ishita Deshmukh",
    role: "Head of Data, Sankhya IQ",
    rating: 5,
    company: "Sankhya IQ"
  }
];

const MarqueeRow = ({ items, direction = "left" }: { items: typeof testimonials, direction?: "left" | "right" }) => {
  return (
    <div className="flex overflow-hidden relative group">
      <motion.div
        animate={{
          x: direction === "left" ? [0, -2000] : [-2000, 0],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-6 py-4 px-3"
      >
        {[...items, ...items, ...items].map((t, i) => (
          <SpotlightCard
            key={i}
            className="w-[300px] md:w-[450px] shrink-0 p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-primary text-brand-primary" />
                ))}
              </div>
              <div className="relative mb-8">
                <Quote className="absolute -top-4 -left-4 h-8 w-8 text-brand-primary/10 -z-10" />
                <p className="text-lg leading-relaxed text-brand-black/80 font-medium">
                  {t.quote}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-6 border-t border-brand-black/5">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center font-bold text-brand-primary text-xl">
                {t.author[0]}
              </div>
              <div>
                <p className="font-bold text-brand-black">{t.author}</p>
                <p className="text-sm text-brand-black/40 font-medium uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </motion.div>
    </div>
  );
};

export function Testimonials() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Cursor Trail Effect */}
      <CursorTrail />

      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="px-4 py-1.5 rounded-full bg-brand-secondary/10 text-brand-secondary font-medium text-sm mb-6 inline-block"
            >
              Social Proof
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-brand-black mb-8 tracking-tight">
              Built for <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Scale & Trust.</span>
            </h2>
            <p className="text-xl text-brand-black/60 font-light leading-relaxed">
              Don't just take our word for it. Explore the stories of industry leaders who have scaled their operations with our engineering expertise.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee Wall with Cinematic Masks */}
      <div className="relative py-8">
        {/* Cinematic Side Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div className="space-y-4">
          <MarqueeRow items={testimonials.slice(0, 3)} direction="left" />
          <MarqueeRow items={testimonials.slice(3, 6)} direction="right" />
        </div>
      </div>
      
      {/* Bottom CTA or Badge Row could go here if needed, but keeping it clean for now */}
    </section>
  );
}
