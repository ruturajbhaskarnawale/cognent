export interface Project {
    id: string;
    slug: string;
    client_name: string;
    title: string;
    challenge?: string;
    description?: string;
    tech_stack: string[];
    roi_metrics?: string;
    thumbnail_url?: string;
    is_published: boolean;
    scheduled_publish_at?: string;
    created_at: string;
    updated_at?: string;
}

