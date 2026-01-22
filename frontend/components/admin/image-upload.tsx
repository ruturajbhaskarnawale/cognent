"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X, Loader2, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
    value?: string;
    onChange: (url: string) => void;
    onRemove: () => void;
}

export function ImageUpload({ value, onChange, onRemove }: ImageUploadProps) {
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState("");

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        if (acceptedFiles.length === 0) return;

        const file = acceptedFiles[0];
        setIsUploading(true);
        setUploadError("");

        try {
            // Using imgbb.com free image hosting API
            // You can get a free API key at https://api.imgbb.com/
            const formData = new FormData();
            formData.append("image", file);
            
            // Free API key for demo - replace with your own from https://api.imgbb.com/
            const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY || "4b54a757fb5261e2b347f8f45b2924d6";
            
            const response = await fetch(
                `https://api.imgbb.com/1/upload?key=${apiKey}`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (!response.ok) {
                throw new Error("Upload failed");
            }

            const data = await response.json();
            if (data.success) {
                onChange(data.data.url);
            } else {
                throw new Error("Upload failed");
            }
        } catch (error) {
            console.error("Upload error:", error);
            setUploadError("Failed to upload image. Please use URL input instead or get a free API key from https://api.imgbb.com/");
        } finally {
            setIsUploading(false);
        }
    }, [onChange]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
        },
        maxFiles: 1,
        maxSize: 5 * 1024 * 1024, // 5MB
    });

    return (
        <div className="space-y-3">
            {value ? (
                <div className="relative rounded-xl overflow-hidden border border-brand-black/10 group">
                    <div className="relative w-full h-64">
                        <Image
                            src={value}
                            alt="Project thumbnail"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={onRemove}
                        className="absolute top-3 right-3 p-2 rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            ) : (
                <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                        isDragActive
                            ? "border-brand-primary bg-brand-primary/5"
                            : "border-brand-black/20 hover:border-brand-primary hover:bg-brand-black/5"
                    }`}
                >
                    <input {...getInputProps()} />
                    
                    {isUploading ? (
                        <div className="flex flex-col items-center gap-3">
                            <Loader2 className="w-12 h-12 text-brand-primary animate-spin" />
                            <p className="text-brand-black/60">Uploading image...</p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center">
                                {isDragActive ? (
                                    <Upload className="w-8 h-8 text-brand-primary" />
                                ) : (
                                    <ImageIcon className="w-8 h-8 text-brand-primary" />
                                )}
                            </div>
                            <div>
                                <p className="text-brand-black font-medium">
                                    {isDragActive ? "Drop image here" : "Click to upload or drag and drop"}
                                </p>
                                <p className="text-sm text-brand-black/60 mt-1">
                                    PNG, JPG, GIF or WEBP (max 5MB)
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {uploadError && (
                <p className="text-red-500 text-sm">{uploadError}</p>
            )}

            {/* Alternative: Manual URL input */}
            <div className="text-center">
                <p className="text-xs text-brand-black/40">
                    Or enter image URL manually below
                </p>
            </div>
        </div>
    );
}
