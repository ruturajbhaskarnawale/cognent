import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">AGENCY</h3>
            <p className="text-sm text-zinc-500 max-w-xs">
              High-performance digital experiences for forward-thinking brands.
              Built for speed, security, and scale.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Next.js Development</li>
              <li>Backend Systems</li>
              <li>Compliance Audits</li>
              <li>Performance Tuning</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/legal/privacy">Privacy Policy</Link></li>
              <li><Link href="/legal/terms">Terms of Service</Link></li>
              <li><Link href="/legal/deletion">Right to Erasure</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-2 rounded-lg border border-green-900/30 bg-green-900/10 px-4 py-2 text-green-700 dark:text-green-400">
                <ShieldCheckIcon className="h-5 w-5" />
                <span className="text-sm font-semibold">DPDP Compliant</span>
             </div>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
          © {new Date().getFullYear()} Agency Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function ShieldCheckIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }
