"use client";

import { motion } from "framer-motion";
import { X, Eye, Calendar, Clock } from "lucide-react";
import { Project } from "@/lib/types";
import Image from "next/image";

interface DraftPreviewProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

export function DraftPreview({ isOpen, onClose, project }: DraftPreviewProps) {
    if (!isOpen || !project) return null;

    const formatDate = (dateString: string | null) => {
        if (!dateString) return null;
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Preview Modal */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            >
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-6 flex items-center justify-between z-10">
                    <div className="flex items-center gap-3">
                        <Eye className="w-6 h-6" />
                        <h2 className="text-2xl font-bold">Draft Preview</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white/80 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 overflow-y-auto max-h-[calc(90vh-100px)]">
                    {/* Status Banner */}
                    <div className="mb-6 p-4 rounded-xl bg-yellow-50 border border-yellow-200 flex items-start gap-3">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-yellow-700 font-bold">Draft Mode</span>
                                {project.scheduled_publish_at && (
                                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-200 text-yellow-800">
                                        Scheduled
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-yellow-700">
                                This project is not visible to the public yet.
                            </p>
                            {project.scheduled_publish_at && (
                                <div className="flex items-center gap-2 mt-2 text-sm text-yellow-700">
                                    <Calendar className="w-4 h-4" />
                                    <span>Will publish on: {formatDate(project.scheduled_publish_at)}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Project Preview */}
                    <div className="space-y-6">
                        {/* Thumbnail */}
                        {project.thumbnail_url && (
                            <div className="relative w-full h-96 rounded-xl overflow-hidden border border-brand-black/10">
                                <Image
                                    src={project.thumbnail_url}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        {/* Client & Title */}
                        <div>
                            <p className="text-brand-black/60 text-sm font-bold uppercase tracking-wider mb-2">
                                {project.client_name}
                            </p>
                            <h3 className="text-4xl font-bold text-brand-black mb-4">
                                {project.title}
                            </h3>
                            <p className="text-brand-black/40 text-sm">
                                Slug: <code className="px-2 py-1 bg-brand-black/5 rounded">{project.slug}</code>
                            </p>
                        </div>

                        {/* Challenge */}
                        {project.challenge && (
                            <div>
                                <h4 className="text-lg font-bold text-brand-black mb-2">Challenge</h4>
                                <p className="text-brand-black/70 leading-relaxed whitespace-pre-wrap">
                                    {project.challenge}
                                </p>
                            </div>
                        )}

                        {/* Description */}
                        {project.description && (
                            <div>
                                <h4 className="text-lg font-bold text-brand-black mb-2">Description</h4>
                                <p className="text-brand-black/70 leading-relaxed whitespace-pre-wrap">
                                    {project.description}
                                </p>
                            </div>
                        )}

                        {/* Tech Stack */}
                        <div>
                            <h4 className="text-lg font-bold text-brand-black mb-3">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech_stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* ROI Metrics */}
                        {project.roi_metrics && (
                            <div>
                                <h4 className="text-lg font-bold text-brand-black mb-2">ROI Metrics</h4>
                                <p className="text-brand-black/70">{project.roi_metrics}</p>
                            </div>
                        )}

                        {/* Metadata */}
                        <div className="pt-6 border-t border-brand-black/10">
                            <h4 className="text-sm font-bold text-brand-black/60 mb-3">Metadata</h4>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="text-brand-black/40">Created</p>
                                    <p className="text-brand-black font-medium">
                                        {formatDate(project.created_at)}
                                    </p>
                                </div>
                                {project.updated_at && (
                                    <div>
                                        <p className="text-brand-black/40">Last Updated</p>
                                        <p className="text-brand-black font-medium">
                                            {formatDate(project.updated_at)}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-white border-t border-brand-black/10 px-8 py-4">
                    <button
                        onClick={onClose}
                        className="w-full py-3 rounded-full bg-brand-black text-white font-bold hover:bg-brand-black/90 transition-all"
                    >
                        Close Preview
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
