
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
  title: "Web & App Development | OddJobs - Custom Software Solutions",
  description: "Enterprise-grade web and mobile applications built for scale. Modern stacks like Next.js, React, React Native, and Python for SaaS, e-commerce, and custom platforms.",
  openGraph: {
    title: "Web & App Development | OddJobs",
    description: "Build scalable, modern applications with expert full-stack development services.",
  },
};

export default function DevelopmentPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero
        title="Web & App Development"
        description="Build modern, scalable applications that users love. From enterprise web platforms to mobile apps, we deliver production-ready software with clean code and exceptional UX."
        icon="Code"
        gradient="bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600"
        iconColor="bg-gradient-to-br from-orange-500 to-amber-600"
      />

      <ServiceOverview
        title="Full-Stack Development Excellence"
        subtitle="Built for Scale"
        description={[
          "Your software is the face of your business. Whether it's a customer-facing web app, internal tool, or mobile application, quality matters. We build enterprise-grade applications with modern architectures, clean code, and exceptional user experiences.",
          "Our development expertise spans the full stack—from responsive frontends in React and Next.js to robust backends in Python and Node.js. We specialize in SaaS platforms, e-commerce solutions, progressive web apps, and mobile applications that scale to millions of users.",
          "We don't just write code—we build products. Our process includes UX design, architecture planning, iterative development, comprehensive testing, and ongoing support. The result is software that's maintainable, performant, and delightful to use."
        ]}
        highlights={[
          "Enterprise web applications and SaaS platforms",
          "Progressive web apps (PWA) with offline support",
          "Native and cross-platform mobile apps",
          "E-commerce platforms and marketplaces",
          "Custom CRM and internal tools",
          "API development and microservices"
        ]}
        stats={[
          { label: "Apps Delivered", value: "150+" },
          { label: "Average Uptime", value: "99.9%" },
          { label: "User Satisfaction", value: "4.8/5" },
          { label: "Code Quality Score", value: "A+" }
        ]}
      />

      <ServiceFeatures
        title="Comprehensive Development Services"
        subtitle="What We Build"
        description="From concept to deployment, we handle every aspect of application development."
        features={[
          {
            title: "Web Applications",
            description: "Responsive, fast, and accessible web apps built with Next.js, React, and modern frontend frameworks.",
            icon: "Globe",
            color: "bg-gradient-to-br from-orange-500 to-amber-600"
          },
          {
            title: "Mobile Apps",
            description: "Native iOS/Android apps or cross-platform solutions with React Native and Flutter for consistent experiences.",
            icon: "Smartphone",
            color: "bg-gradient-to-br from-blue-500 to-cyan-600"
          },
          {
            title: "E-commerce Platforms",
            description: "Full-featured online stores with payment processing, inventory management, and analytics.",
            icon: "ShoppingCart",
            color: "bg-gradient-to-br from-teal-500 to-emerald-600"
          },
          {
            title: "API Development",
            description: "RESTful and GraphQL APIs with comprehensive documentation, authentication, and rate limiting.",
            icon: "Database",
            color: "bg-gradient-to-br from-purple-500 to-violet-600"
          },
          {
            title: "Real-time Applications",
            description: "Build collaborative tools, chat apps, and dashboards with WebSockets and real-time data sync.",
            icon: "Zap",
            color: "bg-gradient-to-br from-pink-500 to-rose-600"
          },
          {
            title: "Secure Applications",
            description: "Enterprise-grade security with authentication, authorization, encryption, and compliance.",
            icon: "Shield",
            color: "bg-gradient-to-br from-indigo-500 to-purple-600"
          }
        ]}
      />

      <ServiceProcess
        title="Our Development Process"
        subtitle="How We Build"
        description="An agile, iterative approach that delivers quality software on time."
        steps={[
          {
            number: "01",
            title: "Requirements & Design",
            description: "Gather requirements, create wireframes, design UI/UX, and plan the technical architecture.",
            icon: "Compass"
          },
          {
            number: "02",
            title: "Development Sprints",
            description: "Build features iteratively in 2-week sprints with regular demos and feedback loops.",
            icon: "Code"
          },
          {
            number: "03",
            title: "Testing & QA",
            description: "Comprehensive testing including unit tests, integration tests, and user acceptance testing.",
            icon: "Shield"
          },
          {
            number: "04",
            title: "Deployment & Launch",
            description: "Deploy to production with CI/CD pipelines, monitoring, and rollback capabilities.",
            icon: "Zap"
          },
          {
            number: "05",
            title: "Support & Iteration",
            description: "Ongoing maintenance, bug fixes, feature additions, and performance optimization.",
            icon: "Database"
          }
        ]}
      />

      <ServiceUseCases
        title="Applications We've Built"
        subtitle="Use Cases"
        description="Real projects across industries and use cases."
        useCases={[
          {
            title: "SaaS Analytics Platform",
            description: "Built a multi-tenant analytics platform with real-time dashboards, custom reports, and API integrations serving 50K+ users.",
            icon: "Globe",
            industry: "SaaS",
            result: "50K users, 99.9% uptime, 4.7/5 rating"
          },
          {
            title: "E-commerce Marketplace",
            description: "Developed a two-sided marketplace with vendor management, payment processing, and order fulfillment automation.",
            icon: "ShoppingCart",
            industry: "E-commerce",
            result: "$2M GMV in first year"
          },
          {
            title: "Mobile Fitness App",
            description: "Created cross-platform fitness app with workout tracking, social features, and wearable integrations.",
            icon: "Smartphone",
            industry: "Health & Fitness",
            result: "100K downloads, 4.6 App Store rating"
          },
          {
            title: "Internal CRM System",
            description: "Built custom CRM for enterprise client with complex workflows, reporting, and third-party integrations.",
            icon: "Database",
            industry: "Enterprise",
            result: "40% productivity increase"
          }
        ]}
      />

      <ServiceTechStack
        title="Our Technology Stack"
        subtitle="Modern Tools"
        description="We use cutting-edge technologies that are proven, maintainable, and scalable."
        technologies={[
          { name: "Next.js", category: "Frontend" },
          { name: "React", category: "Frontend" },
          { name: "TypeScript", category: "Frontend" },
          { name: "Tailwind CSS", category: "Frontend" },
          { name: "React Native", category: "Mobile" },
          { name: "Flutter", category: "Mobile" },
          { name: "Node.js", category: "Backend" },
          { name: "Python", category: "Backend" },
          { name: "FastAPI", category: "Backend" },
          { name: "PostgreSQL", category: "Databases" },
          { name: "MongoDB", category: "Databases" },
          { name: "Redis", category: "Databases" },
          { name: "AWS", category: "Infrastructure" },
          { name: "Vercel", category: "Infrastructure" },
          { name: "Docker", category: "Infrastructure" }
        ]}
      />

      <ServiceBenefits
        title="Why Choose Our Development Services"
        subtitle="The Difference"
        description="Quality code, modern architecture, and exceptional user experiences."
        benefits={[
          {
            title: "Modern Stack",
            description: "Built with the latest technologies that are performant, maintainable, and future-proof.",
            icon: "Code",
            metric: "100%"
          },
          {
            title: "Scalable Architecture",
            description: "Designed to handle growth from MVP to millions of users without rewrites.",
            icon: "Database",
            metric: "10x"
          },
          {
            title: "Fast Development",
            description: "Agile process with 2-week sprints delivers working software quickly.",
            icon: "Zap",
            metric: "2 weeks"
          },
          {
            title: "Quality Code",
            description: "Clean, tested, documented code that's easy to maintain and extend.",
            icon: "Shield",
            metric: "A+"
          }
        ]}
      />

      <ServiceFAQ
        title="Frequently Asked Questions"
        subtitle="Web & App Development"
        faqs={[
          {
            question: "How long does it take to build a custom application?",
            answer: "Timeline varies by complexity. Simple MVPs can be built in 6-8 weeks, while full-featured applications typically take 3-6 months. We provide detailed estimates after requirements gathering."
          },
          {
            question: "Do you provide UI/UX design services?",
            answer: "Yes! We offer complete design services including wireframing, UI design, and UX optimization. We can also work with your existing designs if you have them."
          },
          {
            question: "Can you build both web and mobile versions?",
            answer: "Absolutely. We often build responsive web apps that work on mobile, or create dedicated mobile apps using React Native for iOS and Android simultaneously."
          },
          {
            question: "What happens after the app is launched?",
            answer: "We provide ongoing support including bug fixes, feature additions, performance monitoring, and infrastructure maintenance. We offer flexible support packages based on your needs."
          },
          {
            question: "How do you ensure code quality?",
            answer: "We use code reviews, automated testing, linting, type checking with TypeScript, and follow industry best practices. All code is version controlled and documented."
          }
        ]}
      />

      <ServiceCTA
        title="Ready to Build Your Application?"
        description="Let's turn your idea into reality. Get a free consultation and project estimate."
        variant="gradient"
      />

      <RelatedServices
        services={[
          {
            title: "AI & ML Solutions",
            description: "Add intelligent features with AI and machine learning integration.",
            icon: "Brain",
            href: "/services/ai-integration",
            color: "bg-gradient-to-br from-purple-500 to-violet-600"
          },
          {
            title: "Custom Automation",
            description: "Automate workflows and business processes for efficiency.",
            icon: "Bot",
            href: "/services/automation",
            color: "bg-gradient-to-br from-blue-500 to-cyan-600"
          },
          {
            title: "System Optimization",
            description: "Enhance performance, security, and reliability of existing apps.",
            icon: "Zap",
            href: "/services/optimization",
            color: "bg-gradient-to-br from-lime-500 to-green-600"
          }
        ]}
      />
    </main>
  );
}
