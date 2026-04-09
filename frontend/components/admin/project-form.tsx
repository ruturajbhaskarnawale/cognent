"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Loader2, Plus, Trash2, Wand2, Calendar } from "lucide-react";
import { Project } from "@/lib/types";
import { ProjectCreateData } from "@/lib/api";
import { ImageUpload } from "./image-upload";

interface ProjectFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: ProjectCreateData) => Promise<void>;
    project?: Project | null; // For editing existing projects
}

export function ProjectForm({ isOpen, onClose, onSubmit, project }: ProjectFormProps) {
    const [formData, setFormData] = useState<ProjectCreateData>({
        slug: "",
        client_name: "",
        title: "",
        challenge: "",
        description: "",
        tech_stack: [],
        roi_metrics: "",
        thumbnail_url: "",
        is_published: true,
        scheduled_publish_at: "",
    });

    const [techInput, setTechInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Load project data if editing
    useEffect(() => {
        if (project) {
            setFormData({
                slug: project.slug,
                client_name: project.client_name,
                title: project.title,
                challenge: project.challenge || "",
                description: project.description || "",
                tech_stack: project.tech_stack,
                roi_metrics: project.roi_metrics || "",
                thumbnail_url: project.thumbnail_url || "",
                is_published: project.is_published,
                scheduled_publish_at: project.scheduled_publish_at || "",
            });
        } else {
            // Reset form for new project
            setFormData({
                slug: "",
                client_name: "",
                title: "",
                challenge: "",
                description: "",
                tech_stack: [],
                roi_metrics: "",
                thumbnail_url: "",
                is_published: true,
                scheduled_publish_at: "",
            });
        }
    }, [project, isOpen]);

    const generateSlug = () => {
        const slug = formData.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
        setFormData({ ...formData, slug });
    };

    const addTech = () => {
        if (techInput.trim() && !formData.tech_stack.includes(techInput.trim())) {
            setFormData({
                ...formData,
                tech_stack: [...formData.tech_stack, techInput.trim()],
            });
            setTechInput("");
        }
    };

    const removeTech = (tech: string) => {
        setFormData({
            ...formData,
            tech_stack: formData.tech_stack.filter((t) => t !== tech),
        });
    };

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formData.title.trim()) newErrors.title = "Title is required";
        if (!formData.client_name.trim()) newErrors.client_name = "Client name is required";
        if (!formData.slug.trim()) newErrors.slug = "Slug is required";
        if (formData.tech_stack.length === 0) newErrors.tech_stack = "At least one technology is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        setIsLoading(true);
        try {
            await onSubmit(formData);
            onClose();
        } catch (error) {
            console.error("Form submission error:", error);
            setErrors({ submit: error instanceof Error ? error.message : "Failed to save project" });
        } finally {
            setIsLoading(false);
        }
    };

    const handleClose = () => {
        setFormData({
            slug: "",
            client_name: "",
            title: "",
            challenge: "",
            tech_stack: [],
            roi_metrics: "",
            thumbnail_url: "",
            is_published: true,
        });
        setErrors({});
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-brand-black/10 w-full max-w-2xl max-h-[90vh] overflow-hidden"
            >
                {/* Header */}
                <div className="sticky top-0 bg-white/95 backdrop-blur-xl border-b border-brand-black/10 px-8 py-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-brand-black">
                        {project ? "Edit Project" : "Add New Project"}
                    </h2>
                    <button
                        onClick={handleClose}
                        className="text-brand-black/40 hover:text-brand-black transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 overflow-y-auto max-h-[calc(90vh-140px)]">
                    <div className="space-y-6">
                        {/* Project Title */}
                        <div>
                            <label className="block text-sm font-bold text-brand-black mb-2">
                                Project Title *
                            </label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                placeholder="Enter project title"
                                className="w-full px-4 py-3 rounded-xl border border-brand-black/10 bg-white/50 focus:bg-white focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
                            />
                            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                        </div>

                        {/* Client Name */}
                        <div>
                            <label className="block text-sm font-bold text-brand-black mb-2">
                                Client Name *
                            </label>
                            <input
                                type="text"
                                value={formData.client_name}
                                onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                                placeholder="Enter client name"
                                className="w-full px-4 py-3 rounded-xl border border-brand-black/10 bg-white/50 focus:bg-white focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
                            />
                            {errors.client_name && <p className="text-red-500 text-sm mt-1">{errors.client_name}</p>}
                        </div>

                        {/* Slug */}
                        <div>
                            <label className="block text-sm font-bold text-brand-black mb-2">
                                Slug *
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={formData.slug}
                                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                    placeholder="project-slug"
                                    className="flex-1 px-4 py-3 rounded-xl border border-brand-black/10 bg-white/50 focus:bg-white focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={generateSlug}
                                    className="px-4 py-3 rounded-xl bg-brand-black/5 hover:bg-brand-black/10 text-brand-black font-bold transition-colors flex items-center gap-2"
                                >
                                    <Wand2 className="w-4 h-4" />
                                    Auto
                                </button>
                            </div>
                            {errors.slug && <p className="text-red-500 text-sm mt-1">{errors.slug}</p>}
                        </div>

                        {/* Challenge/Description */}
                        <div>
                            <label className="block text-sm font-bold text-brand-black mb-2 uppercase tracking-wider">
                                01. THE CRISIS (Business Problem) *
                            </label>
                            <textarea
                                value={formData.challenge}
                                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                                placeholder="Describe the high-stakes problem. Why was business survival or scale at risk? (e.g., 'System collapsing under 20x surge traffic')"
                                rows={3}
                                className="w-full px-4 py-3 rounded-xl border border-brand-black/10 bg-white/50 focus:bg-white focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all resize-none"
                            />
                        </div>

                        {/* Full Description */}
                        <div>
                            <label className="block text-sm font-bold text-brand-black mb-2 uppercase tracking-wider">
                                02. THE INFRASTRUCTURE (The Hardening) *
                            </label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Details of the technical architecting and hardening. How did we solve it to ensure it never breaks again?"
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl border border-brand-black/10 bg-white/50 focus:bg-white focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all resize-none"
                            />
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <label className="block text-sm font-bold text-brand-black mb-2">
                                Tech Stack *
                            </label>
                            <div className="flex gap-2 mb-3">
                                <input
                                    type="text"
                                    value={techInput}
                                    onChange={(e) => setTechInput(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTech())}
                                    placeholder="Add technology (e.g., React, Node.js)"
                                    className="flex-1 px-4 py-3 rounded-xl border border-brand-black/10 bg-white/50 focus:bg-white focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={addTech}
                                    className="px-4 py-3 rounded-xl bg-brand-primary text-white font-bold hover:bg-brand-primary/90 transition-colors flex items-center gap-2"
                                >
                                    <Plus className="w-4 h-4" />
                                    Add
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {formData.tech_stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium flex items-center gap-2"
                                    >
                                        {tech}
                                        <button
                                            type="button"
                                            onClick={() => removeTech(tech)}
                                            className="hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 className="w-3 h-3" />
                                        </button>
                                    </span>
                                ))}
                            </div>
                            {errors.tech_stack && <p className="text-red-500 text-sm mt-1">{errors.tech_stack}</p>}
                        </div>

                        {/* ROI Metrics */}
                        <div>
                            <label className="block text-sm font-bold text-brand-black mb-2 uppercase tracking-wider">
                                03. THE OUTCOME (ROI & Proof) *
                            </label>
                            <input
                                type="text"
                                value={formData.roi_metrics}
                                onChange={(e) => setFormData({ ...formData, roi_metrics: e.target.value })}
                                placeholder="e.g., '100% uptime through BFCM surge', 'Response latency reduced to 20ms'"
                                className="w-full px-4 py-3 rounded-xl border border-brand-black/10 bg-white/50 focus:bg-white focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
                            />
                        </div>

                        {/* Thumbnail Image */}
                        <div>
                            <label className="block text-sm font-bold text-brand-black mb-2">
                                Project Thumbnail
                            </label>
                            <ImageUpload
                                value={formData.thumbnail_url}
                                onChange={(url) => setFormData({ ...formData, thumbnail_url: url })}
                                onRemove={() => setFormData({ ...formData, thumbnail_url: "" })}
                            />
                            <input
                                type="url"
                                value={formData.thumbnail_url}
                                onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
                                placeholder="Or paste image URL here"
                                className="w-full px-4 py-3 rounded-xl border border-brand-black/10 bg-white/50 focus:bg-white focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all mt-3"
                            />
                        </div>

                        {/* Published Toggle */}
                        <div className="flex items-center gap-3">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.is_published}
                                    onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
                                    className="sr-only peer"
                                />
                                <div className="w-14 h-8 bg-brand-black/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-primary/20 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-brand-primary"></div>
                            </label>
                            <span className="text-sm font-bold text-brand-black">
                                {formData.is_published ? "Published" : "Draft"}
                            </span>
                        </div>

                        {/* Scheduled Publishing (only for drafts) */}
                        {!formData.is_published && (
                            <div>
                                <label className="block text-sm font-bold text-brand-black mb-2">
                                    <Calendar className="w-4 h-4 inline mr-2" />
                                    Schedule Publish Date (Optional)
                                </label>
                                <input
                                    type="datetime-local"
                                    value={formData.scheduled_publish_at}
                                    onChange={(e) => setFormData({ ...formData, scheduled_publish_at: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-brand-black/10 bg-white/50 focus:bg-white focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
                                />
                                <p className="text-xs text-brand-black/60 mt-2">
                                    Project will automatically publish at the scheduled time
                                </p>
                            </div>
                        )}

                        {/* Submit Error */}
                        {errors.submit && (
                            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                                {errors.submit}
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-8 pt-6 border-t border-brand-black/10">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="flex-1 py-3 rounded-full border-2 border-brand-black/20 text-brand-black font-bold hover:bg-brand-black/5 transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex-1 py-3 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                "Save Project"
                            )}
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}
