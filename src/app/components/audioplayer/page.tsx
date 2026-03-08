"use client";

import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";

// A short public domain audio sample for the demo
const DEMO_SRC =
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

export default function AudioPlayerPage() {
    return (
        <div className="max-w-4xl">
            <div className="mb-12">
                <h1
                    className="text-6xl font-bold text-black dark:text-white mb-4 leading-none uppercase"
                    style={{ fontFamily: "var(--font-marker)" }}
                >
                    AUDIO PLAYER
                </h1>
                <p
                    className="text-xl text-[#6b6b6b] dark:text-[#a0a0a0]"
                    style={{ fontFamily: "var(--font-inter)" }}
                >
                    Plays audio from a URL or a parsed File object. Scrub, volume, speed.
                </p>
            </div>

            <section className="mb-12">
                <h2
                    className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
                    style={{ fontFamily: "var(--font-marker)" }}
                >
                    Examples
                </h2>
                <div className="space-y-8">
                    {/* With title */}
                    <div className="space-y-2">
                        <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0] uppercase font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>With title & subtitle</p>
                        <AudioPlayer
                            src={DEMO_SRC}
                            title="SoundHelix Song 1"
                            subtitle="soundhelix.com · MP3 · demo"
                        />
                    </div>

                    {/* Minimal (no title) */}
                    <div className="space-y-2">
                        <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0] uppercase font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>Minimal</p>
                        <AudioPlayer src={DEMO_SRC} />
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
                        <code>{`import AudioPlayer from "@/components/AudioPlayer";

// From a URL
<AudioPlayer
  src="/audio/my-file.mp3"
  title="Track Name"
  subtitle="Artist · Format"
/>

// From a dropped File object
const [src, setSrc] = useState<string | null>(null);

<DropZone
  accept="audio/*"
  onFilesAccepted={(files) =>
    setSrc(URL.createObjectURL(files[0]))
  }
/>
{src && <AudioPlayer src={src} title="Uploaded file" />}`}</code>
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
                                ["src", "string", "required — URL or object URL"],
                                ["title", "string", "undefined"],
                                ["subtitle", "string", "undefined"],
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
