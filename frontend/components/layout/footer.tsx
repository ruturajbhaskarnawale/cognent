"use client";

import Link from "next/link";
import { 
  Instagram, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Globe, 
  Users, 
  ShieldCheck,
  Send,
  Loader2,
  CheckCircle2
} from "lucide-react";
import { servicesData } from "@/lib/services-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { subscribeNewsletter } from "@/lib/api";
import { useState } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await subscribeNewsletter(email);
      setStatus("success");
      setMessage(response.message || "Subscribed successfully!");
      setEmail("");
      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      console.error("Subscription error:", error);
      setStatus("error");
      setMessage(error.message || "Failed to subscribe.");
    }
  };

  return (
    <footer className="w-full border-t border-brand-black/5 bg-white relative overflow-hidden pt-24 pb-12">
      {/* Decorative Glows */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <div className="grid gap-16 lg:grid-cols-12 mb-20">
          {/* Column 1: Brand & Vision */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-12 w-12 rounded-xl bg-white p-1.5 shadow-md flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo/logo1.png" 
                  alt="OddJobs Logo" 
                  className="w-full h-full object-contain mix-blend-multiply transition-transform group-hover:scale-110 duration-500" 
                />
              </div>
              <span className="text-2xl font-bold font-heading text-brand-black tracking-tight">OddJobs</span>
            </Link>
            <p className="text-lg text-brand-black/60 leading-relaxed max-w-sm font-light">
              Engineering the future of enterprise work with bespoke AI, automation, and world-class software architecture.
            </p>
            <div className="flex space-x-5">
              {[
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Mail, href: "mailto:oddjobs1824@gmail.com" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href={social.href} 
                  className="w-10 h-10 rounded-full border border-brand-black/10 flex items-center justify-center text-brand-black/60 hover:border-brand-primary hover:text-brand-primary transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-bold tracking-widest text-brand-black uppercase opacity-40">Expertise</h4>
            <ul className="space-y-4">
              {Object.values(servicesData).map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="text-brand-black/60 hover:text-brand-primary transition-all duration-300 font-medium flex items-center group"
                  >
                    <ArrowRight className="w-0 h-3 group-hover:w-3 mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    {service.title.split(' ')[0]} {service.title.split(' ')[1] || ''}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company & Resources */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-bold tracking-widest text-brand-black uppercase opacity-40">Company</h4>
            <ul className="space-y-4">
              {[
                { name: "Selected Work", href: "/work" },
                { name: "Our Process", href: "/#process" },
                { name: "Client Stories", href: "/#testimonials" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-brand-black/60 hover:text-brand-primary transition-all duration-300 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div className="lg:col-span-4 space-y-8 p-8 rounded-[2.5rem] bg-brand-primary/[0.03] border border-brand-primary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="space-y-4 relative z-10">
              <h4 className="text-2xl font-bold text-brand-black tracking-tight leading-tight">
                Join the engineering edge.
              </h4>
              <p className="text-sm text-brand-black/60 leading-relaxed">
                Receive quarterly insights into high-performance engineering and AI automation. No fluff, just code.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="space-y-4 relative z-10">
              <div className="flex gap-2">
                <Input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="engineering@company.com" 
                  className="rounded-full h-12 bg-white border-brand-black/10 focus:ring-brand-primary/20 text-brand-white"
                />
                <Button 
                  type="submit"
                  disabled={status === "loading"}
                  size="icon" 
                  className="rounded-full h-12 w-12 bg-brand-primary text-white hover:bg-brand-secondary shadow-lg hover:shadow-brand-primary/25 transition-all flex-shrink-0"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </Button>
              </div>
              
              <AnimatePresence>
                {status === "success" && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs font-bold text-green-600 flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {message}
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs font-bold text-red-600"
                  >
                    {message}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>

            <div className="flex items-center gap-6 pt-4 relative z-10">
              <div className="flex items-center gap-2 text-xs text-brand-black/40">
                <ShieldCheck className="w-4 h-4 text-brand-primary" />
                GDPR Compliant
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-black/40">
                <Users className="w-4 h-4 text-brand-primary" />
                Trusted by 50+ Leaders
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-brand-black/5 flex flex-col items-center justify-between gap-8 md:flex-row text-sm">
          <div className="flex items-center gap-6 order-2 md:order-1">
            <p className="text-brand-black/40 font-medium">© {currentYear} OddJobs Engineering Inc.</p>
            <div className="hidden md:flex gap-4">
              <Link href="/legal/privacy" className="text-brand-black/40 hover:text-brand-black transition-colors">Privacy</Link>
              <Link href="/legal/terms" className="text-brand-black/40 hover:text-brand-black transition-colors">Terms</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-3 order-1 md:order-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary font-bold text-xs uppercase tracking-widest">
              <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              Systems Operational
            </div>
            {/* <Link href="#faq">
              <Button variant="ghost" className="rounded-full px-6 h-10 text-brand-black/60 font-bold hover:bg-brand-black/5">
                Support Hub
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
