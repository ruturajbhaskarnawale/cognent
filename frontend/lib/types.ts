export interface Project {
    id: string;
    slug: string;
    client_name: string;
    title: string;
    challenge?: string;
    tech_stack: string[];
    roi_metrics?: string;
    thumbnail_url?: string;
    is_published: boolean;
    created_at: string;
}
