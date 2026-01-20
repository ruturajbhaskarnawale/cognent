"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X, ExternalLink, TrendingUp, Users, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  thumbnail: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string; change?: string; icon?: string }[];
  techStack: string[];
  images: string[];
  testimonial?: { quote: string; author: string; role: string; avatar?: string };
}

interface CaseStudyGridProps {
  caseStudies: CaseStudy[];
  accentColor?: string;
}

export function CaseStudyGrid({ caseStudies, accentColor = "bg-brand-primary" }: CaseStudyGridProps) {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((caseStudy, idx) => (
          <motion.div
            key={caseStudy.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onClick={() => setSelectedCase(caseStudy)}
            className="group cursor-pointer"
          >
            {/* Card */}
            <div className="relative rounded-3xl overflow-hidden bg-white border border-brand-black/5 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-muted">
                <Image
                  src={caseStudy.thumbnail}
                  alt={caseStudy.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="flex items-center gap-2 text-white text-sm font-bold">
                    <span>View Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Industry Tag */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold tracking-widest uppercase text-brand-black/40">
                    {caseStudy.industry}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-brand-primary/40" />
                  <span className="text-xs font-medium text-brand-black/40">
                    {caseStudy.client}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-brand-black group-hover:text-brand-primary transition-colors duration-300 line-clamp-2">
                  {caseStudy.title}
                </h3>

                {/* Key Metrics Preview */}
                <div className="flex items-center gap-4 pt-4 border-t border-brand-black/5">
                  {caseStudy.metrics.slice(0, 2).map((metric, i) => (
                    <div key={i} className="flex-1">
                      <div className="text-lg font-bold text-brand-primary">
                        {metric.value}
                      </div>
                      <div className="text-xs text-brand-black/40 line-clamp-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2">
                  {caseStudy.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-brand-black/5 text-brand-black/60 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {caseStudy.techStack.length > 3 && (
                    <span className="text-xs px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary font-bold">
                      +{caseStudy.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCase(null)}
            className="fixed inset-0 bg-brand-black/80 backdrop-blur-md z-[200] flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-[3rem] max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-brand-black/10 hover:bg-brand-black hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Hero Image */}
              <div className="relative aspect-[21/9] overflow-hidden rounded-t-[3rem] bg-brand-muted">
                <Image
                  src={selectedCase.images[0] || selectedCase.thumbnail}
                  alt={selectedCase.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 space-y-12">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-bold tracking-widest uppercase text-brand-primary">
                      {selectedCase.industry}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-brand-black/20" />
                    <span className="text-sm text-brand-black/60">
                      {selectedCase.client}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 font-heading">
                    {selectedCase.title}
                  </h2>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {selectedCase.metrics.map((metric, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-brand-black/5 border border-brand-black/5">
                      <div className="text-3xl font-bold text-brand-primary mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm text-brand-black/60 font-medium">
                        {metric.label}
                      </div>
                      {metric.change && (
                        <div className="flex items-center gap-1 mt-2 text-xs text-green-600 font-bold">
                          <TrendingUp className="w-3 h-3" />
                          {metric.change}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Challenge */}
                <div>
                  <h3 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-red-500" />
                    </div>
                    The Challenge
                  </h3>
                  <p className="text-lg text-brand-black/60 leading-relaxed">
                    {selectedCase.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-500" />
                    </div>
                    Our Solution
                  </h3>
                  <p className="text-lg text-brand-black/60 leading-relaxed">
                    {selectedCase.solution}
                  </p>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                    The Results
                  </h3>
                  <ul className="space-y-3">
                    {selectedCase.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-lg text-brand-black/60">
                        <span className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary text-sm font-bold mt-1 flex-shrink-0">
                          ✓
                        </span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-2xl font-bold text-brand-black mb-4">Technology Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedCase.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-xl bg-brand-black text-white text-sm font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {selectedCase.testimonial && (
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 border border-brand-primary/10">
                    <div className="text-6xl text-brand-primary/20 mb-4">"</div>
                    <p className="text-xl text-brand-black/80 italic mb-6 leading-relaxed">
                      {selectedCase.testimonial.quote}
                    </p>
                    <div className="flex items-center gap-4">
                      {selectedCase.testimonial.avatar && (
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-brand-muted">
                          <Image
                            src={selectedCase.testimonial.avatar}
                            alt={selectedCase.testimonial.author}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <div className="font-bold text-brand-black">
                          {selectedCase.testimonial.author}
                        </div>
                        <div className="text-sm text-brand-black/60">
                          {selectedCase.testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
