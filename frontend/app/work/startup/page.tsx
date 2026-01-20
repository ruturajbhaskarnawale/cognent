"use client";

import { Zap, Rocket, TrendingUp, Users, Clock, Award, Code, Sparkles, DollarSign, Target } from "lucide-react";
import { CategoryHero } from "@/components/work/category-hero";
import { CaseStudyGrid, CaseStudy } from "@/components/work/case-study-grid";
import { ImpactMetrics } from "@/components/work/impact-metrics";
import { TestimonialCarousel } from "@/components/work/testimonial-carousel";
import { ProcessTimeline } from "@/components/work/process-timeline";
import { TechShowcase } from "@/components/work/tech-showcase";
import { CursorTrail } from "@/components/effects/cursor-trail";
import { WorkBackButton } from "@/components/work/work-back-button";
import { WorkNav } from "@/components/work/work-nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function StartupPage() {
  const heroStats = [
    { label: "Startups Launched", value: "100+" },
    { label: "Funding Raised", value: "$500M+" },
    { label: "Avg Time to Market", value: "8 weeks" },
    { label: "Success Rate", value: "95%" },
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: "1",
      title: "SaaS Productivity Platform MVP to Series A",
      client: "TechFlow (Stealth Startup)",
      industry: "B2B SaaS",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      challenge: "Early-stage startup needed to validate their productivity tool concept with a functional MVP in 8 weeks, on a limited seed budget, while ensuring the architecture could scale to thousands of users.",
      solution: "Built a serverless MVP using Next.js and Supabase, implemented core features with rapid prototyping, created an intuitive UI/UX, and set up analytics to track user behavior. Launched with Stripe integration for early monetization.",
      results: [
        "Launched MVP in 6 weeks, 2 weeks ahead of schedule",
        "Acquired 10,000 users in first 3 months",
        "Achieved $50K MRR within 6 months",
        "Secured $2M seed round based on traction",
        "Scaled to 50K users with zero downtime"
      ],
      metrics: [
        { label: "Time to Launch", value: "6 weeks", change: "2 weeks early" },
        { label: "User Growth", value: "10K", change: "3 months" },
        { label: "MRR", value: "$50K", change: "6 months" },
        { label: "Funding Raised", value: "$2M", change: "Seed" },
      ],
      techStack: ["Next.js", "Vercel", "Supabase", "Stripe", "Tailwind CSS", "TypeScript", "Mixpanel"],
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
      ],
      testimonial: {
        quote: "They turned our vision into reality faster than we imagined. The MVP was so polished that investors thought we'd been building for a year!",
        author: "Alex Kumar",
        role: "Founder & CEO",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
      }
    },
    {
      id: "2",
      title: "Mobile Marketplace for Local Services",
      client: "LocalHero",
      industry: "Consumer Marketplace",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
      challenge: "Consumer startup needed iOS and Android apps with real-time features, payment processing, and geolocation. Required rapid development to beat competitors to market.",
      solution: "Developed cross-platform mobile app using React Native, integrated Firebase for real-time messaging and push notifications, implemented Stripe Connect for marketplace payments, and added Google Maps integration for location-based services.",
      results: [
        "Launched on both iOS and Android in 10 weeks",
        "50,000 downloads in first 2 months",
        "Generated $500K in GMV within 6 months",
        "4.8★ average rating on app stores",
        "Secured Series A funding of $8M"
      ],
      metrics: [
        { label: "Downloads", value: "50K", change: "2 months" },
        { label: "GMV", value: "$500K", change: "6 months" },
        { label: "App Rating", value: "4.8★", change: "Excellent" },
        { label: "Series A", value: "$8M", change: "Raised" },
      ],
      techStack: ["React Native", "Firebase", "Stripe Connect", "Google Maps API", "AWS", "Node.js", "MongoDB"],
      images: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
      ],
      testimonial: {
        quote: "The speed and quality were incredible. We went from concept to 50K users in under 4 months. Game-changing!",
        author: "Maria Santos",
        role: "Co-Founder",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop"
      }
    },
    {
      id: "3",
      title: "AI-Powered Analytics SaaS Platform",
      client: "DataPulse AI",
      industry: "B2B AI/ML",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      challenge: "B2B startup needed to build complex ML models for data analytics, create interactive dashboards, and ensure the platform could handle enterprise-scale data while maintaining fast query times.",
      solution: "Architected microservices platform with Python/FastAPI backend, integrated TensorFlow for ML pipelines, built React dashboards with real-time data visualization, and implemented Redis caching for performance.",
      results: [
        "Onboarded 100+ enterprise clients in first year",
        "Achieved $5M ARR within 18 months",
        "Processing 1TB+ of data daily",
        "Acquired by major tech company for $50M",
        "Team scaled from 3 to 30 engineers"
      ],
      metrics: [
        { label: "Enterprise Clients", value: "100+", change: "Year 1" },
        { label: "ARR", value: "$5M", change: "18 months" },
        { label: "Data Processed", value: "1TB+", change: "Daily" },
        { label: "Exit Value", value: "$50M", change: "Acquired" },
      ],
      techStack: ["Python", "FastAPI", "TensorFlow", "React", "PostgreSQL", "Redis", "Docker", "AWS"],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      ],
      testimonial: {
        quote: "They built the technical foundation that allowed us to scale from startup to acquisition. Their expertise in ML and scalable architecture was invaluable.",
        author: "David Park",
        role: "CTO & Co-Founder",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
      }
    },
    {
      id: "4",
      title: "Creator Economy Social Platform",
      client: "CreatorHub",
      industry: "Social Network",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop",
      challenge: "Social platform for creators needed real-time feeds, content moderation, video streaming, and monetization features. Required infrastructure to handle viral growth.",
      solution: "Built scalable platform with GraphQL API, implemented CDN for global content delivery, integrated AI-powered content moderation, added Stripe for creator payments, and set up real-time WebSocket connections for live features.",
      results: [
        "Grew to 1 million users in 8 months",
        "100,000 paying creators on platform",
        "Processed $10M in creator earnings",
        "Raised $10M Series B from top VCs",
        "Expanded to 50+ countries globally"
      ],
      metrics: [
        { label: "Total Users", value: "1M", change: "8 months" },
        { label: "Creators", value: "100K", change: "Paying" },
        { label: "Earnings", value: "$10M", change: "Processed" },
        { label: "Series B", value: "$10M", change: "Raised" },
      ],
      techStack: ["Node.js", "GraphQL", "MongoDB", "Redis", "Cloudflare", "Stripe", "AWS", "WebSockets"],
      images: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop"
      ],
      testimonial: {
        quote: "From MVP to million users, they scaled with us every step of the way. The platform handled viral growth without breaking a sweat.",
        author: "Jessica Lee",
        role: "Founder",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
      }
    },
  ];

  const impactMetrics = [
    {
      label: "Average Launch Time",
      value: "8 weeks",
      description: "From concept to production",
      icon: "zap" as const,
      color: "bg-purple-500"
    },
    {
      label: "User Growth Rate",
      value: "300%",
      description: "Average monthly growth",
      icon: "trending" as const,
      color: "bg-green-500"
    },
    {
      label: "Total Funding",
      value: "$500M+",
      description: "Raised by our startups",
      icon: "target" as const,
      color: "bg-orange-500"
    },
    {
      label: "Success Rate",
      value: "95%",
      description: "Startups still operating",
      icon: "users" as const,
      color: "bg-blue-500"
    },
  ];

  const testimonials = [
    {
      quote: "They understood the startup hustle. Fast iterations, smart decisions, and a product that users loved from day one. We couldn't have asked for a better technical partner.",
      author: "Alex Kumar",
      role: "Founder & CEO",
      company: "TechFlow",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "From zero to 50K users in 4 months. The speed and quality were mind-blowing. They made the impossible possible.",
      author: "Maria Santos",
      role: "Co-Founder",
      company: "LocalHero",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "The technical foundation they built allowed us to scale from 3 to 30 engineers and eventually get acquired. Best investment we made.",
      author: "David Park",
      role: "CTO & Co-Founder",
      company: "DataPulse AI",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
    },
  ];

  const processSteps = [
    {
      title: "Rapid Discovery Sprint",
      description: "Fast-paced discovery to understand your vision, validate assumptions, and define MVP scope. We focus on what matters most for launch.",
      duration: "1 week",
      icon: Target,
      details: [
        "Founder interviews and vision alignment",
        "Market research and competitor analysis",
        "User persona definition",
        "MVP feature prioritization",
        "Technical feasibility assessment"
      ]
    },
    {
      title: "MVP Design & Prototyping",
      description: "Create user-centric designs and interactive prototypes. Test with real users before writing a single line of code.",
      duration: "2 weeks",
      icon: Sparkles,
      details: [
        "Wireframing and user flow mapping",
        "High-fidelity UI/UX design",
        "Interactive Figma prototypes",
        "User testing and feedback",
        "Design system creation"
      ]
    },
    {
      title: "Agile Development Sprint",
      description: "Build your MVP with weekly demos and continuous feedback. Ship features fast while maintaining quality.",
      duration: "4-8 weeks",
      icon: Code,
      details: [
        "Weekly sprint planning and demos",
        "Core feature development",
        "Third-party integrations (Stripe, Auth, etc.)",
        "Automated testing and CI/CD",
        "Performance optimization"
      ]
    },
    {
      title: "Launch & Iterate",
      description: "Deploy to production, monitor user behavior, and iterate based on real data. Get to product-market fit faster.",
      duration: "2 weeks",
      icon: Rocket,
      details: [
        "Production deployment",
        "Analytics and monitoring setup",
        "User onboarding optimization",
        "A/B testing framework",
        "Feedback collection and analysis"
      ]
    },
    {
      title: "Scale & Optimize",
      description: "As you grow, we ensure your platform scales smoothly. Add features, optimize performance, and handle increased load.",
      duration: "Ongoing",
      icon: TrendingUp,
      details: [
        "Performance monitoring and optimization",
        "Feature enhancements based on data",
        "Infrastructure scaling",
        "Security updates",
        "Growth engineering support"
      ]
    },
  ];

  const navSections = [
    { id: "overview", label: "Overview" },
    { id: "case-studies", label: "Case Studies" },
    { id: "impact", label: "Impact Metrics" },
    { id: "testimonials", label: "Testimonials" },
    { id: "process", label: "Process" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "cta", label: "Get Started" },
  ];

  const technologies = [
    { name: "Next.js", category: "Frontend", description: "React framework for production" },
    { name: "React Native", category: "Mobile", description: "Cross-platform mobile apps" },
    { name: "Tailwind CSS", category: "Frontend", description: "Utility-first CSS framework" },
    { name: "TypeScript", category: "Language", description: "Type-safe JavaScript" },
    { name: "Node.js", category: "Backend", description: "JavaScript runtime" },
    { name: "Python", category: "Backend", description: "For ML and APIs" },
    { name: "Supabase", category: "Backend", description: "Open-source Firebase alternative" },
    { name: "Firebase", category: "Backend", description: "Real-time database and auth" },
    { name: "Vercel", category: "Hosting", description: "Serverless deployment platform" },
    { name: "AWS", category: "Cloud", description: "Scalable cloud infrastructure" },
    { name: "Stripe", category: "Payments", description: "Payment processing" },
    { name: "MongoDB", category: "Database", description: "Flexible NoSQL database" },
    { name: "PostgreSQL", category: "Database", description: "Relational database" },
    { name: "Redis", category: "Cache", description: "In-memory caching" },
    { name: "GraphQL", category: "API", description: "Efficient API queries" },
    { name: "Mixpanel", category: "Analytics", description: "Product analytics" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <CursorTrail />
      <WorkBackButton />
      <WorkNav sections={navSections} />

      {/* Hero */}
      <CategoryHero
        title="Startup Launchpad"
        subtitle="MVPs and Rapid Scaling for Tomorrow's Unicorns"
        description="We help founders turn ideas into funded startups. From MVP to Series A, we build fast, iterate faster, and scale with you. Join 100+ startups that have raised over $500M with our technical foundation."
        stats={heroStats}
        icon={Zap}
        accentColor="bg-purple-500"
      />

      {/* Overview Section */}
      <section id="overview" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 font-heading">
              Built for Speed, Designed to Scale
            </h2>
            <p className="text-xl text-brand-black/60 leading-relaxed">
              Startups need to move fast. We help you validate, launch, and scale without compromising on quality or burning through runway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Rapid MVP", description: "Launch in 6-8 weeks with a polished, user-ready product" },
              { icon: DollarSign, title: "Cost Efficient", description: "Optimize for runway with smart tech choices and lean development" },
              { icon: TrendingUp, title: "Built to Scale", description: "Architecture that grows from 100 to 1M users seamlessly" },
              { icon: Award, title: "Investor Ready", description: "Impress investors with a professional, scalable product" },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-brand-black/5 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">{feature.title}</h3>
                <p className="text-brand-black/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-24 bg-gradient-to-b from-white to-brand-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-brand-black mb-4 font-heading">
              Startup Success Stories
            </h2>
            <p className="text-xl text-brand-black/60">
              From MVP to millions of users
            </p>
          </div>
          <CaseStudyGrid caseStudies={caseStudies} accentColor="bg-purple-500" />
        </div>
      </section>

      {/* Impact Metrics */}
      <div id="impact">
        <ImpactMetrics 
          metrics={impactMetrics}
          title="Launch Faster, Grow Bigger"
          subtitle="Data-driven results from our startup portfolio"
        />
      </div>

      {/* Testimonials */}
      <div id="testimonials">
        <TestimonialCarousel testimonials={testimonials} />
      </div>

      {/* Process Timeline */}
      <div id="process">
        <ProcessTimeline 
          steps={processSteps}
          title="MVP to Market in Weeks"
          subtitle="Our proven rapid development process"
        />
      </div>

      {/* Tech Stack */}
      <div id="tech-stack">
        <TechShowcase 
          technologies={technologies}
          title="Modern Startup Tech Stack"
          subtitle="Fast, scalable, and cost-effective technologies"
        />
      </div>

      {/* Final CTA */}
      <section id="cta" className="py-32 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-heading">
              Ready to Launch Your Startup?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-light">
              Let's turn your idea into a funded company. Free consultation to discuss your MVP and go-to-market strategy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full bg-white text-purple-600 hover:bg-brand-black hover:text-white transition-all duration-500 px-12 h-16 text-lg font-bold shadow-2xl">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/estimate">
                <Button size="lg" variant="outline" className="rounded-full border-2 border-white/40 text-white hover:bg-white/20 transition-all duration-500 px-12 h-16 text-lg font-bold">
                  Estimate Your MVP
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                <span>100+ Startups Launched</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span>$500M+ Raised</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>95% Success Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
