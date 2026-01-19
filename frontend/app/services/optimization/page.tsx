
import { ServiceHero } from "@/components/services/service-hero";
import { ServiceOverview } from "@/components/services/service-overview";
import { ServiceFeatures } from "@/components/services/service-features";
import { ServiceProcess } from "@/components/services/service-process";
import { ServiceUseCases } from "@/components/services/service-use-cases";
import { ServiceTechStack } from "@/components/services/service-tech-stack";
import { ServiceBenefits } from "@/components/services/service-benefits";
import { ServiceCTA } from "@/components/services/service-cta";
import { ServiceFAQ } from "@/components/services/service-faq";
import { RelatedServices } from "@/components/services/related-services";


export const metadata = {
  title: "System Optimization Services | OddJobs - Performance & Security Enhancement",
  description: "Enhance existing platforms for speed, security, and reliability. Performance tuning, database optimization, caching strategies, and infrastructure improvements.",
  openGraph: {
    title: "System Optimization Services | OddJobs",
    description: "Make your applications faster, more secure, and more reliable with expert optimization services.",
  },
};

export default function OptimizationPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero
        title="System Optimization"
        description="Transform slow, expensive, or unreliable systems into high-performance platforms. We optimize every layer—from code to infrastructure—for speed, security, and cost efficiency."
        icon="TrendingUp"
        gradient="bg-gradient-to-br from-lime-600 via-green-600 to-emerald-600"
        iconColor="bg-gradient-to-br from-lime-500 to-green-600"
      />

      <ServiceOverview
        title="Performance & Efficiency at Every Layer"
        subtitle="Faster, Cheaper, Better"
        description={[
          "Slow applications frustrate users and cost money. Whether it's sluggish page loads, expensive cloud bills, or unreliable performance, optimization can transform your system's efficiency and user experience.",
          "Our optimization services address performance at every level: frontend rendering, backend processing, database queries, caching strategies, network latency, and infrastructure costs. We use profiling tools, load testing, and systematic analysis to identify bottlenecks and implement targeted improvements.",
          "The results speak for themselves: 3-10x faster load times, 30-70% cost reductions, and dramatically improved reliability. We don't just make things faster—we make them sustainably efficient with monitoring and ongoing optimization."
        ]}
        highlights={[
          "Performance profiling and bottleneck identification",
          "Database query optimization and indexing",
          "Caching strategies and CDN implementation",
          "Code refactoring for efficiency",
          "Infrastructure cost optimization",
          "Security hardening and vulnerability fixes"
        ]}
        stats={[
          { label: "Average Speed Improvement", value: "5x" },
          { label: "Cost Reduction", value: "50%" },
          { label: "Uptime Improvement", value: "99.9%" },
          { label: "User Satisfaction Increase", value: "40%" }
        ]}
      />

      <ServiceFeatures
        title="Comprehensive Optimization Services"
        subtitle="What We Optimize"
        description="From frontend to infrastructure, we optimize every component of your system."
        features={[
          {
            title: "Performance Tuning",
            description: "Identify and eliminate bottlenecks in code, rendering, and processing using advanced profiling tools.",
            icon: "Gauge",
            color: "bg-gradient-to-br from-lime-500 to-green-600"
          },
          {
            title: "Database Optimization",
            description: "Optimize queries, add indexes, refactor schemas, and implement query caching for faster data access.",
            icon: "Database",
            color: "bg-gradient-to-br from-blue-500 to-cyan-600"
          },
          {
            title: "Caching Strategies",
            description: "Implement multi-layer caching with Redis, CDNs, and application-level caching to reduce load times.",
            icon: "Zap",
            color: "bg-gradient-to-br from-purple-500 to-violet-600"
          },
          {
            title: "Security Hardening",
            description: "Fix vulnerabilities, implement security best practices, and ensure compliance with industry standards.",
            icon: "Shield",
            color: "bg-gradient-to-br from-teal-500 to-emerald-600"
          },
          {
            title: "Infrastructure Optimization",
            description: "Right-size cloud resources, implement auto-scaling, and optimize costs without sacrificing performance.",
            icon: "Cloud",
            color: "bg-gradient-to-br from-orange-500 to-amber-600"
          },
          {
            title: "Code Refactoring",
            description: "Improve code quality, reduce technical debt, and refactor for better performance and maintainability.",
            icon: "Target",
            color: "bg-gradient-to-br from-pink-500 to-rose-600"
          }
        ]}
      />

      <ServiceProcess
        title="Our Optimization Process"
        subtitle="How We Work"
        description="A data-driven approach to identifying and fixing performance issues."
        steps={[
          {
            number: "01",
            title: "Audit & Benchmark",
            description: "Comprehensive performance audit with profiling, load testing, and baseline measurements across all layers.",
            icon: "Target"
          },
          {
            number: "02",
            title: "Identify Bottlenecks",
            description: "Analyze data to pinpoint specific bottlenecks—slow queries, inefficient code, infrastructure issues, etc.",
            icon: "Gauge"
          },
          {
            number: "03",
            title: "Optimize & Refactor",
            description: "Implement targeted optimizations with measurable improvements at each step.",
            icon: "Zap"
          },
          {
            number: "04",
            title: "Test & Validate",
            description: "Load test optimizations to ensure improvements under real-world conditions without regressions.",
            icon: "Shield"
          },
          {
            number: "05",
            title: "Monitor & Iterate",
            description: "Set up monitoring dashboards and alerts to track performance over time and catch regressions early.",
            icon: "Database"
          }
        ]}
      />

      <ServiceUseCases
        title="Optimization Success Stories"
        subtitle="Use Cases"
        description="Real examples of dramatic performance and cost improvements."
        useCases={[
          {
            title: "E-commerce Page Load Optimization",
            description: "Reduced page load time from 8 seconds to 1.2 seconds through code splitting, image optimization, and CDN implementation.",
            icon: "Zap",
            industry: "E-commerce",
            result: "85% faster loads, 25% conversion increase"
          },
          {
            title: "Database Query Optimization",
            description: "Optimized slow database queries and added strategic indexes, reducing average query time from 3s to 50ms.",
            icon: "Database",
            industry: "SaaS",
            result: "60x faster queries, better UX"
          },
          {
            title: "Cloud Cost Reduction",
            description: "Right-sized AWS infrastructure, implemented auto-scaling, and optimized resource usage to cut costs by 65%.",
            icon: "Cloud",
            industry: "Startup",
            result: "$15K monthly savings, same performance"
          },
          {
            title: "API Performance Tuning",
            description: "Implemented caching, optimized algorithms, and added connection pooling to handle 10x more requests.",
            icon: "Gauge",
            industry: "API Platform",
            result: "10x throughput, 99.9% uptime"
          }
        ]}
      />

      <ServiceTechStack
        title="Optimization Tools & Technologies"
        subtitle="Our Toolkit"
        description="Industry-leading tools for profiling, monitoring, and optimizing systems."
        technologies={[
          { name: "Lighthouse", category: "Performance" },
          { name: "WebPageTest", category: "Performance" },
          { name: "New Relic", category: "APM" },
          { name: "Datadog", category: "APM" },
          { name: "Redis", category: "Caching" },
          { name: "Cloudflare", category: "CDN" },
          { name: "AWS CloudWatch", category: "Monitoring" },
          { name: "Grafana", category: "Monitoring" },
          { name: "PostgreSQL EXPLAIN", category: "Database" },
          { name: "Query Analyzer", category: "Database" },
          { name: "Docker", category: "Infrastructure" },
          { name: "Kubernetes", category: "Infrastructure" }
        ]}
      />

      <ServiceBenefits
        title="Benefits of Optimization"
        subtitle="The Impact"
        description="Measurable improvements in speed, cost, and user satisfaction."
        benefits={[
          {
            title: "Faster Performance",
            description: "Dramatically reduce load times and improve responsiveness for better user experience.",
            icon: "Zap",
            metric: "5x"
          },
          {
            title: "Cost Savings",
            description: "Reduce cloud costs through efficient resource usage and right-sizing.",
            icon: "Cloud",
            metric: "50%"
          },
          {
            title: "Better Reliability",
            description: "Improve uptime and stability through optimization and monitoring.",
            icon: "Shield",
            metric: "99.9%"
          },
          {
            title: "Higher Conversions",
            description: "Faster sites convert better—every second of improvement increases conversions.",
            icon: TrendingUp,
            metric: "25%"
          }
        ]}
      />

      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="System Optimization"
        faqs={[
          {
            question: "How much faster can you make my application?",
            answer: "Results vary, but we typically achieve 3-10x improvements in load times and query performance. The exact improvement depends on current bottlenecks and optimization opportunities."
          },
          {
            question: "Will optimization require code changes?",
            answer: "Some optimizations (like caching and infrastructure) require minimal code changes, while others (like query optimization or refactoring) may require more significant updates. We always prioritize high-impact, low-risk changes first."
          },
          {
            question: "How do you ensure optimizations don't break existing functionality?",
            answer: "We use comprehensive testing, staged rollouts, and monitoring to ensure optimizations improve performance without introducing bugs. All changes are benchmarked and validated."
          },
          {
            question: "Can you optimize without downtime?",
            answer: "Yes! Most optimizations can be deployed gradually with zero downtime using blue-green deployments, feature flags, and canary releases."
          },
          {
            question: "How long does optimization take?",
            answer: "Initial optimizations typically take 2-4 weeks, with ongoing monitoring and iteration. We prioritize quick wins first, then tackle more complex optimizations."
          }
        ]}
      />

      <ServiceCTA
        title="Ready to Optimize Your System?"
        description="Let's identify your performance bottlenecks and create an optimization roadmap. Get a free performance audit."
        variant="gradient"
      />

      <RelatedServices
        services={[
          {
            title: "Technical Debugging",
            description: "Expert problem solving for complex technical issues and bugs.",
            icon: "Wrench",
            href: "/services/debugging",
            color: "bg-gradient-to-br from-teal-500 to-emerald-600"
          },
          {
            title: "Web & App Development",
            description: "Build new applications with performance and scalability built-in.",
            icon: "Code",
            href: "/services/development",
            color: "bg-gradient-to-br from-orange-500 to-amber-600"
          },
          {
            title: "AI & ML Solutions",
            description: "Add intelligent features and automation to your optimized platform.",
            icon: "Brain",
            href: "/services/ai-integration",
            color: "bg-gradient-to-br from-purple-500 to-violet-600"
          }
        ]}
      />
    </main>
  );
}
