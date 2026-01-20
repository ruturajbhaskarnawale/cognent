import { getProjectBySlug, getProjects } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
    ArrowLeft, 
    CheckCircle2, 
    ArrowRight, 
    Zap, 
    Shield, 
    Target, 
    Cpu, 
    Globe, 
    Layers,
    Clock,
    BarChart3
} from "lucide-react";
import { CursorTrail } from "@/components/effects/cursor-trail";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { MagneticButton } from "@/components/animations/magnetic-button";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps) {
  const project = await getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.client_name} - ${project.title} | OddJobs`,
    description: project.challenge,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const project = await getProjectBySlug(params.slug);
  const allProjects = await getProjects();

  if (!project) {
    notFound();
  }

  // Find next project for "Journey Navigation"
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <main className="min-h-screen bg-white">
      <CursorTrail />

      {/* Cinema Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-brand-black">
        {project.thumbnail_url && (
            <div className="absolute inset-0">
                <Image
                    src={project.thumbnail_url}
                    alt={project.title}
                    fill
                    className="object-cover opacity-40 scale-105 blur-sm"
                    priority
                />
            </div>
        )}
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
        <div className="absolute inset-0 bg-brand-black/20" />

        <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-6 lg:px-12 pb-24 z-10">
            <ScrollReveal width="fit-content">
                <Link href="/work">
                    <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10 mb-12 rounded-full pl-2 pr-6 h-10 group">
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> 
                        Back Key to Archive
                    </Button>
                </Link>
            </ScrollReveal>

            <div className="max-w-4xl">
                <ScrollReveal delay={0.1}>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-brand-primary font-black tracking-widest uppercase text-xs">Engineering Case {String(currentIndex + 1).padStart(2, '0')}</span>
                        <div className="h-[1px] w-12 bg-brand-primary/30" />
                        <span className="text-white/40 font-medium text-xs uppercase tracking-widest">{project.client_name}</span>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter font-heading leading-none mb-8">
                        {project.title.split(' ').map((word, i) => (
                            <span key={i} className={i === project.title.split(' ').length - 1 ? "text-brand-primary" : ""}>
                                {word}{' '}
                            </span>
                        ))}
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <div className="flex flex-wrap gap-4">
                        {project.tech_stack.slice(0, 4).map(tech => (
                            <span key={tech} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                                {tech}
                            </span>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </div>
        
        {/* Animated Brand Mark Overlay */}
        <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:block opacity-10 pointer-events-none">
            <img src="/logo/logo1.png" className="w-[400px] grayscale brightness-200" alt="" />
        </div>
      </section>

      {/* The Mission: Strategy Breakdown */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                <div className="lg:col-span-4 lg:sticky lg:top-32">
                    <ScrollReveal>
                        <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8">
                            <Target className="w-8 h-8 text-brand-primary" />
                        </div>
                        <h2 className="text-4xl font-bold text-brand-black mb-6 tracking-tight font-heading">The Mission</h2>
                        <p className="text-brand-black/60 font-light leading-relaxed">
                            Deep-tuning technical feasibility with market-driven business objectives.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="lg:col-span-8 space-y-16">
                    <ScrollReveal>
                        <div className="p-10 rounded-[2.5rem] bg-brand-muted border border-brand-black/5 relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="text-sm font-black text-brand-black/20 uppercase tracking-[0.3em] mb-8">01. Strategic Objective</h3>
                                <p className="text-2xl md:text-3xl font-medium text-brand-black leading-snug">
                                    {project.challenge}
                                </p>
                            </div>
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Shield className="w-32 h-32" />
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-widest">
                                    <Layers className="w-4 h-4" /> constraints
                                </div>
                                <p className="text-brand-black/60 leading-relaxed font-light">
                                    The project required a zero-downtime migration path while integrating real-time data synchronization across legacy nodes.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-brand-secondary font-bold text-xs uppercase tracking-widest">
                                    <Clock className="w-4 h-4" /> Timeline
                                </div>
                                <p className="text-brand-black/60 leading-relaxed font-light">
                                    Delivered in 4 agile phases over {idxToTime(currentIndex)} months, from initial technical discovery to market deployment.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
      </section>

      {/* Architectural Deep Dive */}
      <section className="py-32 bg-brand-muted relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-24 max-w-3xl mx-auto">
                <ScrollReveal>
                    <span className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4 block">Tech Stack & Logic</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-8 tracking-tight font-heading">The Architectural Backbone</h2>
                    <p className="text-brand-black/60 font-light leading-relaxed">
                        Every tool chosen serves a specific purpose in the system's scalability, security, and performance matrix.
                    </p>
                </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {project.tech_stack.map((tech, i) => (
                    <ScrollReveal key={tech} delay={i * 0.1}>
                        <div className="p-8 rounded-3xl bg-white border border-brand-black/5 hover:border-brand-primary/20 transition-all group">
                            <div className="w-12 h-12 rounded-xl bg-brand-black/5 flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-bold text-brand-black mb-2">{tech}</h4>
                            <p className="text-sm text-brand-black/40 leading-relaxed">
                                Integrated for decentralized handling and high-concurrency request management at scale.
                            </p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
      </section>

      {/* Impact & KPI Dashboard */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto p-12 md:p-20 rounded-[3rem] bg-brand-black text-white relative overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
                    <div className="lg:col-span-7">
                        <ScrollReveal>
                            <div className="flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-widest mb-8">
                                <BarChart3 className="w-5 h-5" /> ROI & Engagement
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tighter font-heading leading-tight">
                                Measurable Impact. <br />
                                <span className="text-white/40">Beyond the Code.</span>
                            </h2>
                            <p className="text-xl text-white/50 font-light leading-relaxed mb-12">
                                {project.roi_metrics}
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="lg:col-span-5 grid grid-cols-1 gap-6">
                        <ScrollReveal delay={0.2}>
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-6">
                                <div className="text-4xl font-bold text-brand-primary">40%</div>
                                <div className="text-xs uppercase tracking-widest text-white/40 font-bold leading-tight">Efficiency <br /> Increase</div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.3}>
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-6">
                                <div className="text-4xl font-bold text-brand-secondary">2M+</div>
                                <div className="text-xs uppercase tracking-widest text-white/40 font-bold leading-tight">Requests <br /> Per Hour</div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.4}>
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-6">
                                <div className="text-4xl font-bold text-brand-accent">0.02s</div>
                                <div className="text-xs uppercase tracking-widest text-white/40 font-bold leading-tight">Response <br /> Latency</div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
                {/* Background Decorator */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            </div>
        </div>
      </section>

      {/* Next Project Journey */}
      <section className="py-24 border-t border-brand-black/5 bg-white overflow-hidden group/journey">
        <Link href={`/work/${nextProject.slug}`} className="block">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
                <span className="text-brand-black/30 font-bold text-xs uppercase tracking-widest mb-8 block transition-colors group-hover/journey:text-brand-primary">Next Success Story</span>
                <h3 className="text-3xl md:text-6xl font-bold text-brand-black tracking-tighter font-heading mb-12 group-hover/journey:scale-105 transition-transform duration-700">
                    {nextProject.client_name}
                    <ArrowRight className="inline-block ml-4 md:ml-8 w-8 h-8 md:w-16 md:h-16 text-brand-black/10 transition-all group-hover/journey:text-brand-primary group-hover/journey:translate-x-4" />
                </h3>
                
                <div className="relative w-full max-w-4xl aspect-[21/9] rounded-[2rem] overflow-hidden grayscale group-hover/journey:grayscale-0 transition-all duration-700 shadow-xl">
                    <Image
                        src={nextProject.thumbnail_url || "/placeholder.jpg"}
                        alt=""
                        fill
                        className="object-cover scale-105 group-hover/journey:scale-100 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-brand-black/20" />
                </div>
            </div>
        </Link>
      </section>

      {/* Modern Footer CTA Link */}
      <section className="bg-brand-black py-20">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
            <h4 className="text-white text-3xl font-bold tracking-tight text-center md:text-left">Ready to start your own <br /> deep-dive project?</h4>
            <MagneticButton>
                <Link href="/contact" className="px-12 py-5 rounded-full bg-white text-brand-black font-bold text-lg hover:bg-brand-primary hover:text-white transition-all duration-500 shadow-2xl">
                    Consult Experts
                </Link>
            </MagneticButton>
        </div>
      </section>
    </main>
  );
}

function idxToTime(idx: number) {
    const times = ["3.5", "6", "2.5", "4", "5.5"];
    return times[idx % times.length];
}
