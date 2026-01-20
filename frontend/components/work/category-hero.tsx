"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface CategoryHeroProps {
  title: string;
  subtitle: string;
  description: string;
  stats: { label: string; value: string }[];
  icon: LucideIcon;
  accentColor: string;
}

export function CategoryHero({
  title,
  subtitle,
  description,
  stats,
  icon: Icon,
  accentColor,
}: CategoryHeroProps) {
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCountersVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full pt-32 pb-24 overflow-hidden bg-white">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute top-[-15%] right-[-10%] w-[60%] h-[60%] ${accentColor} rounded-full blur-[150px] opacity-20`}
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className={`absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] bg-purple-500 rounded-full blur-[160px] opacity-15`}
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-[30%] left-[15%] w-[40%] h-[40%] bg-amber-500 rounded-full blur-[120px]`}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center justify-center mb-8"
          >
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${accentColor} flex items-center justify-center shadow-2xl`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-brand-black mb-6 font-heading leading-[0.9]"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold text-brand-primary mb-8"
          >
            {subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-brand-black/60 mb-16 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 border-t border-brand-black/10"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                className="relative group"
              >
                {/* Glassmorphism Card */}
                <div className="relative p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-brand-black/5 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold text-brand-black mb-2 font-heading">
                    {countersVisible && <CountUp end={stat.value} />}
                  </div>
                  <div className="text-xs md:text-sm text-brand-black/50 font-medium tracking-wide uppercase">
                    {stat.label}
                  </div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl ${accentColor} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}

// Counter Animation Component
function CountUp({ end }: { end: string }) {
  const [count, setCount] = useState(0);
  
  // Extract number from string (e.g., "50+" -> 50, "99.99%" -> 99.99)
  const numericValue = parseFloat(end.replace(/[^0-9.]/g, ""));
  const suffix = end.replace(/[0-9.]/g, "");
  const isDecimal = end.includes(".");

  useEffect(() => {
    const duration = 2000; // 2 seconds
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
  }, [numericValue]);

  return (
    <span>
      {isDecimal ? count.toFixed(2) : Math.floor(count)}
      {suffix}
    </span>
  );
}
