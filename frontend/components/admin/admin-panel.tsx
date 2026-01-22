"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Edit2, Trash2, Eye, EyeOff, LogOut, Loader2 } from "lucide-react";
import { Project } from "@/lib/types";

interface AdminPanelProps {
    isOpen: boolean;
    onClose: () => void;
    projects: Project[];
    onAddProject: () => void;
    onEditProject: (project: Project) => void;
    onDeleteProject: (projectId: string) => Promise<void>;
    onTogglePublish: (projectId: string) => Promise<void>;
    onLogout: () => void;
}

export function AdminPanel({
    isOpen,
    onClose,
    projects,
    onAddProject,
    onEditProject,
    onDeleteProject,
    onTogglePublish,
    onLogout,
}: AdminPanelProps) {
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [togglingId, setTogglingId] = useState<string | null>(null);

    const handleDelete = async (projectId: string, projectTitle: string) => {
        if (!confirm(`Are you sure you want to delete "${projectTitle}"? This action cannot be undone.`)) {
            return;
        }

        setDeletingId(projectId);
        try {
            await onDeleteProject(projectId);
        } catch (error) {
            console.error("Delete failed:", error);
            alert("Failed to delete project");
        } finally {
            setDeletingId(null);
        }
    };

    const handleTogglePublish = async (projectId: string) => {
        setTogglingId(projectId);
        try {
            await onTogglePublish(projectId);
        } catch (error) {
            console.error("Toggle publish failed:", error);
            alert("Failed to toggle publish status");
        } finally {
            setTogglingId(null);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed right-0 top-0 bottom-0 w-full md:w-[480px] bg-white shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 py-6 flex items-center justify-between">
                            <h2 className="text-2xl font-bold">Admin Panel</h2>
                            <button
                                onClick={onClose}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Add Project Button */}
                        <div className="p-6 border-b border-brand-black/10">
                            <button
                                onClick={onAddProject}
                                className="w-full py-4 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-lg hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                            >
                                <Plus className="w-5 h-5" />
                                Add New Project
                            </button>
                        </div>

                        {/* Projects List */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {projects.length === 0 ? (
                                <div className="text-center py-12 text-brand-black/40">
                                    <p className="text-lg">No projects yet</p>
                                    <p className="text-sm mt-2">Click "Add New Project" to get started</p>
                                </div>
                            ) : (
                                projects.map((project) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-brand-black/5 rounded-xl p-4 hover:bg-brand-black/10 transition-colors"
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-bold text-brand-black truncate">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-brand-black/60 truncate">
                                                    {project.client_name}
                                                </p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <span
                                                        className={`text-xs px-2 py-1 rounded-full ${
                                                            project.is_published
                                                                ? "bg-green-100 text-green-700"
                                                                : "bg-yellow-100 text-yellow-700"
                                                        }`}
                                                    >
                                                        {project.is_published ? "Published" : "Draft"}
                                                    </span>
                                                    <span className="text-xs text-brand-black/40">
                                                        {project.tech_stack.length} techs
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex flex-col gap-2">
                                                {/* Toggle Publish */}
                                                <button
                                                    onClick={() => handleTogglePublish(project.id)}
                                                    disabled={togglingId === project.id}
                                                    className="p-2 rounded-lg hover:bg-white transition-colors disabled:opacity-50"
                                                    title={project.is_published ? "Unpublish" : "Publish"}
                                                >
                                                    {togglingId === project.id ? (
                                                        <Loader2 className="w-4 h-4 animate-spin text-brand-black/60" />
                                                    ) : project.is_published ? (
                                                        <Eye className="w-4 h-4 text-green-600" />
                                                    ) : (
                                                        <EyeOff className="w-4 h-4 text-yellow-600" />
                                                    )}
                                                </button>

                                                {/* Edit */}
                                                <button
                                                    onClick={() => onEditProject(project)}
                                                    className="p-2 rounded-lg hover:bg-white transition-colors"
                                                    title="Edit"
                                                >
                                                    <Edit2 className="w-4 h-4 text-brand-primary" />
                                                </button>

                                                {/* Delete */}
                                                <button
                                                    onClick={() => handleDelete(project.id, project.title)}
                                                    disabled={deletingId === project.id}
                                                    className="p-2 rounded-lg hover:bg-white transition-colors disabled:opacity-50"
                                                    title="Delete"
                                                >
                                                    {deletingId === project.id ? (
                                                        <Loader2 className="w-4 h-4 animate-spin text-red-500" />
                                                    ) : (
                                                        <Trash2 className="w-4 h-4 text-red-500" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-brand-black/10">
                            <button
                                onClick={onLogout}
                                className="w-full py-3 rounded-full border-2 border-red-500 text-red-500 font-bold hover:bg-red-50 transition-all flex items-center justify-center gap-2"
                            >
                                <LogOut className="w-5 h-5" />
                                Logout
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
