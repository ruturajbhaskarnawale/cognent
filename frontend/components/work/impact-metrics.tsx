"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Target } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface Metric {
  label: string;
  value: string;
  description: string;
  icon: "trending" | "users" | "zap" | "target";
  color: string;
}

interface ImpactMetricsProps {
  metrics: Metric[];
  title?: string;
  subtitle?: string;
}

const iconMap = {
  trending: TrendingUp,
  users: Users,
  zap: Zap,
  target: Target,
};

export function ImpactMetrics({ 
  metrics, 
  title = "Impact Metrics",
  subtitle = "Measurable results that matter"
}: ImpactMetricsProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-brand-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
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

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <MetricCard key={idx} metric={metric} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ metric, index }: { metric: Metric; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = iconMap[metric.icon];

  // Extract numeric value for animation
  const numericValue = parseFloat(metric.value.replace(/[^0-9.]/g, "")) || 0;
  const suffix = metric.value.replace(/[0-9.]/g, "");
  const isDecimal = metric.value.includes(".");

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

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative p-8 rounded-3xl bg-white border border-brand-black/5 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Background Glow */}
        <div
          className={`absolute inset-0 ${metric.color} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500`}
        />

        {/* Icon */}
        <div className={`w-14 h-14 rounded-2xl ${metric.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
          <Icon className={`w-7 h-7 ${metric.color.replace('bg-', 'text-')}`} />
        </div>

        {/* Value with Counter */}
        <div className="text-5xl font-bold text-brand-black mb-3 font-heading">
          {isDecimal ? count.toFixed(1) : Math.floor(count)}
          {suffix}
        </div>

        {/* Label */}
        <div className="text-sm font-bold text-brand-black/80 mb-2 uppercase tracking-wide">
          {metric.label}
        </div>

        {/* Description */}
        <div className="text-sm text-brand-black/50 leading-relaxed">
          {metric.description}
        </div>

        {/* Animated Progress Bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className={`absolute bottom-0 left-0 right-0 h-1 ${metric.color} origin-left`}
        />
      </div>

      {/* Radial Progress Circle (Optional Enhancement) */}
      <svg className="absolute -top-4 -right-4 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-brand-black/5"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          className={metric.color.replace('bg-', 'text-')}
          strokeDasharray="283"
          initial={{ strokeDashoffset: 283 }}
          animate={isVisible ? { strokeDashoffset: 283 - (283 * 0.75) } : { strokeDashoffset: 283 }}
          transition={{ duration: 2, delay: 0.5 }}
          style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
        />
      </svg>
    </motion.div>
  );
}
