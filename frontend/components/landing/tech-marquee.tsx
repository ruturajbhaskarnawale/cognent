"use client";

import { motion } from "framer-motion";

const technologies = [
  "Next.js 14", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "PostgreSQL", "Docker", "AWS", "Vercel"
];

export function TechMarquee() {
  return (
    <div className="w-full overflow-hidden border-y border-zinc-200 bg-white py-10 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex gap-16 px-16"
        >
          {[...technologies, ...technologies, ...technologies].map((tech, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-xl font-semibold text-zinc-400 dark:text-zinc-600"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
