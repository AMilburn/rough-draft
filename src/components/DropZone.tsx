"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";

interface DropZoneProps {
    onFilesAccepted: (files: File[]) => void;
    accept?: string;
    multiple?: boolean;
    label?: string;
    hint?: string;
    maxSizeMb?: number;
    className?: string;
}

export default function DropZone({
    onFilesAccepted,
    accept,
    multiple = false,
    label = "Drop files here",
    hint,
    maxSizeMb,
    className = "",
}: DropZoneProps) {
    const [isDraggingOver, setIsDraggingOver] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const validateFiles = (fileList: FileList): File[] => {
        const files = Array.from(fileList);

        if (maxSizeMb) {
            const oversized = files.filter((f) => f.size > maxSizeMb * 1024 * 1024);
            if (oversized.length > 0) {
                setError(`File too large. Max size is ${maxSizeMb}MB.`);
                return [];
            }
        }

        setError(null);
        return files;
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDraggingOver(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDraggingOver(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDraggingOver(false);
        const files = validateFiles(e.dataTransfer.files);
        if (files.length > 0) {
            setAcceptedFiles(files);
            onFilesAccepted(files);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;
        const files = validateFiles(e.target.files);
        if (files.length > 0) {
            setAcceptedFiles(files);
            onFilesAccepted(files);
        }
    };

    const handleRemoveFile = (index: number) => {
        const updated = acceptedFiles.filter((_, i) => i !== index);
        setAcceptedFiles(updated);
        if (inputRef.current) inputRef.current.value = "";
    };

    const formatSize = (bytes: number) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    return (
        <div className={`w-full ${className}`}>
            {/* Drop zone area */}
            <div
                role="button"
                tabIndex={0}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => inputRef.current?.click()}
                onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
                aria-label={label}
                className={`
          relative flex flex-col items-center justify-center gap-4
          border-3 border-dashed p-10 cursor-pointer
          transition-all duration-200 select-none
          ${isDraggingOver
                        ? "border-[#ff4444] bg-[#ff4444]/5 translate-x-0.5 translate-y-0.5 shadow-[6px_6px_0px_0px_#ff4444]"
                        : "border-black dark:border-white bg-white dark:bg-[#1a1a1a] hover:border-[#ff4444] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#ff4444]"
                    }
        `}
            >
                {/* Upload icon */}
                <svg
                    width={isDraggingOver ? 52 : 44}
                    height={isDraggingOver ? 52 : 44}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isDraggingOver ? "#ff4444" : "currentColor"}
                    strokeWidth="2.5"
                    className="transition-all duration-200 text-black dark:text-white"
                >
                    <polyline points="16 16 12 12 8 16" />
                    <line x1="12" y1="12" x2="12" y2="21" />
                    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                </svg>

                {/* Labels */}
                <div className="text-center">
                    <p
                        className={`text-base font-bold uppercase tracking-wide transition-colors ${isDraggingOver ? "text-[#ff4444]" : "text-black dark:text-white"
                            }`}
                        style={{ fontFamily: "var(--font-marker)" }}
                    >
                        {isDraggingOver ? "Drop it!" : label}
                    </p>
                    {hint && !isDraggingOver && (
                        <p
                            className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0] mt-1"
                            style={{ fontFamily: "var(--font-space-mono)" }}
                        >
                            {hint}
                        </p>
                    )}
                    {!isDraggingOver && (
                        <p
                            className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0] mt-2 uppercase"
                            style={{ fontFamily: "var(--font-space-mono)" }}
                        >
                            or click to browse
                        </p>
                    )}
                </div>
            </div>

            {/* Hidden file input */}
            <input
                ref={inputRef}
                type="file"
                accept={accept}
                multiple={multiple}
                onChange={handleInputChange}
                className="sr-only"
                aria-hidden="true"
            />

            {/* Error state */}
            {error && (
                <p
                    className="text-sm text-[#ff4444] font-bold mt-3 uppercase"
                    style={{ fontFamily: "var(--font-space-mono)" }}
                >
                    ✕ {error}
                </p>
            )}

            {/* Accepted files list */}
            {acceptedFiles.length > 0 && (
                <ul className="mt-4 space-y-2">
                    {acceptedFiles.map((file, i) => (
                        <li
                            key={i}
                            className="flex items-center justify-between px-4 py-3 border-3 border-black dark:border-white bg-white dark:bg-[#1a1a1a]"
                        >
                            <div className="flex items-center gap-3 min-w-0">
                                {/* File icon */}
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    className="text-[#ff4444] shrink-0"
                                >
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                </svg>
                                <div className="min-w-0">
                                    <p
                                        className="text-sm font-bold text-black dark:text-white truncate"
                                        style={{ fontFamily: "var(--font-space-mono)" }}
                                    >
                                        {file.name}
                                    </p>
                                    <p
                                        className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0]"
                                        style={{ fontFamily: "var(--font-space-mono)" }}
                                    >
                                        {formatSize(file.size)}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={(e) => { e.stopPropagation(); handleRemoveFile(i); }}
                                aria-label={`Remove ${file.name}`}
                                className="text-black dark:text-white hover:text-[#ff4444] transition-colors ml-4 shrink-0 font-bold text-lg"
                            >
                                ×
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
