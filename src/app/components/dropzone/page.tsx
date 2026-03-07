"use client";

import { useState } from "react";
import DropZone from "@/components/DropZone";

export default function DropZonePage() {
    const [basicFiles, setBasicFiles] = useState<File[]>([]);
    const [audioFiles, setAudioFiles] = useState<File[]>([]);
    const [multiFiles, setMultiFiles] = useState<File[]>([]);

    return (
        <div className="max-w-4xl">
            <div className="mb-12">
                <h1
                    className="text-6xl font-bold text-black dark:text-white mb-4 leading-none uppercase"
                    style={{ fontFamily: "var(--font-marker)" }}
                >
                    DROP ZONE
                </h1>
                <p
                    className="text-xl text-[#6b6b6b] dark:text-[#a0a0a0]"
                    style={{ fontFamily: "var(--font-inter)" }}
                >
                    Drag-and-drop file input with brutal hover states. Click or drop.
                </p>
            </div>

            <section className="mb-12">
                <h2
                    className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
                    style={{ fontFamily: "var(--font-marker)" }}
                >
                    Examples
                </h2>

                <div className="space-y-10">
                    {/* Basic */}
                    <div className="p-8 bg-white dark:bg-[#1a1a1a] border-3 border-black dark:border-white">
                        <p
                            className="text-xs font-bold text-[#6b6b6b] dark:text-[#a0a0a0] uppercase tracking-wider mb-4"
                            style={{ fontFamily: "var(--font-space-mono)" }}
                        >
                            Basic
                        </p>
                        <DropZone
                            label="Drop files here"
                            hint="Any file type accepted"
                            onFilesAccepted={setBasicFiles}
                        />
                        {basicFiles.length > 0 && (
                            <p
                                className="mt-4 text-xs text-[#6b6b6b] dark:text-[#a0a0a0]"
                                style={{ fontFamily: "var(--font-space-mono)" }}
                            >
                                Callback received: {basicFiles.map((f) => f.name).join(", ")}
                            </p>
                        )}
                    </div>

                    {/* Audio only */}
                    <div className="p-8 bg-white dark:bg-[#1a1a1a] border-3 border-black dark:border-white">
                        <p
                            className="text-xs font-bold text-[#6b6b6b] dark:text-[#a0a0a0] uppercase tracking-wider mb-4"
                            style={{ fontFamily: "var(--font-space-mono)" }}
                        >
                            Audio files only
                        </p>
                        <DropZone
                            label="Drop audio here"
                            hint=".mp3, .wav, .ogg, .m4a — max 50MB"
                            accept="audio/*"
                            maxSizeMb={50}
                            onFilesAccepted={setAudioFiles}
                        />
                        {audioFiles.length > 0 && (
                            <p
                                className="mt-4 text-xs text-[#6b6b6b] dark:text-[#a0a0a0]"
                                style={{ fontFamily: "var(--font-space-mono)" }}
                            >
                                Callback received: {audioFiles.map((f) => f.name).join(", ")}
                            </p>
                        )}
                    </div>

                    {/* Multiple files */}
                    <div className="p-8 bg-white dark:bg-[#1a1a1a] border-3 border-black dark:border-white">
                        <p
                            className="text-xs font-bold text-[#6b6b6b] dark:text-[#a0a0a0] uppercase tracking-wider mb-4"
                            style={{ fontFamily: "var(--font-space-mono)" }}
                        >
                            Multiple files
                        </p>
                        <DropZone
                            label="Drop multiple files"
                            hint="Select or drop as many as you need"
                            multiple
                            onFilesAccepted={setMultiFiles}
                        />
                        {multiFiles.length > 0 && (
                            <p
                                className="mt-4 text-xs text-[#6b6b6b] dark:text-[#a0a0a0]"
                                style={{ fontFamily: "var(--font-space-mono)" }}
                            >
                                {multiFiles.length} file(s) received
                            </p>
                        )}
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2
                    className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
                    style={{ fontFamily: "var(--font-marker)" }}
                >
                    Usage
                </h2>
                <div className="bg-black dark:bg-white p-6 border-3 border-black dark:border-white overflow-x-auto">
                    <pre className="text-white dark:text-black text-sm" style={{ fontFamily: "var(--font-space-mono)" }}>
                        <code>{`import DropZone from "@/components/DropZone";

<DropZone
  label="Drop audio here"
  hint=".mp3, .wav — max 50MB"
  accept="audio/*"
  maxSizeMb={50}
  onFilesAccepted={(files) => console.log(files)}
/>`}</code>
                    </pre>
                </div>
            </section>

            <section>
                <h2
                    className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
                    style={{ fontFamily: "var(--font-marker)" }}
                >
                    Props
                </h2>
                <div className="overflow-x-auto border-3 border-black dark:border-white">
                    <table className="min-w-full">
                        <thead className="bg-black dark:bg-white">
                            <tr>
                                {["Prop", "Type", "Default", "Description"].map((col) => (
                                    <th
                                        key={col}
                                        className="px-4 py-4 text-left text-xs font-bold text-white dark:text-black uppercase tracking-wider"
                                        style={{ fontFamily: "var(--font-space-mono)" }}
                                    >
                                        {col}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-[#1a1a1a]">
                            {[
                                ["onFilesAccepted", "(files: File[]) => void", "—", "Required. Called with accepted files."],
                                ["accept", "string", "undefined", "MIME types or extensions e.g. \"audio/*\""],
                                ["multiple", "boolean", "false", "Allow selecting multiple files."],
                                ["label", "string", "\"Drop files here\"", "Main heading text inside the zone."],
                                ["hint", "string", "undefined", "Secondary hint text e.g. accepted formats."],
                                ["maxSizeMb", "number", "undefined", "Max file size in megabytes."],
                                ["className", "string", "\"\"", "Extra classes applied to the wrapper."],
                            ].map(([prop, type, def, desc], i, arr) => (
                                <tr
                                    key={prop}
                                    className={i < arr.length - 1 ? "border-b-2 border-black/10 dark:border-white/10" : ""}
                                >
                                    <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>{prop}</td>
                                    <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>{type}</td>
                                    <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>{def}</td>
                                    <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-inter)" }}>{desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
