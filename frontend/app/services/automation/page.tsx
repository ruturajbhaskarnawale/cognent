
import { getServiceData, getRelatedServices } from "@/lib/services-data";
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
  title: "Custom Automation Solutions | Cognent - Workflow & Process Automation",
  description: "Eliminate repetitive tasks with bespoke automation solutions. Workflow orchestration, API integration, data pipelines, and custom scripts.",
  openGraph: {
    title: "Custom Automation Solutions | Cognent",
    description: "Automate manual processes and scale effortlessly with intelligent workflow automation.",
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

export default function AutomationPage() {
  const serviceData = getServiceData("automation");
  const relatedServices = getRelatedServices("automation");

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceBackButton />
      <ServiceNav sections={navSections} />
      
      <ServiceHero
        title={serviceData.title}
        description={serviceData.hero.description}
        icon="Bot"
        gradient={serviceData.hero.gradient}
        iconColor={serviceData.hero.iconColor}
      />

      <div id="overview">
        <ServiceOverview
          title={serviceData.overview.title}
          subtitle={serviceData.overview.subtitle}
          description={serviceData.overview.description}
          highlights={serviceData.overview.highlights}
          stats={serviceData.overview.stats}
        />
      </div>

      <div id="features">
        <ServiceFeatures
          title={serviceData.features.title}
          subtitle={serviceData.features.subtitle}
          description={serviceData.features.description}
          features={serviceData.features.items.map(f => ({ ...f, icon: f.icon as any }))}
        />
      </div>

      <div id="process">
        <ServiceProcess
          title={serviceData.process.title}
          subtitle={serviceData.process.subtitle}
          description={serviceData.process.description}
          steps={serviceData.process.steps.map(s => ({ ...s, icon: s.icon as any }))}
        />
      </div>

      <div id="use-cases">
        <ServiceUseCases
          title={serviceData.useCases.title}
          subtitle={serviceData.useCases.subtitle}
          description={serviceData.useCases.description}
          useCases={serviceData.useCases.items.map(u => ({ ...u, icon: u.icon as any }))}
        />
      </div>

      <div id="tech-stack">
        <ServiceTechStack
          title={serviceData.techStack.title}
          subtitle={serviceData.techStack.subtitle}
          description={serviceData.techStack.description}
          technologies={serviceData.techStack.technologies}
        />
      </div>

      <div id="benefits">
        <ServiceBenefits
          title={serviceData.benefits.title}
          subtitle={serviceData.benefits.subtitle}
          description={serviceData.benefits.description}
          benefits={serviceData.benefits.items.map(b => ({ ...b, icon: b.icon as any }))}
        />
      </div>

      <div id="faq">
        <ServiceFAQ
          title={serviceData.faq.title}
          subtitle={serviceData.faq.subtitle}
          faqs={serviceData.faq.items}
        />
      </div>

      <ServiceCTA
        title={serviceData.cta.title}
        description={serviceData.cta.description}
        variant={serviceData.cta.variant}
      />

      {relatedServices.length > 0 && (
        <RelatedServices
          services={relatedServices.map(service => ({
            title: service.title,
            description: service.shortDescription,
            icon: service.icon as any,
            href: `/services/${service.slug}`,
            color: service.hero.gradient
          }))}
        />
      )}
    </main>
  );
}
