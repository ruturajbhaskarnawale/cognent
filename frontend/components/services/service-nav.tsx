"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface NavSection {
  id: string;
  label: string;
}

interface ServiceNavProps {
  sections: NavSection[];
}

export function ServiceNav({ sections }: ServiceNavProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);

      // Determine active section
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      // Find the section that's currently most visible
      let currentSection = "";
      for (const { id, element } of sectionElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with some offset for better UX)
          if (rect.top <= windowHeight / 3 && rect.bottom >= windowHeight / 3) {
            currentSection = id;
            break;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    handleScroll(); // Initial call
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="relative"
      >
        {/* Progress Bar */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-brand-black/10 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent"
            style={{ height: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Navigation Items */}
        <div className="pl-6 space-y-4">
          {sections.map((section, index) => {
            const isActive = activeSection === section.id;
            
            return (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group relative flex items-center gap-3 text-left"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Dot Indicator */}
                <div className="relative flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: isActive ? 1.5 : 1,
                      backgroundColor: isActive 
                        ? "rgb(37, 99, 235)" 
                        : "rgba(0, 0, 0, 0.2)"
                    }}
                    className="w-2 h-2 rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Active Ring */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1.8, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute w-2 h-2 rounded-full border-2 border-brand-primary"
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Label */}
                <motion.span
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : -10
                  }}
                  className={`text-sm font-bold whitespace-nowrap px-3 py-1.5 rounded-full backdrop-blur-md border transition-colors ${
                    isActive
                      ? "bg-white/90 text-brand-primary border-brand-primary/20 shadow-lg"
                      : "bg-white/70 text-brand-black/60 border-brand-black/10"
                  }`}
                >
                  {section.label}
                </motion.span>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute -right-6"
                >
                  <ChevronRight className="w-4 h-4 text-brand-primary" />
                </motion.div>
              </motion.button>
            );
          })}
        </div>

        {/* Scroll Progress Percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollProgress > 5 ? 1 : 0 }}
          className="mt-8 pl-6"
        >
          <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-brand-black/10 shadow-lg">
            <span className="text-xs font-bold text-brand-primary">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
