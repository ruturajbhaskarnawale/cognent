"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function ServiceBackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:block"
    >
      <Link
        href="/services"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-brand-black/10 text-brand-black/60 hover:text-brand-primary hover:bg-white hover:border-brand-primary/20 transition-all shadow-lg hover:shadow-xl group"
        aria-label="Back to services"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
      </Link>
    </motion.div>
  );
}
