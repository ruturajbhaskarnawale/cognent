import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-brand-black/5 bg-white py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary" />
              <span className="text-lg font-bold font-heading text-brand-black">OddJobs</span>
            </Link>
            <p className="text-sm text-brand-black/60 max-w-xs">
              Engineering the future of work with AI, automation, and enterprise-grade software.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-brand-black uppercase">Services</h4>
            <ul className="space-y-2 text-sm text-brand-black/60">
              <li><Link href="/services/ai-integration">AI Integration</Link></li>
              <li><Link href="/services/automation">Automation</Link></li>
              <li><Link href="/services/development">Web Development</Link></li>
              <li><Link href="/services/consulting">Consulting</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-brand-black uppercase">Company</h4>
            <ul className="space-y-2 text-sm text-brand-black/60">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/work">Selected Work</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-brand-black uppercase">Connect</h4>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="text-brand-black/60 hover:text-brand-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-brand-black/60 hover:text-brand-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-brand-black/60 hover:text-brand-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-brand-black/5 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row text-sm text-brand-black/40">
          <p>© 2024 OddJobs Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/legal/privacy">Privacy Policy</Link>
            <Link href="/legal/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}