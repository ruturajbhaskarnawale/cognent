"use client";

import { Globe, Shield, Zap, Users, TrendingUp, Target, Clock, Award, Server, Database, Lock, BarChart, Code } from "lucide-react";
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

export default function EnterprisePage() {
  const heroStats = [
    { label: "Enterprise Projects", value: "50+" },
    { label: "Global Clients", value: "25+" },
    { label: "Countries Served", value: "15+" },
    { label: "Uptime SLA", value: "99.99%" },
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: "1",
      title: "Global E-Commerce Platform Transformation",
      client: "Fortune 500 Retailer",
      industry: "Retail & E-Commerce",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      challenge: "Legacy monolithic system causing poor performance, limited scalability, and inability to handle peak traffic during sales events. The platform was experiencing frequent downtime and losing millions in revenue.",
      solution: "Architected and implemented a cloud-native microservices architecture with auto-scaling capabilities, real-time analytics, and a modern React-based frontend. Integrated CDN for global content delivery and implemented comprehensive monitoring.",
      results: [
        "Achieved 99.99% uptime across all regions",
        "3x faster page load times improving conversion rates by 40%",
        "$5M annual cost savings through cloud optimization",
        "Successfully handled 10x traffic spike during Black Friday",
        "Reduced deployment time from weeks to hours"
      ],
      metrics: [
        { label: "Uptime", value: "99.99%", change: "+2.5%" },
        { label: "Cost Savings", value: "$5M", change: "Annual" },
        { label: "Performance", value: "3x", change: "Faster" },
        { label: "Conversion", value: "+40%", change: "Increase" },
      ],
      techStack: ["AWS", "Kubernetes", "React", "Node.js", "PostgreSQL", "Redis", "Elasticsearch", "CloudFront"],
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
      ],
      testimonial: {
        quote: "The transformation exceeded our expectations. We now have a platform that scales effortlessly and delivers exceptional performance globally.",
        author: "Sarah Chen",
        role: "CTO",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
      }
    },
    {
      id: "2",
      title: "Secure Financial Services Platform",
      client: "International Bank",
      industry: "Financial Services",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      challenge: "Needed to modernize legacy banking systems while maintaining strict regulatory compliance (SOC 2, PCI-DSS), ensuring zero downtime, and integrating with multiple third-party financial services.",
      solution: "Built a secure API gateway with blockchain integration for audit trails, implemented zero-trust security architecture, and created a microservices-based platform with real-time fraud detection using ML models.",
      results: [
        "Achieved SOC 2 Type II certification",
        "Processing 10M+ transactions daily with 99.99% uptime",
        "Zero security breaches since deployment",
        "Reduced transaction processing time by 60%",
        "Integrated with 50+ financial institutions seamlessly"
      ],
      metrics: [
        { label: "Daily Transactions", value: "10M+", change: "+200%" },
        { label: "Security Score", value: "100%", change: "SOC 2" },
        { label: "Processing Speed", value: "60%", change: "Faster" },
        { label: "Integrations", value: "50+", change: "Partners" },
      ],
      techStack: ["Azure", ".NET Core", "SQL Server", "Redis", "Kafka", "Blockchain", "TensorFlow", "Docker"],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      ],
      testimonial: {
        quote: "Security and compliance were non-negotiable. The team delivered a platform that not only meets but exceeds industry standards.",
        author: "Michael Rodriguez",
        role: "Chief Security Officer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
      }
    },
    {
      id: "3",
      title: "Healthcare Management System",
      client: "National Hospital Network",
      industry: "Healthcare",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      challenge: "Fragmented patient data across multiple systems, poor user experience for both patients and staff, and strict HIPAA compliance requirements. Manual processes causing delays in patient care.",
      solution: "Developed a unified patient portal with HL7 FHIR integration, mobile-first design for patients and staff, real-time appointment scheduling, and secure telemedicine capabilities. Implemented AI-powered triage system.",
      results: [
        "40% faster patient intake and registration",
        "95% patient satisfaction score",
        "Full HIPAA compliance with encrypted data at rest and in transit",
        "Reduced administrative overhead by 50%",
        "Enabled 100K+ telemedicine consultations"
      ],
      metrics: [
        { label: "Faster Intake", value: "40%", change: "Improvement" },
        { label: "Satisfaction", value: "95%", change: "Score" },
        { label: "Telemedicine", value: "100K+", change: "Visits" },
        { label: "Admin Savings", value: "50%", change: "Reduction" },
      ],
      techStack: ["GCP", "Python", "Django", "PostgreSQL", "React Native", "HL7 FHIR", "WebRTC", "Kubernetes"],
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
      ],
      testimonial: {
        quote: "This platform has revolutionized how we deliver patient care. The integration and user experience are outstanding.",
        author: "Dr. Emily Watson",
        role: "Chief Medical Information Officer",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
      }
    },
    {
      id: "4",
      title: "Supply Chain Optimization Platform",
      client: "Global Logistics Company",
      industry: "Logistics & Supply Chain",
      thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      challenge: "Lack of real-time visibility across global supply chain, inefficient route planning, manual inventory management, and inability to predict delays or optimize costs.",
      solution: "Built an IoT-integrated platform with ML-powered route optimization, predictive analytics for demand forecasting, real-time tracking with GPS integration, and automated inventory management with smart alerts.",
      results: [
        "25% reduction in operational costs",
        "30% faster delivery times through optimized routing",
        "Real-time visibility across 50+ countries",
        "Predictive accuracy of 95% for demand forecasting",
        "Reduced carbon footprint by 20% through route optimization"
      ],
      metrics: [
        { label: "Cost Reduction", value: "25%", change: "Savings" },
        { label: "Faster Delivery", value: "30%", change: "Speed" },
        { label: "Global Coverage", value: "50+", change: "Countries" },
        { label: "Forecast Accuracy", value: "95%", change: "Precision" },
      ],
      techStack: ["AWS IoT", "Python", "TensorFlow", "MongoDB", "React", "GraphQL", "Apache Kafka", "Elasticsearch"],
      images: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
      ],
      testimonial: {
        quote: "The visibility and optimization capabilities have transformed our operations. We're now industry leaders in efficiency.",
        author: "James Patterson",
        role: "VP of Operations",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
      }
    },
  ];

  const impactMetrics = [
    {
      label: "Total Users Served",
      value: "50M+",
      description: "Across all enterprise platforms",
      icon: "users" as const,
      color: "bg-blue-500"
    },
    {
      label: "Transaction Volume",
      value: "1B+",
      description: "Processed annually",
      icon: "trending" as const,
      color: "bg-green-500"
    },
    {
      label: "Performance Gain",
      value: "300%",
      description: "Average improvement",
      icon: "zap" as const,
      color: "bg-purple-500"
    },
    {
      label: "Cost Savings",
      value: "$50M+",
      description: "Total client savings",
      icon: "target" as const,
      color: "bg-orange-500"
    },
  ];

  const testimonials = [
    {
      quote: "Working with this team transformed our entire digital infrastructure. Their expertise in enterprise architecture and commitment to security gave us confidence throughout the project.",
      author: "Sarah Chen",
      role: "CTO",
      company: "Fortune 500 Retailer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "The level of professionalism and technical depth is unmatched. They didn't just build a platform; they became strategic partners in our digital transformation journey.",
      author: "Michael Rodriguez",
      role: "Chief Security Officer",
      company: "International Bank",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "From compliance to scalability, every aspect was handled with precision. Our platform now serves millions of users without breaking a sweat.",
      author: "Dr. Emily Watson",
      role: "Chief Medical Information Officer",
      company: "National Hospital Network",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    },
  ];

  const processSteps = [
    {
      title: "Discovery & Strategic Planning",
      description: "Deep dive into your business objectives, technical requirements, compliance needs, and existing infrastructure. We create a comprehensive roadmap aligned with your enterprise goals.",
      duration: "2-4 weeks",
      icon: Target,
      details: [
        "Stakeholder interviews and requirements gathering",
        "Technical infrastructure audit",
        "Compliance and security assessment",
        "Risk analysis and mitigation planning",
        "Detailed project roadmap and timeline"
      ]
    },
    {
      title: "Architecture & Design",
      description: "Design scalable, secure, and resilient system architecture. Create detailed technical specifications, data models, and integration strategies.",
      duration: "3-6 weeks",
      icon: Server,
      details: [
        "System architecture design (microservices, cloud-native)",
        "Database schema and data flow modeling",
        "API design and integration planning",
        "Security architecture and compliance framework",
        "Performance and scalability planning"
      ]
    },
    {
      title: "Development & Integration",
      description: "Agile development with continuous integration. Build robust, tested, and documented code following enterprise best practices.",
      duration: "12-24 weeks",
      icon: Code,
      details: [
        "Sprint-based development with regular demos",
        "Continuous integration and automated testing",
        "Code reviews and quality assurance",
        "Third-party system integrations",
        "Comprehensive documentation"
      ]
    },
    {
      title: "Testing & Quality Assurance",
      description: "Rigorous testing across security, performance, and functionality. Ensure compliance with all regulatory requirements.",
      duration: "4-6 weeks",
      icon: Shield,
      details: [
        "Automated and manual testing",
        "Security penetration testing",
        "Load and performance testing",
        "Compliance validation",
        "User acceptance testing (UAT)"
      ]
    },
    {
      title: "Deployment & Migration",
      description: "Zero-downtime deployment with careful migration planning. Comprehensive monitoring and rollback strategies in place.",
      duration: "2-4 weeks",
      icon: Zap,
      details: [
        "Phased deployment strategy",
        "Data migration with validation",
        "Blue-green or canary deployments",
        "Real-time monitoring setup",
        "Rollback procedures and contingency plans"
      ]
    },
    {
      title: "Support & Optimization",
      description: "24/7 enterprise support with SLA guarantees. Continuous monitoring, optimization, and feature enhancements.",
      duration: "Ongoing",
      icon: Award,
      details: [
        "24/7 monitoring and incident response",
        "Regular performance optimization",
        "Security patches and updates",
        "Feature enhancements and scaling",
        "Quarterly business reviews"
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
    { name: "AWS", category: "Cloud", description: "Scalable cloud infrastructure with global reach" },
    { name: "Azure", category: "Cloud", description: "Enterprise-grade cloud services and AI" },
    { name: "GCP", category: "Cloud", description: "Google Cloud Platform for data and ML" },
    { name: "Kubernetes", category: "DevOps", description: "Container orchestration at scale" },
    { name: "Docker", category: "DevOps", description: "Containerization for consistency" },
    { name: "Terraform", category: "DevOps", description: "Infrastructure as code" },
    { name: "PostgreSQL", category: "Database", description: "Robust relational database" },
    { name: "MongoDB", category: "Database", description: "Flexible NoSQL database" },
    { name: "Redis", category: "Database", description: "In-memory data store for caching" },
    { name: "React", category: "Frontend", description: "Modern UI framework" },
    { name: "Node.js", category: "Backend", description: "Scalable JavaScript runtime" },
    { name: ".NET Core", category: "Backend", description: "Enterprise application framework" },
    { name: "Python", category: "Backend", description: "Versatile language for ML and APIs" },
    { name: "Kafka", category: "Integration", description: "Event streaming platform" },
    { name: "GraphQL", category: "Integration", description: "Efficient API query language" },
    { name: "Elasticsearch", category: "Search", description: "Powerful search and analytics" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <CursorTrail />
      <WorkBackButton />
      <WorkNav sections={navSections} />

      {/* Hero */}
      <CategoryHero
        title="Enterprise Solutions"
        subtitle="Custom Platforms Built for Global Scale"
        description="We architect and deliver mission-critical systems for the world's leading enterprises. From financial services to healthcare, our solutions handle millions of users with uncompromising security, performance, and reliability."
        stats={heroStats}
        icon={Globe}
        accentColor="bg-blue-500"
      />

      {/* Overview Section */}
      <section id="overview" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 font-heading">
              Enterprise-Grade Excellence
            </h2>
            <p className="text-xl text-brand-black/60 leading-relaxed">
              When failure is not an option, enterprises trust us to build systems that scale, secure, and perform under the most demanding conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Security First", description: "SOC 2, HIPAA, PCI-DSS compliant architectures with zero-trust security models" },
              { icon: TrendingUp, title: "Infinite Scale", description: "Auto-scaling infrastructure handling millions of concurrent users seamlessly" },
              { icon: Lock, title: "Compliance Ready", description: "Built-in compliance frameworks for regulated industries" },
              { icon: BarChart, title: "24/7 Support", description: "Enterprise SLA with dedicated support and incident response" },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-brand-muted/50 to-white border border-brand-black/5 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-blue-500" />
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
              Enterprise Success Stories
            </h2>
            <p className="text-xl text-brand-black/60">
              Real transformations, measurable impact
            </p>
          </div>
          <CaseStudyGrid caseStudies={caseStudies} accentColor="bg-blue-500" />
        </div>
      </section>

      {/* Impact Metrics */}
      <div id="impact">
        <ImpactMetrics metrics={impactMetrics} />
      </div>

      {/* Testimonials */}
      <div id="testimonials">
        <TestimonialCarousel testimonials={testimonials} />
      </div>

      {/* Process Timeline */}
      <div id="process">
        <ProcessTimeline steps={processSteps} />
      </div>

      {/* Tech Stack */}
      <div id="tech-stack">
        <TechShowcase technologies={technologies} />
      </div>

      {/* Final CTA */}
      <section id="cta" className="py-32 bg-gradient-to-br from-brand-black via-brand-black to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-heading">
              Ready to Scale Your Enterprise?
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light">
              Let's discuss how we can architect a solution that meets your unique enterprise requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full bg-white text-brand-black hover:bg-brand-primary hover:text-white transition-all duration-500 px-12 h-16 text-lg font-bold shadow-2xl">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/estimate">
                <Button size="lg" variant="outline" className="rounded-full border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-500 px-12 h-16 text-lg font-bold">
                  Get Estimate
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/40 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
