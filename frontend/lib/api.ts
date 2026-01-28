import { Project } from "./types";

export const API_URL = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000").replace(/\/$/, "");

export async function getProjects(): Promise<Project[]> {
    try {
        const res = await fetch(`${API_URL}/api/v1/projects`, {
            next: { revalidate: 60 }, // Revalidate every 60 seconds
        });
        if (!res.ok) {
            console.error(`Failed to fetch projects from: ${API_URL}/api/v1/projects`);
            console.error(`Status: ${res.status} ${res.statusText}`);
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
            next: { revalidate: 60 }, // Revalidate every 60 seconds
        });
        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        console.error("Error fetching project:", error);
        return null;
    }
}

export async function getAllProjects(token: string): Promise<Project[]> {
    try {
        const res = await fetch(`${API_URL}/api/v1/projects/all`, {
            cache: "no-store",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });
        if (!res.ok) {
            console.error("Failed to fetch all projects");
            return [];
        }
        return res.json();
    } catch (error) {
        console.error("Error fetching all projects:", error);
        return [];
    }
}

// ============= Admin API Functions =============

export interface LoginResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export interface VerifyResponse {
    valid: boolean;
    username?: string;
}

export async function loginAdmin(username: string, password: string): Promise<LoginResponse> {
    const res = await fetch(`${API_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.detail || "Login failed");
    }

    return res.json();
}

export async function verifyAdminToken(token: string): Promise<VerifyResponse> {
    const res = await fetch(`${API_URL}/api/v1/auth/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
    });

    if (!res.ok) {
        return { valid: false };
    }

    return res.json();
}

export interface ProjectCreateData {
    slug: string;
    client_name: string;
    title: string;
    challenge?: string;
    description?: string;
    tech_stack: string[];
    roi_metrics?: string;
    thumbnail_url?: string;
    is_published?: boolean;
    scheduled_publish_at?: string;
}


export async function createProject(projectData: ProjectCreateData, token: string): Promise<Project> {
    const res = await fetch(`${API_URL}/api/v1/projects`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(projectData),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.detail || "Failed to create project");
    }

    return res.json();
}

export async function updateProject(projectId: string, projectData: ProjectCreateData, token: string): Promise<Project> {
    const res = await fetch(`${API_URL}/api/v1/projects/${projectId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(projectData),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.detail || "Failed to update project");
    }

    return res.json();
}

export async function deleteProject(projectId: string, token: string): Promise<void> {
    const res = await fetch(`${API_URL}/api/v1/projects/${projectId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.detail || "Failed to delete project");
    }
}

export async function togglePublish(projectId: string, token: string): Promise<Project> {
    const res = await fetch(`${API_URL}/api/v1/projects/${projectId}/publish`, {
        method: "PATCH",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.detail || "Failed to toggle publish status");
    }

    return res.json();
}

// ============= Email & Subscription API Functions =============

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
    subject?: string;
    phone?: string;
    company?: string;
}

export interface EmailResponse {
    success: boolean;
    message: string;
}

export async function sendContactForm(data: ContactFormData): Promise<EmailResponse> {
    const res = await fetch(`${API_URL}/api/v1/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.detail || "Failed to send message");
    }

    return res.json();
}

export async function subscribeNewsletter(email: string): Promise<EmailResponse> {
    const res = await fetch(`${API_URL}/api/v1/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.detail || "Subscription failed");
    }

    return res.json();
}

export interface EstimateNotifyData {
    project_type: string;
    features: string[];
    team_size: string;
    user_name?: string;
    user_email?: string;
    user_phone?: string;
}

export async function notifyEstimate(data: EstimateNotifyData): Promise<EmailResponse> {
    const res = await fetch(`${API_URL}/api/v1/estimate/notify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.detail || "Notification failed");
    }

    return res.json();
}
