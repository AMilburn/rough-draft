"use client";

import Tabs from "@/components/Tabs/Tabs";
import Badge from "@/components/Badge/Badge";

export default function TabsPage() {
    return (
        <div className="max-w-4xl">
            <div className="mb-12">
                <h1
                    className="text-6xl font-bold text-black dark:text-white mb-4 leading-none uppercase"
                    style={{ fontFamily: "var(--font-marker)" }}
                >
                    TABS
                </h1>
                <p
                    className="text-xl text-[#6b6b6b] dark:text-[#a0a0a0]"
                    style={{ fontFamily: "var(--font-inter)" }}
                >
                    Switch between panels. Active state is bold and inverted.
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
                    <div>
                        <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0] uppercase font-bold mb-4" style={{ fontFamily: "var(--font-space-mono)" }}>Basic</p>
                        <Tabs
                            tabs={[
                                {
                                    id: "overview",
                                    label: "Overview",
                                    content: (
                                        <p className="text-black dark:text-white" style={{ fontFamily: "var(--font-inter)" }}>
                                            This is the overview tab content. Use tabs to organise related sections without navigating away.
                                        </p>
                                    ),
                                },
                                {
                                    id: "details",
                                    label: "Details",
                                    content: (
                                        <p className="text-black dark:text-white" style={{ fontFamily: "var(--font-inter)" }}>
                                            Detailed information lives here. Each tab renders lazily based on which is active.
                                        </p>
                                    ),
                                },
                                {
                                    id: "settings",
                                    label: "Settings",
                                    content: (
                                        <p className="text-black dark:text-white" style={{ fontFamily: "var(--font-inter)" }}>
                                            Settings and configuration options would go in this panel.
                                        </p>
                                    ),
                                },
                            ]}
                        />
                    </div>

                    {/* With disabled tab */}
                    <div>
                        <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0] uppercase font-bold mb-4" style={{ fontFamily: "var(--font-space-mono)" }}>With disabled tab</p>
                        <Tabs
                            tabs={[
                                {
                                    id: "track",
                                    label: "Track",
                                    content: (
                                        <div className="flex items-center gap-3">
                                            <span className="text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-inter)" }}>my-recording.mp3</span>
                                            <Badge variant="success" size="sm">Parsed</Badge>
                                            <Badge variant="info" size="sm">MP3</Badge>
                                        </div>
                                    ),
                                },
                                {
                                    id: "transcript",
                                    label: "Transcript",
                                    content: <p className="text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-inter)" }}>Transcript content.</p>,
                                    disabled: true,
                                },
                                {
                                    id: "chapters",
                                    label: "Chapters",
                                    content: <p className="text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-inter)" }}>Chapters content.</p>,
                                    disabled: true,
                                },
                            ]}
                        />
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
                        <code>{`import Tabs from "@/components/Tabs";

<Tabs
  defaultTab="overview"
  tabs={[
    {
      id: "overview",
      label: "Overview",
      content: <p>Content here</p>,
    },
    {
      id: "settings",
      label: "Settings",
      content: <p>Settings here</p>,
      disabled: true,
    },
  ]}
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
                                {["Prop", "Type", "Default"].map((col) => (
                                    <th key={col} className="px-4 py-4 text-left text-xs font-bold text-white dark:text-black uppercase tracking-wider" style={{ fontFamily: "var(--font-space-mono)" }}>{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-[#1a1a1a]">
                            {[
                                ["tabs", "{ id, label, content, disabled? }[]", "required"],
                                ["defaultTab", "string", "tabs[0].id"],
                                ["className", "string", "\"\""],
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
