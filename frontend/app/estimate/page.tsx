"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Users,
  Clock,
  TrendingUp,
  Code,
  Smartphone,
  Globe,
  Database,
  Shield,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projectTypes = [
  { 
    id: "mvp", 
    name: "MVP / Startup", 
    icon: Rocket,
    description: "Launch your idea fast",
    basePrice: 15000,
    timeline: "6-8 weeks",
    color: "from-purple-500 to-pink-500"
  },
  { 
    id: "web", 
    name: "Web Application", 
    icon: Globe,
    description: "Custom web platform",
    basePrice: 30000,
    timeline: "10-14 weeks",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    id: "mobile", 
    name: "Mobile App", 
    icon: Smartphone,
    description: "iOS & Android apps",
    basePrice: 40000,
    timeline: "12-16 weeks",
    color: "from-green-500 to-emerald-500"
  },
  { 
    id: "enterprise", 
    name: "Enterprise Solution", 
    icon: Shield,
    description: "Mission-critical systems",
    basePrice: 75000,
    timeline: "16-24 weeks",
    color: "from-orange-500 to-red-500"
  },
];

const features = [
  { id: "auth", name: "User Authentication", price: 2000, icon: Shield },
  { id: "payments", name: "Payment Integration", price: 3000, icon: TrendingUp },
  { id: "admin", name: "Admin Dashboard", price: 5000, icon: Users },
  { id: "api", name: "API Development", price: 4000, icon: Code },
  { id: "analytics", name: "Analytics & Reporting", price: 3500, icon: TrendingUp },
  { id: "realtime", name: "Real-time Features", price: 4500, icon: Zap },
];

const teamSizes = [
  { id: "solo", name: "Solo Developer", multiplier: 0.7 },
  { id: "small", name: "Small Team (2-3)", multiplier: 1.0 },
  { id: "medium", name: "Full Team (4-6)", multiplier: 1.3 },
  { id: "large", name: "Large Team (7+)", multiplier: 1.6 },
];

