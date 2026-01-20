import { Project } from "./types";

export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function getProjects(): Promise<Project[]> {
    try {
        const res = await fetch(`${API_URL}/api/v1/projects`, {
            cache: "no-store", // Ensure fresh data
        });
        if (!res.ok) {
            // Fallback for demo if API is down or empty
            console.error("Failed to fetch projects");
            return [];
        }
        return res.json();
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
    try {
        const res = await fetch(`${API_URL}/api/v1/projects/${slug}`, {
            cache: "no-store",
        });
        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        console.error("Error fetching project:", error);
        return null;
    }
}
