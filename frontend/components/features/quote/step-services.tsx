"use client";

import { motion } from "framer-motion";
import { useQuoteStore } from "@/store/useQuoteStore";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const services = [
  { id: "web_dev", label: "Web Development", desc: "Next.js, React, High Permformance" },
  { id: "backend", label: "Backend Systems", desc: "Python, FastAPI, Scalable APIs" },
  { id: "mobile", label: "Mobile Apps", desc: "React Native, iOS, Android" },
  { id: "seo", label: "Technical SEO", desc: "Core Web Vitals, Semantic HTML" },
];

export function StepServices() {
  const { services: selectedServices, toggleService } = useQuoteStore();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">What can we build for you?</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileTap={{ scale: 0.98 }}
            onClick={() => toggleService(service.id)}
            className={cn(
              "cursor-pointer rounded-xl border p-6 transition-all",
              selectedServices.includes(service.id)
                ? "border-blue-500 bg-blue-50/50 dark:border-blue-500 dark:bg-blue-900/20"
                : "border-zinc-200 bg-white hover:border-blue-300 dark:border-zinc-800 dark:bg-zinc-950"
            )}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{service.label}</h3>
              {selectedServices.includes(service.id) && (
                 <div className="h-4 w-4 rounded-full bg-blue-500" />
              )}
            </div>
            <p className="mt-2 text-sm text-zinc-500">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