export default function EstimatePage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string>("small");
  const [showEstimate, setShowEstimate] = useState(false);

  const calculateEstimate = () => {
    if (!selectedType) return 0;
    
    const projectType = projectTypes.find(p => p.id === selectedType);
    if (!projectType) return 0;

    const basePrice = projectType.basePrice;
    const featuresPrice = selectedFeatures.reduce((sum, featureId) => {
      const feature = features.find(f => f.id === featureId);
      return sum + (feature?.price || 0);
    }, 0);

    const teamMultiplier = teamSizes.find(t => t.id === selectedTeam)?.multiplier || 1;
    
    return Math.round((basePrice + featuresPrice) * teamMultiplier);
  };

  const estimate = calculateEstimate();
  const selectedProjectType = projectTypes.find(p => p.id === selectedType);

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white via-brand-muted/30 to-white">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-brand-primary/10 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, -40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-5%] left-[-5%] w-[50%] h-[50%] bg-brand-secondary/10 rounded-full blur-[140px]"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 border border-brand-primary/10 backdrop-blur-md mb-8"
          >
            <Calculator className="w-4 h-4 text-brand-primary animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand-primary/80">
              Instant Estimate
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-black mb-6 font-heading"
          >
            Get Your Project
            <br />
            <span className="text-brand-primary">Estimate</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-black/60 max-w-2xl mx-auto mb-12 font-light"
          >
            Configure your project requirements and get an instant ballpark estimate. 
            No commitment, no hidden fees.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-8 text-sm"
          >
            {[
              { icon: Clock, label: "Instant Results" },
              { icon: Sparkles, label: "No Commitment" },
              { icon: CheckCircle2, label: "Transparent Pricing" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-brand-black/60">
                <item.icon className="w-4 h-4 text-brand-primary" />
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          {/* Step 1: Project Type */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold mb-4">
                Step 1 of 3
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-3 font-heading">
                Choose Your Project Type
              </h2>
              <p className="text-brand-black/60">
                Select the type of project you want to build
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectTypes.map((type) => (
                <motion.button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative p-6 rounded-3xl border-2 transition-all duration-300 text-left group ${
                    selectedType === type.id
                      ? "border-brand-primary bg-brand-primary/5 shadow-xl"
                      : "border-brand-black/10 bg-white hover:border-brand-primary/30 hover:shadow-lg"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-2">{type.name}</h3>
                  <p className="text-sm text-brand-black/60 mb-4">{type.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-brand-black/40">{type.timeline}</span>
                    <span className="font-bold text-brand-primary">
                      ${(type.basePrice / 1000).toFixed(0)}K+
                    </span>
                  </div>
                  
                  {selectedType === type.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Step 2: Features */}
          <AnimatePresence>
            {selectedType && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="mb-16"
              >
                <div className="text-center mb-12">
                  <span className="inline-block px-4 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-bold mb-4">
                    Step 2 of 3
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-3 font-heading">
                    Add Features
                  </h2>
                  <p className="text-brand-black/60">
                    Select additional features you need
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {features.map((feature) => (
                    <motion.button
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                        selectedFeatures.includes(feature.id)
                          ? "border-brand-secondary bg-brand-secondary/5 shadow-lg"
                          : "border-brand-black/10 bg-white hover:border-brand-secondary/30"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-brand-secondary" />
                        </div>
                        {selectedFeatures.includes(feature.id) && (
                          <CheckCircle2 className="w-5 h-5 text-brand-secondary" />
                        )}
                      </div>
                      <h3 className="font-bold text-brand-black mb-2">{feature.name}</h3>
                      <p className="text-sm font-bold text-brand-secondary">
                        +${(feature.price / 1000).toFixed(1)}K
                      </p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Step 3: Team Size */}
          <AnimatePresence>
            {selectedType && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="mb-16"
              >
                <div className="text-center mb-12">
                  <span className="inline-block px-4 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-bold mb-4">
                    Step 3 of 3
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-3 font-heading">
                    Team Size
                  </h2>
                  <p className="text-brand-black/60">
                    How many developers do you need?
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {teamSizes.map((team) => (
                    <motion.button
                      key={team.id}
                      onClick={() => setSelectedTeam(team.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                        selectedTeam === team.id
                          ? "border-brand-accent bg-brand-accent/5 shadow-lg"
                          : "border-brand-black/10 bg-white hover:border-brand-accent/30"
                      }`}
                    >
                      <Users className={`w-8 h-8 mb-3 mx-auto ${
                        selectedTeam === team.id ? "text-brand-accent" : "text-brand-black/40"
                      }`} />
                      <h3 className="font-bold text-brand-black text-center mb-2">
                        {team.name}
                      </h3>
                      <p className="text-xs text-brand-black/60 text-center">
                        {team.multiplier}x multiplier
                      </p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Estimate Result */}
          <AnimatePresence>
            {selectedType && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative"
              >
                <div className="p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-brand-black via-brand-black to-brand-primary text-white relative overflow-hidden">
                  {/* Background Decoration */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary rounded-full blur-[100px]" />
                  </div>

                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <Sparkles className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                      <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading">
                        Your Estimated Investment
                      </h2>
                      <p className="text-white/60">
                        Based on your selections
                      </p>
                    </div>

                    <div className="text-center mb-8">
                      <motion.div
                        key={estimate}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-6xl md:text-8xl font-bold mb-4 font-heading"
                      >
                        ${(estimate / 1000).toFixed(0)}K
                      </motion.div>
                      <p className="text-white/60 text-lg">
                        Timeline: {selectedProjectType?.timeline}
                      </p>
                    </div>

                    {/* Breakdown */}
                    <div className="max-w-md mx-auto space-y-3 mb-8">
                      <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <span className="text-white/80">Base Project</span>
                        <span className="font-bold">${(selectedProjectType?.basePrice || 0) / 1000}K</span>
                      </div>
                      {selectedFeatures.length > 0 && (
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 backdrop-blur-sm">
                          <span className="text-white/80">Features ({selectedFeatures.length})</span>
                          <span className="font-bold">
                            +${selectedFeatures.reduce((sum, id) => {
                              const feature = features.find(f => f.id === id);
                              return sum + (feature?.price || 0);
                            }, 0) / 1000}K
                          </span>
                        </div>
                      )}
                      <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <span className="text-white/80">Team Size</span>
                        <span className="font-bold">
                          {teamSizes.find(t => t.id === selectedTeam)?.multiplier}x
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Link href="/contact">
                        <Button size="lg" className="rounded-full bg-white text-brand-black hover:bg-brand-primary hover:text-white transition-all duration-500 px-12 h-14 text-lg font-bold shadow-2xl">
                          Get Detailed Quote
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </Link>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="rounded-full border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-500 px-12 h-14 text-lg font-bold"
                        onClick={() => {
                          setSelectedType(null);
                          setSelectedFeatures([]);
                          setSelectedTeam("small");
                        }}
                      >
                        Start Over
                      </Button>
                    </div>

                    {/* Disclaimer */}
                    <p className="text-center text-white/40 text-xs mt-8 max-w-2xl mx-auto">
                      * This is a ballpark estimate. Final pricing depends on specific requirements, 
                      complexity, and timeline. Contact us for a detailed, customized quote.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-white to-brand-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4 font-heading">
              Transparent, Fair Pricing
            </h2>
            <p className="text-xl text-brand-black/60 max-w-2xl mx-auto">
              No hidden fees, no surprises. Just honest pricing for quality work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: CheckCircle2,
                title: "Fixed Scope",
                description: "Clear deliverables and milestones from day one"
              },
              {
                icon: Clock,
                title: "Predictable Timeline",
                description: "Realistic estimates with buffer for quality assurance"
              },
              {
                icon: Shield,
                title: "Quality Guaranteed",
                description: "Comprehensive testing and post-launch support included"
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-brand-black/5 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">{item.title}</h3>
                <p className="text-brand-black/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
