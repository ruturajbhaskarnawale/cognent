"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TextRotatorProps {
  texts: string[];
  className?: string;
}

export const TextRotator = ({ texts, className = "" }: TextRotatorProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className={`inline-block relative h-[1.1em] overflow-hidden align-bottom ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="block whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent pb-2"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
