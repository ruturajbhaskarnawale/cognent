"use client";

import { motion } from "framer-motion";
import { LucideIcon, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface TimelineStep {
  title: string;
  description: string;
  duration?: string;
  icon: LucideIcon;
  details?: string[];
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
  title?: string;
  subtitle?: string;
}

export function ProcessTimeline({ 
  steps,
  title = "Our Process",
  subtitle = "A proven methodology for delivering excellence"
}: ProcessTimelineProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-brand-black mb-4 font-heading"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-black/60 font-light"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-black/10" />
          
          {/* Animated Progress Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-brand-primary to-brand-secondary"
          />

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <TimelineItem key={idx} step={step} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ step, index }: { step: TimelineStep; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = step.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-20 md:pl-0`}>
        <motion.div
          animate={isVisible ? { scale: 1 } : { scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 border border-brand-black/5 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Duration Badge */}
          {step.duration && (
            <div className={`inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold mb-4 ${isEven ? 'md:float-right md:ml-4' : 'md:float-left md:mr-4'}`}>
              {step.duration}
            </div>
          )}

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-3 font-heading">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-lg text-brand-black/60 leading-relaxed mb-4">
            {step.description}
          </p>

          {/* Expandable Details */}
          {step.details && (
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-brand-black/10 space-y-2">
                {step.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3 text-brand-black/60">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Expand Indicator */}
          {step.details && (
            <div className={`text-sm text-brand-primary font-bold mt-4 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
              {isExpanded ? '− Show Less' : '+ Show More'}
            </div>
          )}
        </motion.div>
      </div>

      {/* Icon Circle (Center) */}
      <motion.div
        animate={isVisible ? { scale: 1, rotate: 360 } : { scale: 0, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-xl z-10"
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>

      {/* Spacer for even layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}
