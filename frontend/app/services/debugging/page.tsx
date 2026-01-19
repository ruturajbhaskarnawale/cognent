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
  title: "Technical Debugging Services | OddJobs - Expert Problem Solving",
  description: "Complex problem solving for legacy systems. Root cause analysis, performance profiling, and robust long-term fixes for production issues.",
  openGraph: {
    title: "Technical Debugging Services | OddJobs",
    description: "We identify root causes and implement robust, long-term fixes for your most challenging technical problems.",
  },
};

export default function DebuggingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero
        title="Technical Debugging"
        description="Solve your most challenging technical problems with expert debugging services. From production crashes to performance bottlenecks, we find root causes and deliver permanent fixes."
        icon="Wrench"
        gradient="bg-gradient-to-br from-teal-600 via-emerald-600 to-green-600"
        iconColor="bg-gradient-to-br from-teal-500 to-emerald-600"
      />

      <ServiceOverview
        title="Expert Problem Solving for Complex Systems"
        subtitle="We Fix What Others Can't"
        description={[
          "Technical issues can cripple your business—from mysterious production crashes to performance degradation that nobody can explain. Our debugging expertise goes beyond surface-level fixes to identify root causes and implement permanent solutions.",
          "We specialize in the hardest problems: legacy codebases, intermittent bugs, performance bottlenecks, memory leaks, and integration failures. Using systematic debugging methodologies, advanced profiling tools, and deep technical knowledge, we solve issues that have stumped other teams.",
          "Our approach combines forensic analysis with preventive measures. We don't just fix the immediate problem—we document our findings, improve monitoring, and implement safeguards to prevent recurrence."
        ]}
        highlights={[
          "Root cause analysis for production issues",
          "Performance profiling and optimization",
          "Memory leak detection and resolution",
          "Security vulnerability assessment",
          "Legacy code analysis and modernization",
          "Integration debugging across systems"
        ]}
        stats={[
          { label: "Average Resolution Time", value: "48hrs" },
          { label: "First-Time Fix Rate", value: "95%" },
          { label: "Recurring Issues", value: "<5%" },
          { label: "Client Satisfaction", value: "98%" }
        ]}
      />

      <ServiceFeatures
        title="Comprehensive Debugging Capabilities"
        subtitle="What We Debug"
        description="From application crashes to infrastructure issues, we handle the full spectrum of technical problems."
        features={[
          {
            title: "Root Cause Analysis",
            description: "Systematic investigation using logs, traces, and profiling to identify the true source of issues, not just symptoms.",
            icon: "Search",
            color: "bg-gradient-to-br from-teal-500 to-emerald-600"
          },
          {
            title: "Performance Profiling",
            description: "Identify bottlenecks in code, database queries, and infrastructure using advanced profiling and monitoring tools.",
            icon: "Target",
            color: "bg-gradient-to-br from-blue-500 to-cyan-600"
          },
          {
            title: "Security Analysis",
            description: "Detect and fix security vulnerabilities, from SQL injection to authentication bypasses and data leaks.",
            icon: "Shield",
            color: "bg-gradient-to-br from-purple-500 to-violet-600"
          },
          {
            title: "Legacy Code Debugging",
            description: "Navigate and fix issues in undocumented legacy systems, even without original developers available.",
            icon: "FileText",
            color: "bg-gradient-to-br from-orange-500 to-amber-600"
          },
          {
            title: "Integration Issues",
            description: "Debug complex integration problems across APIs, microservices, and third-party systems.",
            icon: "Code",
            color: "bg-gradient-to-br from-pink-500 to-rose-600"
          },
          {
            title: "Production Firefighting",
            description: "Rapid response to critical production issues with 24/7 availability for emergency debugging.",
            icon: "Wrench",
            color: "bg-gradient-to-br from-red-500 to-orange-600"
          }
        ]}
      />

      <ServiceProcess
        title="Our Debugging Methodology"
        subtitle="How We Work"
        description="A proven process for solving even the most elusive technical problems."
        steps={[
          {
            number: "01",
            title: "Reproduce & Document",
            description: "Reliably reproduce the issue and document all symptoms, error messages, and environmental factors.",
            icon: "Search"
          },
          {
            number: "02",
            title: "Analyze & Investigate",
            description: "Use logs, profilers, debuggers, and monitoring tools to gather data and form hypotheses.",
            icon: "Target"
          },
          {
            number: "03",
            title: "Isolate Root Cause",
            description: "Systematically eliminate possibilities until we identify the true root cause, not just symptoms.",
            icon: "Shield"
          },
          {
            number: "04",
            title: "Fix & Test",
            description: "Implement the fix, test thoroughly in staging, and verify the issue is resolved without side effects.",
            icon: "Code"
          },
          {
            number: "05",
            title: "Document & Prevent",
            description: "Document findings, improve monitoring, and implement safeguards to prevent recurrence.",
            icon: "FileText"
          }
        ]}
      />

      <ServiceUseCases
        title="Real-World Debugging Success Stories"
        subtitle="Use Cases"
        description="Examples of complex problems we've solved for clients."
        useCases={[
          {
            title: "Mysterious Production Crashes",
            description: "Identified and fixed a race condition causing intermittent crashes in a high-traffic e-commerce platform that only occurred under specific load patterns.",
            icon: "Wrench",
            industry: "E-commerce",
            result: "100% crash elimination, improved stability"
          },
          {
            title: "Database Performance Degradation",
            description: "Diagnosed slow queries and missing indexes causing 10-second page loads. Optimized queries and database schema for 50x improvement.",
            icon: "Target",
            industry: "SaaS",
            result: "200ms average response time, 50x faster"
          },
          {
            title: "Memory Leak in Legacy System",
            description: "Found and fixed memory leak in 10-year-old Java application that required server restarts every 48 hours.",
            icon: "Search",
            industry: "Finance",
            result: "Eliminated restarts, stable memory usage"
          },
          {
            title: "API Integration Failures",
            description: "Debugged complex OAuth flow issues causing random authentication failures between microservices.",
            icon: "Code",
            industry: "Healthcare",
            result: "99.9% authentication success rate"
          }
        ]}
      />

      <ServiceTechStack
        title="Debugging Tools & Technologies"
        subtitle="Our Toolkit"
        description="Industry-leading tools for debugging, profiling, and monitoring across all major platforms."
        technologies={[
          { name: "Chrome DevTools", category: "Browser" },
          { name: "VS Code Debugger", category: "IDE" },
          { name: "GDB", category: "Native" },
          { name: "New Relic", category: "APM" },
          { name: "Datadog", category: "APM" },
          { name: "Sentry", category: "Error Tracking" },
          { name: "LogRocket", category: "Session Replay" },
          { name: "Wireshark", category: "Network" },
          { name: "Python pdb", category: "Languages" },
          { name: "Node Inspector", category: "Languages" },
          { name: "Java VisualVM", category: "Languages" },
          { name: "SQL Profiler", category: "Database" }
        ]}
      />

      <ServiceBenefits
        title="Why Choose Our Debugging Services"
        subtitle="The Impact"
        description="Fast, permanent fixes that restore stability and performance."
        benefits={[
          {
            title: "Rapid Resolution",
            description: "Most issues resolved within 48 hours, with critical bugs fixed same-day.",
            icon: "Target",
            metric: "48hrs"
          },
          {
            title: "Permanent Fixes",
            description: "We solve root causes, not symptoms—ensuring issues don't return.",
            icon: "Shield",
            metric: "95%"
          },
          {
            title: "Knowledge Transfer",
            description: "Detailed documentation and team training to prevent future issues.",
            icon: "FileText",
            metric: "100%"
          },
          {
            title: "Cost Savings",
            description: "Avoid expensive downtime and reduce ongoing maintenance costs.",
            icon: "Target",
            metric: "70%"
          }
        ]}
      />

      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Technical Debugging"
        faqs={[
          {
            question: "How quickly can you respond to critical production issues?",
            answer: "For emergency debugging, we offer 24/7 availability with response times under 2 hours for critical issues. Most problems are diagnosed within 4-6 hours and resolved within 24-48 hours."
          },
          {
            question: "What if you can't reproduce the issue?",
            answer: "We use advanced monitoring, logging, and session replay tools to analyze issues that are hard to reproduce. We can also add instrumentation to capture more data when the issue occurs again."
          },
          {
            question: "Do you work with legacy codebases?",
            answer: "Yes! We specialize in debugging legacy systems, even without documentation. We reverse-engineer code, add logging, and systematically isolate issues."
          },
          {
            question: "Can you debug issues in production without downtime?",
            answer: "Absolutely. We use non-invasive debugging techniques, feature flags, and canary deployments to diagnose and fix issues without affecting users."
          },
          {
            question: "What happens after the fix?",
            answer: "We provide detailed documentation of the issue, root cause, and fix. We also recommend monitoring improvements and preventive measures to avoid similar issues."
          }
        ]}
      />

      <ServiceCTA
        title="Need Expert Debugging Help?"
        description="Don't let technical issues slow you down. Get rapid, expert debugging support for your critical problems."
        variant="gradient"
      />

      <RelatedServices
        services={[
          {
            title: "System Optimization",
            description: "Enhance existing platforms for speed, security, and reliability.",
            icon: "Target",
            href: "/services/optimization",
            color: "bg-gradient-to-br from-lime-500 to-green-600"
          },
          {
            title: "Custom Automation",
            description: "Automate workflows and eliminate manual bottlenecks.",
            icon: "Bot",
            href: "/services/automation",
            color: "bg-gradient-to-br from-blue-500 to-cyan-600"
          },
          {
            title: "End-to-End Guidance",
            description: "Strategic project management from concept to deployment.",
            icon: "Brain",
            href: "/services/consulting",
            color: "bg-gradient-to-br from-pink-500 to-rose-600"
          }
        ]}
      />
    </main>
  );
}
