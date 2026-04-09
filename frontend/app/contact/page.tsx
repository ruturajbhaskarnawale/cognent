"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Loader2, 
  CheckCircle2, 
  MessageSquare, 
  Send,
  Sparkles,
  ArrowRight,
  Globe
} from "lucide-react";
import { sendContactForm, ContactFormData } from "@/lib/api";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { TextReveal } from "@/components/animations/text-reveal";
import { CursorTrail } from "@/components/effects/cursor-trail";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    subject: "",
    phone: "",
  });
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const fullData: ContactFormData = {
        ...formData,
        name: `${firstName} ${lastName}`.trim() || formData.name,
      };

      if (!fullData.name || !fullData.email || !fullData.message || !fullData.phone) {
        throw new Error("Please fill in all required fields.");
      }

      await sendContactForm(fullData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "", subject: "", phone: "" });
      setFirstName("");
      setLastName("");
    } catch (error: any) {
      console.error("Contact form error:", error);
      setErrorMessage(error.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const contactItems = [
    { 
      icon: Mail, 
      title: "Email Us", 
      value: "cognent1824@gmail.com", 
      sub: "Response within 24 hours",
      color: "text-brand-primary",
      bg: "bg-brand-primary/5",
      spotlight: "rgba(124, 58, 237, 0.1)"
    },
    { 
      icon: Phone, 
      title: "Call Us", 
      value: "+91 9833097874 / +91 9766677874", 
      // sub: "Mon - Sat, 10am - 8pm",
      color: "text-brand-secondary",
      bg: "bg-brand-secondary/5",
      spotlight: "rgba(20, 184, 166, 0.1)"
    },
    { 
      icon: MapPin, 
      title: "Location", 
      value: "Badlapur East, 421503 , Maharashtra", 
      sub: "Serving Global Enterprises",
      color: "text-blue-600",
      bg: "bg-blue-500/5",
      spotlight: "rgba(37, 99, 235, 0.1)"
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-white relative overflow-hidden">
      {/* Interactive Cursor Trail */}
      <CursorTrail />

      {/* Cinematic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 xl:gap-32">
            
            {/* Left Column: Vision & Contact Details */}
            <div className="w-full lg:w-[45%] space-y-16">
              <div className="space-y-8">
                <ScrollReveal>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary font-bold text-xs uppercase tracking-widest shadow-sm backdrop-blur-sm"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                    </span>
                    Engineering the Future
                  </motion.div>
                </ScrollReveal>

                <ScrollReveal>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-brand-black leading-[0.95] mb-8">
                    Let's craft the <br /> 
                    <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-slow">
                      extraordinary
                    </span>
                    <br /> together.
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <p className="text-xl text-brand-black/60 max-w-xl leading-relaxed font-light">
                    From complex AI architectures to seamless enterprise solutions, we're ready to transform your vision into technological power.
                  </p>
                </ScrollReveal>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {contactItems.map((item, i) => (
                  <div key={i} className={cn(i === 2 ? "md:col-span-2" : "")}>
                    <ScrollReveal delay={0.3 + i * 0.1}>
                      <SpotlightCard 
                        className="p-6 md:p-8 flex items-start gap-6 group overflow-hidden border-brand-black/5 h-full"
                        spotlightColor={item.spotlight}
                      >
                        <div className={cn(
                          "w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110",
                          item.bg
                        )}>
                          <item.icon className={cn("h-7 w-7", item.color)} />
                        </div>
                        <div>
                          <h3 className="font-bold text-brand-black text-lg mb-1">{item.title}</h3>
                          <p className="text-brand-black font-medium text-sm md:text-base">{item.value}</p>
                          {item.sub && <p className="text-brand-black/40 text-sm mt-1">{item.sub}</p>}
                        </div>
                      </SpotlightCard>
                    </ScrollReveal>
                  </div>
                ))}
              </div>

              
              {/* <ScrollReveal delay={0.7}>
                <div className="p-8 rounded-[2.5rem] bg-brand-black/5 border border-brand-black/5 flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-zinc-200 overflow-hidden shadow-sm">
                        <img 
                          src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                          alt="Leader" 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-medium text-brand-black/60">
                    Trusted by <span className="font-bold text-brand-black">50+ industry leaders</span> globally.
                  </div>
                </div>
              </ScrollReveal> */}
            </div>

            {/* Right Column: Contact Form */}
            <div className="w-full lg:w-[55%] relative group">
              {/* Outer Glow Effect for the Form */}
              <div className="absolute -inset-4 bg-brand-primary/10 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <ScrollReveal direction="right" delay={0.4}>
                <SpotlightCard 
                  className="p-0 border-none shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden group/form relative border border-brand-primary/5 hover:border-brand-primary/20 transition-colors"
                  spotlightColor="rgba(124, 58, 237, 0.05)"
                >
                  <div className="bg-brand-black p-10 md:p-12 relative overflow-hidden">
                    {/* Animated Pulsing Glow inside Header */}
                    <motion.div 
                      animate={{ 
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/30 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" 
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                          <MessageSquare className="h-6 w-6 text-brand-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-white tracking-tight">Send a Message</h2>
                      </div>
                      <p className="text-white/60 text-lg font-light leading-relaxed">
                        Our engineering consultants will review your inquiry and respond within one business day.
                      </p>
                    </div>
                  </div>

                  <div className="p-10 md:p-12 bg-white">
                    <AnimatePresence mode="wait">
                      {status === "success" ? (
                        <motion.div 
                          key="success"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="py-12 flex flex-col items-center justify-center text-center space-y-6"
                        >
                          <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center shadow-inner">
                            <CheckCircle2 className="h-12 w-12 text-green-500" />
                          </div>
                          <div className="space-y-2">
                            <h2 className="text-3xl font-bold text-brand-black tracking-tight">Message Delivered</h2>
                            <p className="text-brand-black/60 max-w-sm mx-auto font-light text-lg">
                              Thank you for reaching out. A partner from our engineering team will connect with you shortly.
                            </p>
                          </div>
                          <Button 
                            variant="outline" 
                            onClick={() => setStatus("idle")}
                            className="mt-8 rounded-full px-8 h-12 border-brand-black/20 hover:bg-brand-black hover:text-white transition-all duration-300 font-bold"
                          >
                            Send another inquiry
                          </Button>
                        </motion.div>
                      ) : (
                        <motion.form 
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          onSubmit={handleSubmit} 
                          className="space-y-8"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                              <label className="text-xs font-bold uppercase tracking-widest text-brand-black/40 ml-4">First Name</label>
                              <input 
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full h-14 bg-brand-black/[0.03] border-brand-black/5 rounded-2xl px-6 text-[15px] font-medium focus:bg-white focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary/30 transition-all outline-none" 
                                placeholder="Aryan" 
                              />
                            </div>
                            <div className="space-y-3">
                              <label className="text-xs font-bold uppercase tracking-widest text-brand-black/40 ml-4">Last Name</label>
                              <input 
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full h-14 bg-brand-black/[0.03] border-brand-black/5 rounded-2xl px-6 text-[15px] font-medium focus:bg-white focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary/30 transition-all outline-none" 
                                placeholder="Sharma" 
                              />
                            </div>
                          </div>
                          
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                              <label className="text-xs font-bold uppercase tracking-widest text-brand-black/40 ml-4">Email Address</label>
                              <input 
                                type="email" 
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full h-14 bg-brand-black/[0.03] border-brand-black/5 rounded-2xl px-6 text-[15px] font-medium focus:bg-white focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary/30 transition-all outline-none" 
                                placeholder="aryan@company.com" 
                              />
                            </div>
                            <div className="space-y-3">
                              <label className="text-xs font-bold uppercase tracking-widest text-brand-black/40 ml-4">Phone Number</label>
                              <input 
                                type="tel" 
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full h-14 bg-brand-black/[0.03] border-brand-black/5 rounded-2xl px-6 text-[15px] font-medium focus:bg-white focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary/30 transition-all outline-none" 
                                placeholder="+91 99999 99999" 
                              />
                            </div>
                          </div>

                          <div className="space-y-3">
                            <label className="text-xs font-bold uppercase tracking-widest text-brand-black/40 ml-4">Your Project Vision</label>
                            <textarea 
                              required
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              className="w-full min-h-[160px] bg-brand-black/[0.03] border-brand-black/5 rounded-[2rem] p-6 text-[15px] font-medium focus:bg-white focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary/30 transition-all outline-none resize-none" 
                              placeholder="Describe your technical challenges or project goals..."
                            ></textarea>
                          </div>

                          {status === "error" && (
                            <motion.div 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="bg-red-50 p-4 rounded-2xl border border-red-100 text-red-600 text-sm font-medium flex items-center gap-3"
                            >
                              <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                              {errorMessage}
                            </motion.div>
                          )}

                          <MagneticButton>
                            <div className="w-full">
                              <Button 
                                type="submit" 
                                disabled={status === "loading"}
                                className="w-full h-16 bg-brand-black hover:bg-brand-primary text-white font-bold rounded-2xl shadow-xl hover:shadow-brand-primary/20 transition-all duration-500 flex items-center justify-center gap-3 text-lg border-none"
                              >
                                {status === "loading" ? (
                                  <>
                                    <Loader2 className="h-6 w-6 animate-spin" />
                                    Submitting Inquiry...
                                  </>
                                ) : (
                                  <>
                                    <Send className="h-6 w-6" />
                                    Initialize Project
                                  </>
                                )}
                              </Button>
                            </div>
                          </MagneticButton>

                          <p className="text-center text-xs text-brand-black/30 font-medium">
                            By submitting, you agree to our <a href="/legal/terms" className="text-brand-primary hover:underline">Terms of Service</a> and <a href="/legal/privacy" className="text-brand-primary hover:underline">Privacy Policy</a>.
                          </p>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
