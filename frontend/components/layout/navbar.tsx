"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Process", href: "/#process" },
  { name: "Work", href: "/work" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-brand-black/5 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary" />
          <span className="text-xl font-bold tracking-tight text-brand-black font-heading">OddJobs</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-primary",
                pathname === item.href
                  ? "text-brand-primary"
                  : "text-brand-black/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button size="sm" className="rounded-full bg-brand-black text-white hover:bg-brand-secondary transition-colors px-6 shadow-md hover:shadow-lg">
                Book a Call
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
