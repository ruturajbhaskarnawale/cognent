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

export const metadata = {
  title: "AI & ML Solutions | OddJobs - Intelligent Automation & Machine Learning",
  description: "Transform your business with cutting-edge AI and machine learning solutions. LLM integration, predictive analytics, NLP, computer vision, and intelligent automation.",
  openGraph: {
    title: "AI & ML Solutions | OddJobs",
    description: "Leverage advanced artificial intelligence to automate decision-making, extract insights, and deliver intelligent experiences.",
  },
};

export default function AIIntegrationPage() {
  const serviceData = getServiceData("ai-integration");
  const relatedServices = getRelatedServices("ai-integration");

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero
        title={serviceData.title}
        description={serviceData.hero.description}
        icon="Brain"
        gradient={serviceData.hero.gradient}
        iconColor={serviceData.hero.iconColor}
      />

      <ServiceOverview
        title={serviceData.overview.title}
        subtitle={serviceData.overview.subtitle}
        description={serviceData.overview.description}
        highlights={serviceData.overview.highlights}
        stats={serviceData.overview.stats}
      />

      <ServiceFeatures
        title={serviceData.features.title}
        subtitle={serviceData.features.subtitle}
        description={serviceData.features.description}
        features={serviceData.features.items}
      />

      <ServiceProcess
        title={serviceData.process.title}
        subtitle={serviceData.process.subtitle}
        description={serviceData.process.description}
        steps={serviceData.process.steps}
      />

      <ServiceUseCases
        title={serviceData.useCases.title}
        subtitle={serviceData.useCases.subtitle}
        description={serviceData.useCases.description}
        useCases={serviceData.useCases.items}
      />

      <ServiceTechStack
        title={serviceData.techStack.title}
        subtitle={serviceData.techStack.subtitle}
        description={serviceData.techStack.description}
        technologies={serviceData.techStack.technologies}
      />

      <ServiceBenefits
        title={serviceData.benefits.title}
        subtitle={serviceData.benefits.subtitle}
        description={serviceData.benefits.description}
        benefits={serviceData.benefits.items}
      />

      <ServiceFAQ
        title={serviceData.faq.title}
        subtitle={serviceData.faq.subtitle}
        faqs={serviceData.faq.items}
      />

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
