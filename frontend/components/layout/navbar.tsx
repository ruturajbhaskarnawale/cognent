"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Brain, 
  Bot, 
  Wrench, 
  Compass, 
  Code, 
  TrendingUp,
  LayoutGrid,
  Sparkles,
  Zap,
  Globe
} from "lucide-react";
import { servicesData } from "@/lib/services-data";

const serviceIcons: Record<string, any> = {
  "ai-integration": Brain,
  "automation": Bot,
  "debugging": Wrench,
  "consulting": Compass,
  "development": Code,
  "optimization": TrendingUp,
};

const navItems = [
  { 
    name: "Services", 
    href: "/services",
    dropdown: Object.values(servicesData).map(service => ({
      name: service.title,
      description: service.shortDescription,
      href: `/services/${service.slug}`,
      icon: serviceIcons[service.slug] || Sparkles
    }))
  },
  { 
    name: "Success Stories", 
    href: "/work",
    dropdown: [
      { name: "All Projects", description: "Vew our complete portfolio of engineering excellence.", href: "/work", icon: LayoutGrid },
      { name: "Enterprise Solutions", description: "Custom platforms built for global scale.", href: "/work/enterprise", icon: Globe },
      { name: "Startup Launchpad", description: "MVPs and rapid scaling for tomorrow's unicorns.", href: "/work/startup", icon: Zap },
    ]
  },
  { name: "Capabilities", href: "/#capabilities" },
  { name: "Process", href: "/#process" },
  { name: "Get Estimate", href: "/estimate" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div 
        className={cn(
          "container mx-auto px-4 md:px-6 transition-all duration-500",
          isScrolled ? "max-w-[95%] md:max-w-6xl" : "max-w-full"
        )}
      >
        <div 
          className={cn(
            "flex items-center justify-between transition-all duration-500 rounded-full border border-transparent px-6 py-3",
            isScrolled 
              ? "bg-white/80 backdrop-blur-xl border-brand-black/5 shadow-2xl shadow-brand-black/5" 
              : "bg-transparent"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group relative z-50">
            <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center p-1 shadow-sm group-hover:rotate-6 transition-transform duration-500 overflow-hidden">
               <img 
                 src="/logo/logo1.png" 
                 alt="OddJobs Logo" 
                 className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" 
               />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-brand-black font-heading group-hover:text-brand-primary transition-colors duration-300">
              OddJobs
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <div 
                key={item.href}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-1.5",
                    pathname === item.href || (item.dropdown && activeDropdown === item.name)
                      ? "text-brand-primary bg-brand-primary/5"
                      : "text-brand-black/60 hover:text-brand-black hover:bg-brand-black/5"
                  )}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      activeDropdown === item.name ? "rotate-180" : ""
                    )} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[480px] pointer-events-auto"
                    >
                      <div className="bg-white rounded-[2rem] border border-brand-black/5 shadow-2xl shadow-brand-black/10 overflow-hidden p-3 grid grid-cols-1 gap-1">
                        {item.dropdown.map((subItem) => (
                          <Link 
                            key={subItem.href}
                            href={subItem.href}
                            className="flex items-start gap-4 p-4 rounded-2xl hover:bg-brand-primary/5 transition-all duration-300 group/item"
                          >
                            <div className="w-12 h-12 rounded-xl bg-brand-black/5 flex items-center justify-center text-brand-black group-hover/item:bg-brand-primary group-hover/item:text-white transition-colors duration-300 shadow-inner">
                              <subItem.icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-bold text-brand-black group-hover/item:text-brand-primary transition-colors flex items-center gap-2">
                                {subItem.name}
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                              </div>
                              <div className="text-xs text-brand-black/40 mt-1 leading-relaxed">
                                {subItem.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4 relative z-50">
            <Link href="/contact" className="hidden sm:block">
              <Button className="rounded-full bg-brand-black text-white hover:bg-brand-primary transition-all duration-500 px-8 h-11 font-bold shadow-lg hover:shadow-brand-primary/20 group">
                Consult Experts
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-11 h-11 rounded-full bg-brand-black/5 flex items-center justify-center text-brand-black hover:bg-brand-primary hover:text-white transition-all duration-300"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] md:hidden flex flex-col p-8 pt-24"
          >
            <div className="absolute inset-0 bg-brand-primary/5 -z-10 blur-3xl opacity-50" />
            
            <div className="flex flex-col gap-8">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-4xl font-bold tracking-tight",
                      pathname === item.href ? "text-brand-primary" : "text-brand-black"
                    )}
                  >
                    {item.name}
                  </Link>
                  
                  {item.dropdown && (
                    <div className="mt-6 flex flex-col gap-4 pl-4 border-l-2 border-brand-black/5">
                      {item.dropdown.slice(0, 3).map((subItem) => (
                        <Link 
                          key={subItem.href}
                          href={subItem.href}
                          className="text-lg text-brand-black/60 font-medium hover:text-brand-primary transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pb-12">
              <Link href="/contact" className="w-full">
                <Button className="w-full h-16 rounded-3xl bg-brand-black text-white text-xl font-bold">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
