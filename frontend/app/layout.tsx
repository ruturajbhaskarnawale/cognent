import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    default: "Cognent | Enterprise AI & Technical Solutions",
    template: "%s | Cognent"
  },
  description: "Global leader in AI integration, automated tool building, and technical problem solving.",
  keywords: ["AI Integration", "Automation", "Technical Consulting", "Web Development", "Cognent"],
  icons: {
    icon: '/logo/cognent1.png',
    shortcut: '/logo/cognent1.png',
    apple: '/logo/cognent1.png',
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
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-brand-black bg-white`}>
        <Navbar />
        <main className="min-h-screen">
            {children}
        </main>
        <Footer />
        <ConsentManager />
      </body>
    </html>
  );
}
