import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "The team transformed our digital presence completely. Our conversion rates doubled within a month.",
    author: "Sarah Johnson",
    role: "CMO, TechFlow",
    rating: 5,
  },
  {
    quote: "Professional, responsive, and incredibly talented. They understood our vision from day one.",
    author: "Michael Chen",
    role: "Founder, StartUp Inc",
    rating: 5,
  },
  {
    quote: "The best agency we've worked with. Their attention to detail in code quality is unmatched.",
    author: "David Smithsonian",
    role: "CTO, Enterprise Soft",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16">
          Client Stories
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-zinc-50 dark:bg-zinc-900/50">
              <CardHeader className="pb-4">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg italic text-zinc-700 dark:text-zinc-300">"{t.quote}"</p>
                <div>
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-sm text-zinc-500">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
