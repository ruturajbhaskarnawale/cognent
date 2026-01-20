"use client";

import { useState } from "react";
import { useQuoteStore } from "@/store/useQuoteStore";
import { Button } from "@/components/ui/button";
import { API_URL } from "@/lib/api";

export function StepEmail() {
  const { email, setEmail, services, timeline } = useQuoteStore();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/v1/leads/calculate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          services,
          timeline,
        }),
      });
      
      if (res.ok) {
        setSent(true);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
        <div className="text-center space-y-4 py-8">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h2 className="text-2xl font-bold">Quote Sent!</h2>
            <p className="text-zinc-500">Check your inbox ({email}) for the detailed breakdown.</p>
        </div>
    )
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Where should we send the estimate?</h2>
      <div className="space-y-4">
        <input 
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-zinc-200 p-4 text-lg outline-none focus:border-blue-500 dark:border-zinc-800 dark:bg-zinc-950"
        />
        <Button 
            size="lg" 
            className="w-full"
            disabled={!email || loading}
            isLoading={loading}
            onClick={handleSubmit}
        >
            Reveal Price
        </Button>
        <p className="text-xs text-center text-zinc-400">
            We respect your privacy. No spam, just the quote.
        </p>
      </div>
    </div>
  );
}
