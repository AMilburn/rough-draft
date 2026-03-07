import Badge from "@/components/Badge";

export default function BadgePage() {
    return (
        <div className="max-w-4xl">
            <div className="mb-12">
                <h1
                    className="text-6xl font-bold text-black dark:text-white mb-4 leading-none uppercase"
                    style={{ fontFamily: "var(--font-marker)" }}
                >
                    BADGE
                </h1>
                <p
                    className="text-xl text-[#6b6b6b] dark:text-[#a0a0a0]"
                    style={{ fontFamily: "var(--font-inter)" }}
                >
                    Inline labels for status, tags, and metadata. Small but declarative.
                </p>
            </div>

            <section className="mb-12">
                <h2
                    className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
                    style={{ fontFamily: "var(--font-marker)" }}
                >
                    Variants
                </h2>
                <div className="p-8 bg-white dark:bg-[#1a1a1a] border-3 border-black dark:border-white space-y-6">
                    {/* All variants */}
                    <div>
                        <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0] uppercase font-bold mb-3" style={{ fontFamily: "var(--font-space-mono)" }}>Variants (md)</p>
                        <div className="flex flex-wrap gap-3">
                            <Badge variant="default">Default</Badge>
                            <Badge variant="success">Success</Badge>
                            <Badge variant="warning">Warning</Badge>
                            <Badge variant="error">Error</Badge>
                            <Badge variant="info">Info</Badge>
                            <Badge variant="outline">Outline</Badge>
                        </div>
                    </div>

                    {/* Small */}
                    <div>
                        <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0] uppercase font-bold mb-3" style={{ fontFamily: "var(--font-space-mono)" }}>Sizes</p>
                        <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="default" size="sm">Small</Badge>
                            <Badge variant="default" size="md">Medium</Badge>
                        </div>
                    </div>

                    {/* In context */}
                    <div>
                        <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0] uppercase font-bold mb-3" style={{ fontFamily: "var(--font-space-mono)" }}>In context</p>
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-base font-bold text-black dark:text-white" style={{ fontFamily: "var(--font-inter)" }}>
                                my-recording.mp3
                            </span>
                            <Badge variant="success" size="sm">Parsed</Badge>
                            <Badge variant="info" size="sm">MP3</Badge>
                            <Badge variant="outline" size="sm">3:42</Badge>
                        </div>
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
                        <code>{`import Badge from "@/components/Badge";

<Badge variant="success">Parsed</Badge>
<Badge variant="error" size="sm">Failed</Badge>
<Badge variant="info">MP3</Badge>`}</code>
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
                                {["Prop", "Type", "Default"].map((col) => (
                                    <th key={col} className="px-4 py-4 text-left text-xs font-bold text-white dark:text-black uppercase tracking-wider" style={{ fontFamily: "var(--font-space-mono)" }}>{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-[#1a1a1a]">
                            {[
                                ["variant", "\"default\" | \"success\" | \"warning\" | \"error\" | \"info\" | \"outline\"", "\"default\""],
                                ["size", "\"sm\" | \"md\"", "\"md\""],
                                ["children", "ReactNode", "—"],
                            ].map(([prop, type, def], i, arr) => (
                                <tr key={prop} className={i < arr.length - 1 ? "border-b-2 border-black/10 dark:border-white/10" : ""}>
                                    <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>{prop}</td>
                                    <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>{type}</td>
                                    <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>{def}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
