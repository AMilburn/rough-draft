"use client";

import { useToast } from "@/components/Toast/Toast";
import Button from "@/components/Button/Button";

function ToastDemo() {
    const { toast } = useToast();

    return (
        <div className="space-y-10">
            {/* Examples */}
            <section className="mb-12">
                <h2
                    className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
                    style={{ fontFamily: "var(--font-marker)" }}
                >
                    Examples
                </h2>
                <div className="p-8 bg-white dark:bg-[#1a1a1a] border-3 border-black dark:border-white">
                    <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0] uppercase font-bold mb-4" style={{ fontFamily: "var(--font-space-mono)" }}>
                        Click to trigger
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button variant="primary" size="sm" onClick={() => toast("File parsed successfully.", "success")}>
                            Success toast
                        </Button>
                        <Button variant="destructive" size="sm" onClick={() => toast("Failed to parse file.", "error")}>
                            Error toast
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => toast("File is large — this may take a moment.", "warning")}>
                            Warning toast
                        </Button>
                        <Button variant="secondary" size="sm" onClick={() => toast("Upload started in the background.", "info")}>
                            Info toast
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => toast("This won't auto-dismiss.", "info", 0)}>
                            Persistent toast
                        </Button>
                    </div>
                </div>
            </section>

            {/* Usage */}
            <section className="mb-12">
                <h2
                    className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
                    style={{ fontFamily: "var(--font-marker)" }}
                >
                    Usage
                </h2>
                <div className="bg-black dark:bg-white p-6 border-3 border-black dark:border-white overflow-x-auto">
                    <pre className="text-white dark:text-black text-sm" style={{ fontFamily: "var(--font-space-mono)" }}>
                        <code>{`// 1. Wrap your app in <ToastProvider> (already in layout.tsx)
import { ToastProvider } from "@/components/Toast";

// 2. Use the hook anywhere inside the provider
import { useToast } from "@/components/Toast";

function MyComponent() {
  const { toast } = useToast();

  return (
    <button onClick={() => toast("Done!", "success")}>
      Save
    </button>
  );
}`}</code>
                    </pre>
                </div>
            </section>

            {/* API */}
            <section>
                <h2
                    className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
                    style={{ fontFamily: "var(--font-marker)" }}
                >
                    API
                </h2>
                <div className="overflow-x-auto border-3 border-black dark:border-white">
                    <table className="min-w-full">
                        <thead className="bg-black dark:bg-white">
                            <tr>
                                {["Argument", "Type", "Default", "Description"].map((col) => (
                                    <th key={col} className="px-4 py-4 text-left text-xs font-bold text-white dark:text-black uppercase tracking-wider" style={{ fontFamily: "var(--font-space-mono)" }}>{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-[#1a1a1a]">
                            {[
                                ["message", "string", "—", "The notification text to display."],
                                ["variant", "\"success\" | \"error\" | \"warning\" | \"info\"", "\"info\"", "Controls the border, shadow colour, and icon."],
                                ["duration", "number (ms)", "4000", "Auto-dismiss delay. Pass 0 for persistent."],
                            ].map(([arg, type, def, desc], i, arr) => (
                                <tr key={arg} className={i < arr.length - 1 ? "border-b-2 border-black/10 dark:border-white/10" : ""}>
                                    <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>{arg}</td>
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

export default function ToastPage() {
    return (
        <div className="max-w-4xl">
            <div className="mb-12">
                <h1
                    className="text-6xl font-bold text-black dark:text-white mb-4 leading-none uppercase"
                    style={{ fontFamily: "var(--font-marker)" }}
                >
                    TOAST
                </h1>
                <p
                    className="text-xl text-[#6b6b6b] dark:text-[#a0a0a0]"
                    style={{ fontFamily: "var(--font-inter)" }}
                >
                    Non-blocking status notifications. Slides in, auto-dismisses, brutal shadow.
                </p>
            </div>
            <ToastDemo />
        </div>
    );
}
