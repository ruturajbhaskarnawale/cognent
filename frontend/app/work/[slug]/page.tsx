import { getProjectBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps) {
  const project = await getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.client_name} - ${project.title} | Agency`,
    description: project.challenge,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pb-24">
      <div className="h-[60vh] relative bg-zinc-900">
        {project.thumbnail_url && (
            <Image
                src={project.thumbnail_url}
                alt={project.title}
                fill
                className="object-cover opacity-50"
                priority
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-12 container mx-auto">
            <Link href="/work" className="mb-8 inline-block">
                <Button variant="ghost" className="text-white hover:text-white/80 pl-0 hover:bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Work
                </Button>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{project.client_name}</h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl">{project.title}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
            <section>
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.challenge}
                </p>
            </section>

             <section>
                <h3 className="text-2xl font-bold mb-4">The Solution & ROI</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.roi_metrics}
                </p>
            </section>
        </div>

        <div className="space-y-8">
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                    {project.tech_stack.map(tech => (
                        <div key={tech} className="flex items-center gap-2 bg-white dark:bg-zinc-950 px-3 py-2 rounded-md shadow-sm border border-zinc-100 dark:border-zinc-800">
                            <CheckCircle2 className="h-4 w-4 text-blue-500" />
                            <span className="text-sm font-medium">{tech}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">Project Stats</h4>
                <div className="space-y-4">
                    <div>
                        <p className="text-sm text-zinc-500">Status</p>
                        <p className="font-medium text-green-500">Published & Live</p>
                    </div>
                     <div>
                        <p className="text-sm text-zinc-500">Date</p>
                        <p className="font-medium">{new Date(project.created_at).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
