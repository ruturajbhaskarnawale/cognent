import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Project } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface SelectedWorkProps {
  projects: Project[];
}

export function SelectedWork({ projects }: SelectedWorkProps) {
  // Take only first 2 for the homepage
  const displayedProjects = projects.slice(0, 2);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Selected Work</h2>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-[600px]">
              We build digital products that drive real business results. Here are a few of our favorites.
            </p>
          </div>
          <Link href="/work">
            <Button variant="outline" className="group">
              View All Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project) => (
              <Link key={project.id} href={`/work/${project.slug}`}>
                <Card className="overflow-hidden group cursor-pointer border-none bg-transparent hover:shadow-none">
                  <CardContent className="p-0 space-y-4">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                     {project.thumbnail_url ? (
                        <Image
                          src={project.thumbnail_url}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-400">
                          No Image
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                        {project.client_name}
                      </h3>
                      <p className="text-zinc-500 dark:text-zinc-400 text-lg mt-1">
                        {project.title}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-2 text-center py-12 text-zinc-500 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl">
              <p>Projects loading or not available...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
