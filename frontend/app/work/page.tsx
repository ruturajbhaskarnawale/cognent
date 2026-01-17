import { getProjects } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Our Work | Agency",
  description: "A selection of our recent projects and case studies.",
};

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
            Our Work
          </h1>
          <p className="max-w-[800px] text-xl text-zinc-500 dark:text-zinc-400">
            We partner with ambitious brands to build digital products that matter.
            Explore our portfolio of web applications, mobile apps, and enterprise systems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
           {projects.length > 0 ? (
            projects.map((project) => (
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
                      <div className="flex gap-2 mt-4 flex-wrap">
                        {project.tech_stack.map((tech) => (
                          <span key={tech} className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-2 text-center py-20 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl">
               <h3 className="text-xl font-bold mb-2">No projects found</h3>
               <p className="text-zinc-500">
                 Please ensure the backend is running and the database is seeded.
               </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
