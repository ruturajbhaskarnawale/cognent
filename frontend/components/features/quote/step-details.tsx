"use client";

import { useQuoteStore } from "@/store/useQuoteStore";
import { cn } from "@/lib/utils";

export function StepDetails() {
  const { timeline, setTimeline } = useQuoteStore();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">How fast do you need this?</h2>
      <div className="space-y-4">
        <div
            onClick={() => setTimeline('standard')}
            className={cn(
                "cursor-pointer rounded-xl border p-6 transition-all",
                timeline === 'standard'
                ? "border-blue-500 bg-blue-50/50 dark:border-blue-500 dark:bg-blue-900/20"
                : "border-zinc-200 bg-white hover:border-blue-300 dark:border-zinc-800 dark:bg-zinc-950"
            )}
        >
            <h3 className="font-semibold">Standard Delivery</h3>
            <p className="text-sm text-zinc-500">Typical timeline. Best value.</p>
        </div>

        <div
            onClick={() => setTimeline('urgent')}
            className={cn(
                "cursor-pointer rounded-xl border p-6 transition-all",
                timeline === 'urgent'
                ? "border-purple-500 bg-purple-50/50 dark:border-purple-500 dark:bg-purple-900/20"
                : "border-zinc-200 bg-white hover:border-purple-300 dark:border-zinc-800 dark:bg-zinc-950"
            )}
        >
            <h3 className="font-semibold text-purple-600 dark:text-purple-400">Urgent / Rush</h3>
            <p className="text-sm text-zinc-500">Priority handling. +50% cost.</p>
        </div>
      </div>
    </div>
  );
}
