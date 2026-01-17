"use client";

import { useQuoteStore } from "@/store/useQuoteStore";
import { StepServices } from "./step-services";
import { StepDetails } from "./step-details";
import { StepEmail } from "./step-email";
import { Button } from "@/components/ui/button";

export function QuoteWizard() {
  const { step, setStep } = useQuoteStore();

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepServices />;
      case 2:
        return <StepDetails />;
      case 3:
        return <StepEmail />;
      default:
        return <StepServices />;
    }
  };

  return (
    <div className="w-full max-w-lg rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-8 flex items-center justify-between">
         <span className="text-sm font-medium text-zinc-500">Step {step} of 3</span>
         <div className="flex gap-1">
            {[1, 2, 3].map((s) => (
                <div 
                    key={s} 
                    className={`h-1 w-8 rounded-full transition-colors ${s <= step ? 'bg-blue-600' : 'bg-zinc-200 dark:bg-zinc-800'}`} 
                />
            ))}
         </div>
      </div>

      <div className="min-h-[300px]">
        {renderStep()}
      </div>

      <div className="mt-8 flex justify-between">
        {step > 1 && step < 3 && (
            <Button variant="ghost" onClick={() => setStep(step - 1)}>
                Back
            </Button>
        )}
        <div className="flex-1" />
        {step < 3 && (
            <Button onClick={() => setStep(step + 1)}>
                Next
            </Button>
        )}
      </div>
    </div>
  );
}
