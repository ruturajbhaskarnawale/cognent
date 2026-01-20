"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getProjects } from "@/lib/api";
import { Project } from "@/lib/types";
import { WorkHero } from "@/components/work/work-hero";
import { CursorTrail } from "@/components/effects/cursor-trail";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Filter, ExternalLink, Zap, Globe, Target } from "lucide-react";

export default function WorkPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  const categories = ["All", "Enterprise", "Startup", "AI & Automation"];

  useEffect(() => {
    async function loadProjects() {
      const data = await getProjects();
      setProjects(data);
      setFilteredProjects(data);
      setIsLoading(false);
    }
    loadProjects();
  }, []);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else if (activeCategory === "AI & Automation") {
        setFilteredProjects(projects.filter(p => 
            p.tech_stack.some(t => t.toLowerCase().includes("ai") || t.toLowerCase().includes("automation"))
        ));
    } else {
        // Simple heuristic for demo: using tech stack or title (in a real app, projects would have a 'category' field)
        setFilteredProjects(projects.filter(p => 
            p.title.toLowerCase().includes(activeCategory.toLowerCase()) || 
            p.client_name.toLowerCase().includes(activeCategory.toLowerCase())
        ));
    }
  }, [activeCategory, projects]);

  return (
    <main className="min-h-screen bg-white">
      <CursorTrail />
      
      <WorkHero />

      {/* Filter Bar */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-y border-brand-black/5 py-4">
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                            activeCategory === cat 
                            ? "bg-brand-black text-white shadow-lg" 
                            : "bg-brand-black/5 text-brand-black/60 hover:bg-brand-black/10 hover:text-brand-black"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="hidden md:flex items-center gap-2 text-brand-black/40 text-sm font-medium">
                <Filter className="w-4 h-4" />
                <span>{filteredProjects.length} Projects Archived</span>
            </div>
        </div>
      </div>

      {/* Projects Gallery */}
      <div className="container mx-auto px-6 lg:px-12 py-24">
        {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="aspect-video bg-brand-black/5 animate-pulse rounded-[2rem]" />
                ))}
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, idx) => {
                        // 4th Project Image Override (Consistency with Showcase)
                        const projectData = idx === 3 
                            ? { ...project, thumbnail_url: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop" }
                            : project;

                        // Asymmetrical Layout Logic
                        const isFullWidth = idx % 5 === 0;
                        const isTwoThirds = idx % 5 === 3;
                        const colSpan = isFullWidth ? "md:col-span-12" : isTwoThirds ? "md:col-span-8" : "md:col-span-4";
                        
                        return (
                            <motion.div
                                key={projectData.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className={`${colSpan}`}
                            >
                                <ProjectCard project={projectData} featured={isFullWidth} />
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                {filteredProjects.length === 0 && (
                    <div className="col-span-12 py-32 text-center bg-brand-black/5 rounded-[3rem] border border-dashed border-brand-black/10">
                        <Globe className="w-12 h-12 text-brand-black/20 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-brand-black mb-2">The Archive is Thin Here</h3>
                        <p className="text-brand-black/40 max-w-md mx-auto">
                            No projects match the current filter. Try broadening your technical search or contact us for custom deep dives.
                        </p>
                    </div>
                )}
            </div>
        )}
      </div>

      {/* Final CTA */}
      <section className="py-32 bg-brand-black text-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-heading">Have a Complex <br /> Challenge in Mind?</h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light">
                Our archive is just the beginning. Let's architect your specific success story together.
            </p>
            <Link href="/contact">
                <Button size="lg" className="rounded-full bg-white text-brand-black hover:bg-brand-primary hover:text-white transition-all duration-500 px-12 h-16 text-lg font-bold">
                    Start Your Project 
                    <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </Link>
        </div>
        {/* Decorative background for CTA */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </section>
    </main>
  );
}

function ProjectCard({ project, featured }: { project: Project, featured?: boolean }) {
    return (
        <Link href={`/work/${project.slug}`} className="group block">
            <ScrollReveal width="100%">
                <div className="space-y-6">
                    {/* Visual Container */}
                    <div className={`relative rounded-[2rem] overflow-hidden border border-brand-black/5 shadow-sm group-hover:shadow-2xl transition-all duration-700 bg-brand-muted ${featured ? 'aspect-[21/9]' : 'aspect-square md:aspect-[4/5]'}`}>
                        {project.thumbnail_url ? (
                            <Image
                                src={project.thumbnail_url}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-brand-black/20">
                                <Zap className="w-12 h-12 opacity-20" />
                            </div>
                        )}
                        
                        {/* X-Ray Meta Overlay */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute inset-0 bg-brand-black/80 backdrop-blur-md p-8 flex flex-col justify-end text-white transition-opacity duration-500"
                        >
                            <div className="space-y-6 max-w-xl">
                                <div className="flex items-center gap-3">
                                    <div className="h-[1px] flex-1 bg-white/20" />
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">Technical Payload</span>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="flex items-center gap-2 text-xs font-bold text-brand-primary mb-2">
                                            <Target className="w-3 h-3" /> OBJECTIVE
                                        </h4>
                                        <p className="text-sm font-light leading-relaxed line-clamp-2">
                                            {project.title}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="flex items-center gap-2 text-xs font-bold text-brand-secondary mb-2">
                                            <Zap className="w-3 h-3" /> THE RESULT
                                        </h4>
                                        <p className="text-sm font-light leading-relaxed">
                                            {project.roi_metrics || "Performance optimized by 40%+"}
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4 flex items-center justify-between border-t border-white/10">
                                    <div className="flex gap-2">
                                        {project.tech_stack.slice(0, 3).map(tech => (
                                            <span key={tech} className="text-[10px] px-2 py-1 rounded bg-white/10 border border-white/10">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center">
                                        <ExternalLink className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Info */}
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-3 text-brand-black/40 text-xs font-bold tracking-[0.2em] mb-2 uppercase">
                                <span>{project.client_name}</span>
                                <span className="h-2 w-2 rounded-full bg-brand-primary/20" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-brand-black group-hover:text-brand-primary transition-colors duration-300 tracking-tight">
                                {project.title}
                            </h3>
                        </div>
                        <div className="hidden md:flex flex-col items-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-brand-black/20">
                            <span className="text-[10px] font-black italic">EST. ARCHIVE 2024</span>
                            <ArrowRight className="w-4 h-4 -rotate-45" />
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </Link>
    );
}
