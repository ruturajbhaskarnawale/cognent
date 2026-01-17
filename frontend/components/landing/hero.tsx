"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-48 md:pb-32">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="absolute top-0 right-0 -z-10 h-[400px] w-[400px] bg-purple-500/10 blur-[100px]" />

      <div className="container mx-auto px-4 text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    India's First High-Performance Agency
                </span>
            </div>
            
            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-zinc-900 md:text-7xl dark:text-zinc-50">
            Speed, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Compliance</span>, <br />
            and Technical Excellence.
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            We build web experiences that act as Sales Machines and Trust Beacons. 
            DPDP Compliant. 95+ Core Web Vitals.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/estimate">
                <Button size="lg" className="rounded-full">
                Get Instant Quote
                </Button>
            </Link>
            <Link href="/work">
                <Button variant="outline" size="lg" className="rounded-full">
                View Our Work
                </Button>
            </Link>
            </div>
        </motion.div>
      </div>
      
      {/* Abstract Dashboard UI Mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-20 mx-auto max-w-5xl px-4"
      >
        <div className="relative rounded-2xl border border-zinc-200 bg-white/50 p-2 shadow-2xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/50">
            <div className="aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden">
                <div className="grid grid-cols-3 gap-8 p-8 w-full h-full opacity-50">
                     <div className="col-span-1 bg-white dark:bg-zinc-800 rounded-lg h-full animate-pulse shadow-sm"></div>
                     <div className="col-span-2 space-y-4">
                        <div className="h-32 bg-white dark:bg-zinc-800 rounded-lg shadow-sm"></div>
                        <div className="h-32 bg-white dark:bg-zinc-800 rounded-lg shadow-sm"></div>
                     </div>
                </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
}
