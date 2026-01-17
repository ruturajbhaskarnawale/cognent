import { QuoteWizard } from "@/components/features/quote/quote-wizard";

export default function EstimatePage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Instant Quote Calculator</h1>
        <p className="text-zinc-500">Get a ballpark estimate in seconds.</p>
      </div>
      <QuoteWizard />
    </div>
  );
}
