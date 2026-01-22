"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Project } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { CursorTrail } from "@/components/effects/cursor-trail";
import { MagneticButton } from "@/components/animations/magnetic-button";

interface SelectedWorkProps {
  projects: Project[];
}

const TiltCard = ({ project, index }: { project: Project; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        
        const width = rect.width;
        const height = rect.height;
        
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;
        
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative group cursor-pointer w-full aspect-[16/10] md:aspect-[16/9] bg-zinc-100 rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-black/5 transition-shadow hover:shadow-brand-primary/10 ${
                index % 2 === 1 ? 'lg:translate-y-24' : ''
            }`}
        >
            <Link href={`/work/${project.slug}`} className="block w-full h-full">
                {/* 3D Depth Layer - Background Image */}
                <motion.div 
                    style={{ 
                        transform: "translateZ(-50px) scale(1.1)", 
                        opacity: isHovered ? 0.9 : 1
                    }}
                    className="absolute inset-0 transition-opacity duration-500"
                >
                    {project.thumbnail_url ? (
                        <Image
                            src={project.thumbnail_url}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-100 text-zinc-400">
                            No Image
                        </div>
                    )}
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>

                {/* 3D Depth Layer - Content */}
                <div 
                    style={{ transform: "translateZ(50px)" }}
                    className="absolute inset-0 p-8 flex flex-col justify-end text-white"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            {project.tech_stack?.slice(0, 3).map((tech) => (
                                <span key={tech} className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-2">{project.client_name}</h3>
                        <p className="text-white/70 text-lg mb-6 max-w-sm line-clamp-2">{project.title}</p>
                        
                        <div className="flex items-center gap-2 text-sm font-bold group/btn">
                            <span className="bg-white text-brand-black px-6 py-3 rounded-full flex items-center gap-2 hover:bg-brand-primary hover:text-white transition-colors">
                                View Case Study
                                <ExternalLink className="w-4 h-4" />
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Corner Label (Visible Initially) */}
                <div 
                    className="absolute top-8 left-8 flex flex-col group-hover:opacity-0 transition-opacity duration-300"
                    style={{ transform: "translateZ(30px)" }}
                >
                    <span className="text-brand-black bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-bold shadow-lg border border-white/50">
                        0{index + 1}
                    </span>
                </div>
            </Link>
        </motion.div>
    );
};

export function SelectedWork({ projects }: SelectedWorkProps) {
  // Take only first 4 for the homepage transformation
  const displayedProjects = projects.slice(0, 4).map((p, i) => {
    // Override 4th project image with a premium sustainable e-commerce visual
    if (i === 3) {
      return { ...p, thumbnail_url: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop" };
    }
    return p;
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollXProgress } = useScroll({
    container: scrollRef,
  });

  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      {/* Cursor Trail Effect */}
      <CursorTrail />

      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <ScrollReveal width="100%">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-medium text-sm mb-6 inline-block"
              >
                Portfolio
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-bold font-heading text-brand-black tracking-tight">
                Selected <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-slow">Showcase.</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal width="fit-content">
            <MagneticButton>
              <Link href="/work" className="group">
                <Button size="lg" className="relative group overflow-hidden rounded-full bg-brand-black text-white px-10 h-14 text-lg font-bold shadow-2xl hover:bg-brand-primary transition-all duration-500 border-none">
                  <span className="relative z-10 flex items-center gap-2">
                    Deep Dive Into All Work
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Pulsing Glow */}
                  <div className="absolute inset-0 bg-brand-primary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
                </Button>
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>

      {/* Panoramic Swipable Container */}
      <div className="relative w-full">
        <div 
            ref={scrollRef}
            className="flex overflow-x-auto overflow-y-hidden gap-8 lg:gap-16 px-6 lg:px-[10vw] pb-24 snap-x snap-mandatory scrollbar-hide no-scrollbar"
        >
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project, index) => (
                <div 
                    key={project.id} 
                    className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[40vw] snap-center first:pl-0"
                >
                    <ScrollReveal 
                        width="100%" 
                        delay={index * 0.15}
                        direction="up"
                    >
                        <TiltCard project={project} index={index} />
                    </ScrollReveal>
                </div>
            ))
          ) : (
            <div className="w-full text-center py-24 text-zinc-500 bg-zinc-50 rounded-[3rem] border-2 border-dashed border-zinc-200">
              <p className="text-xl">Engineering case studies incoming...</p>
            </div>
          )}
        </div>

        {/* Custom Progress Bar */}
        <div className="container mx-auto px-6 lg:px-12">
            <div className="relative h-1 w-full bg-brand-black/5 rounded-full overflow-hidden">
                <motion.div 
                    style={{ scaleX, transformOrigin: "0%" }}
                    className="absolute inset-0 bg-brand-primary"
                />
            </div>
            <div className="flex justify-between mt-4 text-[10px] font-bold uppercase tracking-widest text-brand-black/40">
                <span>01 Discovery</span>
                <span>04 Execution</span>
            </div>
        </div>
      </div>
    </section>
  );
}
