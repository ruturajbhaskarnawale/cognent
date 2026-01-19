"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";

interface ServiceCTAProps {
  title: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: "default" | "gradient" | "minimal";
}

export function ServiceCTA({ 
  title, 
  description, 
  primaryCTA = { text: "Get Started", href: "/estimate" },
  secondaryCTA = { text: "Contact Us", href: "/contact" },
  variant = "default"
}: ServiceCTAProps) {
  const backgrounds = {
    default: "bg-brand-muted/50",
    gradient: "bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent",
    minimal: "bg-white border-2 border-brand-black/10"
  };

  const textColors = {
    default: "text-brand-black",
    gradient: "text-white",
    minimal: "text-brand-black"
  };

  const descriptionColors = {
    default: "text-brand-black/60",
    gradient: "text-white/90",
    minimal: "text-brand-black/60"
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal width="100%">
          <div className={`${backgrounds[variant]} rounded-3xl p-12 md:p-16 lg:p-20 text-center relative overflow-hidden`}>
            {/* Background Pattern for gradient variant */}
            {variant === "gradient" && (
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
              </div>
            )}

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className={`text-4xl md:text-5xl font-bold ${textColors[variant]} mb-6 font-heading`}>
                {title}
              </h2>
              <p className={`text-xl ${descriptionColors[variant]} font-light leading-relaxed mb-10`}>
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href={primaryCTA.href}>
                  <Button 
                    size="lg" 
                    className={`rounded-full px-8 h-14 text-base group ${
                      variant === "gradient" 
                        ? "bg-white text-brand-primary hover:bg-white/90" 
                        : "bg-brand-primary text-white hover:bg-brand-primary/90"
                    }`}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    {primaryCTA.text}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Link href={secondaryCTA.href}>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className={`rounded-full px-8 h-14 text-base ${
                      variant === "gradient"
                        ? "border-white/30 text-white hover:bg-white/10"
                        : "border-brand-black/20 text-brand-black hover:bg-brand-muted"
                    }`}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {secondaryCTA.text}
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className={`mt-12 pt-8 border-t ${variant === "gradient" ? "border-white/20" : "border-brand-black/10"}`}>
                <div className="flex flex-wrap justify-center gap-8 text-sm ${descriptionColors[variant]}">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No Obligation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Quick Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
