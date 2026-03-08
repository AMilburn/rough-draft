"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";
import styles from "./DropZone.module.css";

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
    onFilesAccepted, accept, multiple = false,
    label = "Drop files here", hint, maxSizeMb, className = "",
}: DropZoneProps) {
    const [isDraggingOver, setIsDraggingOver] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const validateFiles = (fileList: FileList): File[] => {
        const files = Array.from(fileList);
        if (maxSizeMb) {
            const oversized = files.filter((f) => f.size > maxSizeMb * 1024 * 1024);
            if (oversized.length > 0) { setError(`File too large. Max size is ${maxSizeMb}MB.`); return []; }
        }
        setError(null);
        return files;
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => { e.preventDefault(); setIsDraggingOver(true); };
    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => { e.preventDefault(); setIsDraggingOver(false); };
    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault(); setIsDraggingOver(false);
        const files = validateFiles(e.dataTransfer.files);
        if (files.length > 0) { setAcceptedFiles(files); onFilesAccepted(files); }
    };
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;
        const files = validateFiles(e.target.files);
        if (files.length > 0) { setAcceptedFiles(files); onFilesAccepted(files); }
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
        <div className={[styles.root, className].filter(Boolean).join(" ")}>
            <div
                role="button" tabIndex={0}
                onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
                onClick={() => inputRef.current?.click()}
                onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
                aria-label={label}
                className={[styles.zone, isDraggingOver ? styles.over : ""].filter(Boolean).join(" ")}
            >
                <svg
                    width={isDraggingOver ? 52 : 44} height={isDraggingOver ? 52 : 44}
                    viewBox="0 0 24 24" fill="none"
                    stroke={isDraggingOver ? "var(--rd-accent)" : "currentColor"} strokeWidth="2.5"
                >
                    <polyline points="16 16 12 12 8 16" />
                    <line x1="12" y1="12" x2="12" y2="21" />
                    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                </svg>

                <div>
                    <p className={styles.label}>{isDraggingOver ? "Drop it!" : label}</p>
                    {hint && !isDraggingOver && <p className={styles.hint}>{hint}</p>}
                    {!isDraggingOver && <p className={styles.browse}>or click to browse</p>}
                </div>
            </div>

            <input
                ref={inputRef} type="file" accept={accept} multiple={multiple}
                onChange={handleInputChange} className="sr-only" aria-hidden="true"
            />

            {error && <p className={styles["error-text"]}>✕ {error}</p>}

            {acceptedFiles.length > 0 && (
                <ul className={styles["file-list"]}>
                    {acceptedFiles.map((file, i) => (
                        <li key={i} className={styles["file-item"]}>
                            <div className={styles["file-info"]}>
                                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="var(--rd-accent)" strokeWidth="2.5">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                </svg>
                                <div className={styles["file-meta"]}>
                                    <p className={styles["file-name"]}>{file.name}</p>
                                    <p className={styles["file-size"]}>{formatSize(file.size)}</p>
                                </div>
                            </div>
                            <button
                                onClick={(e) => { e.stopPropagation(); handleRemoveFile(i); }}
                                aria-label={`Remove ${file.name}`}
                                className={styles.remove}
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
