
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
import { ServiceNav } from "@/components/services/service-nav";
import { ServiceBackButton } from "@/components/services/service-back-button";

export const metadata = {
  title: "Technical Consulting & Guidance | OddJobs - Strategic Technology Advisory",
  description: "End-to-end technical guidance from concept to deployment. Architecture design, stack selection, project roadmapping, and expert advisory services.",
  openGraph: {
    title: "Technical Consulting & Guidance | OddJobs",
    description: "Strategic project management and technical advisory to help you make the right technology decisions.",
  },
};

const navSections = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "process", label: "Process" },
  { id: "use-cases", label: "Use Cases" },
  { id: "tech-stack", label: "Stack" },
  { id: "benefits", label: "Benefits" },
  { id: "faq", label: "FAQ" },
];

export default function ConsultingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceBackButton />
      <ServiceNav sections={navSections} />
      
      <ServiceHero
        title="End-to-End Guidance"
        description="Navigate complex technical decisions with confidence. From architecture design to technology selection, we provide strategic guidance that sets your projects up for success."
        icon="Compass"
        gradient="bg-gradient-to-br from-pink-600 via-rose-600 to-red-600"
        iconColor="bg-gradient-to-br from-pink-500 to-rose-600"
      />

      <div id="overview">
        <ServiceOverview
          title="Strategic Technical Leadership"
          subtitle="Your Technology Partner"
          description={[
            "Building software is complex—choosing the right architecture, selecting the optimal tech stack, and planning for scale requires deep expertise. Our consulting services provide the strategic guidance you need to make confident technical decisions.",
            "We work alongside your team as trusted advisors, bringing decades of combined experience across industries and technologies. Whether you're starting a greenfield project, modernizing legacy systems, or scaling an existing platform, we help you navigate technical challenges and avoid costly mistakes.",
            "Our consulting goes beyond recommendations—we provide hands-on support, code reviews, architecture diagrams, and detailed roadmaps. We stay engaged throughout your project to ensure successful execution."
          ]}
          highlights={[
            "Technical architecture design and review",
            "Technology stack selection and evaluation",
            "Project roadmap planning and estimation",
            "Team augmentation and mentorship",
            "Code reviews and quality audits",
            "Strategic technical advisory"
          ]}
          stats={[
            { label: "Projects Guided", value: "100+" },
            { label: "Client Success Rate", value: "98%" },
            { label: "Average Time Saved", value: "40%" },
            { label: "Cost Overrun Prevention", value: "60%" }
          ]}
        />
      </div>

      <div id="features">
        <ServiceFeatures
          title="Comprehensive Consulting Services"
          subtitle="How We Help"
          description="From strategy to execution, we provide the expertise you need at every stage."
          features={[
            {
              title: "Architecture Design",
              description: "Design scalable, maintainable system architectures that align with your business goals and technical requirements.",
              icon: "Lightbulb",
              color: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              title: "Technology Selection",
              description: "Choose the right tools, frameworks, and platforms based on your specific needs, team skills, and long-term goals.",
              icon: "Target",
              color: "bg-gradient-to-br from-purple-500 to-violet-600"
            },
            {
              title: "Project Roadmapping",
              description: "Create detailed project plans with realistic timelines, resource estimates, and risk mitigation strategies.",
              icon: "FileText",
              color: "bg-gradient-to-br from-blue-500 to-cyan-600"
            },
            {
              title: "Team Augmentation",
              description: "Fill skill gaps with experienced engineers who integrate seamlessly with your existing team.",
              icon: "Users",
              color: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              title: "Code Reviews & Audits",
              description: "Comprehensive code quality assessments with actionable recommendations for improvement.",
              icon: "Search",
              color: "bg-gradient-to-br from-orange-500 to-amber-600"
            },
            {
              title: "Technical Due Diligence",
              description: "Evaluate technical assets for acquisitions, investments, or partnerships with detailed reports.",
              icon: "Shield",
              color: "bg-gradient-to-br from-indigo-500 to-purple-600"
            }
          ]}
        />
      </div>

      <div id="process">
        <ServiceProcess
          title="Our Consulting Approach"
          subtitle="How We Work"
          description="A collaborative process that delivers actionable insights and measurable results."
          steps={[
            {
              number: "01",
              title: "Discovery & Assessment",
              description: "Understand your business goals, technical challenges, team capabilities, and constraints through workshops and interviews.",
              icon: "Search"
            },
            {
              number: "02",
              title: "Strategy Development",
              description: "Develop comprehensive technical strategy with architecture diagrams, technology recommendations, and roadmaps.",
              icon: "Lightbulb"
            },
            {
              number: "03",
              title: "Planning & Estimation",
              description: "Create detailed project plans with realistic timelines, resource requirements, and risk assessments.",
              icon: "FileText"
            },
            {
              number: "04",
              title: "Execution Support",
              description: "Provide hands-on guidance during implementation with code reviews, pair programming, and technical mentorship.",
              icon: "Users"
            },
            {
              number: "05",
              title: "Review & Handover",
              description: "Conduct final reviews, document decisions, and ensure your team is equipped to maintain and evolve the system.",
              icon: "Target"
            }
          ]}
        />
      </div>

      <div id="use-cases">
        <ServiceUseCases
          title="Consulting Success Stories"
          subtitle="Use Cases"
          description="Real examples of how our guidance has helped clients succeed."
          useCases={[
            {
              title: "Greenfield SaaS Architecture",
              description: "Designed scalable multi-tenant architecture for a new SaaS platform, selecting optimal tech stack and planning phased rollout.",
              icon: "Lightbulb",
              industry: "SaaS Startup",
              result: "Launched in 4 months, scaled to 10K users"
            },
            {
              title: "Legacy System Modernization",
              description: "Created migration roadmap for 15-year-old monolith to microservices, minimizing risk and enabling incremental migration.",
              icon: "FileText",
              industry: "Enterprise",
              result: "Zero downtime migration, 3x performance"
            },
            {
              title: "Technical Due Diligence",
              description: "Evaluated technical assets for $5M acquisition, identifying risks and opportunities that informed deal structure.",
              icon: "Shield",
              industry: "Private Equity",
              result: "Prevented $1M+ in hidden costs"
            },
            {
              title: "Team Scaling Strategy",
              description: "Helped fast-growing startup scale engineering team from 5 to 30 while maintaining code quality and velocity.",
              icon: "Users",
              industry: "Tech Startup",
              result: "3x team size, maintained quality"
            }
          ]}
        />
      </div>

      <div id="tech-stack">
        <ServiceTechStack
          title="Technology Expertise"
          subtitle="Our Knowledge Base"
          description="Deep expertise across modern and legacy technology stacks."
          technologies={[
            { name: "AWS", category: "Cloud Platforms" },
            { name: "Azure", category: "Cloud Platforms" },
            { name: "Google Cloud", category: "Cloud Platforms" },
            { name: "Next.js", category: "Frontend" },
            { name: "React", category: "Frontend" },
            { name: "Vue.js", category: "Frontend" },
            { name: "Node.js", category: "Backend" },
            { name: "Python", category: "Backend" },
            { name: "Go", category: "Backend" },
            { name: "PostgreSQL", category: "Databases" },
            { name: "MongoDB", category: "Databases" },
            { name: "Redis", category: "Databases" }
          ]}
        />
      </div>

      <div id="benefits">
        <ServiceBenefits
          title="Why Choose Our Consulting"
          subtitle="The Value"
          description="Expert guidance that accelerates success and prevents costly mistakes."
          benefits={[
            {
              title: "Faster Time to Market",
              description: "Avoid analysis paralysis and move forward with confidence in your technical decisions.",
              icon: "Target",
              metric: "40%"
            },
            {
              title: "Risk Mitigation",
              description: "Identify and address potential issues before they become expensive problems.",
              icon: "Shield",
              metric: "60%"
            },
            {
              title: "Cost Optimization",
              description: "Choose cost-effective solutions and avoid over-engineering or under-planning.",
              icon: "Target",
              metric: "50%"
            },
            {
              title: "Knowledge Transfer",
              description: "Your team gains expertise and best practices that last beyond the engagement.",
              icon: "Users",
              metric: "100%"
            }
          ]}
        />
      </div>

      <div id="faq">
        <ServiceFAQ
          title="Frequently Asked Questions"
          subtitle="Technical Consulting"
          faqs={[
            {
              question: "How do consulting engagements typically work?",
              answer: "We offer flexible engagement models from hourly advisory to full project partnerships. Most engagements start with a discovery phase (1-2 weeks) followed by ongoing advisory or hands-on support as needed."
            },
            {
              question: "Do you work with existing teams or replace them?",
              answer: "We work alongside your existing team, not replace them. Our goal is to augment your capabilities, transfer knowledge, and empower your team to succeed independently."
            },
            {
              question: "What if we're not sure what we need?",
              answer: "That's exactly when consulting helps most! We start with a discovery phase to understand your situation and recommend the best path forward, whether that's architecture design, team augmentation, or something else."
            },
            {
              question: "Can you help with technology selection for a new project?",
              answer: "Absolutely. We evaluate your requirements, team skills, budget, and timeline to recommend the optimal tech stack. We consider factors like community support, scalability, and long-term maintenance."
            },
            {
              question: "Do you provide ongoing support after the initial engagement?",
              answer: "Yes! Many clients retain us for ongoing advisory, code reviews, or periodic check-ins. We're here to support you as your needs evolve."
            }
          ]}
        />
      </div>

      <ServiceCTA
        title="Ready for Expert Technical Guidance?"
        description="Let's discuss your project and how our expertise can help you succeed. Schedule a free consultation."
        variant="gradient"
      />

      <RelatedServices
        services={[
          {
            title: "Web & App Development",
            description: "Enterprise-grade applications built for scale with modern stacks.",
            icon: "Code",
            href: "/services/development",
            color: "bg-gradient-to-br from-orange-500 to-amber-600"
          },
          {
            title: "AI & ML Solutions",
            description: "Intelligent automation powered by cutting-edge AI and machine learning.",
            icon: "Brain",
            href: "/services/ai-integration",
            color: "bg-gradient-to-br from-purple-500 to-violet-600"
          },
          {
            title: "Custom Automation",
            description: "Bespoke automation tools to eliminate manual bottlenecks.",
            icon: "Bot",
            href: "/services/automation",
            color: "bg-gradient-to-br from-blue-500 to-cyan-600"
          }
        ]}
      />
    </main>
  );
}
