import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Agency Platform | High-Performance & Compliant",
    template: "%s | Agency Platform"
  },
  description: "India's First High-Performance & DPDP-Compliant Web Agency. We build sales machines with Next.js and Python.",
  keywords: ["Next.js", "FastAPI", "Web Agency", "India", "DPDP Compliance", "High Performance"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://agency-platform-demo.com",
    title: "Agency Platform | Speed & Compliance",
    description: "Building trust beacons and sales machines.",
    siteName: "Agency Platform",
  },
};

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ConsentManager } from "@/components/features/compliance/consent-manager";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16 min-h-screen">
            {children}
        </main>
        <Footer />
        <ConsentManager />
      </body>
    </html>
  );
}
